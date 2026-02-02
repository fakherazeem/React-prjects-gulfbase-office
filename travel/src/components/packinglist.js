import { useState } from "react";
import Item from "./item";

export default function PackgingList({ items, onDeleteItem, onToggleItem, clearList }) {
  const [sortBy, setSortBy] = useState("input");
  let sortedItems;
  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items.slice().sort((a, b) => +a.packed - +b.packed);

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Item
            itemObj={item}
            onDeleteItem={onDeleteItem}
            onToggleItem={onToggleItem}
            onclearList={clearList}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="packed">Sort by packed status</option>
          <option value="description">Sort by description</option>
        </select>
        <button onClick={clearList}>Clear list</button>
      </div>
    </div>
  );
}