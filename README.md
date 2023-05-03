# ec2-applications
 
-------------------------------------
1.deploy nodejs on ec2 
2.deploy reactjs on ec2
3.deploy python flask on ec2
----------------------------------
           python flask

1.crete one ec2 instance with amazon or ubuntu user
2.connect ssh with gitbash
3. #sudo apt-get update
   #sudo apt-get install python3-pip                  --- ubuntu user-----
   #whereis pip3
   #sudo pipi3 install flask
   #sudo apt-get install nginx
   #sudo apt-get install gunicorn3
   #mkdir flask
   #cd flask
   #vi app.py
      
        copy the code with net 

      and save:wq! enter
    
4. #python3 app.py

[import i flask
app=Flask(__name__)
@app.route("/")
def homepage():
           return "<h1> hello maju <h1>"
if __name__=="__main__":
         app.run(host='0.0.0.0', port=5000)

5.copy the public ip and 8080]

---------------------------------------------------------
                  node js
1. crete one ec2 instance connect git bash allow 3000 and anywhere install ubuntu or amazon linux
2.#sudo yum install nodejs
  #sudo yum install npm
  #npm install
  #npm init    -----enter all enter
  #sudo yum install nginx
  #mkdir nodejs
  #cd nodejs
  #vi node.js
[const http = require('http');


const hostname = '0.0.0.0';

const port = 3000;


const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});]

:wq! 
3.#node node.js 
4.copy publicip and port 3000
-------------------------------------------------------------------
             reactjs
1.create instance with amazon linux port 3000 and connect gitbash
2.#sudo yum update -y
  #sudo yum install -y nodejs
  #sudo yum install npm
  #sudo yum install nginx
  #vi react.js
   
    [server {
    listen 80;
    server_name example.com; # Replace with your domain name or IP address

    location / {
        root /var/www/html;
        index index.html;
        try_files $uri /index.html;
    }
}]
:wq!
4.npx create-react-app my-app
5.copy the public ip and port 3000