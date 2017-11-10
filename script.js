$(document).ready(readyNow); 
function readyNow() {
    submitGuess();
    
    
}
// var $inputBox = $('<input type="text" id="numberGuess" />')


function submitGuess (){
    $('#submitBtn').on('click', isCorrect);
};


    
    
    
    
    // $submitButton = $('<button id="newGameBtn">New Game</button>')
    // $('.container').append($submitButton); 


var randomNumber = Math.floor(Math.random()*10+1);
console.log(randomNumber)
function isCorrect () {
    $('#numberGuess').val();
    var personsGuess = $('#numberGuess').val();
    if (personsGuess > randomNumber) {
        $('.higherOrLower').append('<p>Higher</p>');
        $('body').css('background-color', 'orange');
    }//end if
    else if (personsGuess < randomNumber) {
        $('.higherOrLower').append('<p>Lower</p>');
        $('body').css('background-color', 'yellow')
        
    } // end else if
    else  { 
        $('.higherOrLower').append('<p>You Are Correct(in Chris Farleys voice)</p>');
        $('body').css('background-color', 'green');
    } //end else
}//end isCorrect Function

// function printNumber() {
//     console.log('whatever');
// };