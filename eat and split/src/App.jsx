import React from "react";
import { useState } from "react";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function Button({ children, onClick, type = "button" }) {
  return (
    <button type={type} className="button" onClick={onClick}>
      {children}
    </button>
  );
}

export default function App() {
  const [show, setShow] = useState(false);
  const [fromName, setformName] = useState("");
  const [formimg, setformimg] = useState(
    () => `https://i.pravatar.cc/48?u=${Date.now()}`,
  );
  const [friends, setFriends] = useState(initialFriends);
  const [selected, setSelected] = useState(null);
  const [totalbill, setTotalbill] = useState("");
  const [yourbill, setyourbill] = useState("");

  function handleShow() {
    setShow((s) => !s);
  }

  function handleAddFriend(friend) {
    setFriends((f) => [...f, friend]);
    setShow(false);
  }

  function handleSplitBill(total, yours) {
    const balance = Number(yours || 0) - Number(total || 0);

    setFriends((f) =>
      f.map((friend) =>
        friend.id === selected.id
          ? { ...friend, balance: friend.balance + balance }
          : friend,
      ),
    );

    setSelected(null);
    setTotalbill("");
    setyourbill("");
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          selected={selected}
          setSelected={setSelected}
        />

        {show && (
          <FormAddFriends
            fromName={fromName}
            setformName={setformName}
            formimg={formimg}
            setformimg={setformimg}
            onAddFriend={handleAddFriend}
          />
        )}

        <Button onClick={handleShow}>{show ? "Close" : "Add Friend"}</Button>
      </div>

      {selected && (
        <FormSplitBill
          selected={selected}
          totalbill={totalbill}
          setTotalbill={setTotalbill}
          yourbill={yourbill}
          setyourbill={setyourbill}
          onSplitBill={handleSplitBill}
        />
      )}
    </div>
  );
}

function FriendList({ friends, selected, setSelected }) {
  return (
    <ul>
      {friends.map((friend) => (
        <li key={friend.id}>
          <img src={friend.image} alt={friend.name} />
          <h3>{friend.name}</h3>

          {friend.balance < 0 && (
            <p className="red">
              You owe {friend.name} {Math.abs(friend.balance)}
            </p>
          )}
          {friend.balance > 0 && (
            <p className="green">
              {friend.name} owes you {friend.balance}
            </p>
          )}

          {friend.balance === 0 && <p>You and {friend.name} are even</p>}

          <Button onClick={() => setSelected(friend)}>
            {selected?.id === friend.id ? "Selected" : "Select"}
          </Button>
        </li>
      ))}
    </ul>
  );
}

function FormAddFriends({
  fromName,
  setformName,
  formimg,
  setformimg,
  onAddFriend,
}) {
  function handlesubmit(e) {
    e.preventDefault();
    if (!fromName || !formimg) return;

    const newFriend = {
      id: Date.now(),
      name: fromName,
      image: formimg,
      balance: 0,
    };

    onAddFriend(newFriend);
    setformName("");
    setformimg(`https://i.pravatar.cc/48?u=${Date.now()}`);
  }

  return (
    <form className="form-add-friend" onSubmit={handlesubmit}>
      <label>Friend Name</label>
      <input
        type="text"
        value={fromName}
        onChange={(e) => setformName(e.target.value)}
      />

      <label>Image URL</label>
      <input
        type="text"
        value={formimg}
        onChange={(e) => setformimg(e.target.value)}
      />

      <Button type="submit">Add</Button>
    </form>
  );
}


function FormSplitBill({
  selected,
  totalbill,
  setTotalbill,
  yourbill,
  setyourbill,
  onSplitBill,
}) {
  const friendBill = Number(totalbill || 0) - Number(yourbill || 0);

  function handleSubmit(e) {
    e.preventDefault();
    onSplitBill(Number(totalbill || 0), Number(yourbill || 0));
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>Split the bill with {selected.name}</h2>

      <label>Bill Value</label>
      <input
        type="number"
        value={totalbill}
        onChange={(e) => setTotalbill(Number(e.target.value))}
      />

      <label>Your expense</label>
      <input
        type="number"
        value={yourbill}
        onChange={(e) => setyourbill(Number(e.target.value))}
      />

      <label>{selected.name}'s expense</label>
      <input type="number" value={friendBill} disabled />

      <Button type="submit">Split Bill</Button>
    </form>
  );
}
