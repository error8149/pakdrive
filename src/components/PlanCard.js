import React from 'react';

const PlanCard = ({ title, description, price, features }) => {
  return (
    <div className=" bg-gray-900 rounded-lg shadow-md p-6 text-center text-white">
      <h4 className="font-bold bg-white text-black  text-lg">{title}</h4>
      <p className="mt-2">{description}</p>
      <p className="mt-4 text-2xl font-bold">{price}</p>
      <ul className="mt-4 list-none">
        {features.map((feature, index) => (
          
          <li key={index} className="mt-2">
            {feature}</li>
        ))}
      </ul>
      
    </div>
  );
};

export default PlanCard;
