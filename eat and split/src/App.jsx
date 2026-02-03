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

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList />
        <FormAddFriends />
        <Button>Add Friends</Button>
      </div>
      <FormSplitBill />
    </div>
  );
}
function FriendList() {
  const friends = initialFriends;
  return (
    <ul>
      {friends.map((friends) => (
        <li key={friends.id}>
          <img src={friends.image} alt={friends.name} />
          <h3>{friends.name}</h3>
          {friends.balance < 0 && (
            <p className="red">
              You owe {friends.name} {Math.abs(friends.balance)}
            </p>
          )}
          {friends.balance > 0 && (
            <p className="green">
              {friends.name} owes you {Math.abs(friends.balance)}
            </p>
          )}
          {friends.balance === 0 && <p>You and {friends.name} are even</p>}
          <Button>Select</Button>
        </li>
      ))}
    </ul>
  );
}

function Button({ children }) {
  return <button className="button">{children}</button>;
}
function FormAddFriends() {
  return (
    <form className="form-add-friend">
      <label>Friend Name</label>
      <input type="text"></input>
      <label>Image URL</label>
      <input type="text"></input>
      <Button>Add</Button>
    </form>
  );
}
function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split the bill with X</h2>
      <label>Bill Value</label>
      <input type="text"></input>
      <label>Your expense</label>
      <input type="text"></input>
      <label>x expense</label>
      <input type="text"></input>
      <label>Who is paying the bill</label>
      <select>
        <option value="x">You</option>
        <option value="y">Y</option>
        <option value="z">Z</option>
      </select>
    </form>
  );
}
