export default (Adduser = [], action)=> { 
    
console.log( action)

    switch (action.type){
        case 'UPDATE':
          return Adduser.map((user) => user.userId === action.payload.userId ? action.payload : user);

        
       case 'Adduser':
           console.log(Adduser, action.payload)
           console.log(action.payload)
           return [Adduser, action.payload];


       default:
           return 0;
    }
}