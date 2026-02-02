import { useState } from "react";
import Logo from "./logo";
import Form from "./form";
import PackgingList from "./packinglist";

import Stats from "./stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "Headphones", quantity: 1, packed: false },
  { id: 5, description: "T-Shirts", quantity: 5, packed: false },
  { id: 6, description: "Jeans", quantity: 2, packed: false },
  { id: 7, description: "Jacket", quantity: 1, packed: false },
  { id: 8, description: "Toiletries", quantity: 1, packed: false },
  { id: 9, description: "Sunglasses", quantity: 1, packed: false },
];
console.log(initialItems);

export default function App() {
  const [items, setItems] = useState([]);
  function handleadditem(item) {
    setItems((items) => [...items, item]);
  }
  function deleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
    console.log("Delete item with ID:", id);
  }
  function toggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item,
      ),
    );
  }
  function clearList() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleadditem} />
      <PackgingList
        items={items}
        onDeleteItem={deleteItem}
        onToggleItem={toggleItem}
        clearList={clearList}
      />
      <Stats items={items} />
    </div>
  );
}
