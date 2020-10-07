var turn;
var computer;
var user;
var sqrId;
var board = [["", "", ""], ["", "", ""], ["", "", ""]];
var row, col;

$(document).ready(function() {
  //listener for checkboxes X and O
  $("#ex").click(function() {
    user = "X";
    turn = user;
    computer = "O";
    console.log(turn + " " + user + " " + computer);
  });
  $("#oh").click(function() {
    user = "O";
    turn = user;
    computer = "X";
    console.log(turn + " " + user + " " + computer);
  });

  //listener for event clicks
  $(".square").click(function() {
    sqrId = $(this).attr("id");
    playerMove(sqrId);
    computerPlayLevel1();
    if (checkWinners()) {
      alert(turn + " Wins the Game!");
      resetGame();
    }
    //checking board: if empty sqr play, else its a draw
    if (!checkBoard()) {
      alert("is a draw!");
    }
    turn = turn == user ? computer : user;
  });
});

//reset game function
function resetGame() {
  $(".square").text("");
  turn = undefined;
  computer = undefined;
  user = undefined;
  //unchecking dialog boxes
  $(".checkBox").prop("checked", false);
  board = [["", "", ""], ["", "", ""], ["", "", ""]];
}

//getting user move and output to board
function playerMove(sqrId) {
  console.log("player move: " + $("#" + sqrId).attr("id") + " " + turn);
  //if sqr is empty then run logic, else error: wrong play!
  if ($("#" + sqrId).text() == "") {
    $("#" + sqrId).text(user);
    row = getRow();
    col = getCol();
    console.log(sqrId + " " + row + "," + col);
    board[row][col] = user;
    console.log(board);
  } else {
    alert("wrong move. Try again!");
    return;
  }
}

/* AI logic level 1  generating random play */
function computerPlayLevel1() {
  var random;
  var min = 0,
    max = 8;
  do {
    random = Math.floor(Math.random() * (max + min));
  } while ($("#" + random).text() != "");
  sqrId = random;
  row = getRow();
  col = getCol();
  board[row][col] = computer;
  $("#" + sqrId).text(computer);
}

//setting player to be X or O (check box)
function setPlayer() {}

/* return row: divide sqrId by 3 as board[3][3] */
function getRow() {
  return Math.floor(sqrId / board.length);
}

/* return column: module sqrId by 3 as board[3][3] */
function getCol() {
  return sqrId % board.length;
}

//checking for winning combinations
function checkWinners() {
  console.log(board[1]);
  //checking rows
  for (var i = 0; i < board.length; i++) {
    if (
      board[i][0] != "" &&
      board[i][0] == board[i][1] &&
      board[i][1] == board[i][2]
    ) {
      console.log("rows: " + board[i][0] + "" + board[i][1] + "" + board[i][2]);
      return true;
    }
  }
  //checking columns
  for (var j = 0; j < board.length; j++) {
    if (
      board[0][j] != "" &&
      board[0][j] == board[1][j] &&
      board[1][j] == board[2][j]
    ) {
      console.log(
        "column: " + board[0][j] + "" + board[1][j] + "" + board[2][j]
      );
      return true;
    }
  }
  //checking across
  if (
    board[0][0] != "" &&
    board[0][0] == board[1][1] &&
    board[1][1] == board[2][2]
  ) {
    console.log("across1");
    return true;
  }
  if (
    board[0][2] != "" &&
    board[0][2] == board[1][1] &&
    board[1][1] == board[2][0]
  ) {
    console.log("across2");
    return true;
  }
  //if reached here, no winners
  return false;
}

/* checking if there's more room to play, if not 
   then it's a draw'*/
function checkBoard() {
  for (var i = 0; i < board.length; i++) {
    for (var j = 0; j < board[i].length; j++)
      if (board[i][j] == "") {
        return true;
      }
  }
  return false;
}
