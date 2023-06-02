import Card, { xyz2 as Alias } from "./Card";
import { Form } from "./Form";
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

  return (
    <div className="Application">
      <div>Violent content here as i am years old.</div>
      <h1>Students</h1>
      <div style={{ display: "flex", gap: "16px" }}>
        {students.map((element, index) => {
          return <Card item={element} from={"home page card"} />;
        })}
      </div>

      <Form />
    </div>
  );
}

export default App;
