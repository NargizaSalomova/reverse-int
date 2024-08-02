module.exports = function reverse (n) {
  reverse = 0

  while (n!=0){
    reverse = reverse * 10 + (n % 10);
    n = Math.floor(n/10);
  }
  return reverse;
}

reverse(261);
