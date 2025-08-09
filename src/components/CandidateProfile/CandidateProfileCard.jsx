import './CandidateProfileCard.css';

const CandidateProfileCard = ({ candidate }) => {
  // Use provided candidate or fallback to static data
  const staticCandidate = {
    name: 'Alice Johnson',
    email: 'alice.johnson@example.com',
    technology: 'React, Node.js',
    experience: '4 years',
    score: 85,
    status: 'IN_PROGRESS',
    statusManuallyUpdated: true,
  };

  const displayCandidate = candidate || staticCandidate;

  return (
    <div className="candidate-profile-card">
      <div className="card-header">
        <h3>{displayCandidate.name}</h3>
        <span className={`status-tag ${displayCandidate.status.toLowerCase()}`}>
          {displayCandidate.status.replace('_', ' ')}
        </span>
      </div>

      <p><strong>Email:</strong> {displayCandidate.email}</p>
      <p><strong>Technology:</strong> {displayCandidate.technology}</p>
      <p><strong>Experience:</strong> {displayCandidate.experience}</p>
      <p><strong>Score:</strong> {displayCandidate.score}</p>

      {displayCandidate.statusManuallyUpdated && (
        <span className="manual-badge">Manually Updated</span>
      )}
    </div>
  );
};

export default CandidateProfileCard;
