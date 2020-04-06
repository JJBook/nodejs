// var net = require('net');

// var server = net.createServer(function(connection) {
// 	console.log('client connected');
// 	connection.on('end', function() {
// 		console.log('客户端关闭连接');
// 	});
// 	connection.write('Hello World!\r\n');
// 	connection.pipe(connection);
// });

// server.listen(8888, function() {
// 	console.log('server is listening');
// });

var http = require('http');

var options = {
	host: 'localhost',
	port: '8888',
	path: '/index.html'
};

// 处理响应的回调事件
var callback = function(response) {
	var body = '';
	response.on('data', function(data){
		body += data;
	});

	response.on('end', function() {
		// 数据接收完成
		console.log(body);
	});
}

var req = http.request(options, callback);
req.end();
