// src/pages/SignUp.js
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../assets/bg.png';
import { AuthContext } from '../context/AuthContext';

const SignUp = () => {
  const { register: registerUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    console.log('Form submitted', data); // Add console log
    try {
      await registerUser(data.name, data.email, data.password);
      console.log('User registered successfully'); // Add console log
      navigate('/login'); // This should navigate to the login page
    } catch (error) {
      console.error('Registration failed:', error);
    }
  };

  const passwordValue = watch('password');

  return (
    <div
      className="bg-cover pb-60 pt-40 pr-40 bg-no-repeat w-full bg-gray-900 font-poppins"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="px-28 py-20">
        <div className="flex">
          <div className="w-96 bg-gray-800 p-6 rounded-xl">
            <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white text-center">
              Sign Up
            </h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col text-[#c4e2f1] py-2">
                <input
                  className="rounded-xl text-black bg-slate-300 mt-2 p-2"
                  type="text"
                  placeholder="Name"
                  {...register('name', { required: true })}
                />
                {errors.name && (
                  <p className="text-yellow-400 text-xs mt-1">
                    *Please enter your name
                  </p>
                )}
              </div>

              <div className="flex flex-col text-[#c4e2f1] py-2">
                <input
                  className="rounded-xl text-black bg-slate-300 mt-2 p-2"
                  type="email"
                  placeholder="Email"
                  {...register('email', {
                    required: true,
                  })}
                />
                {errors.email && (
                  <p className="text-yellow-400 text-xs mt-1">
                    {errors.email.type === 'required' && '*Email is required'}
                  </p>
                )}
              </div>

              <div className="flex flex-col text-[#c4e2f1] py-2">
                <input
                  className="rounded-xl text-black bg-slate-300 mt-2 p-2"
                  type="password"
                  placeholder="Password"
                  {...register('password', {
                    required: true,
                  })}
                />
                {errors.password && (
                  <p className="text-yellow-400 text-xs mt-1">
                    {errors.password.type === 'required' && '*Password is required'}
                  </p>
                )}
              </div>

              <div className="flex flex-col text-[#c4e2f1] py-2">
                <input
                  className="rounded-xl text-black bg-slate-300 mt-2 p-2"
                  type="password"
                  placeholder="Confirm Password"
                  {...register('confirmPassword', {
                    required: true,
                    validate: (value) =>
                      value === passwordValue || '*Passwords do not match!',
                  })}
                />
                {errors.confirmPassword && (
                  <p className="text-yellow-400 text-xs mt-1">
                    {errors.confirmPassword.type === 'required' &&
                      '*Confirm Password is required'}
                    {errors.confirmPassword.message}
                  </p>
                )}
              </div>

              <div className="flex justify-between mb-1">
                <label className="flex items-center text-purple-400 text-xs">
                  <input
                    className="mr-2"
                    type="checkbox"
                    {...register('checkbox', { required: true })}
                  />
                  I agree with terms and conditions
                </label>
              </div>

              {errors.checkbox && (
                <p className="text-yellow-400 ml-5 text-xs">
                  *Please Accept our Terms and Conditions!
                </p>
              )}

              <button className="w-full my-4 py-2 bg-purple-400 shadow-lg hover:bg-white hover:text-purple-400 text-white font-semibold rounded-lg" type="submit">
                Sign Up
              </button>

              <div className="mt-1 text-center">
                <p className="text-white">Already have an account?</p>
                <Link to="/login" className="text-purple-400 hover:text-white">
                  Sign In
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
