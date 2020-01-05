/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/

function reverse(str){
  var newStr='';
  for(var i=str.length-1;i>=0;i--){
    newStr+=str[i];
  }
  return newStr;
}

function palindromeChanger(numbers) {
  // code below here
  for(var i=0;i<numbers.length;i++){
    var num=numbers[i];
    var numRevers='';
    var numStr='';
    var isPalindrome=false;
    do{
      numStr=num.toString();
      numRevers=reverse(numStr);

      if(numStr!==numRevers)
        num++;
      else
        isPalindrome=true;
      
    }while(!isPalindrome);
    numbers[i]=num;
  }

  return numbers;
}

console.log(palindromeChanger([117, 9, 20, 30, 42]));
// [ 121, 9, 22, 33, 44 ]
console.log(palindromeChanger([102, 12, 47]));
// [ 111, 22, 55]

