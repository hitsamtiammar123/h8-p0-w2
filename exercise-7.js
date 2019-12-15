//1. Menyusun Barisan Bintang

var rows1=10; // input the number of rows

// do loops to display asterisks in the console.
for(var i=0;i<rows1;i++){
    console.log("*");
    console.log('');
}

//2. Menyusun Barisan Bintang Dengan Nested Looping

var rows2=5; // input the number of rows

// do loops to display asterisks in the console.
for(var i=0;i<rows2;i++){
    var asterisks='';
    for(var j=0;j<rows2;j++)
        asterisks+='*';
    console.log(asterisks);
    console.log('');
}

//3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3=5; // input the number of rows

// do loops to display asterisks in the console.
for(var i=0;i<rows2;i++){
    var asterisks='';
    for(var j=0;j<i;j++)
        asterisks+='*';
    console.log(asterisks);
}