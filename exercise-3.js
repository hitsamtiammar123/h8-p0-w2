var nama='Hitsam';
var peran='';

if(nama==='')
    console.log('Nama harus diisi');
else if(peran==='')
    console.log(`Halo ${nama}, Pilih Peranmu untuk memulai game`);
else{
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    
    var p=peran.toLowerCase().trim();
    if(p==='ksatria'){
        console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`);
    }
    else if(p==='tabib'){
        console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`);
    }
    else if(p==='penyihir'){
        console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`);
    }
}