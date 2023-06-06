import React from "react";

export default class PersonCard extends React.Component {
  handleClick() {
    console.log("clicked");
  }

  render() {
    return (
      <div>
        From Person Card
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    );
  }
}
