export default (state = [], action) => {

       switch (action.type) {
              case 'Adduser':

                     return [state, action.payload];

              case 'verifyUser':

                     console.log(action, "action.payload ")
                     return [state, action.payload];

              case 'Auth':

                     console.log(action, "action.payload ")
                     return [state, action.payload];

              default:
                     return 0;
       }
}