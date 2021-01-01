if(process.env.NODE_ENV==='production'){
    module.exports={
        HOST_NAME:"us-cdbr-east-02.cleardb.com",
        USER_NAME:"b0633d23088e42",
        PASS_WORD:"a0a5e72a",
        DATA_BASE:"heroku_f537f4068a5e975",
        JWT_KEY: "secret"}
}else{
    module.exports={
        
        HOST_NAME:"us-cdbr-east-02.cleardb.com",
        property:"b0633d23088e42",
        PASS_WORD:"a0a5e72a",
        DATA_BASE:"heroku_f537f4068a5e975",
        JWT_KEY: "secret"}
    
}
