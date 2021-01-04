const Doctors = (state = [], action) => {
  switch (action.type) {
    case "verifyDoctor":
      console.log(action, "action.payload ");
      return [state, action.payload];

    case "AuthDoctor":
      console.log(action, "action.payload ");
      return [state, action.payload];

    default:
      return 0;
  }
};

export default Doctors;
