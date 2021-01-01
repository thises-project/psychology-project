import * as api from '../api/index'

export const bookAppointment = (  id,userId ,appointmentInfo) => async (dispatch)=>{
    console.log( id ,userId,appointmentInfo)
    try {
        console.log('success appointment :' , appointmentInfo)
        console.log(id,userId ,appointmentInfo ,"helllllllllllllo")
      const {data} = await api.bookAppointment( id,userId ,appointmentInfo);
      
      
      dispatch({type :'bookAppointment' , payload: data})
      console.log('returnnnnnnn', data)
        
    }
    catch(error){
        console.log('failed')
        console.log(error)
    }

}

export const getAppointmentForOneUser = (id) => async (dispatch) => {
    try {
        const { data } = await api.getAppointmentForOneUser(id);

        dispatch({ type: 'getAppointmentForOneUser', payload: data });
        console.log(data,"hellllooooooo");
    }
    catch (error) {
        console.log(error.message);
    }
};

