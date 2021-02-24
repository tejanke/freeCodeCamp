function rot13(str) {
    let letters = ['A', 'B', 'C', 'D',
        'E', 'F', 'G', 'H', 'I', 'J', 'K',
        'L', 'M', 'N', 'O', 'P', 'Q', 'R',
        'S', 'T', 'U', 'V', 'W', 'X', 'Y',
        'Z']
    let returnString = ""
    for (let i = 0; i < str.length; i++) {
        let resultChar = ""
        let resultIndex = 0
        if (/^[A-Z]$/i.test(str[i])) {
            //console.log(str[i], letters.indexOf(str[i]))
            resultIndex = letters.indexOf(str[i])
            if (resultIndex => 13) {
                resultChar = letters[resultIndex - 13]
            }
            if (resultIndex < 13) {
                resultChar = letters[resultIndex + 13]
            }
            returnString = returnString + resultChar
        }
        else {
            returnString = returnString + str[i]
        }
    }
    //console.log(returnString)
    return returnString;
}

rot13("SERR PBQR PNZC");