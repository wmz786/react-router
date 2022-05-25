const initialState = {
  cards: [
    {
      id: 1,
      title: "Ahmad",
      desc: "This course introduces the basic concepts of Software Project Management. Students will study the software project planning, cost estimation and scheduling, project management tools, factors influencing productivity and success.",
    },
    {
      id: 2,
      title: "Ramin",
      desc: "This course introduces the basic concepts of Software Project Management. Students will study the software project planning, cost estimation and scheduling, project management tools, factors influencing productivity and success.",
    },
    {
      id: 3,
      title: "Masood",
      desc: "This course introduces the basic concepts of Software Project Management. Students will study the software project planning, cost estimation and scheduling, project management tools, factors influencing productivity and success.",
    },
  ],
  users: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case "DELETE_CARD":
      let newCard = state.cards.filter((card) => {
        return action.id !== card.id;
      });
      return {
        ...state,
        cards: newCard,
      };
    case "FETCH_USERS":
      return {
        ...state,
        users: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;