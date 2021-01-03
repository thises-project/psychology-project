const Appointment = (state = [], action) => {
  switch (action.type) {
    case "bookAppointment":
      return [state, action.payload];
    case "getAppointmentForOneUser":
      return [state, action.payload];
    default:
      return 0;
  }
};

export default Appointment;
