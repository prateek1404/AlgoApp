
/*
 * GET home page.
 */
var fs = require('fs');
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

exports.insertionSort = function(req,res)
{
res.writeHead(200,{'Content-Type':'text/plain'});
var data = fs.readFileSync(__dirname+'/../public/insertionSort.js');
          console.log("insertionSort from DIR "+__dirname);          
          res.write(data);
          res.end();

};
exports.recursiveInsertionSort = function(req,res)
{
res.writeHead(200,{'Content-Type':'text/plain'});
var data = fs.readFileSync(__dirname+'/../public/recursiveInsertionSort.js');

          res.write(data);
          res.end();

};

exports.selectionSort = function(req,res)
{
res.writeHead(200,{'Content-Type':'text/plain'});
var data = fs.readFileSync(__dirname+'/../public/selectionSort.js');

          res.write(data);
          res.end();

};
exports.bubbleSort = function(req,res)
{
res.writeHead(200,{'Content-Type':'text/plain'});
var data = fs.readFileSync(__dirname+'/../public/bubbleSort.js');

          res.write(data);
          res.end();

};


exports.partial = function (req, res) {
  var name = req.params.name;
  res.render('partials/partial' + name);
};
