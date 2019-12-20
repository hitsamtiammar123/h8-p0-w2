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

function winner (cars, totalKM) {
  //code below here

  for(var i=0;i<cars.length;i++){
    var car=cars[i];
    car.push(((totalKM-car[2])/car[1]).toPrecision(3));
  }
  
  for(var i=0;i<cars.length;i++){
    for(var j=0;j<cars.length-i-1;j++){
      if(cars[j][3]>cars[j+1][3]){
        var temp=cars[j];
        cars[j]=cars[j+1];
        cars[j+1]=temp;
      }
    }
  }

  var onlyPlatNo=[];
  for(var i=0;i<cars.length;i++)
    onlyPlatNo.push(cars[i][0]);

  return onlyPlatNo;

};

console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/