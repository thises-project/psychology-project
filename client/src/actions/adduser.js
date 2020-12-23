

import * as api from '../api/index.js'

export const Adduser = (user) => async (dispatch) => {
  try {
    console.log('success user :', user)
    const { data } = await api.Adduser(user);

    console.log('returnnnnnnn', data)
    dispatch({ type: 'Adduser', payload: data })

  }
  catch (error) {
    console.log('failed')
    console.log(error)
  }
}

