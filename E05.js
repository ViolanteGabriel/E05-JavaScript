// Author: Gabriel Machado Violante
// Date: 07/06/2022

// Function 1: Build a function in JavaScript that prints a triangle in the console
drawingTriangle(10);
function drawingTriangle(nLines){
    for (let i = 0; i < nLines; i++){

        let lineContent = "";
        for (let j = nLines - i; j < nLines; j++){
            lineContent += "#";
        }
        
        console.log(lineContent);
    }
}