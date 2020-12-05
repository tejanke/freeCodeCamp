function multiplesOf3and5(number) {
  var i = 1;
  var sum = 0;
  while (i < number) {
    //console.log(i, i % 3, i % 5)
    if (i % 3 == 0 || i % 5 == 0) {
      //console.log(i)
      sum += i;
    }
    i++
  }
  console.log(sum)
  return sum;
}

//multiplesOf3and5(1000);
multiplesOf3and5(10);
