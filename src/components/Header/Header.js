import React from 'react';

const Header = () => {
  const headerStyle = {
    background: '#f0f0f0', // Greyish shade background
    color: '#333', // Dark text color
    paddingTop: '20px',
    paddingBottom: '20px',
  };

  const headingStyle = {
    fontSize: '2rem', // Larger font size
    margin: '0', // Remove margin for the heading
  };

  return (
    <header style={headerStyle} className="text-center">
      <h1 style={headingStyle}>Rapidfort-Task</h1>
    </header>
  );
};

export default Header;
