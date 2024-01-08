import { Link } from "react-router-dom";
const App = () => {
  return (
    <h1>
      Hello from app <Link to={"/signUp"}>Signup</Link>
    </h1>
  );
};

export default App;
