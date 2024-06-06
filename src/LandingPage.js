import React from 'react';
import f1 from './assets/f1.png';
import f2 from './assets/f2.png';
import f3 from './assets/f3.png';
import FeatureCard from './components/FeatureCard';

import { Link } from 'react-router-dom';
import PlanCard from './components/PlanCard';

const LandingPage = () => {
  return (
    <div className='font-poppins overflow-x-hidden'>
      <div className="bg-[url('/src/assets/bg.png')] bg-cover bg-no-repeat w-screen">
        <section className="container mx-auto py-20 px-6 lg:py-60 text-gray-50">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[4ex] font-bold text-left">
            Your Secure and Fast<br/> Cloud Storage Solution
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-4xl mt-4 text-left">
            Experience the power of PakDrive with <br/> end-to-end encryption and <br/> AI-powered organization.
          </p>
          <div className='pt-4'>
          
          <Link to="/signup">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-poppins font-medium rounded-lg text-sm md:text-lg lg:text-[20px] px-4 py-2 md:px-6 md:py-3 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button>
            </Link>
          </div>
        </section>
      </div>
      <div className="bg-blue-500 py-4 lg:py-9 px-2 text-center">
        <div className="text-xs md:text-sm lg:text-lg font-bold flex items-center justify-center gap-2">
          <span className="text-gray-900">Excellent Rating of</span>
          <span className="text-white">4.8 stars</span>
          <span className="flex items-center">
            {[...Array(4)].map((_, i) => (
              <svg key={i} className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-2 text-yellow-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
              </svg>
            ))}
            <svg className="w-4 h-4 md:w-6 md:h-6 ms-1 md:ms-2 text-gray-300 dark:text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
              <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
            </svg>
          </span>
        </div>
      </div>
      <section id="features" className="bg-zinc-100 py-12">
        <div className="container mx-auto">
          <h3 className="text-2xl font-bold text-center mb-8">Key Features</h3>
          <div className="grid gap-8">
            <FeatureCard title="Secure & Encrypted" description="Your data is safe with our end-to-end encryption." image={f1} />
            <FeatureCard title="AI Organization" description="Let AI automatically sort your files for easy access." image={f2} />
            <FeatureCard title="Fast Data Transfer" description="Enjoy faster speeds with our local servers in Pakistan." image={f3} />
          </div>
        </div>
      </section>
      <section id="pricing" className="container mx-auto px-6 py-12">
        <h3 className="text-2xl font-bold text-center mb-8">Choose Your Plan</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <PlanCard 
            title="Free Plan" 
            description="Basic features, limited storage." 
            price="$0/month"
            features={["5GB Storage", "Basic Support", "Single User"]}
          />
          <PlanCard 
            title="Pro Plan" 
            description="Advanced features, increased storage, premium support." 
            price="$10/month"
            features={["100GB Storage", "Priority Support", "Multiple Users"]}
          />
          <PlanCard 
            title="Enterprise Plan" 
            description="Custom solutions for large organizations." 
            price="Contact Us"
            features={["Unlimited Storage", "Dedicated Support", "Enterprise Integration"]}
          />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
