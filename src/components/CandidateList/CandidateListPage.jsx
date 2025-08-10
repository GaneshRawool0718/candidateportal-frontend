// src/pages/CandidateListPage.jsx
import React from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom'; // Added useNavigate import
import './CandidateListPage.css';

const CandidateListPage = () => {
  const navigate = useNavigate();
  const { status } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('search')?.toLowerCase() || '';

  const candidateLists = {
    pending: [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'PENDING' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'PENDING' },
    ],
    rejected: [
      { id: 3, name: 'Mark Lee', email: 'mark@example.com', status: 'REJECTED' },
    ],
    inProgress: [
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'IN_PROGRESS' },
      { id: 5, name: 'Bob White', email: 'bob@example.com', status: 'IN_PROGRESS' },
    ],
    total: [
      { id: 1, name: 'John Doe', email: 'john@example.com', status: 'PENDING' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com', status: 'PENDING' },
      { id: 3, name: 'Mark Lee', email: 'mark@example.com', status: 'REJECTED' },
      { id: 4, name: 'Alice Brown', email: 'alice@example.com', status: 'IN_PROGRESS' },
      { id: 5, name: 'Bob White', email: 'bob@example.com', status: 'IN_PROGRESS' },
    ],
  };

  const normalizedStatus = status?.toLowerCase();
  const keyMap = {
    total: 'total',
    pending: 'pending',
    rejected: 'rejected',
    inprogress: 'inProgress',
  };
  const listKey = keyMap[normalizedStatus];
  const candidates =
    candidateLists[listKey]?.filter((candidate) =>
      candidate.name.toLowerCase().includes(searchQuery)
    ) || [];

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
        {candidates.length > 0 ? (
          candidates.map((candidate) => (
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
