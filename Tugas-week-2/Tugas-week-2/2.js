/**
 *	=========
 *	Minecraft
 * 	=========
 * 	Bantulah steve untuk mengumpulkan berbagai macam mineral yang ada di World 66785.
 *
 * Terdapat 5 jenis mineral di dalam game Minecraft yang direpresentasikan dengan :
 *    Mineral             Harga ($)
 * copper : "c"             20
 * iron   : "i"             30
 * silver : "s"             40
 * diamond: "d"            1000
 * gold   : "g"             80
 *
 *
 * Mineral-mineral ini terpendam di dalam tambang dan dipisahkan oleh tanah yang direpresentasikan dengan #.
 * Bantu Steve mengimplementasikan function mineCraft yang menerima input berupa tambang dalam bentuk string dan akan mengoutput
 * harga dari semua batuan yang ada di tambang tersebut.
 * selain mineral di atas tidak masuk hitungan
 *
 * contoh:
 * 1. input  : #g######s
 *    output : 120 -> 1 gold = 80, 1 silver = 40 maka outputnya 120
 * 2. input: ############
 *    output: Tidak ada mineral sama sekali
 * 3. input: #sdgipc##
 *    output: 1170 
 *
 *
 *
 *
 */

function mineCraft(tambang) {
    
    var mines=0;
    for(var i=0;i<tambang.length;i++){
        switch(tambang[i]){
            case 'g':
                mines+=80;
            break;
            case 'i':
                mines+=30;
            break;
            case 'c':
                mines+=20;
            break;
            case 's':
                mines+=40;
            break;
            case 'd':
                mines+=1000;
            break;
        }
    }

    return mines?mines:'Tidak ada mineral sama sekali';

}

console.log(mineCraft('#g####c##s')); //140
console.log(mineCraft('######w###q###')); //Tidak ada mineral sama sekali
console.log(mineCraft('#sdgicp##')); //1170
console.log(mineCraft('')); //Tidak ada mineral sama sekali
