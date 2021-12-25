/**
 * Direction:
 * Find missing number from the list
 *
 * Expected Result:
 * 8
 */
const numbers = [9, 6, 4, 2, 3, 5, 7, 0, 1];

function result(numbers) {
  let sorted = numbers.sort((a,b) => a - b);

  let res
  
  for (let i = 1; i < sorted.length; i++) {

    if ( (sorted[i] - sorted[i-1] ) != 1) return res = sorted[i]-1
  }

}

console.log(result(numbers));
