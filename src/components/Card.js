import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Card = () => {
  const [userName, setUser] = useState("");
  let { user } = useParams();
  useEffect(() => {
    setUser(user);
    console.log("was");
  });

  return (
    <div
      className="ui raised very padded text container segment"
      style={{ marginTop: "80px" }}
    >
      <h3 className="ui header">{userName}</h3>
    </div>
  );
};

export default Card;
