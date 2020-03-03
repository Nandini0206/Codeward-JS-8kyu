// The goal of this kata is to write a function that takes two inputs: a string and a character. The function will count the number of times that character appears in the string. The count is case insensitive.
//
// For example:
//
// countChar("fizzbuzz","z") => 4
// countChar("Fancy fifth fly aloof","f") => 5
// The character can be any alphanumeric character.





function countChar(string, char) {
  var count = 0
  char = char.toLowerCase()
  var x = string.toLowerCase().split("")
    for(var i=0;i<x.length;i++){
    if(x[i]==char) count++
    }
    return count
}
