const http=require("http");
http.createServer((req,resp)=>{
resp.write("<h1>hello ji</h1>");
resp.end();
}).listen(8000,()=>{console.log("running in port 8000")});