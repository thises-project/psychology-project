// export default (Adduser = [], action)=> { 
    
  

//     switch (action.type){
        
//         case 'UPDATE':
//          // console.log(action.payload)
//           return Adduser.map((user) => user.userId === action.payload.userId ? action.payload : user);
          
         

        
//        case 'Adduser':
//            console.log(Adduser, action.payload)
//            console.log(action.payload)
//            return [Adduser, action.payload];


//        default:
//            return 0;
//     }
// eslint-disable-next-line
export default (state = [], action) => {

    

       switch (action.type) {
        case 'UPDATE':
            // console.log(action.payload)
             return Adduser.map((user) => user.userId === action.payload.userId ? action.payload : user);

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
