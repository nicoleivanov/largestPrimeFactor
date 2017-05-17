function isFactor(factor, numToCheck) {
  if(numToCheck % factor) {
    return false;
  } else {
    return true;
  }
}

function isPrime(num) {
  if(num === 2) {
    return true;
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
  var i = Math.ceil(number / 2);
  while(largestPrimeFactor === 0) {
    if(isFactor(i, number) && isPrime(i) && i > largestPrimeFactor) {
      largestPrimeFactor = i;
    }
    i--
  }
  if(largestPrimeFactor === 1) {
    return number;
  }
  return largestPrimeFactor;
}