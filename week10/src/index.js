import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import "./style.css";
import "tailwindcss/tailwind.css";
import reportWebVitals from "./reportWebVitals";
import Header from "./Header";
import routes from "./routes";
import firebase from "firebase/compat/app";
import firebaseConfig from "./firebase.config";

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);
function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />
          <Routes>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact} element={<route.main/>}></Route>
            ))}            
          </Routes>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
reportWebVitals();
