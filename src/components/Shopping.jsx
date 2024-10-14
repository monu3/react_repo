import { useState } from "react";

const Shopping = () => {
  const [items, setItems] = useState([]);
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name && !quantity) return;

    const newItem = {
      name,
      quantity: parseInt(quantity),
    };

    setItems((prevItems) => [...prevItems, newItem]);
    setName("");
    setQuantity("");
  };

  return (
    <div>
      <h1>Shopping list </h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Enter item "
        />
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity "
        />
        <button type="submit">Add items</button>
      </form>

      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item.name} ---Quantity: {item.quantity}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Shopping;
