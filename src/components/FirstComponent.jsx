import { Component, useState } from "react";

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

      {show ? <FirstCompenent /> : null}
    </div>
  );
}

class FirstCompenent extends Component {
  constructor(props) {
    super(props);

    this.state = { count: 1 };
  }

  componentDidMount() {
    console.log("component did mount");
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
      </div>
    );
  }
}
