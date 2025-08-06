import './App.css';
import { BrowserRouter as Router, Route, Routes,Navigate } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';
import LoginForm from './components/LoginForm/LoginForm';
import DashboardPage from './pages/Dashboard/DashboardPage';
import GenerateLinkPage from './components/GenerateLink/GenerateLinkPage';

function App() {
  return (
     <Router>
      <Routes>
      <Route path="/" element={<Navigate to="/login" />} />
      <Route path="/login" element={<LoginForm />} />
      <Route path="/signup" element={<SignupForm />} />
      <Route path="/dashboard" element={<DashboardPage />} />
      <Route path="/generate-link" element={<GenerateLinkPage />} />
    </Routes>
    </Router>
  );
}

export default App;
