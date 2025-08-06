import React, { useState } from 'react';
import './DashboardPage.css';
import CardComponent from '../../components/CardComponent/CardComponent';
import AdminProfile from '../../components/AdminProfile/AdminProfile';

const DashboardPage = () => {
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile(prev => !prev);
  };

  return (
    <div className="dashboard-container">
      {/* Top Header with Avatar */}
      <div className="dashboard-header">
        <div className="avatar-wrapper" onClick={toggleProfile}>
          <img
            src="https://ui-avatars.com/api/?name=Admin+User"
            alt="Admin Avatar"
            className="avatar-icon"
          />
          {showProfile && (
            <div className="admin-profile-popup">
              <AdminProfile />
            </div>
          )}
        </div>
      </div>

      {/* Dashboard Title */}
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <CardComponent title="Total Candidates" value="200" bgColor="green" />
        <CardComponent title="Pending Candidates" value="50" bgColor="blue" />
        <CardComponent title="Rejected Candidates" value="20" bgColor="red" />
        <CardComponent title="In Progress" value="130" bgColor="yellow" />
      </div>

      {/* Centered Test Link Button */}
<div className="center-button">
  <button className="test-link-button">Create Test Link</button>
</div>

    </div>
  );
};

export default DashboardPage;
