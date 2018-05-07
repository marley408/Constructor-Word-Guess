function Letter(){
  this.character = ''
  this.letterGuessed = false
  this.returnThisIf = function(letterGuessed){
    if(letterGuessed === true){
      //show character if the letter has been guessed
    }
    else{
      //show underscore if the letter has not been guessed
    }
  }
  this.checkCharacter = function(){
    let charEntered = process.argv[2]
    if(charEntered === this.character){
      letterGuessed = true
    }
  }
}


// A function that takes a character as an argument and checks it against the underlying character, updating the stored boolean value to true if it was guessed correctly