var mysql = require('mysql')

var connection = mysql.createConnection({
	host : 'localhost',
	user : 'root',
	port : '3306',
	password : '123456',
	database : 'base'
})
connection.connect()

var addsql = 'INSERT INRO websites(Id, name, user)'