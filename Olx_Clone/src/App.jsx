import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/context";
import { FirebaseContext } from "./context/context";
const App = () => {
  const { user, setUser } = useContext(AuthContext);
  const { firebase } = useContext(FirebaseContext);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      const userName = user?.bc?.displayName;
      setUser(userName);
    });
  }, []);
  return (
    <div>
      <h1>
        Hello from app <Link to={"/signUp"}>Signup {user}</Link>
      </h1>
      <button
        onClick={() => {
          firebase.auth().signOut();
        }}
      >
        signuou
      </button>
    </div>
  );
};

export default App;
