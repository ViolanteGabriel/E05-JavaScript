// Author: Gabriel Machado Violante
// Date: 07/06/2022

//=======================================================================================================================================================

// Part 1 - Basic Concepts

// Drawing a Triangle

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

// ChessBoard

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

// Verifying Palindromes
// palindromeCheck("HanNAh");
function palindromeCheck(string){
    let Word = string.toLowerCase();
    let WordReversed = Word.split().reverse().join();
    if (Word == WordReversed) console.log("It is a palindrome");
    else console.log("It is not a palindrome");
}

// A different Program

//differentProgram();

function differentProgram(){
    for (let i = 0; i < 100; i++){
        if (i % 3 == 0 && i % 5 == 0){
            console.log("FizzBuzz");
        }
        else if (i % 5 == 0){
            console.log("Buzz");
        }
        else if (i % 3 == 0){
            console.log("Fizz");
        }
        else{
            console.log(i);
        }
    }
}

//=======================================================================================================================================================

// Part 2 - Functions

// Minimum and Maximum

 // console.log( Max(5, 10) );
 // console.log( Min(5, 10) );

function Max(n1, n2) { return n1 > n2? n1 : n2 }
function Min(n1, n2) { return n1 > n2? n2 : n1 }

// Recursion

 // console.log( mod2(12) );
 // console.log( mod(12, 10) );

function mod2(number){ return number % 2 == 0? true : false }
function mod(number, mod){ return number % mod == 0? true : false }

// Counting characters

// console.log(countChars("Eu gosto do pao", "o"));

function countChars(phrase, character){
    return phrase.split("").reduce( (number, currentValue) => { return character == currentValue? number += 1 : number }, 0 );
}

//=======================================================================================================================================================
