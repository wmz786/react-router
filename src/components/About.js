import React from "react";
import { useParams } from "react-router-dom";

const About = () => {
  const { params } = useParams();
  console.log(params);
  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">About</h3>
      <p>
        This course introduces the basic concepts of Software Project
        Management. Students will study the software project planning, cost
        estimation and scheduling, project management tools, factors influencing
        productivity and success. Students will also learn productivity metrics,
        analysis of options and risks, software process standards and process
        implementation, software contracts and intellectual property and
        approaches to maintenance and long term software development.
      </p>
    </div>
  );
};

export default About;
