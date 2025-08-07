// src/pages/TestPage/TestPage.jsx
import { useEffect, useState } from 'react';
import './TestPage.css';

const mockQuestions = [
  {
    id: 1,
    question: 'What is React?',
    options: ['Library', 'Framework', 'Language', 'Tool'],
    answer: 'Library',
  },
  {
    id: 2,
    question: 'Which hook is used for state?',
    options: ['useEffect', 'useRef', 'useState', 'useContext'],
    answer: 'useState',
  },
];

const TestPage = () => {
  const [timeLeft, setTimeLeft] = useState(900); // 15 minutes
  const [answers, setAnswers] = useState({});
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleOptionChange = (questionId, option) => {
    setAnswers({ ...answers, [questionId]: option });
  };

  const handleSubmit = () => {
    const confirmed = window.confirm("Are you sure you want to submit?");
    if (confirmed) {
      setSubmitted(true);
      // Here you can send results to backend or Slack
      console.log("Submitted answers:", answers);
    }
  };

  const formatTime = () => {
    const m = String(Math.floor(timeLeft / 60)).padStart(2, '0');
    const s = String(timeLeft % 60).padStart(2, '0');
    return `${m}:${s}`;
  };

  return (
    <div className="test-container">
      <div className="test-header">
        <h2>Test Page</h2>
        <p>Time Left: {formatTime()}</p>
      </div>

      {mockQuestions.map(q => (
        <div key={q.id} className="question-block">
          <p><strong>{q.question}</strong></p>
          {q.options.map(option => (
            <label key={option} className="option">
              <input
                type="radio"
                name={`question-${q.id}`}
                value={option}
                checked={answers[q.id] === option}
                onChange={() => handleOptionChange(q.id, option)}
              />
              {option}
            </label>
          ))}
        </div>
      ))}

      {!submitted ? (
        <button className="submit-btn" onClick={handleSubmit}>
          Submit Test
        </button>
      ) : (
        <p className="submitted-message">Test submitted successfully!</p>
      )}
    </div>
  );
};

export default TestPage;
