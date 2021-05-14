const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

http .createServer((req,resp) =>{
        const path = url.parse(req.url,true).pathname;
        const query = url.parse(req.url,true).query;
        const key = Object.keys(query);
        const filename=__dirname+ path;

        console.log(path)
        console.log(query)
        console.log(key)
        console.log(filename)
        if(!fs.existsSync(filename)){
            response.writeHead(200);
            resp.end();
            return;
        }
        if( key.find( (item)=>{return item==="cache"})!=-1 ){
            if( query["cache"]== "no-store" ||  query["cache"]== "no-cache" )
                resp.setHeader('Cache-Control',query["cache"]);
            else 
                resp.setHeader('Cache-Control',"max-age="+query["cache"]);
        }
        fs.createReadStream(filename).pipe(resp);
    })
    .listen(8888);
console.log('Server running at http://127.0.0.1:8888/');

// var http = require('http');

// http.createServer(function (request, response) {

//     // 发送 HTTP 头部 
//     // HTTP 状态值: 200 : OK
//     // 内容类型: text/plain
//     response.writeHead(200, {'Content-Type': 'text/plain'});

//     // 发送响应数据 "Hello World"
//     response.end('Hello World\n');
// }).listen(8888);

// console.log('Server running at http://127.0.0.1:8888/');