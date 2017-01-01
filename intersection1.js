(() => {
let randomArrays = generateRandomArrays(100, 10000); // size, limit
let intersection = findIntersection(randomArrays[0], randomArrays[1]);
console.log(`Random Array 0:
	${randomArrays[0]} (size: ${randomArrays[0].length})`);
console.log(`Random Array 1:
	${randomArrays[1]} (size: ${randomArrays[1].length})`);
console.log(`'Intersection:
	${intersection} (size: ${intersection.length})`);
})();

/**
* Generates two random arrays.
* @param {number} size - the length of the arrays
* @param {number} limit - the highest number that can populate the arrays
* @return {Object[]}
*/
function generateRandomArrays(size, limit) {
  let randomArrays = [];
  randomArrays[0] = [];
  randomArrays[1] = [];
  for (let i = 0; i < size + 1; i++) {
    let num = Math.floor(Math.random() * limit + 1);
    randomArrays[0].push(num);
  }
  for (let j = 0; j < size + 1; j++) {
    let num = Math.floor(Math.random() * limit + 1);
    randomArrays[1].push(num);
  }
  return randomArrays;
}

/**
* Generates two random arrays.
* @param {Object[]} array1 - the first array of which to find the intersection
* @param {Object[]} array2 - the second array of which to find the intersection
* @return {Object[]}
*/
function findIntersection(array1, array2) {
  let intersection = [];
  array1 = weedOutDuplicates(array1);
  array2 = weedOutDuplicates(array2);
  if (array1.length > array2.length) {
    array2.forEach((value) => {
      if (array1.indexOf(value) !== -1) {
        intersection.push(value);
      }
    });
  } else {
    array1.forEach((value) => {
      if (array2.indexOf(value) !== -1) {
        intersection.push(value);
      }
    });
  }
  return intersection;
}

/**
* Generates two random arrays.
* @param {Object[]} array - an array potentially containing duplicate values
* @return {Object[]}
*/
function weedOutDuplicates(array) {
  let noDupArray = [];
  noDupArray.push(array.pop());
  array.forEach((value) => {
    if (noDupArray.indexOf(value) === -1) {
      noDupArray.push(value);
    }
  });
  return noDupArray;
}
