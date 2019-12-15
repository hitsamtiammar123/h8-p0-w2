var tanggal=19; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
var bulan=2; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
var tahun=2019; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

if(
    (tanggal>0 && tanggal<32) &&
    (bulan>0 && bulan<13) &&
    (tahun>1899 && tahun<2201)
){
    var bulan_str='';
    switch(bulan){
        case 1:
            bulan_str='Januari';
        break;
        case 2:
            bulan_str='Februari';
        break;
        case 3:
            bulan_str='Maret';
        break;
        case 4:
            bulan_str='April';
        break;
        case 5:
            bulan_str='Mei';
        break;
        case 6:
            bulan_str='Juni';
        break;
        case 7:
            bulan_str='Juli';
        break;
        case 8:
            bulan_str='Agustus';
        break;
        case 9:
            bulan_str='September';
        break;
        case 10:
            bulan_str='Oktober';
        break;
        case 11:
            bulan_str='November';
        break;
        case 12:
            bulan_str='Desember';
        break;
    }

    console.log(`${tanggal} ${bulan_str} ${tahun}`);
}