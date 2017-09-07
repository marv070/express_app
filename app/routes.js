var User = require('./models/user');
var Board = require("./models/board");
var board = new Board();

module.exports = function(app, passport){
  
  app.get('/', function(req, res){
    res.render('index.ejs');
  });

  app.get('/login', function(req, res){
    res.render('login.ejs', { message: req.flash('loginMessage') });
  });
  app.post('/login', passport.authenticate('local-login', {
    successRedirect: '/profile',
    failureRedirect: '/login',
    failureFlash: true
  }));

  app.get('/signup', function(req, res){
    res.render('signup.ejs', { message: req.flash('signupMessage') });
  });


  app.post('/signup', passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup',
    failureFlash: true
  }));

  app.get('/profile', isLoggedIn, function(req, res){
    res.render('profile.ejs', { user: req.user });
  });

  app.get('/auth/facebook', passport.authenticate('facebook', {scope: ['email']}));

  app.get('/auth/facebook/callback', 
    passport.authenticate('facebook', { successRedirect: '/profile',
                                        failureRedirect: '/' }));

  app.get('/auth/google', passport.authenticate('google', {scope: ['profile', 'email']}));

  app.get('/auth/google/callback', 
    passport.authenticate('google', { successRedirect: '/profile',
                                        failureRedirect: '/' }));


  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  })
  var current_player = "x";

 function change_player(current_player){
    current_player = current_player;
    if(current_player == "x"){
      current_player =  "o";
    }else if(current_player == "o") { 
      current_player =  "x";
  }
  return current_player
  };
 
  var board_array = ["1","2","3","4","5","6","7","8","9"];
 


  app.get('/getMove', function(req, res){
    
    res.render('board.ejs', { board_array: board_array});
  });

  app.post('/user_move', function(req,res){
  var choice = req.body.square;
  board_array[choice - 1]   = current_player;
  current_player = change_player(current_player);
  // res.send("user move was :" + choice + "<br>" + board_array  );
  res.redirect('/getMove')
  
});



};


function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect('/login');
}

















