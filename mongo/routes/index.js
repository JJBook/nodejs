var express = require('express');
var router = express.Router();
var exec = require('child_process').exec;
var fs = require('fs');
var bodyParser = require('body-parser');
var multer  = require('multer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  	// var file = '/Users/warrior/Desktop/ipa/cache/宝宝服装秀_验收2.ipa';
  	// exec('/Users/warrior/Desktop/move.sh ' + file, function(err, out, code){
  	// 	console.log('stdout: ' + out);  
   //  	console.log('stderr: ' + err);
  	// });

  	// res.render('learn', { title : 'JJ学jade', ip: req.ip });
  // 	var list = [
		// { name: "波多野结衣", age: 18, sex: '女', 职业: '演员' },
		// { name: "东尼大木", age: 38, sex: '男', 职业: '演员' },
		// { name: "吉泽明步", age: 28, sex: '女', 职业: '演员' },
		// { name: "周杰伦", age: 40, sex: '男', 职业: '歌手' },
	 // ];
  // 	res.render('indexx', { list : list });
  	// res.render('article');
});

router.get('/index', function(req, res){
    var list = [
        { name: "波多野结衣", age: 18, sex: '女', 职业: '演员' },
        { name: "东尼大木", age: 38, sex: '男', 职业: '演员' },
        { name: "吉泽明步", age: 28, sex: '女', 职业: '演员' },
        { name: "周杰伦", age: 40, sex: '男', 职业: '歌手' },
     ];
    res.render('indexx', { list : list });
});

router.post('/file_upload', function(req, res){
    console.log(req.files);
    // console.log(req.files[0]);  // 上传的文件信息
    var des_file = __dirname + "/" + req.files[0].originalname;
    fs.readFile( req.files[0].path, function (err, data) {
        fs.writeFile(des_file, data, function (err) {
            if( err ){
                console.log( err );
            }else{
                response = {
                   message:'File uploaded successfully', 
                   filename:req.files[0].originalname
                };
            }
            console.log( response );
            res.end( JSON.stringify( response ) );
        });
    });
});

module.exports = router;
