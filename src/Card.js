import React from "react";

export default function IndividualCard({ element, from }) {
  // props system
  // const = props;
  return (
    <div
      className="qwerqwer"
      style={{
        border: "1px black solid",
        borderRadius: "8px",
        padding: "8px",
        minWidth: "200px",
      }}
    >
      <p>{from}</p>
      <img src="https://flagcdn.com/96x72/np.png" alt="img" />
      <h1>{element?.name}</h1>
      <div>
        <p>{"element.age"}</p>
        <p>{"element.gender"}</p>
      </div>
      <button type="button" onClick={() => alert(`I am ${"element.name"}`)}>
        View Details
      </button>
    </div>
  );
}

// export default Card;
export function xyz() {}
export function xyz2() {}
export function xyz3() {}
export function xyz4() {}
