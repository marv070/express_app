var chai = require('chai');
var assert = chai.assert;

var ttt = require("./board.js");

describe('current_playerIs', function() {
  it('current player is x at start of game', function() {
   
    assert.equal("x",ttt.current_player);
  });

});

describe('current_playerIs', function() {
  it('current player is o after change player function', function() {
    ttt.current_player = "x"
    assert.equal("o",ttt.change_player(ttt.current_player));
  });

});

describe('current_playerIs', function() {
  it('current player is x after change player function', function() {
    ttt.current_player = "o"
    assert.equal("x",ttt.change_player(ttt.current_player));
  });

});