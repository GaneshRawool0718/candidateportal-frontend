// src/components/CardComponent/CardComponent.jsx
import './CardComponent.css';

const CardComponent = ({ title, value, icon, bgColor }) => {
  return (
    <div className={`card-component ${bgColor}`}>
      <div className="card-icon">
        {icon} {/* Icon can be passed as a prop */}
      </div>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default CardComponent;
