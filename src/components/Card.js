import React from "react";
// import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { connect, useDispatch, useSelector } from "react-redux";

const Card = (props) => {
  // const [userName, setUser] = useState("");
  const { user } = useParams();
  const { card } = useSelector((state) => {
    return {
      card: state.cards.find((card) => card.title === user),
    };
  });

  const { deleteCard } = useDispatch((dispatch) => {
    return {
      deleteCard: (id) => {
        dispatch({ type: "DELETE_CARD", id });
      },
    };
  });
  console.log(props);
  const { title, desc } = card;
  // function onButtonClick() {
  //   let id = card.id;
  //   deleteCard(id);
  // }

  // useEffect(() => {
  //   setUser(user);
  // }, [user]);

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{title}</h3>
      <p>{desc}</p>
      <button
        className="ui primary right floated button"
        // onClick={onButtonClick}
      >
        Delete
      </button>
    </div>
  );
};;

// const mapStateToProps = (state) => {
//   return {
//     card: state.card.find((card) => card.title == user),
//   };
// };

// export default connect(mapStateToProps)(Card);

export default Card;
