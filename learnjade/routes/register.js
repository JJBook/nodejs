var formidable 	= require('formidable'), 
fs 				= require("fs"),
JJUtil			= require('./JJUtil'),
db 				= require("./db");

/*跳转用户注册*/
exports.redirectRegister = function(req, res, next){
	res.render('register', {
		title: "用户注册"
	});
}

/*用户注册*/
exports.register = function(req, res, next){
	// 前端返回数据
	var data = {
		email 			: req.body.email,
		password 		: JJUtil.encryptWithMd5(req.body.password),
		username 		: req.body.username,
		image 			: req.body.image,
	};

	var queryJson = { email : req.body.email};
	db.findOne('JJ_PACK_DB', 'user', queryJson, function(err, result){
		if (err) {
			return res.json({
				"code" 		: 400,
				"message" 	: "注册错误"
			});
		}

		if (!err && result) {
			return res.json({
				"code" 		: 401,
				"message" 	: "此邮件已经存在"
			});
		};

		if (!result) {
			db.insertOne('JJ_PACK_DB', 'user', data, function(err){
				return res.redirect('/');
			});
		}
	});
}

/*上传用户头像*/
exports.userUpload = function(req, res, next){
	var form = new formidable.IncomingForm();
	form.encoding = 'utf-8';					//设置编辑
	form.uploadDir = 'public' + '/pics/';	 	//设置上传目录
	form.keepExtensions = true;	 				//保留后缀
	form.maxFieldsSize = 2 * 1024 * 1024;   	//文件大小

	form.parse(req, function(err, fields, files){
		if (err) {
			return res.json({
				"code"		: 500,
				"message" 	: "内部服务器错误"
			});
		}

		if (files.fulAvatar.path > form.maxFieldsSize) {
			fs.unlink(files.fulAvatar.path);
			return res.json({
				"code"		: 401,
				"message" 	: "图片应小于2M"
			});
		}

		var extName = files.fulAvatar.path.substring(files.fulAvatar.path.lastIndexOf(".") + 1, files.fulAvatar.path.length).toLowerCase();  //后缀名
		// switch (files.fulAvatar.type) {
		// 	case 'image/pjpeg':
		// 		extName = 'jpg';
		// 		break;
		// 	case 'image/jpeg':
		// 		extName = 'jpg';
		// 		break;
		// 	case 'image/png':
		// 		extName = 'png';
		// 		break;
		// 	case 'image/x-png':
		// 		extName = 'png';
		// 		break;
		// }
		if (extName == "png" || extName == "jpg") {

		} else {
			return res.json({
				"code"		: 401,
				"message" 	: "只支持png和jpg格式图片"
			});
		}

		var t = (new Date()).getTime();
		// 图片名称
		var avatarName = t + '.' + extName;
		// 图片路径
		var newPath = form.uploadDir + avatarName;

		// 更改图片名字和路径
		fs.rename(files.fulAvatar.path, newPath, function(err){
			if (err) {
				return res.json({
					"code"		: 401,
					"message" 	: "图片上传失败"
				});
			}

			return res.json({
				"code"		: 200,
				"message" 	: "图片上传成功",
				result 		: "/pics/" + avatarName
			});
		});
	});
}