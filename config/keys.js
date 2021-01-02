if(process.env.NODE_ENV==='production'){
    module.exports={
        HOST_NAME:"us-cdbr-east-02.cleardb.com",
        USER_NAME:"b9b123f535b175",
        PASS_WORD:"07541acb",
        DATA_BASE:"heroku_cfd715af18a8709",
        JWT_KEY: "secret"}
}else{
    module.exports={
        
        HOST_NAME:"us-cdbr-east-02.cleardb.com",
        property:"b9b123f535b175",
        PASS_WORD:"07541acb",
        DATA_BASE:"heroku_cfd715af18a8709",
        JWT_KEY: "secret"}
    


}

//mysql://b9b123f535b175:07541acb@us-cdbr-east-02.cleardb.com/heroku_cfd715af18a8709?reconnect=true