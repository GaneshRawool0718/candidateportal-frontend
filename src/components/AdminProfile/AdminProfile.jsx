import React from 'react';
import './AdminProfile.css';

const AdminProfile = () => {
  const admin = {
    name: 'Admin User',
    email: 'admin@example.com',
    avatar: 'https://ui-avatars.com/api/?name=Admin+User',
  };

  return (
    <div className="admin-profile-container">
      {/* Profile Header */}
      <div className="admin-profile-header">
        <img
          src={admin.avatar}
          alt="Admin Avatar"
          className="admin-avatar"
        />
        <div className="admin-info">
          <h2 className="admin-name">{admin.name}</h2>
          <p className="admin-email">{admin.email}</p>
        </div>
      </div>

      {/* Buttons */}
      <div className="admin-buttons">
        <button className="edit-btn">Edit Profile</button>
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default AdminProfile;
