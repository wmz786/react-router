import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { deleteCard, fetchUser } from "../actions/cardAction";
import { useDispatch, useSelector } from "react-redux";

const Card = () => {
  const { user } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { card, users } = useSelector((state) => {
    return {
      card: state.cards.find((card) => card.title === user),
      users: state.users,
    };
  });

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  function onButtonClick() {
    let id = card.id;
    dispatch(deleteCard(id));
    navigate("/contact");
  }
  // const { title, desc } = card;

  return users.map(({ id, name, email }) => {
    return (
      <div
        className="ui raised very padded text container segment"
        style={{ marginTop: "80px" }}
        key={id}
      >
        <h3 className="ui header">{name}</h3>
        <p>{email}</p>
        <button
          className="ui primary right floated button"
          onClick={onButtonClick}
        >
          Delete
        </button>
      </div>
    );
  });
};

export default Card;
