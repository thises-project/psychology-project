import * as api from "../api/index"

export const getScheduleForUser = (id) => async (dispatch) =>{
    try {
        console.log("from schedule")
        const {data} = await api.getScheduleForUser(id);
        dispatch({type : 'getScheduleForUser' ,payload : data})
        console.log(data , "for schedule ")
        console.log(data[0].date)
    }
    catch(error){
        console.log(error , "failed")
    }
}