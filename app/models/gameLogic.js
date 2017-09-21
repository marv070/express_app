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

board_full = function(board) {
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
},

open_space = function(choice,board) {
    if (board[choice-1] == parseInt(board[choice-1])) {
        return true
      } else {
        return false
      }
},

// winner? = function(marker,board) {
//     result = false;
//     winning_lines = [[ttt_board[0],ttt_board[1],ttt_board[2]],
//              [ttt_board[3],ttt_board[4],ttt_board[5]],
//              [ttt_board[6],ttt_board[7],ttt_board[8]],
//              [ttt_board[0],ttt_board[3],ttt_board[6]],
//              [ttt_board[1],ttt_board[4],ttt_board[7]],
//              [ttt_board[2],ttt_board[5],ttt_board[8]],
//              [ttt_board[0],ttt_board[4],ttt_board[8]],
//              [ttt_board[2],ttt_board[4],ttt_board[6]]]

//       winning_lines.each do |winning_line|
//         if(winning_line.count(marker) == 3)
//         result = true
//         end
//       end
//      return result

// }



  
module.exports = {
  current_player : "x",
  board_array : [1,2,3,4,5,6,7,8,9],
  change_player : update_turn,
  full_board : board_full,
  update_board : update_move,
  valid_space : open_space
  // win? : winner?
   
};
