import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function AddItemPage({ items, setItems }) {
  const [inputValue, setInputValue] = useState(''); // Estado local para el formulario

  // Función para agregar un elemento a la lista
  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() !== '') {
      setItems([...items, inputValue]); // Agrega el nuevo elemento
      setInputValue(''); // Limpia el input
    }
  };

  // Función para eliminar un elemento de la lista
  const handleDelete = (index) => {
    const newItems = items.filter((_, i) => i !== index); // Filtra todos menos el seleccionado
    setItems(newItems);
  };

  return (
    <div>
      <h1>Agregar Elementos</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Ingresa un elemento"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">Agregar</button>
      </form>

      <h2>Lista de Elementos</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item} 
            <Link to={`/details/${index}`} style={{ marginLeft: '10px' }}>
              Ver Detalles
            </Link>
            <button
              onClick={() => handleDelete(index)}
              style={{ marginLeft: '10px', color: 'red' }}
            >
              Eliminar
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}