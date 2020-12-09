function largestPalindromeProduct(n) {
  var num = ""
  for (var i = 0; i < n; i++) {
    num = num.concat("9")
  }
  console.log(num, typeof(num))
  num = parseInt(num)
  console.log(num, typeof(num))

  if (num < 100) {
    var j
    for (j = num; j > 1; j--) {
        console.log(j, num * j)
        var test = num * j
        var test = test.toString()
        console.log("test", test, typeof(test))

        var forward = test
        forward = forward.split('')
        forward = forward.join('')
        console.log("forward", forward, typeof(forward))

        var reverse = test
        reverse = reverse.split('')
        reverse = reverse.reverse()
        reverse = reverse.join('')
        console.log("reverse", reverse, typeof(reverse))

        if (forward == reverse) {
          console.log(forward, reverse)
          console.log("match")
          return parseInt(forward)
        }

      }
  }

  if (num < 1000) {
    var j = num
    var k = num
    for (j; j > 900; j--) {
      //console.log("j", j)
      for (k; k > 989; k--) {
        //console.log("\tj",j, "k",k)

        var test = j * k
        var test = test.toString()

        var forward = test
        forward = forward.split('')
        forward = forward.join('')

        var reverse = test
        reverse = reverse.split('')
        reverse = reverse.reverse()
        reverse = reverse.join('')

        if (forward == reverse) {
          console.log(forward, reverse)
          console.log("match")
          return parseInt(forward)
        }
        }
        k = num
      }
  }
  

  return true;
}

largestPalindromeProduct(3);
