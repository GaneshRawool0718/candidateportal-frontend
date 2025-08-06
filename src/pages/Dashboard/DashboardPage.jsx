// src/pages/Dashboard/DashboardPage.jsx
import './DashboardPage.css';
import CardComponent from '../../components/CardComponent/CardComponent';

const DashboardPage = () => {
  return (
    <div className="dashboard-container">
      {/* Dashboard Header */}
      <h1 className="dashboard-title">Admin Dashboard</h1>

      {/* Card Section for Metrics */}
      <div className="dashboard-cards">
        <CardComponent
          title="Total Candidates"
          value="200"
          bgColor="green"
        />
        <CardComponent
          title="Pending Candidates"
          value="50"
          bgColor="blue"
        />
        <CardComponent
          title="Rejected Candidates"
          value="20"
          bgColor="red"
        />
        <CardComponent
          title="In Progress"
          value="130"
          bgColor="yellow"
        />
      </div>
    </div>
  );
};

export default DashboardPage;
