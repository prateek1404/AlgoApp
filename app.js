
/**
 * Module dependencies
 */
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;

var FACEBOOK_APP_ID ='496789037121421';
var FACEBOOK_APP_SECRET='0860ca2d754499abdaad5d11f2a7379b';

var express = require('express'),
  routes = require('./routes'),
  api = require('./routes/api'),
  http = require('http'),
  path = require('path');


var app = module.exports = express();

/**
* Configuration
*/

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
console.log("Directory name "+__dirname);
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);

// development only
if (app.get('env') === 'development') {
   app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
  // TODO
}; 

// Begin the facebook authentication

passport.use(new FacebookStrategy({
clientID:FACEBOOK_APP_ID,
clientSecret: FACEBOOK_APP_SECRET,
callbackURL:'http://localhost:3000/auth/facebook/callback'

},
function(accessToken,refreshToken,profile,done)
{
process.nextTick(function(){
done(null,profile);

});

}
));

passport.serializeUser(function(user,done){
done(null,user);


});

passport.deserializeUser(function(obj,done){

done(null,obj);

});


// Routes

// Facebook routes

app.get('/auth/facebook',passport.authenticate('facebook'));
app.get('/auth/facebook/callback',passport.authenticate('facebook',{
successRedirect:'/',
failuredRedirect:'error'
}

));

app.get('/error',function(req,res){

res.send("<h>Error Logging In</h><br><a href='/'>Go To Home page</>");

});

app.get('/', routes.index);
//app.get('/partial/:name', routes.partial);
app.get('/random',routes.random);
// JSON API
app.get('/api/name', api.name);
app.get('/insertionSort',routes.insertionSort);
app.get('/recursiveInsertionSort',routes.recursiveInsertionSort);
app.get('/selectionSort',routes.selectionSort);
app.get('/bubbleSort',routes.bubbleSort);
// redirect all others to the index (HTML5 history)
//app.get('*', routes.index);

/**
* Start Server
*/

http.createServer(app).listen(app.get('port'), function () {
  console.log('Express server listening on port ' + app.get('port'));
});
