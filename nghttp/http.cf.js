/*
var error_page = {
    "code": "404",
    "to" :"/emtpy.gif",
};
*/

/*
var error_page = {
    "code" :"404=200",
};

var error_page = {
    "code" :"404",
    "to" : "index.html",
};

*/
var server = {
    "listen": { "addr":":80"}
            
}

var server1 = {
    "listen": { "addr":":80"}
}

var location3 = {
    "proxy_pass": {},
};

var location2 = {
    "reg": location3,
};

var error_page = {
    "code": "404",
    "to" :"/emtpy.gif",
};

var mysvr = [
    {"addr": "http://192.168.1.128:2000", "weight":5},
    {"addr": "http://192.168.1.128:2001", "weight":5},
    {"addr": "http://192.168.1.128:2002", "weight":5},
];

var location1 = {
    "reg" :"/",
    "root": "/root",
    "index": ["index.php", "index.html", "index.htm"],
    "proxy_pass": mysvr,
};

var server2 = {
    "listen": {"addr":":80"},
    "server_name" : "www.xxx.com",
    "access_log":"./local-access.log",
    "location":   location1,
    "error_page": error_page,
}

var location4 = {
    "reg":"^/(images|javascript|js|css|flash|media|static)/",
    "root":"/var/www/virtual/htdocs",
    "expires": "30d",
}

var http = {
    "include":"./mime.types",
    "default_type":  "application/octet-stream",
    "access_log":"./access.log",
    "server":[
        server, server1, server2,
    ],
};

var main = {
    "error_log" :"",
    "pid" : "/var/run/ng.pid",
    "http": http,
};

nghttp.main(main)
