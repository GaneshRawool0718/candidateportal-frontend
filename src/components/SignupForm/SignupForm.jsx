import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { signupService } from '../../apiServices/SignupService';
import {
  SIGNUP_ERROR,
  SIGNUP_NETWORK_ERROR,
  PASSWORD_LENGTH_ERROR,
} from '../../constants/errorConstants.ts';

import '../SignupForm/SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError(''); // Clear error on input change
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password.length < 6) {
      setError(PASSWORD_LENGTH_ERROR);
      return;
    }

    try {
      await signupService(formData);
      navigate('/login', { replace: false }); // Navigate after success
    } catch (error) {
      const isNetworkError = !error?.response;
      setError(isNetworkError ? SIGNUP_NETWORK_ERROR : SIGNUP_ERROR);
      console.error('Signup error:', error);
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          required
        />

        <button type="submit">Sign Up</button>

        {error && <p className="error-message">{error}</p>}
      </form>

      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account?{' '}
        <span
          style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
          onClick={() => navigate('/login')}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
