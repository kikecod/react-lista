import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AddItemPage from './components/AddItemPage';
import ItemDetailsPage from './components/ItemDetailsPage';

export default function App() {
  const [items, setItems] = useState([]); // Estado para almacenar los elementos

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AddItemPage items={items} setItems={setItems} />} />
        <Route path="/details/:index" element={<ItemDetailsPage items={items} />} />
      </Routes>
    </BrowserRouter>
  );
}