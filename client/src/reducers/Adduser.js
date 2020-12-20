export default (Adduser = [], action)=> { 

    switch (action.type){
       case 'Adduser':
           return [...Adduser, action.payload];

       default:
           return 0;
    }
}