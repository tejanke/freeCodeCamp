function fiboEvenSum(n) {
  var last = 1;
  var next = 2;
  var result = 0;
  var sum = [];
  var pos = 1;
  while (pos < n) {
    console.log("[" + pos + "]", "n", n, "result", result, "last", last, "next", next, "sum", sum, "fib", last)
    if (last % 2 == 0) {
      console.log("[+] added fib even =", last, "result", result)
      sum.push(last);
    }
    result = last + next;
    last = next;
    next = result;
    if (last > n) {
      var fsum = sum.reduce((a, b) => {
        return a + b;
      });
      console.log("[x] last fib > n:", last, n, "return sum of", sum, "as", fsum)
      return fsum;
    }
    pos++
  }
  return true;
}

//fiboEvenSum(10)
fiboEvenSum(34)
