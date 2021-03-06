$(document).ready(function() {

	function countNumbers(maxVal){
    for (var count = 1; count <= maxVal; count++){
      if (count % 15 == 0){
        $('.content').append('FizzBuzz <br>');
      }
     else if (count % 3 == 0){
        $('.content').append('Fizz <br>');
      }
     else if (count % 5 == 0){
        $('.content').append('Buzz <br>');
      }
     else{
        $('.content').append(count + ' <br>');
      }
    }
  }
  
  //On enter the magic happens
  $('.userInput').submit(function(event){
    event.preventDefault();
    var getValue = $('.textInput').val();
    
   //Checking if the typed value is a number
    if (getValue === ""){
      alert ("Please enter a number between 1 and 100.")
    }
    else if (getValue % 1 == 0 && getValue <= 100){
      $('.content').empty();
      countNumbers(getValue);
      $('.textInput').val("");
    }
    else {
      alert('Please enter a number between 1 and 100.');
      $('.textInput').val("");
    }
      //on button click page is cleared
   $('.content').on('click', '.clearButton', function(){
    $('.content').cleared();
  });
  });
});


 