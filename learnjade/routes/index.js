var express = require('express'), 
router 		= express.Router(), 
login  		= require('./login'),
register 	= require('./register');

/*主页*/
router.route('/').all(checkLogin).get(function(req, res, next){
	res.render('index', {
		title 		: req.session.user.username + '爱大宝',
		username 	: req.session.user.username,
		image 		: req.session.user.image
	});
});

/*获取用户头像*/
router.get('/getUserPhoto/pics/:photo', login.getUserPhoto);

/*用户注册*/
router.get('/register', register.redirectRegister);

/*用户注册*/
router.post('/userRegister', register.register);

/*发送邮件*/
router.get('/email', login.redirectSendEmail);

router.post('/sendEmail', login.sendEmail);

// 跳转登录页面
router.get('/login', login.redirectLogin);

// 账号登录
router.post('/userLogin', login.login);

// 图片上传
router.post('/uploadImage', register.userUpload);

// 检测是否已经登录
function checkLogin(req, res, next) {
	if (!req.session.user) {
		res.redirect('/login');
		return;
	}
	next();
}

module.exports = router;
