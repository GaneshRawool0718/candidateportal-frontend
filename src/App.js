import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignupForm from './components/SignupForm/SignupForm';

function App() {
  return (
     <Router>
      <Routes>
      <Route path="/" element={<SignupForm/>} />
    </Routes>
    </Router>
  );
}

export default App;
