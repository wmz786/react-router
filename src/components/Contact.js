import React from "react";
import { Link } from "react-router-dom";
// import Modal from "./Modal";
import { useSelector } from "react-redux";

const Contact = () => {
  const { card } = useSelector((state) => {
    return {
      card: state.cards,
    };
  });

  return (
    <div>
      {/* <Modal /> */}
      {card.map(({ id, title, desc }) => {
        return (
          <div
            className="ui raised very padded text container segment"
            style={{ marginTop: "80px" }}
            key={id}
          >
            <Link to={`/${title}`} className="ui header">
              {title}
            </Link>
            <p>{desc}</p>
          </div>
        );
      })}
      {/* <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
      >
        <Link to="/Hyder" className="ui header">
          Hayder
        </Link>
        <p>
          This course introduces the basic concepts of Software Project
          Management. Students will study the software project planning, cost
          estimation and scheduling, project management tools, factors
          influencing productivity and success. Students will also learn
          productivity metrics, analysis of options and risks, software process
          standards and process implementation, software contracts and
          intellectual property and approaches to maintenance and long term
          software development.
        </p>
      </div> */}
    </div>
  );
};

// const mapStateToProps = (state) => {
//   return {
//     cards: state.card,
//   };
// };

// export default connect(mapStateToProps)(Contact);

export default Contact;
