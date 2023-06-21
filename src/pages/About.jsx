import { useDispatch, useSelector } from "react-redux";
import { increment } from "../redux/slices/counterSlice";

function About() {
  const dispatch = useDispatch();

  const count = useSelector((state) => state.counter.value);

  console.log(count);

  return (
    <div>
      About US page {count}
      <button onClick={() => dispatch(increment())}>Increment</button>
    </div>
  );
}

export default About;
