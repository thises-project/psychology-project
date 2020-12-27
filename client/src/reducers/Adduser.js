export default (state = [], action)=> { 

       switch (action.type){
          case 'Adduser':
              
                return [state, action.payload];   
   
        case 'verifyUser':
            
               console.log(action, "action.payload ")
               return [state, action.payload]; 
   
        case 'Auth':
            
               console.log(action, "action.payload ")
               return [state, action.payload];

       case 'UPDATE':
                    
               return state.map((editUser) => editUser.userId === action.payload.userId ? action.payload : editUser);
       case 'DELETE':
                    
               return state.filter((user) => user.userId !== action.payload )
       default:
              return 0;
       }
   }