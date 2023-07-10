import { Provider } from "react-redux";

import Router from "./router/Router";
import { store } from "./redux/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Router />
      </Provider>
    </>
  );
}

// prop drilling
export default App;
