import Header from "./components/Header/Header";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from "./screens/LandingPage/LandingPage";
import LoginPage from "./screens/LoginPage/LoginPage";
import AboutPage from "./screens/AboutPage/AboutPage";
import { useState, createContext, useReducer } from "react";
import { initialState, reducer } from "./Reducer/UseReducer";

export const UserContext = createContext();

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  //preset password and email
  const AdminUser = {
    email: "harpreet.sohal@kanakasoftware.com",
    password: "admin123",
  };

  //some usestates to set state
  const [user, setUser] = useState({ email: "" });
  const [error, setError] = useState("");

  //login function
  const Login = (details) => {
    // console.log(details);
    if (
      details.email === AdminUser.email &&
      details.password === AdminUser.password
    ) {
      console.log("Logged in");
      setUser({
        email: details.email,
      });
      // localStorage.setItem("admin", JSON.stringify(details));
      //this dispatch is for a responsive nav bar
      dispatch({ type: "USER", payload: true });
    } else {
      console.log("Details do not match");
      setError("Invalid Credentials..! Try Again.");
      dispatch({ type: "USER", payload: false });
    }
  };

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <Header />
        <main>
          {/* {user.email !== "" ? (
          <Navigate to />
        ) : (
          <LoginPage Login={Login} error={error} />
        )} */}
          <Routes>
            <Route
              exact
              path="/"
              element={
                user.email !== "" ? (
                  <Navigate to={"/users"} />
                ) : (
                  <LoginPage Login={Login} error={error} />
                )
              }
            />
            <Route exact path="/about" element={<AboutPage />} />
            <Route exact path="/users" element={<LandingPage />} />
            <Route
              exact
              path="/logout"
              onEnter={() => setUser({ email: null })}
              element={<Navigate to={"/"} />}
            />
            {/* <Route exact path="/about" element={<AboutPage />} /> */}
          </Routes>
        </main>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
