import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteCard } from "../actions/cardAction";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const { user } = useParams();
  const { card } = useSelector((state) => {
    return {
      card: state.cards.find((card) => card.title === user),
    };
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();
  function onButtonClick() {
    let id = card.id;
    dispatch(deleteCard(id));
    navigate("/contact");
  }
  const { title, desc } = card;

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{title}</h3>
      <p>{desc}</p>
      <button
        className="ui primary right floated button"
        onClick={onButtonClick}
      >
        Delete
      </button>
    </div>
  );
};


export default Card;
