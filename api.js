const http=require("http");
const data=require('./apidata');

const server=(req,resp)=>{
    resp.writeHead(200,{'Content-Type':'application\json'});
    resp.write(JSON.stringify(data));
    resp.end();
}
http.createServer(server).listen(5000,()=>{console.log("running in port 5000")});

