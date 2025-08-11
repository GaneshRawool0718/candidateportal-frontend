import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchAdminProfile, updateAdminProfile } from '../../apiServices/adminService';  // Import the service
import { clearAuthData } from '../../utils/storage';  // Clear data after logout
import './AdminProfile.css';

const AdminProfile = () => {
  const navigate = useNavigate();
  const [admin, setAdmin] = useState(null);
  const [error, setError] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [updatedProfile, setUpdatedProfile] = useState({
    name: '',
    email: '',
  });

  // Fetch admin profile on component mount
  useEffect(() => {
    const getAdminProfile = async () => {
      try {
        const profile = await fetchAdminProfile();
        setAdmin(profile);
        setUpdatedProfile({
          name: profile.name,
          email: profile.email,
        });
      } catch (error) {
        setError('Error fetching admin profile');
        console.error(error);
        navigate('/login');  // If fetching fails, navigate to login
      }
    };

    getAdminProfile();
  }, [navigate]);

  // Handle profile updates
  const handleProfileUpdate = async () => {
    try {
      const updatedAdmin = await updateAdminProfile(updatedProfile);
      setAdmin(updatedAdmin);
      setEditMode(false);  // Exit edit mode after successful update
    } catch (error) {
      setError('Error updating profile');
    }
  };

  // Handle input changes for editing profile
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUpdatedProfile((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleLogout = () => {
    clearAuthData();  // Clear token and user data from localStorage
    navigate('/login');  // Navigate to login page after logout
  };

  if (!admin) {
    return <div>Loading...</div>; // Show loading message while fetching data
  }

  return (
    <div className="admin-profile-container">
      {/* Profile Header */}
      <div className="admin-profile-header">
        <img
          src={admin.avatar || 'https://ui-avatars.com/api/?name=Admin+User'}
          alt="Admin Avatar"
          className="admin-avatar"
        />
        <div className="admin-info">
          {editMode ? (
            <div>
              <input
                type="text"
                name="name"
                value={updatedProfile.name}
                onChange={handleChange}
                placeholder="Enter your name"
              />
              <input
                type="email"
                name="email"
                value={updatedProfile.email}
                onChange={handleChange}
                placeholder="Enter your email"
              />
            </div>
          ) : (
            <div>
              <h2 className="admin-name">{admin.name}</h2>
              <p className="admin-email">{admin.email}</p>
            </div>
          )}
        </div>
      </div>

      {/* Edit or Save buttons */}
      <div className="admin-buttons">
        {editMode ? (
          <button className="save-btn" onClick={handleProfileUpdate}>Save</button>
        ) : (
          <button className="edit-btn" onClick={() => setEditMode(true)}>Edit Profile</button>
        )}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>

      {error && <p className="error-message">{error}</p>} {/* Show error message */}
    </div>
  );
};

export default AdminProfile;
