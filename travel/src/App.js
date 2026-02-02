import { useState } from "react";

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
  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleadditem} />
      <PackgingList items={items} />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>⛱ Far away 👜</h1>;
}

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();
    console.log("You submitted the form");
    const newItem = {
      description,
      quantity,
      packed: false,
      id: Date.now(),
    };
    onAddItem(newItem);
    setDescription("");
    setQuantity(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip?</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        <option value="">-- Choose an item -- </option>
        {Array.from({ length: 30 }, (_, i) => (
          <option value={i + 1}>{i + 1}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function PackgingList({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item itemObj={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ itemObj }) {
  return (
    <li style={itemObj.packed ? { textDecoration: "line-through" } : {}}>
      {itemObj.quantity} {itemObj.description}
      <button>❌</button>
    </li>
  );
}
function Stats() {
  return (
    <footer className="stats">
      <em>You have x items on your list, and you already packed x (x%)</em>
    </footer>
  );
}
