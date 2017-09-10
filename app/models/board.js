
module.exports = {
  current_player : "x",
  board_array : [1,2,3,4,5,6,7,8,9],
  change_player : function(current_player){
      // current_player : current_player;
    if(current_player == "x"){
       current_player =  "o";
     }else if(current_player == "o") { 
       current_player =  "x";
   }

   return current_player
  }
   



};
