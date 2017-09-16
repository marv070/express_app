update_turn = function(current_player){
      // current_player : current_player;
    if(current_player == "x"){
       current_player =  "o";
     }else if(current_player == "o") { 
       current_player =  "x";
   }

   return current_player
},

update_move = function(choice,board,current_player){
   board[choice - 1] = current_player;
   return board
},

board_full = function (board) {
     counter = 0;
    for (var i = 0; i < board.length; i++) {
        if (board[i] === parseInt(board[i])) {
            counter += 1
        }
    }
      if (counter == 0) {
        return true
      } else {
        return false
      }
     // return true if counter == 0
}
  
module.exports = {
  current_player : "x",
  board_array : [1,2,3,4,5,6,7,8,9],
  change_player : update_turn,
  full_board : board_full,
  
  update_board : update_move
  
  
};
