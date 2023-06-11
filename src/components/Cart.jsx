import { useState } from "react";

export default function ShoopingList() {
  const [count, setCount] = useState([
    { id: 1, count: 0, name: "this is name" },
    { id: 2, count: 0 },
  ]);

  function incrementor(id) {
    setCount(
      count.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  }

  return (
    <div>
      <h1>Shopping Cart</h1>
      <h3>
        {" "}
        {count.reduce((a, c) => {
          return (a = a + c.count);
        }, 0)}{" "}
      </h3>
      <div style={{ display: "flex" }}>
        {count.map((item) => {
          return (
            <Card
              count={item.count}
              id={item.id}
              handleIncrement={incrementor}
            />
          );
        })}
      </div>
    </div>
  );
}

function Card({ count, id, handleIncrement }) {
  return (
    <div
      style={{
        width: "300px",
        border: "2px solid black",
        margin: "8px",
        padding: "8px",
        borderRadius: "8px",
      }}
    >
      <img
        src={"product.png"}
        alt="product_imate"
        style={{ maxWidth: "300px" }}
      />
      <div>
        <h3>Acer</h3>
        <div style={{ display: "flex", gap: "8px", justifyContent: "center" }}>
          <button>-</button>
          {count}
          <button onClick={() => handleIncrement(id)}>+</button>
        </div>
      </div>
    </div>
  );
}
