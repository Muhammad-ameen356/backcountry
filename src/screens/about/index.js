import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>About Screen</div>{" "}
      <button onClick={() => navigate(-1)}> Go back </button>
    </>
  );
};

export default About;
