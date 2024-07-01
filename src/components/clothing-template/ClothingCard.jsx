import "./ClothingCard.css";
import { useNavigate} from "react-router-dom";

const ClothingCard = ({ image, name,description,price, id}) => {
  const navigate = useNavigate();
  const handleCardClick = () => {
    navigate(`/Shop/product/${id}`, { state: { name,description, image, price,id } });
  };
  
  return (
    <div className="clothing-card" onClick={handleCardClick}>
      <div className="clothing-card-image-container">
        <img className="clothing-card-image" src={image} alt={name} />
      </div>
      <div className="clothing-card-info">
        <h4 className="clothing-card-name">{name}</h4>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default ClothingCard;
