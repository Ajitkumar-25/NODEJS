const http=require("http");

const senddata=(req,resp)=>
{
    resp.write("<h1>hello ji kya haaal chaal hai </h1>");
    resp.end();
}
http.createServer(senddata).listen(8000,()=>{console.log("running in port 8000")});

//http module handles req and respond on the server