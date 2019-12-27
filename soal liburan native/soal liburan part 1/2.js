/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 0.625 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function sort(arr,callback){
  for(var i=0;i<arr.length;i++){
    for(var j=0;j<arr.length-i-1;j++){
      var c=callback?callback(arr[j],arr[j+1]):true
      if(callback(arr[j],arr[j+1])){
        var temp=arr[j];
        arr[j]=arr[j+1];
        arr[j+1]=temp;
      }
    }
  }

}

function walk(arr,callback){
  for(var i=0;i<arr.length;i++)
    callback(arr[i]);
}

function map(arr,callback){
  var newArr=[];
  for(var i=0;i<arr.length;i++)
    newArr[i]=callback(arr[i]);
  return newArr;
}

function winner (cars, totalKM) {
  //code below here

  walk(cars,(a)=>a.push(((totalKM-a[2])/a[1]).toPrecision(3)));
  sort(cars,(car,car2)=>car[3]>car2[3]?true:false);
  
  return map(cars,(car)=>car[0]);

};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/