import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getCandidateById } from '../../apiServices/StatsApiService';
import './CandidateProfileCard.css';

const CandidateProfilePage = () => {
  const { id } = useParams();
  const [candidate, setCandidate] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCandidate = async () => {
      try {
        const data = await getCandidateById(id);
        setCandidate(data);
      } catch (error) {
        console.error('Error fetching candidate data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCandidate();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner" />
        <p>Loading candidate profile...</p>
      </div>
    );
  }

  return (
    <div className="candidate-profile-page">
      <h2 className="page-title">Candidate Profile</h2>
      {candidate ? (
        <div className="candidate-profile-card">
          <div className="card-header">
            <h3 className="candidate-name">{candidate.name}</h3>
            <span className={`status-tag ${candidate.status.toLowerCase()}`}>
              {candidate.status}
            </span>
          </div>
          <div className="card-body">
            <p><strong>Email:</strong> {candidate.email}</p>
            <p><strong>Technology:</strong> {candidate.technology}</p>
            <p><strong>Experience:</strong> {candidate.experience}</p>
            <p><strong>Score:</strong> {candidate.score}</p>
            {candidate.statusManuallyUpdated && (
              <span className="manual-badge">Status manually updated</span>
            )}
          </div>
        </div>
      ) : (
        <div className="no-data">No candidate data available.</div>
      )}
    </div>
  );
};

export default CandidateProfilePage;
