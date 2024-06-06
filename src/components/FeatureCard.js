import React from 'react';

const FeatureCard = ({ title, description, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-40 flex items-center bg-cover bg-center" style={{ backgroundImage: `url(${image})` }}>
      <div className="ml-auto bg-white bg-opacity-90 p-4 rounded-lg">
        <h4 className="font-bold text-lg">{title}</h4>
        <p className="mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
