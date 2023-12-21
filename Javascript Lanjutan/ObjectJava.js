//Object itu isinya properti dan method
//Properti isinya nilai kalo method isinya function
//di dalam object juga pake keyword this

//Cara untuk membuat Object pada Javascript

// 1.Object Literal
// disini saya membuat object mahasiswa pake literal
let mahasiswa1 = {
    nama: 'Mohamad Iqbal Zaelani',
    energy: 10,
    makan: function(porsi){
        this.energy = this.energy + porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`)
    }
}
let mahasiswa2 = {
    nama: ' Zaelani Iqbal Mohamad',
    energy: 10,
    makan: function(porsi){
        this.energy = this.energy + porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`)
    }
}
//Object Literal pakai {} yang isinya properti
//method, method adalah fuction di dalam object
//method disini makan
//menggunakan literal kita bisa langsung ambil properti atau variable di dalam console.log dengan ${} tanpa perlu keluar string
//kalo menggunakan object literal dan kita mau menambahkan mahasiwa kedua maka kita harus membuat lagi object nya



// 2.Function Declaration
//nah keuntungannya gaperlu buat object duplikat
function Mahasiswa(nama, energy){
    let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.energy = energy

    mahasiswa.makan = function(porsi){
        this.energy += porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`)
    }
    //tambah method
    mahasiswa.main = function(jam){
        this.energy -= jam
        console.log(`Selamat bermain ${this.nama}, selamat bermain`)
    }
    mahasiswa.olahraga = function(set){
        this.energy -= set
        console.log(`Selamat berolahraga ${this.nama}, selamat berolahraga`)
    }

    return mahasiswa
}

let iqbal = Mahasiswa('Mohamad', 10)
let iqbal2 = Mahasiswa('Iqbal', 10)
let iqbal3 = Mahasiswa('Zaelani', 10)
//penggunaan declaration itu object nya kosong tidak langsung di isi
//perbedaanya juga yang tampil fuction bukan object

//perbedaanya kalo mau bikin object nya kita hasus intasiasi
//jadi buat variable untuk object lalu panggil function dan isi namanya tambahkan return object nya


// 3.Constructor function
// keyword new 
// mirip fuction declaration bedanya tidak perlu menuliskan deklarasi variabel dan return  
function Siswa(nama, energy){
    this.nama = nama
    this.energy = energy

    this.makan = function(porsi){
        this.energy += porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`)
    }
    this.main = function(jam){
        this.energy -= jam
        console.log(`Selamat bermain ${this.nama}, selamat bermain`)
    }
    this.olahraga = function(set){
        this.energy -= jam
        console.log(`Selamat Berolahraga ${this.nama}, selamat berolahraga`)
    }
}

let Zaelani = new Siswa('Mohamad Iqbal Zaelani', 20)
let Sumbul = new Siswa('Mohamad Sumbul', 10)
//kenapa harus pakai new kalo tidak dia akan return sama deklarasi variable


// 4.Object.create