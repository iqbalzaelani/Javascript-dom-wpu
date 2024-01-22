// Rest Parameter   (SISA) jadi rest parameter harus di akhir
// Merepresentasikan argument pada functioon dengan jumlah yg tidak terbatas menjadi sebuah array

// Rest Parameter Contoh
function myFunc(a, b, ...myArgs){       //gunanya rest parameter untuk menangkap nilai di dalam argumen menjadi sebuah array / memudahkan juga jika malas nulis a, b,
    return `a = ${a}, b = ${b}, myArgs = ${myArgs}`
}
console.log(myFunc(1, 2, 3, 4, 5))

// Atau mau menjadikan semua nilainya array
function myFunc2(...myArgs2){       //gunanya rest parameter untuk menangkap nilai di dalam argumen menjadi sebuah array / memudahkan juga jika malas nulis a, b,
    return myArgs2
}
console.log(myFunc2(1, 2, 3, 4, 5))


//Bisa juga untuk penjumlahan
function jumlahkan(...angka){               //Ini penggunaan rest parameter lalu saya juga menggunakan higher order function reduce
    return angka.reduce((a, b) => a + b)
}
console.log(jumlahkan(1, 2, 3, 4, 5))


// Rest Parameter array destructuring
const kelompok1 = ['Mohamad', 'Iqbal', 'Zaelani', 'Astanya', 'Anyar']
const [ketua, wakil, ...anggota] = kelompok1        //Jadi ketua mohamad wakil iqbal sisanya anggota pake rest parameter agar lebih praktis
console.log(anggota)

// Object 
const team = {
    pm: 'Mohamad Iqbal Zaelani',
    frontEnd1: 'bal',
    frontEnd2: 'bol',
    backEnd: 'bul',
    ux: 'bil',
    devOps: 'bel'
}
const {pm, ...myTeam} = team    //pm iqbal sisanya dimasukan ke team pake rest parameter agar tidak satu satu
console.log(myTeam)