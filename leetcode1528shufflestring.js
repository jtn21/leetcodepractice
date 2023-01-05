/**
 * @param {string} s
 * @param {number[]} indices
 * @return {string}
 */

 // go through string s
 // get the position of each letter in string
 // change the position of each letter in string to the element in indices
 // create new array
 // assign the position of the element in string to the value of element in indices at same position
 // run 2 for loops 
var restoreString = function(s, indices) {

    let result = "";
    for (let i = 0; i < indices.length; i++) {
        result += s[indices.indexOf(i)];
    }
    return result;

};