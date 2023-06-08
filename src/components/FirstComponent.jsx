import { Component, useEffect, useState } from "react";

export default function Lifecycle() {
  const [show, setShow] = useState(false);
  return (
    <div
      style={{
        backgroundColor: "whitesmoke",
        border: "2px #ddd solid",
        margin: "20px",
        padding: "40px",
        borderRadius: "12px",
        maxWidth: "600px",
      }}
    >
      <button onClick={() => setShow(!show)}> {show ? "hide" : "show"} </button>

      {show ? <SecondComponent /> : null}

      {/* {show ? <FirstCompenent /> : null} */}
    </div>
  );
}

class FirstCompenent extends Component {
  constructor(props) {
    super(props);
    this.state = { count: 1, data: [] };
  }

  componentDidMount() {
    console.log("component did mount");

    const dataFetcher = async () => {
      try {
        const raw = await fetch("https://jsonplaceholder.typicode.com/todos");
        const jsonData = await raw.json();

        console.log("json data", jsonData);

        this.setState({ data: jsonData });
      } catch (e) {
        console.log(e);
      }
    };

    dataFetcher();
  }

  componentDidUpdate() {
    console.log("component updated");
  }

  componentWillUnmount() {
    console.log("component will be unmounted");
  }

  render() {
    return (
      <div
        style={{
          backgroundColor: "white",
          border: "2px #ccc solid",
          borderRadius: "8px",
          margin: "8px",
          padding: "8px",
        }}
      >
        from class component
        <div>{this.state.count}</div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Increment
        </button>
        <div>
          <h1>Todos</h1>

          {this.state.data.map((item) => {
            return (
              <div
                style={{
                  border: "2px #aaa solid ",
                  backgroundColor: "whitesmoke",
                  marginTop: "2px",
                  padding: "4px",
                }}
              >
                <p> {item.title} </p>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

function SecondComponent() {
  const [todo, setTodo] = useState(undefined);
  const [count, setCount] = useState(1);

  async function dataFetcher() {
    try {
      const raw = await fetch(
        `https://jsonplaceholder.typicode.com/todos/${count}`
      );
      const jsonData = await raw.json();
      setTodo(jsonData);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    // data fetching
    console.log("from useEffect");

    dataFetcher();

    return () => console.log("component will unmount");
  }, [count]);

  return (
    <div>
      <h1>From 2nd component</h1>
      <div
        style={{
          backgroundColor: "white",
          border: "2px #ccc solid",
          borderRadius: "8px",
          margin: "8px",
          padding: "8px",
        }}
      >
        {todo?.title}
        <button onClick={() => setCount(count + 1)}> Next</button>
      </div>
    </div>
  );
}

useEffect(() => {});
