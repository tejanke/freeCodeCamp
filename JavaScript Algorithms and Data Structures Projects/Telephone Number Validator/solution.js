function telephoneCheck(str) {
    console.log(str)
    if (/[A-Za-z]/i.test(str)) {
        return false
    }
    else {
        if (str.length < 10) {
            return false
        }
        else {
            if (/^[0-9]{10}$/i.test(str) || /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(str) || /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/i.test(str) || /^\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/i.test(str) || /^[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/i.test(str) || /^1\s[0-9]{3}\s[0-9]{3}\s[0-9]{4}$/i.test(str) || /^1\s[0-9]{3}-[0-9]{3}-[0-9]{4}$/i.test(str) || /^1\s\([0-9]{3}\)\s[0-9]{3}-[0-9]{4}$/i.test(str) || /^1\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/i.test(str)) {
                return true
            }
            else {
                return false
            }
        }
    }
}

telephoneCheck("555-555-5555");