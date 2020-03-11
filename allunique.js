// Write a program to determine if a string contains all unique characters. Return true if it does and false otherwise.
//
// The string may contain any of the 128 ASCII characters.





function hasUniqueChars(str){
  for(var i = 0; i < str.length; i++) {
   for(var j = i+1; j < str.length; j++) {
   if(str[i] == str[j]) {
     return false
     }
   }
  }
  return true
