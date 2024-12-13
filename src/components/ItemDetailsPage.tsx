import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ItemDetailsPage({ items }) {
  const { index } = useParams(); // Obtiene el índice del elemento de la URL
  const item = items[index]; // Busca el elemento en el array por su índice

  return (
    <div>
      <h1>Detalles del Elemento</h1>
      {item ? (
        <div>
          <p><strong>Elemento:</strong> {item}</p>
        </div>
      ) : (
        <p>El elemento no existe o fue eliminado.</p>
      )}
      <Link to="/">Volver a la lista</Link>
    </div>
  );
}