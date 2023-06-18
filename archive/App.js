import Naya from "./Naya";
import Card, { xyz2 as Alias } from "./Card";
import { Form } from "./Form";
import FirstCompenent from "./components/FirstComponent";
import { Children, useState } from "react";
import Lifecycle from "./components/FirstComponent";
import Counters from "./components/Counters";
import Cart from "./components/Cart";
// import Movies from "./components/Movies";
import Home from "./components/Home";
import MovieDetailModal from "./components/MovieDetailModal";
import Practice from "./components/Practice";
// ES Module

// relative Path
//   ./
//   ../

function App() {
  // operations
  let students = [
    { name: "Ramesh", age: 20, gender: "male" },
    { name: "Sujan", age: 20, gender: "male" },
    { name: "Bivuti", age: 20, gender: "male" },
    { name: "Asha", age: 20, gender: "female" },
  ];

  let count = 1;

  const [counter, setCounter] = useState(1);

  // data fetchcing
  // useCounter(result)

  console.log("re-render");

  return (
    <div className="Application">
      <Comp val={"val"} name={"my name"}>
        <div>
          this should be <strong>Strong</strong>{" "}
        </div>
      </Comp>

      <br />

      {/* <Practice /> */}
      {/* <Lifecycle /> */}

      {/* <Home /> */}

      {/* <MovieDetailModal /> */}

      {/* <Movies /> */}

      {/* <Cart />

      <Counters /> */}

      {/* {count}
      <button
        onClick={() => {
          count = count + 1;
          console.log(count);
        }}
      >
        Increment
      </button>

      <div>
        {counter}
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div> */}

      {/* <div style={{ display: "flex", gap: "16px" }}>
        {students.map((element, index) => {
          return <Card key={index} item={element} from={"home page card"} />;
        })}
      </div> */}

      {/* <div>Violent content here as i am years old.</div>
      // <h1>Students</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {students.map((element, index) => {
          return <Card item={element} from={"home page card"} />;
        })}
      </div>

      <FirstCompenent />

      <Form /> */}

      {/* <Naya /> */}
    </div>
  );
}

function Comp(props) {
  console.log(props);
  return (
    <div>
      this is components {props.name}
      {props.children}
    </div>
  );
}

export default App;
