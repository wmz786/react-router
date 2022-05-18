const initialState = {
  card: [
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
};

const rootReducer = (state = initialState, action) => {
  return state;
};

export default rootReducer;