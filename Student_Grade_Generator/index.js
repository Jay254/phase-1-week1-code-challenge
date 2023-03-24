  // Prompt user to input student mark
let mark = prompt('Enter the Student Mark:');

function grade_calc(mark){ //declare function that takes user input as argument and calculates the grade
    if(mark > 79 && mark <=100){//If grade is from 80 to 100% ; 
        console.log('A');           //output grade A
    }
    else if(mark >= 60 && mark <=79){//If grade is from 60 to 79%
        console.log('B');            //output grade B
    }
    else if(mark >= 49 && mark <=59){//If grade is from 49 to 59%
        console.log('C');            //output grade C
    }
    else if(mark >= 40 && mark <=49){//If grade is from 40 to 49%
        console.log('D');             //output grade D
    }
    else if(mark >= 0 && mark <40){ //If grade is less than 40%
        console.log('E');          //output grade E
    }
}
grade_calc(mark);  //Call function passing in user input as argument
