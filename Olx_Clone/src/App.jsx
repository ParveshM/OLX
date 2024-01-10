import { Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { AuthContext } from "./context/context";
import { FirebaseContext } from "./context/context";
import { Navbar, Body, Footer } from "./components/index";
import SubMenu from "./components/header/subMenu";

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
    <>
      <Navbar />
      <SubMenu />
      <Body />
      <Footer />
    </>
  );
};

export default App;
