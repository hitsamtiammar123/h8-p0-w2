/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function indexOf(arr,elem){
  for(var i=0;i<arr.length;i++)
    if(arr[i]===elem)
      return i;
  return -1;
}

function map(arr,callback){
  var newArr=[];
  for(var i=0;i<arr.length;i++)
    newArr[i]=callback(arr[i],i);
  return newArr;
}


function mostCarsByState (cars) {
  //code below here
  var plats=[];
  var countPlats=[];
  
  for(var i=0;i<cars.length;i++){
    var c=cars[i];
    if(indexOf(plats,c)===-1){
      plats.push(c);
      countPlats.push(1);
    }
    else{
      var indexPlat=indexOf(plats,c);
      countPlats[indexPlat]++;
    }
  }

  var result=[];
  for(var i=0;i<plats.length;i++){
    var plat=plats[i];
    result.push(plat);
    result.push(countPlats[i]/cars.length * 100);
  }

  return result;
};

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/