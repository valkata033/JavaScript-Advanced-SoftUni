 function solve(num1, num2, operator) {
     let result;
     if (operator == '+'){
         result = num1 + num2;
     }
     else if (operator == '-'){
         result = num1 - num2;
     }
     else if (operator == '*'){
         result = num1 * num2;
     }
     else if (operator == '/'){
         result = num1 / num2;
     }
     else if (operator == '%'){
         result = num1 % num2;
     }
     else if (operator == '**'){
         result = num1 ** num2;
     }
     console.log(result);
 }

solve(5, 6, '+');
solve(3, 5.5, '*');

//function solve(num1, num2, operator) {
//    let result;
//
//    switch(operator){
//        case '+': result = num1 + num2; break;
//        case '-': result = num1 - num2; break;
//        case '*': result = num1 * num2; break;
//        case '/': result = num1 / num2; break;
//        case '%': result = num1 % num2; break;
//        case '**': result = num1 ** num2; break;
//    }
//
//    console.log(result);
//}