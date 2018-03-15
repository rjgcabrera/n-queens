/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting


// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other



window.findNRooksSolution = function(n) { // 0(n)
  var board = new Board({'n': n});
  var solution = board.rows(); 
  
  for (var i = 0; i < board.rows().length; i++) {
    board.togglePiece(i, i)
  }

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n) { //0(n^4)
  var solutionCount = 0; 
  var board = new Board({'n': n});


  var findSoln = function(row) { //0n - runs n times 
    if (row === n) {
      solutionCount++;
      return;
    }
    
    for (var i = 0; i < n; i++) { //0n - also runs n times
      board.togglePiece(row, i);
      if (!board.hasColConflictAt(i)) { //0n2 (nxn check)
      //if (!board.hasRowConflictAt(row)) {
        findSoln(row + 1);
      }
      board.togglePiece(row, i);
    }      
    
  };
  
  findSoln(0);

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};




// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n) { //0(n^4)
  var board = new Board({'n': n});
  var rows = board.rows();
  var solution;

  if (n === 2 || n === 3) {
    return rows;
  }

  var findSoln = function(row) {
    if (row === n) { 
      if (board.rows() !== undefined) {
        solution = JSON.stringify(board.rows());
      }
      return;
    }
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      
      //check col conflict at (i)  
      //_getmajorindex
      //_getminorindex
        //check major diagonals,
        //check minor diagonals 
      if (!board.hasAnyQueenConflictsOn(row, i)) {
        findSoln(row + 1);
      }
 
      //solution = board.rows();
      board.togglePiece(row, i);
    }      
    
  };
  findSoln(0);
  // var arr = JSON.parse(solution);
  // console.log('faaacckkk:', arr);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return JSON.parse(solution);
};




// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n) { //0(n^4)
  var solutionCount = 0;
  var board = new Board({'n': n});
  // var edgeCases = [2, 3];
  
  if (n === 2 || n === 3) {
    return solutionCount;
  }

  var findSoln = function(row) {
    if (row === n) {
      solutionCount++;
      return;
    }
    
    for (var i = 0; i < n; i++) {
      board.togglePiece(row, i);
      if (!board.hasAnyQueenConflictsOn(row, i)) {
        findSoln(row + 1);
      }
      board.togglePiece(row, i);
    }      
    
  };
  
  findSoln(0);

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  //return 0;
  return solutionCount;
};
