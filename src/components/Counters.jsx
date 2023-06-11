import { useState } from "react";
import {
  PlusIcon,
  MinusIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

function Counters() {
  const [counters, setCounters] = useState([
    {
      id: 1,
      count: 0,
      image: "food.jpg",
      title: "Food",
    },
    {
      id: 2,
      count: 0,
      title: "Acer Laptop",
      image: "laptop.jpg",
    },
    {
      id: 3,
      count: 0,
      title: "Coco Oil",
      image: "product.png",
    },
  ]);

  function handleIncrement(id) {
    setCounters(
      counters.map((item) => {
        return item.id !== id ? item : { ...item, count: item.count + 1 };
      })
    );
  }

  function handleDecrement(id) {
    setCounters(
      counters.map((item) => {
        return item.id !== id || item.count === 0
          ? item
          : { ...item, count: item.count - 1 };
      })
    );
  }

  return (
    <div style={{ margin: "8px" }}>
      <h1>Shopping</h1>

      <div style={{ display: "flex", alignItems: "center", color: "blue" }}>
        {<ShoppingCartIcon style={{ width: "32px", color: "red" }} />}
        <strong>
          {counters.reduce((a, c) => {
            return (a = a + c.count);
          }, 0)}
        </strong>
      </div>

      <div style={{ display: "flex", gap: "8px" }}>
        {counters.map((counter) => (
          <Counter
            key={counter.id}
            counter={counter}
            incrementer={handleIncrement}
            decrementor={handleDecrement}
          />
        ))}
      </div>
    </div>
  );
}

function Counter({ counter, incrementer, decrementor }) {
  return (
    <div
      style={{
        minWidth: "200px",
        marginTop: "16px",
        border: "2px solid black",
        padding: "4px",
        borderRadius: "8px",
      }}
    >
      <img src={counter.image} alt="product_image" style={{ width: "200px" }} />

      <h2>{counter.title}</h2>
      <div
        style={{
          display: "flex",
          gap: "8px",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            decrementor(counter.id);
          }}
        >
          <MinusIcon style={{ width: "8px" }} />
        </button>
        {counter.count}
        <button
          onClick={() => {
            incrementer(counter.id);
          }}
        >
          <PlusIcon style={{ width: "10px" }} />
        </button>
      </div>
    </div>
  );
}

export default Counters;
