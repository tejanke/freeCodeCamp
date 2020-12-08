function largestPrimeFactor(number) {
  var n = number + 1
  if (number == 2) {
    return 2
  }
  if (number == 3) {
    return 3
  }
  var primes = [];
  for (var i = 2; i < n; i++) {
    //console.log("i=", i)
    var flag = 0
    for (var j = 2; j < i; j++) {
      //console.log("\t", "j=", j, i % j)
      if (i % j == 0) {
        flag = 1
      }
    }
    if (flag == 0) {
      primes.push(i)
    }
  }

  //console.log(primes)

  var largest = ""
  primes.forEach(prime => {
    //console.log(prime, number % prime)
    if (number % prime == 0) {
      largest = prime
    }
  });

  console.log("largest", largest)
  return largest;
}

largestPrimeFactor(13195);
