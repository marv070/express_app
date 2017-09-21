var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var ttt = require("../app/models/gameLogic.js");

describe('current_playerIs', function() {
  it('current player is x at start of game', function() {
   
    assert.equal("x",ttt.current_player);
  });

});

describe('current_playerIs', function() {
  it('will have current player o after change player function', function() {
    ttt.current_player = "x"
    assert.equal("o",ttt.change_player(ttt.current_player));
  });

});

describe('current_playerIs', function() {
  it('will have current player x after change player function', function() {
    ttt.current_player = "o"
    assert.equal("x",ttt.change_player(ttt.current_player));
  });

});

describe('board array', function() {
  it('will have board  array of intergers 1 thru 9', function() {
    ttt.board_array = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    // assert.equal([1, 2, 3, 4, 5, 6, 7, 8, 9],ttt.board_array);
    //You want to use .to.eql if you're trying to compare objects: per stack overflow after assert gave assertion error
    expect([1,2,3,4,5,6,7,8,9]).to.eql(ttt.board_array);
  });

});

describe(' update board array with current player choice', function() {
  it('will update board with update function player choice 9', function() {
    ttt.board_array = ["x","o","x","o",5,6,7,8,9],
    ttt.current_player = "o",
    choice = 9
    update_move = ttt.update_board(choice,ttt.board_array,ttt.current_player)
   
    expect(["x","o","x","o",5,6,7,8,"o"]).to.eql(update_move);
  });

  it('will update board with update function player choice 1', function() {
    ttt.board_array = [1,2,3,4,5,6,7,8,9],
    ttt.current_player = "x",
    choice = 1
    update_move = ttt.update_board(choice,ttt.board_array,ttt.current_player)
   
    expect(["x",2,3,4,5,6,7,8,9]).to.eql(update_move);
  });

  it('will update board with update function player choice 4', function() {
    ttt.board_array = [1,2,3,4,5,6,7,8,9],
    ttt.current_player = "x",
    choice = 4
    update_move = ttt.update_board(choice,ttt.board_array,ttt.current_player)
   
    expect([1,2,3,"x",5,6,7,8,9]).to.eql(update_move);
  });

  it('will update board with update function player choice 7', function() {
    ttt.board_array = ["x",2,"x",4,5,6,7,8,"o"],
    ttt.current_player = "o",
    choice = 7
    update_move = ttt.update_board(choice,ttt.board_array,ttt.current_player)
   
    expect(["x",2,"x",4,5,6,"o",8,"o"]).to.eql(update_move);
  });

});

describe('board full method returns true if no intergers found', function() {
  it('will return true with no intergers', function() {
    ttt.board_array = ["x", "o", "x", "o", "x", "o", "x", "o", "x"]
    
    assert.equal(true,ttt.full_board(ttt.board_array));
  });
  it('will return false with interger in board array', function() {
    ttt.board_array = ["x", 2, "x", "o", "x", "o", "x", "o", "x"]
    
    assert.equal(false,ttt.full_board(ttt.board_array));
  });
  it('will return false with muliply intergers in board array', function() {
    ttt.board_array = ["x", 2, "x", "o", 5, "o", "x", 8, "x"]
    
    assert.equal(false,ttt.full_board(ttt.board_array));
  });


});

describe('valid spot returns true', function() {
  it('returns true if player choice is interger 2', function() {
   ttt.board_array = [1, 2, "x", "o", 5, "o", "x", 8, "x"]
   choice = 2
    assert.equal(true,ttt.valid_space(choice,ttt.board_array));
  });
  it('returns false if player choice is interger 3', function() {
   ttt.board_array = [1, 2, "x", "o", 5, "o", "x", 8, "x"]
   choice = 3
    assert.equal(false,ttt.valid_space(choice,ttt.board_array));
  });
  it('returns true if player choice is interger 8', function() {
   ttt.board_array = [1, 2, "x", "o", 5, "o", "x", 8, "x"]
   choice = 8
    assert.equal(true,ttt.valid_space(choice,ttt.board_array));
  });
  it('returns false if player choice is interger 9', function() {
   ttt.board_array = [1, 2, "x", "o", 5, "o", "x", 8, "x"]
   choice = 9
    assert.equal(false,ttt.valid_space(choice,ttt.board_array));
  });

});


  
