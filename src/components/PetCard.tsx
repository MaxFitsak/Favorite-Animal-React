import React from 'react';
import '../style/PetApp.css';

interface PetCardProps {
  name: string;
  species: string;
  breed: string;
  age: number;
  color: string;
  photo: string;
  description: string;
}

const PetCard: React.FC<PetCardProps> = ({
  name,
  species,
  breed,
  age,
  color,
  photo,
  description
}) => {
  return (
    <div className="pet-card">
      <img src={photo} alt={name} className="pet-photo" />
      <div className="pet-info">
        <h2 className="pet-name">{name}</h2>
        <p className="pet-meta"><strong>Вид:</strong> {species}</p>
        <p className="pet-meta"><strong>Порода:</strong> {breed}</p>
        <p className="pet-meta"><strong>Вік:</strong> {age} р.</p>
        <p className="pet-meta"><strong>Забарвлення:</strong> {color}</p>
        <p className="pet-description">{description}</p>
      </div>
    </div>
  );
};

export default PetCard;