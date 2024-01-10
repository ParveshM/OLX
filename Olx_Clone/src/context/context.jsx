import { createContext, useState } from "react";

// FireBase context for access the firebase config from anywher in the application
export const FirebaseContext = createContext(null);
FirebaseContext.displayName = "FireBaseContext";
// Auth context for accessing the user from anywhere
export const AuthContext = createContext(null);
AuthContext.displayName = "AuthContext";

// Follow this way to provide the context for child Components & wrap it wherever we need
const Context = ({ children }) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};
export default Context;
