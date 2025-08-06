import { useState } from 'react';
import { signupService } from '../../apiServices/SignupService';
import '../SignupForm/SignupForm.css';

const SignupForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
//   const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signupService(formData);
    //   navigate(ROUTES.LOGIN, { replace: false });
    } catch (error) {
    //   handleError(error,SIGNUP_NETWORK_ERROR );
    }
  };

  return (
    <div className="auth-container">
      <form className="auth-form" onSubmit={handleSubmit}>
        <h2>Sign Up</h2>

        <input type="text" name="name" placeholder="Full Name" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

        <button type="submit">Sign Up</button>
      </form>

      <p style={{ marginTop: '1rem', textAlign: 'center' }}>
        Already have an account?{' '}
        <span
          style={{ color: '#007bff', cursor: 'pointer', textDecoration: 'underline' }}
        //   onClick={() => navigate(ROUTES.LOGIN)}
        >
          Login
        </span>
      </p>
    </div>
  );
};

export default SignupForm;
