import { useState } from 'react';
import './GenerateLinkPage.css';
import {
  TEST_LINK_GENERATION_SUCCESS,
  TEST_LINK_GENERATION_FAILURE,
  TEST_LINK_NETWORK_ERROR,
} from '../../constants/errorConstants.ts';
import { registerCandidate } from '../../apiServices/candidateService';
import { getToken } from '../../utils/storage';  // <-- make sure you have this util

const GenerateLinkPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    technology: '',
    experience: '',
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = getToken();
    if (!token) {
      setStatus('User not authenticated. Please login.');
      return;
    }

    try {
      const response = await registerCandidate(formData, token);  // <-- pass token

      if (response.ok) {
        setStatus(TEST_LINK_GENERATION_SUCCESS);
        setFormData({
          name: '',
          email: '',
          technology: '',
          experience: '',
        });
      } else {
        setStatus(TEST_LINK_GENERATION_FAILURE);
      }
    } catch (error) {
      setStatus(TEST_LINK_NETWORK_ERROR);
    }
  };

  return (
    <div className="generate-link-container">
      <h2>Candidate Information</h2>
      <form onSubmit={handleSubmit} className="generate-link-form">
        <label>
          Candidate Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Technology:
          <input
            type="text"
            name="technology"
            value={formData.technology}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Years of Experience:
          <select
            name="experience"
            value={formData.experience}
            onChange={handleChange}
            required
          >
            <option value="">Select</option>
            <option value="Fresher">Fresher</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="Above 6">Above 6</option>
          </select>
        </label>

        <button type="submit" className="generate-btn">
          Generate Test Link
        </button>
      </form>

      {status && <p className="status-message">{status}</p>}
    </div>
  );
};

export default GenerateLinkPage;
