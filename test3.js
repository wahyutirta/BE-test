/**
 * Direction:
 * Remove key that have null or undefined value
 *
 * Expected Result:
 * [
 *   { session_name: 'first test', classes: [{ students: [{ student_name: 'budi' }] }] },
 *   { classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
 * ]
 */
const data = [
  { session_name: 'first test', classes: [{ class_name: undefined, students: [{ student_name: 'budi' }] }] },
  { session_name: null, classes: [{ class_name: 'second class', students: [{ student_name: 'adi' }] }] },
];

function arrayhandler(array) {
  array = array.map(item => {

    if (isObject(item)) {
      item = objhandler(item)
    }

    return item
  })
  return array
}

function isObject(obj) {
  return Object.prototype.toString.call(obj) === '[object Object]';
};

function objhandler(obj) {

  for (const [key, value] of Object.entries(obj)) {

    if (value === undefined || value === null) {
      delete obj[key];
    } 
    else if (Array.isArray(value)) {
      obj[key] = arrayhandler(value)
    }
  }
  return obj
}

function result(data) {
  data = data.map(element => {
    for (const [key, value] of Object.entries(element)) {

      if (value === undefined || value === null) {
        delete element[key];
      }

      else if (Array.isArray(value)) {
        element[key] = arrayhandler(value)
      }
    }
    return element
  })

  // data.forEach( (element) => {
  //   console.log(JSON.stringify(element, null, 4))
  // })

  return data
}

console.log(result(data));
