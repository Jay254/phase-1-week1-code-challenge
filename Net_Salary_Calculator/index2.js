// prompts user to input their gross salary
let gross = prompt('Enter your Gross Income:');

const netSalary = function(gross){// Created a function that takes the input income as argument and calculates net salary
    return gross - payee(gross) - NHIF(gross) - NSSF(gross);//calls 3 function that act as deducations from gross salary
}
netSalary(gross);//calls net salary function passing in gross income as sole argument

function payee(gross){//Calculates Payee Tax
    if(gross<=24000){ //If amount is 24000 or less
        return 0.1 * gross; // 10% of gross income
    }
    if(gross>24000 && gross <=32333){//If amount is greater than 24000 but less than 32334
        return 0.25 * gross;//25% of gross income
    }
    if(gross>32333){ //If amount is greater than 32333
        return 0.30 * gross;//30% of gross income
}
}

function NHIF(gross){//Calculates NHIF Tax
      if(gross<6000){ return 150;}                   //If gross salary is less than 6000, NHIF = 150
      if(gross>=6000&&gross<8000){ return 300;}      //If gross salary is greater than 5999 and less than 8000, NHIF = 300
      if(gross>=8000&&gross<12000){ return 400;}     //If gross salary is greater than 7999 and less than 12000, NHIF = 400
      if(gross>=12000&&gross<15000){ return 500;}    //If gross salary is greater than 11999 and less than 15000, NHIF = 500
      if(gross>=15000&&gross<20000){ return 600;}    //If gross salary is greater than 14999 and less than 20000, NHIF = 600
      if(gross>=20000&&gross<25000){ return 750;}    //If gross salary is greater than 19999 and less than 25000, NHIF = 750
      if(gross>=25000&&gross<30000){ return 850;}    //If gross salary is greater than 24999 and less than 30000, NHIF = 850
      if(gross>=30000&&gross<35000){ return 900;}    //If gross salary is greater than 29999 and less than 35000, NHIF = 900
      if(gross>=35000&&gross<40000){ return 950;}    //If gross salary is greater than 34999 and less than 40000, NHIF = 950
      if(gross>=40000&&gross<45000){ return 1000;}   //If gross salary is greater than 39999 and less than 45000, NHIF = 1000
      if(gross>=45000&&gross<50000){ return 1100;}   //If gross salary is greater than 44999 and less than 50000, NHIF = 1100
      if(gross>=50000&&gross<60000){ return 1200;}   //If gross salary is greater than 49999 and less than 60000, NHIF = 1200
      if(gross>=60000&&gross<70000){ return 1300;}   //If gross salary is greater than 59999 and less than 70000, NHIF = 1300
      if(gross>=70000&&gross<80000){ return 1400;}   //If gross salary is greater than 69999 and less than 80000, NHIF = 1400
      if(gross>=80000&&gross<90000){ return 1500;}   //If gross salary is greater than 79999 and less than 90000, NHIF = 1500
      if(gross>=90000&&gross<100000){ return 1600;}  //If gross salary is greater than 89999 and less than 99000, NHIF = 1500
      if(gross>100000){ return 1700;}                //If gross salary is greater than 99000, NHIF = 1700
}

function NSSF(gross){ //Calculates NSSF tax
    return 0.06*6000 + 0.06(12000);//Adds both Tier I and Tier II contributions
}

