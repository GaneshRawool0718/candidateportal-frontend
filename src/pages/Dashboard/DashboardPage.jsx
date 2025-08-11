import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getDashboardStats,getTotalCandidates } from '../../apiServices/StatsApiService';
import './DashboardPage.css';
import CardComponent from '../../components/CardComponent/CardComponent';
import AdminProfile from '../../components/AdminProfile/AdminProfile';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [dashboardData, setDashboardData] = useState(null);
  const [totalCandidates, setTotalCandidates] = useState(null); // Define totalCandidates state
  const [searchQuery, setSearchQuery] = useState('');
  const [showProfile, setShowProfile] = useState(false);

  useEffect(() => {
    // Fetching dashboard data from backend
    const fetchDashboardData = async () => {
      try {
        const data = await getDashboardStats();
        setDashboardData(data);
      } catch (error) {
        console.error('Error fetching dashboard data:', error);
      }
    };

     // Fetching total candidates count
    // const fetchTotalCandidates = async () => {
    //   try {
    //     const data = await getTotalCandidates();
    //     setTotalCandidates(data);
    //   } catch (error) {
    //     console.error('Error fetching total candidates:', error);
    //   }
    // };

    fetchDashboardData();
    // fetchTotalCandidates();
  
  }, []);

  
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
        <button onClick={() => handleCardClick()}>Search</button>
      </div>
      {/* Dashboard Cards */}
      <div className="dashboard-cards">
        {dashboardData && (
          <>
            <CardComponent
              title="Total Candidates"
             value={dashboardData.totalCandidates} 
              bgColor="green"
              onClick={() => handleCardClick('total')}
            />
            <CardComponent
              title="Pending Candidates"
              value={dashboardData.pendingCandidates}
              bgColor="blue"
              onClick={() => handleCardClick('pending')}
            />
            <CardComponent
              title="Rejected Candidates"
              value={dashboardData.rejectedCandidates}
              bgColor="red"
              onClick={() => handleCardClick('rejected')}
            />
            <CardComponent
              title="In Progress"
              value={dashboardData.inProgressCandidates}
              bgColor="orange"
              onClick={() => handleCardClick('in_Progress')}
            />
          </>
        )}
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
