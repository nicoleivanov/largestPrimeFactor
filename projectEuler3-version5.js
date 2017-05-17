function isFactor(factor, numToCheck) {
  if(numToCheck % factor) {
    return false;
  } else {
    return true;
  }
}


function isPrime(num) {
  if(num === 2 || num === 1) {
    return true;
  }
  if(Number.isInteger(Math.sqrt(num))) {
    return false;
  }
  if(num % 2) {
    var stopPoint = Math.ceil(Math.sqrt(num));
    for(var i = 2; i <= stopPoint; i++) {
      if(isFactor(i, num)) {
        return false;
      }
    }
    return true;
  } else {
    return false;
  }
}


function findLargestPrimeFactor(number) {
  var largestPrimeFactor = 0;
  var sqRt = Math.ceil(Math.sqrt(number));
  for(var i = 1; i <= sqRt; i++) {
    if(isFactor(i, number)) {
      if(isPrime((number / i))) {
        largestPrimeFactor = number / i;
        break;
      } else if(isPrime(i)) {
        largestPrimeFactor = i;
      }
    }
  }
  return largestPrimeFactor;
}