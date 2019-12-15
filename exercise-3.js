var nama='Hitsam';
var peran='';

if(nama==='')
    console.log('Nama harus diisi');
else if(peran==='')
    console.log('Peran harus diisi')
else{
    console.log(`Selamat datang di Dunia Proxytia, ${nama}`);
    
    switch(peran.toLowerCase().trim()){
        case 'ksatria':
            console.log(`Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`)
        break;
        case 'tabib':
            console.log(`Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`)
        break;
        case 'penyihir':
            console.log(`Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`)
        break;
    }
}