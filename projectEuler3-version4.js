function isFactor(factor, numToCheck) {
  if(numToCheck % factor || factor === numToCheck) {
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
  for(var i = 1; i <= Math.floor(Math.sqrt(number)); i++) {
    if(isFactor(i, number) && isPrime(number / i)) {
      largestPrimeFactor = number / i;
      break;
    }
  }
  return largestPrimeFactor;
}