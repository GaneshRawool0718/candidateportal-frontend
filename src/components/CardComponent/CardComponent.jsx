// src/components/CardComponent/CardComponent.jsx
import './CardComponent.css';

const CardComponent = ({ title, value, icon, bgColor, onClick }) => {
  return (
    <div className={`card-component ${bgColor}`} onClick={onClick}>
      <div className="card-info">
        <h4>{title}</h4>
        <p>{value}</p>
      </div>
    </div>
  );
};

export default CardComponent;
