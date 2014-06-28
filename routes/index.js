
/*
 * GET home page.
 */

exports.index = function(req, res){
  console.log("Dir name"+__dirname);
  res.render('index');
};
exports.random = function(req,res){
   res.writeHead(200,{"Content-Type": 'text/xml'                
      });
   res.write("<welcome-message>Hello world</welcome-message>");
   res.end();
};


exports.partial = function (req, res) {
  var name = req.params.name;
  res.render('partials/partial' + name);
};
