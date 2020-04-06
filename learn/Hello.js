function Hello()
{
	var name;
	this.setName = function(thyName){
		name = thyName;
	};

	this.sayHello = function(){
		console.log('你好，' + name);
	};

}

module.exports = Hello;