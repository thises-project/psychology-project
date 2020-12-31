import * as api from '../api/index'

export const bookAppointment = (appointmentInfo) => async (dispatch)=>{
    try {
        console.log('success appointment :' , appointmentInfo)
      const {data} = await api.bookAppointment(appointmentInfo);
      
      console.log('returnnnnnnn', data)
      dispatch({type :'bookAppointment' , payload: data})

        
    }
    catch(error){
        console.log('failed')
        console.log(error)
    }
 //   const action = { type : ' '}
}


