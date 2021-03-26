#  Python 3 server example
from http.server import BaseHTTPRequestHandler, HTTPServer
import time
import json
hostName = "localhost"
serverPort = 8080

f = open('data.json', 'r')
content = f.read()
a = json.loads(content)
f.close()

class MyServer(BaseHTTPRequestHandler):
    def do_GET(self):
        self.send_response(200)
        self.send_header("Content-type", "text/html")
        self.send_header("Access-Control-Allow-Origin","*")
        self.send_header("Access-Control-Allow-Headers","*")

        self.end_headers()
        json_string = json.dumps(a)
        self.wfile.write(bytes(json_string, "utf-8") )
        

if __name__ == "__main__":        
    webServer = HTTPServer((hostName, serverPort), MyServer)
    print("Server started http://%s:%s" % (hostName, serverPort))

    try:
        webServer.serve_forever()
    except KeyboardInterrupt:
        pass

    webServer.server_close()
    print("Server stopped.")