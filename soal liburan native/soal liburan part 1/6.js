/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

 PSEUDOCODE:

 STORE "currentIndex" as 0
 STORE "counter" as 0
 STORE "position" as 0

 DO
  FIND the index of "partialStr" in "str" based on "position" and store into "currentIndex"

  IF("currentIndex" is not -1)
    INCREMENT counter to 1
  END IF

  SET "position" into "currentIndex" plus 1

 WHILE("currentIndex" is not -1)

 RETURN display string based on "counter"
*/
function partialCheck(str, partial) {
  //your code here
  var currentIndex=0;
  var counter=0;
  var position=0;
  
  do{
    currentIndex=str.toLowerCase().indexOf(partial,position);
    if(currentIndex!==-1)
      counter++;
    position=currentIndex+1;

  }while(currentIndex!==-1);

  return counter?`found ${counter} `+(counter===1?'time':'times'):'not found';
  
}
console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found