function calculateCharges (hours) {
    let payment = 0;
    if (hours <= 3){
        payment = 2;
    } else if (hours%1 === 0){
        payment = 2 + ((hours-3)*0.5);
    } else {
        payment = 2.5 + ((Math.trunc(hours)-3)*0.5);
    }
    if (payment > 10){
        payment = 10;
    }
    return payment;
}
let hours = Number(prompt(`Insert hours parked, insert 0 to finish the program: `));
let total = 0;
while (hours != 0){
    if (hours < 0 || hours > 24){
        alert(`The hours should be positve an less than 24 hours`);
    }else{
    total = total + calculateCharges(hours);
    console.log(`The costumer should pay: $${calculateCharges(hours)}`);
    }
    hours = Number(prompt(`Insert the hours parked by the next cosutmer, insert 0 to finish the program: `));
}
console.log(`the running total of yesterday’s receipts is: $${total}`);




