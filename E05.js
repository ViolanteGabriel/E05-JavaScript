// Author: Gabriel Machado Violante
// Date: 07/06/2022

// Function 1: Build a function in JS that prints a triangle in the console
//drawingTriangle(10);
function drawingTriangle(nLines){
    for (let i = 0; i < nLines; i++){

        let lineContent = "";
        for (let j = nLines - i; j < nLines; j++){
            lineContent += "#";
        }
        
        console.log(lineContent);
    }
}

// Function 2: Build a function in JS that prints a chessboard in the console
//chessBoard(10);
function chessBoard(nLines){
    for (let i = 0; i < nLines; i++){
        if (i % 2 == 0) { lineContent = "|O|"; }
        if (i % 2 != 0) { lineContent = "|X|"; }

        for (let j = 0; j < nLines-1; j++){
            if (i % 2 == 0) { j++; }
            if (j % 2 == 0) { lineContent += "|O|"; }
            if (j % 2 != 0) { lineContent += "|X|"; }
            if (i % 2 == 0) { j--; }
        }
        console.log(lineContent);
    }
}

// Function 3: Build a function in JS that checks if a given word is a palindrome
palindromeCheck("HanNAh");
function palindromeCheck(string){
    let Word = string.toLowerCase();
    let WordReversed = Word.split().reverse().join();
    if (Word == WordReversed) { console.log("It is a palindrome"); }else{ console.log("It is not a palindrome") }
}
