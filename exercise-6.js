//1. Melakukan Looping Menggunakan While

var i=2;

console.log('Looping Pertama: ');
while(i<=20){
    console.log(i+' - I love coding');
    i+=2;
}

var j=20;
console.log('Looping Kedua: ');
while(j>=2){
    console.log(j+' - I will become fullstack developer');
    j-=2;
}

//2. Melakukan Looping Menggunakan For

console.log('Looping Pertama');
for(var i=0;i<20;i++){
    console.log((i+1)+' - I love coding');
}

console.log('Looping Kedua');
for(var i=20;i>0;i--){
    console.log(i+' - I will become fullstack developer');
}

//3. Angka Ganjil dan Genap
for(var i=1;i<=100;i++){
    if(i%2===0)
        console.log('Genap');
    else
        console.log('Ganjil');
}

for(var i=1;i<=100;i+=2){
    if(i%3===0)
        console.log(i+' KELIPATAN 3');
    else
        console.log('');
}

for(var i=1;i<=100;i+=5){
    if(i%6===0)
        console.log(i+' KELIPATAN 6');
    else
        console.log('');
}

for(var i=1;i<=100;i+=9){
    if(i%10===0)
        console.log(i+' KELIPATAN 10');
    else
        console.log('');
}
