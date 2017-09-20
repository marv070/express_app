var User = require('./models/user');
// var Board = require("./models/board");
var TttLogic = require("./models/gameLogic");

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
 
  app.get('/getMove', function(req, res){
    
    res.render('board.ejs', { board_array: TttLogic.board_array, current_player: TttLogic.current_player, message: ''});
  });

  app.post('/user_move', function(req,res){
    var choice = req.body.square;
    // TttLogic.board_array[choice - 1] = TttLogic.current_player;
      if(TttLogic.valid_space(choice, TttLogic.board_array)) {
        TttLogic.update_board(choice,TttLogic.board_array,TttLogic.current_player)
        TttLogic.current_player = TttLogic.change_player(TttLogic.current_player);
          if(TttLogic.full_board(TttLogic.board_array)){
            res.redirect('/gameTie')
          }else{
    // res.send("current player is: " + TttLogic.current_player );   
            res.redirect('/getMove')
          }

      }else{
        res.render('board.ejs', { board_array: TttLogic.board_array, current_player: TttLogic.current_player, message: '!!Lets try an open spot this time!!'});
      }
  });

  app.get('/getTest', function(req, res){
    
    res.render('testResultsInBrowser.ejs');
  });

  app.get('/gameTie', function(req, res){
    
    res.render('gameTie.ejs', { board_array: TttLogic.board_array});
  });

  app.get('/reset', function(req,res){
    TttLogic.board_array = [1,2,3,4,5,6,7,8,9]
    res.redirect('/getMove')

  })



};


function isLoggedIn(req, res, next) {
  if(req.isAuthenticated()){
    return next();
  }

  res.redirect('/login');
}

















