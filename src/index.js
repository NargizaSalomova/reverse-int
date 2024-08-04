module.exports = function reverse (n) {
    if(n >= 0 && n <= 9){
        return n
    } 

    if(n < 0){
        let array = ('' + n).split('').map(Number);
        let reverseNum = array.reverse();
        reverseNum.pop()

        return +reverseNum.join('');
    }
    
    if(n > 10){
        let array = ('' + n).split('').map(Number);
        let reverseNum = array.reverse();

        return +reverseNum.join('');
    }
}

