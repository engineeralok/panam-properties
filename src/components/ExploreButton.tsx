import React from 'react';
import { useNavigate } from 'react-router-dom';

const ExploreButton: React.FC = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/property-detail');
  };

  return (
    <button
      className="bg-purple-600 px-6 py-3 rounded-lg hover:bg-purple-700"
      onClick={handleClick}
    >
      Explore Properties
    </button>
  );
};

export default ExploreButton;