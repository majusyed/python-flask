 server {
    listen 80;
    server_name example.com; # Replace with your domain name or IP address

    location / {
        root /var/www/html;
        index index.html;
        try_files $uri /index.html;
    }
}