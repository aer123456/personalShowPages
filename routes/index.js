var express = require('express');
var router = express.Router();
var multiparty = require('multiparty');
var util = require('util');
var fs = require('fs');

/* GET pages. */
router.get('/:route', function (req, res, next){
	var route = req.params.route;
	switch(route) {
		case 'test1' :
			res.render('test1');
			break;
		case 'test2' :
			res.render('test2');
			break;
		case 'test3' :
			res.render('test3');
			break;
		case 'test4' :
			res.render('test4');
			break;
		default :
			res.render('error', { message: '请求路径不正确！'})
	}
});

/* upload files. */
router.post('/upload', function (req, res, next) {
  	var form = new multiparty.Form({uploadDir: './public/upload/'});
  	form.parse(req, function(err, fields, files) {
     	var filesTmp = JSON.stringify(files,null,2);
     	if(err){
       		console.log('parse error: ' + err);
     	} else {
	       	var inputFile = files.inputFile[0];
	       	var uploadedPath = inputFile.path;
	       	var dstPath = './public/upload/' + inputFile.originalFilename;
	       	//重命名为真实文件名
	       	fs.rename(uploadedPath, dstPath, function(err) {
	         	if(err){
	           	console.log('rename error: ' + err);
	         	} else {
	           		console.log('rename ok');
	           		req.files = null;
	         	}
       		});
    	}
	    // res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
	    // res.write('received upload:\n\n');
	    // res.end(util.inspect({fields: fields, files: filesTmp}));
  	});

    res.render('test1', { });
});

/* download files. */
router.get('/download/:fileName', function (req, res, next){
	var fileName = req.params.fileName;
	console.info(fileName);
	res.download('./public/upload/' + fileName);
});

module.exports = router;
