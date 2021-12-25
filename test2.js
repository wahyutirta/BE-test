/**
 * Direction:
 * Remove duplicated data from array
 * 
 * Expected Result:
 * [1, 2, 3, 4, 5]
 */
const data = [1, 4, 2, 3, 5, 3, 2, 4];

function result(data) {
  let unique = new Set(data);
  let uniqueAr = Array.from(unique);

  let res = uniqueAr.sort((a,b) => a - b)

  return res

}

console.log(result(data));
