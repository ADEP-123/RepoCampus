do{
do{
var number = prompt(`Guess a number between 1 and 1000, type 0 if you don't want to play`)
}while(number < 0 && number > 1000)

let randomNumber = Math.random();
print(randomNumber);
while (number != 0){
    if (number > randomNumber){
        number = Number(prompt(`The number you pick is over the number to guess, try it again: `));
    } else if ( number < randomNumber ){
        number = Number(prompt(`The number you pick is above the number to guess, try it again:`));
    } else {
        number = Number(prompt(`Congratulations, you've guessed the number, would you mind to try it again?, press 0 to finish: `))
    }
}
}while (number != 0);

