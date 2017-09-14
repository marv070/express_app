var chai = require('chai');
var assert = chai.assert;
var expect = chai.expect;

var ttt = require("./board.js");

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
    //You want to use deep if you're trying to compare objects: per stack overflow after assert gave assertion error
    expect([1,2,3,4,5,6,7,8,9]).to.eql(ttt.board_array);
  });

});