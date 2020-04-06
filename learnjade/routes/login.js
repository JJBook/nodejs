var JJUtil = require('./JJUtil'),
db         = require('./db'),
settings   = require('./settings'),
fs         = require('fs'),   
nodemailer = require('nodemailer');


/*跳转登录页面*/
exports.redirectLogin = function(req, res, next) {
	res.render('login', {title: "用户登录"});
}


/*用户登录*/
exports.login = function(req, res, next) {
    var email     = req.body.email;
    var password  = JJUtil.encryptWithMd5(req.body.password);
    var queryJson = { email : email };
    db.findOne('JJ_PACK_DB', 'user', queryJson, function(err, result){
    	if (err) {
    		return res.json({
    			code : 400,
    			"message" : "请求出错"
    		});
    	}

    	if (!err && !result) {
    		return res.json({
    			code : 401,
    			"message" : "该邮箱未注册"
    		});
    	}

    	if (result) {
    		if (password == result.password) {
                req.session.user = result;
    			return res.json({
    				code : 200,
    				"message" : "登录成功"
    			});
    		} else {
    			return res.json({
    				code : 402,
    				"message" : "密码出错"
    			});
    		}
    	}
    });
}


/*跳转发送邮件*/
exports.redirectSendEmail = function(req, res, next) {
    res.render('sendEmail', {
        title : "发送邮件"
    });
}


/*忘记密码，发送邮寄*/
exports.sendEmail = function(req, res, next) {
    var email = req.body.email;
    db.findOne('JJ_PACK_DB', 'user', { email : email }, function(err, result){
        if (err) {
            return res.json({
                "status"      : 400,
                "message"    : "位置错误"
            });
        }

        if (!result) {
            return res.json({
                "status"      : 401,
                "message"    : "邮箱未注册"
            });
        } else {
            var transporter = nodemailer.createTransport({
                host    : "smtp.qq.com",
                service : settings.service,
                port    : 465,
                secureConnection : true,
                auth    : {
                    user : settings.email,
                    pass : settings.password
                }
            });

            transporter.sendMail({
                from    : 'little rice banana <' + settings.email + '>',
                to      : email,
                subject : "测试",
                text    : result
            }, function(error, response){
                if (err) {
                    return res.json({
                                "status"      : 400,
                                "message"    : "发送错误"
                            });
                }
                console.log("发送成功");
                transporter.close();
                return res.json({
                                "status"      : 200,
                                "message"    : "发送成功"
                            });
            });
        }
    });
}


/*获取用户头像*/
exports.getUserPhoto = function(req, res, next) {
    var path         = __dirname + "/../" + "public/pics/" + req.params.photo;
    var extendName   = path.substring(path.lastIndexOf(".") + 1, path.length).toLowerCase();
    var stream       = fs.createReadStream(path);
    var responseData = [];
    if (stream) {
        stream.on('data', function(chunk) {
            responseData.push(chunk);
        });

        stream.on('end', function() {
           var finalData = Buffer.concat(responseData);
           res.writeHead(200,  {'Content-Type':'image/' + extendName});
           res.write(finalData, 'binary');
           res.end();
        });
    }
}

