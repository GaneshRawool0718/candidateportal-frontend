// src/pages/Dashboard/DashboardPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';
import CardComponent from '../../components/CardComponent/CardComponent';
import AdminProfile from '../../components/AdminProfile/AdminProfile';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  const toggleProfile = () => {
    setShowProfile((prev) => !prev);
  };

  const handleCardClick = (status) => {
    navigate(`/candidates/${status}?search=${encodeURIComponent(searchQuery)}`);
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

      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search candidates by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => handleCardClick('total')}>Search</button>
      </div>

      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        <CardComponent
          title="Total Candidates"
          value="200"
          bgColor="green"
          onClick={() => handleCardClick('total')}
        />
        <CardComponent
          title="Pending Candidates"
          value="50"
          bgColor="blue"
          onClick={() => handleCardClick('pending')}
        />
        <CardComponent
          title="Rejected Candidates"
          value="20"
          bgColor="red"
          onClick={() => handleCardClick('rejected')}
        />
        <CardComponent
          title="In Progress"
          value="130"
          bgColor="orange"
          onClick={() => handleCardClick('inProgress')}
        />
      </div>

      {/* Centered Test Link Button */}
      <div className="center-button">
        <button className="test-link-button" onClick={() => navigate('/generate-link')}>
          Create Test Link
        </button>
      </div>
    </div>
  );
};

export default DashboardPage;
