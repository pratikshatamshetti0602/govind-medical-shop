import React, { useState } from 'react';

function Profile() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="profile-container">
      {/* Dropdown Button */}
      <div className="dropdown-button" onClick={toggleDropdown}>
        <img src="logo.png" alt="Company Logo" className="logo" />
        <h1 className="heading">Govind Medical</h1>
      </div>

      {/* Dropdown Content */}
      {isOpen && (
        <div className="dropdown-content">
          {/* Search Bar */}
          <div className="search-container">
            <input type="text" className="search-input" placeholder="Search..." />
            <img src="search-icon.png" alt="Search" className="search-icon" />
          </div>
        </div>
      )}
    </div>
  );
}

export default Profile;
