// src/pages/Dashboard/DashboardPage.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './DashboardPage.css';
import CardComponent from '../../components/CardComponent/CardComponent';

const DashboardPage = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  const handleCardClick = (status) => {
    navigate(`/candidates/${status}?search=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">Admin Dashboard</h1>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search candidates by name or email..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button onClick={() => handleCardClick('total')}>Search</button>
      </div>

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
    </div>
  );
};

export default DashboardPage;
