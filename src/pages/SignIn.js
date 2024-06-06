import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import bg from '../assets/bg.png';
import { AuthContext } from '../context/AuthContext';

const SignIn = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      await login(data.email, data.password);
      navigate('/dashboard');
    } catch (error) {
      console.error('Login failed:', error);
      alert('Login failed. Please check your credentials.');
    }
  };

  return (
    <div className="bg-cover pb-60 pt-40 pr-40 bg-no-repeat w-full bg-gray-900 font-poppins" style={{
      backgroundImage: `url(${bg})`,
    }}>
      <div className="flex px-32 pt-20">
        <div className="w-96 bg-slate-800 p-6 rounded-xl">
          <h1 className="text-2xl md:text-4xl font-bold mb-6 text-white text-center">
            Sign In
          </h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-4">
              <input
                placeholder='Email'
                id="email"
                className="w-full px-1 py-3 rounded-lg bg-slate-300 text-black"
                type="text"
                {...register('email', {
                  required: true,
                })}
              />
              <p className="text-yellow-400 text-xs mt-1">
                {errors.email?.type === 'required' && 'Email is required'}
              </p>
            </div>

            <div className="mb-4">
              <input
                placeholder='Password'
                id="password"
                className="w-full px-1 py-3 rounded-lg bg-slate-300 text-black"
                type="password"
                {...register('password', {
                  required: true,
                })}
              />
              <p className="text-yellow-400 text-xs mt-1">
                {errors.password?.type === 'required' && 'Password is required'}
              </p>
            </div>

            <div className="flex justify-between mb-4">
              <label className="flex items-center text-purple-300 text-xs">
                <input className="mr-2" type="checkbox" /> Remember Me
              </label>
            </div>

            <button
              className="w-full py-2 bg-purple-400 hover:bg-white hover:text-purple-400 text-white font-semibold rounded-lg"
              type="submit"
            >
              Sign In
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-white">Don't have an account?</p>
            <Link to="/SignUp" className="text-white hover:text-gray-300">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
