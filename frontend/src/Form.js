const handleSubmit = (e) => {
  e.preventDefault();
};

const Form = () => {
  let a = null;
  return (
    <form onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Enter your email"
        onChange={(e) => {
          console.log(e.target.value);
          a = e.target.value;
        }}
      />
      {a}
      <input type="password" placeholder="Enter your Password" />

      <input type="submit" value={"submit"} onClick={(e) => console.log(e)} />
    </form>
  );
};

export { Form };
