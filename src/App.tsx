import React, { useState } from 'react';
import PetCard from './components/PetCard';
import '../src/style/PetApp.css';

function App() {
  const [pet] = useState({
    name: 'Барсік',
    species: 'Кіт',
    breed: 'Британський короткошерстий',
    age: 3,
    color: 'Сірий',
    photo: 'https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&fit=crop&w=600&q=80',
    description: 'Спокійний домашній улюбленець, любить спати на дивані та гратися з м’ячиком.'
  });

  return (
    <div className="pet-wrapper">
      <h1 className="pet-main-title"> Домашній улюбленець</h1>
      <PetCard
        name={pet.name}
        species={pet.species}
        breed={pet.breed}
        age={pet.age}
        color={pet.color}
        photo={pet.photo}
        description={pet.description}
      />
    </div>
  );
}

export default App;