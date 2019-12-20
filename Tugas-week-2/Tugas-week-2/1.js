/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terbesar
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terbesar adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
/**
 *   STORE "listNumb" as array
 *   add "first","second", and "third" into "listNumb"
 * 	 sort "listNumb" ascending
 * 
 * 	STORE "displayStr" as empty string
 *  STORE "counter" as 0
 * 
 *  FOR each number start from first index of "listNumb" until last index of "listNumb"
 * 	
 * 	IF number is not equal second index of "listNumb"
 * 		IF "counter" is more than 0
 * 			CONCAT "displayStr" by ", "
 * 		END IF
 * 		
 * 		CONCAT "displayStr" by "number"
 * 		INCREMENT "counter" by 1	
 * 
 *  END IF
 * 
 * 	END FOR
 * 
 * RETURN "displayStr" if not empty, if empty DISPLAY "Tidak ada angka sama sekali"
 *
 */

function lostNumbers(first, second, third) {
	var listNumb=[first,second,third].sort();

	var displayStr='';
	var counter=0;
	for(var i=listNumb[0]+1;i<listNumb[2];i++){
		if(i!==listNumb[1]){
			if(counter>0)
				displayStr+=', ';

			displayStr+=i;
			counter++;
		}
	}

	return displayStr?displayStr:'Tidak ada angka sama sekali';

}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali
