// src/pages/StartTestPage/StartTestPage.jsx
import { useNavigate } from 'react-router-dom';
import './StartTestPage.css';

const StartTestPage = () => {
  const navigate = useNavigate();

  const candidate = {
    name: 'John Doe',
    email: 'john@example.com',
    technology: 'React',
    experience: '2 Years',
  };

  const handleStart = () => {
    navigate('/test');
  };

  return (
    <div className="start-test-container">
      <h2>Welcome, {candidate.name}</h2>
      <div className="candidate-details">
        <p><strong>Email:</strong> {candidate.email}</p>
        <p><strong>Technology:</strong> {candidate.technology}</p>
        <p><strong>Experience:</strong> {candidate.experience}</p>
      </div>
      <button className="start-btn" onClick={handleStart}>
        Start Test
      </button>
    </div>
  );
};

export default StartTestPage;
