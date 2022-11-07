import React, { useContext } from "react";
import { UserContext } from "../../App";

const AboutPage = () => {
  const { dispatch } = useContext(UserContext);
  const setNav = () => {
    dispatch({ type: "USER", payload: true });
  };
  setNav();

  return <p style={{ textAlign: "center" }}>About Page</p>;
};

export default AboutPage;
