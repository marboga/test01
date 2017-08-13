function currencyChange(cents) {
  // Declare coin variables //
  var qCount = 0;
  var dCount = 0;
  var nCount = 0;

  // Object stores coin values //
  var obj = {"Quarter":25, "Dime":10, "Nickel":5};

  // While loop continues to run as long as cents are equal to or greater than 0 //
  while (cents >= 0) {
    // Count quarters and subtract from total //
    if (cents/obj.Quarter >= 1 && cents >= obj.Quarter) {
      qCount += 1;
      cents = cents - obj.Quarter;
    }
    // Count dimes and subtract from total //
    else if (cents/obj.Dime >= 1 && cents >= obj.Dime) {
      dCount += 1;
      cents = cents - obj.Dime;
    }
    // Count nickels and subtract from total //
    else if (cents/obj.Nickel >= 1 && cents >= obj.Nickel) {
      nCount += 1;
      cents = cents - obj.Nickel;
    }
    // Once total is below value of a nickel, break the loop by returning an array with coin counts //
    else {
      return(['QUARTERS: ' + qCount, 'DIMES: ' + dCount, 'NICKELS: ' + nCount, 'PENNIES: ' + cents]);
    }
  }
}

console.log(currencyChange(371));


/*

Michael's Suggestions

1. Return answer as an Object

2. Remove need for subtraction by using division @ the beginning to determine # of while loops necessary

*/
