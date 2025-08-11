import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getCandidatesByStatus } from '../../apiServices/StatsApiService';
import './CandidateListPage.css';

const CandidateListPage = () => {
  const navigate = useNavigate();
  const { status } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    const fetchCandidates = async () => {
      try {
        const data = await getCandidatesByStatus(status);
        setCandidates(data);
      } catch (error) {
        console.error(`Error fetching ${status} candidates:`, error);
      }
    };

    fetchCandidates();
  }, [status]);

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(searchQuery) ||
      candidate.email.toLowerCase().includes(searchQuery)
  );

  return (
    <div className="candidate-list-page">
      <header className="candidate-header">
        <h2>
          {status
            ?.replace(/([A-Z])/g, ' $1')
            .replace(/^./, (str) => str.toUpperCase())}{' '}
          Candidates
        </h2>
      </header>

      <div className="candidate-grid">
        {filteredCandidates.length > 0 ? (
          filteredCandidates.map((candidate) => (
            <div className="candidate-card" key={candidate.id}>
              <div className="card-header">
                <h3>{candidate.name}</h3>
                <span className={`status-tag ${candidate.status.toLowerCase()}`}>
                  {candidate.status.replace('_', ' ')}
                </span>
              </div>
              <p className="candidate-email">{candidate.email}</p>
              <button
                className="view-btn"
                onClick={() => navigate(`/candidate/${candidate.id}`)}
              >
                View Profile
              </button>
            </div>
          ))
        ) : (
          <p className="no-results">No candidates found for this status.</p>
        )}
      </div>
    </div>
  );
};

export default CandidateListPage;
