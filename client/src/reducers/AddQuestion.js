// eslint-disable-next-line
export default (AddQuestion = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return AddQuestion;
    case "CREATE":
      return AddQuestion;
    default:
      return AddQuestion;
  }
};
