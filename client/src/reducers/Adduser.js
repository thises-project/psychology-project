export default (Adduser = [], action)=> { 

    switch (action.type){
       case 'Adduser':
           console.log("helllooooooooooo")
           console.log(action.payload)
           return [Adduser, action.payload];

       default:
           return 0;
    }
}