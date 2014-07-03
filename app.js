
/**
 * Module dependencies
 */
var passport = require('passport');
var FacebookStrategy = require('passport-facebook').Strategy;
var fs = require('fs');
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
app.configure(function(){
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.cookieParser());
app.use(express.session({ secret: 'keyboard cat' }));
app.use(express.methodOverride());
app.use(express.static(path.join(__dirname, 'public')));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
}
);
var userName ="Not Logged in";
// development only
if (app.get('env') === 'development') {
   app.use(express.errorHandler());
};

// production only
if (app.get('env') === 'production') {
  // TODO
}; 

// Begin the facebook authentication middleware declaration

passport.use(new FacebookStrategy({
clientID:FACEBOOK_APP_ID,
clientSecret: FACEBOOK_APP_SECRET,
callbackURL:'http://localhost:3000/auth/facebook/callback'

},
function(accessToken,refreshToken,profile,done)
{
console.log("Profile is "+profile.displayName);
userName = "Welcome "+profile.dispalyName;

process.nextTick(function(){
var user = {};
user.id = profile.id;
user.name = profile.displayName;

done(null,user);

});

}
));

passport.serializeUser(function(user,done){
console.log("Serializing object username :"+user.name);
console.log("user id :"+user.id);
done(null,user);


});

passport.deserializeUser(function(user,done){
console.log("deserializing user name = "+user.name+" user id ="+user.id);
done(null,user);

});


// Routes

// Facebook routes

app.get('/auth/facebook',passport.authenticate('facebook'));
app.get('/auth/facebook/callback',passport.authenticate('facebook',{
successRedirect:'/home',
failuredRedirect:'/error',
  session: true
}

));

app.get('/error',function(req,res){

res.send("<h>Error Logging In</h><br><a href='/'>Go To Home page</>");

});

app.get('/', routes.index);
app.get('/home',function(req,res){
   
   res.render('home',{ user:req.user });

});
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
