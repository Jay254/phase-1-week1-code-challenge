//Takes speed of the car as input
let speed = prompt('Enter the speed of the car:');

function speed_detector(speed){//a function that checks if speed is over 70
    if(speed < 70){        //If speed is less than 70
        console.log('Ok'); //output 'Ok' to the console
    }
    else{
        demerit_point(speed); //calls a function that calculates demerit points for a speed of over 70
    }
}
speed_detector(speed); //calls the function that detects speed if over 70

function demerit_point(speed){  //a function that takes input speed of above 70 and awards demerit points
    let x = speed - 70;   // assigns to x the difference between the actual speed and 70
    let y = Math.floor(x / 5); //demerit poimts for each 5km/h above the speed limit    if(y > 0){
        console.log('Points: ', y); //outputs demerit points
    
    
    if(y>12){                              //if demerit points is above 12
        console.log('License suspended.'); //outputs that license is suspended
    }
}