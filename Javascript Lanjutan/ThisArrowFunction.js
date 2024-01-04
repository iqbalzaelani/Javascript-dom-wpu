//Konsep this pada arrow function

//Constructor function
//disini saya membuat object mahasiswa
const Mahasiswa = function(){
    this.nama = 'Mohamad Iqbal Zaelani'
    this.umur = '20'
    this.hobi = 'main ps'
    this.agama = 'islam'
    this.sayHello = function (){
        console.log
        (`Halo, nama saya ${this.nama}, hobi saya ${this.hobi}, agama saya${this.agama}, dan saya ${this.umur} tahun.`)
    }
}
const Iqbal = new Mahasiswa()

const Mahasiswa5 = function(){
    this.nama = 'Inaleaz Labqi Damahom'
    this.umur = '20'
    this.hobi = 'main ps'
    this.agama = 'kristen'
    this.semester = '1'
    this.sayHello = function (){
        console.log
        (`Halo, nama saya ${this.nama}, hobi saya${this.hobi}, agama saya${this.agama}, saya semester${this.semester}, dan saya ${this.umur} tahun.`)
    }
}

const Mahasiswa2 = function(){
    this.nama = 'iqbal'
    this.umur = '20'
    this.hobi = 'main ps'
    this.agama = 'krislam'
    this.HelloWorld = function(){
        console.log
        (`Halo, nama saya${this.nama}, hobi saya${this.hobi}, agama saya${this.agama}, dan saya ${this.umur} tahun.`)
    }
}
const Mohamad = new Mahasiswa2()
//Kasus disini saya menggunakan constructor funtion dan saya membuat 3 method

//Saya akan membuat ulang tetapi menggunakan this pada arrow function
const Mahasiswa3 = function(){
    this.nama = 'Zaelani'
    this.umur = '20'
    this.hobi = 'main ps'
    this.agama = 'krislam'
    this.sayHello = () => { 
        console.log
        (`Halo, nama saya ${this.nama}, hobi saya${this.hobi}, agama saya${this.agama}, dan saya ${this.umur} tahun.`)
    }
}
const Zaelani = new Mahasiswa3()

const Mahasiswa6 = function(){
    this.nama = 'Zaelani Iqbal Mohamad'
    this.umur = '20'
    this.hobi = 'main ps'
    this.agama = 'krislam'
    this.sayHello = () => {
        console.log
        (`Halo, nama saya ${this.nama}, hobi saya${this.hobi}, agama saya${this.agama}, dan saya ${this.umur} tahun.`)
    }   
}

const Mahasiswa4 = function(){
    this.nama = 'Iqbal Zaelani'
    this.umur = '20'
    this.hobi = 'main ps'
    this.agama = 'krislam'
    this.HelloWorld = () => {
        console.log
        (`Halo, nama saya ${this.nama},hobi saya${this,this.hobi}, agama saya${this.agama}, dan saya ${this.umur} tahun.`)
    }
}
const Miz = new  Mahasiswa4()
//Jika kita buka console tidak terlihat perbedaan menggunakan function biasa atau arrow function
//Nah penjelasannya jika kita menggunakan arrow function sebenarnya dia tidak meyimpan konteks this di dalam funtion sayHellow 
//tetapi dia akan mencari keluar
//Ini akan keliatan sangat berbeda apabila kita membuat function nya tidak menggunakan constructor funtion

//Object Literal
//Disini saya membuat object literal agar penggunaan this function keliatan lebih berbeda
const mhs1 = {
    nama : 'Mohamad Iqbal Zaelani',
    umur : '20',
    hobi : 'main FF',
    agama: 'Krislam',
    // sayHello: function(){
    //     console.log
    //     (`Halo, nama saya ${this.nama}, hobi saya${this.hobi}, agama saya${this.agama} dan saya ${this.umur} tahun.`)
    // }
    //jika si sayhellow saya ganti jadi arrow function
    sayHello: () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
    }
    //Nama dan Umur nya akan undefined karena si arrow function ini dia akan mencari this ke atas jika tidak ada dia akan mencari sampai ke windows
    //kalo di windows engga ada makan dia akan menampilkan undefined
    //arrow function tidak memiliki konsep this
}

//coba contoh lainnya
const Magang = function(){
    this.nama = 'Iqbal'
    this.umur = 20
    this.sayHello = function(){
        console.log
        (`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
    }

    //disini saya menambahkan function declaration
    //nah disini karena tidak menggunakan function dia akan undifined karena dia akan mencari ke global apakah this ada
    // setInterval(function (){
    //     console.log(this.umur)
    // }, 500)
    
    //disini saya menggunakan arrow function
    setInterval(() => {
        console.log(this.umur)
    }, 500)
    //nah dia akan muncul karena si this arrow function ini dia akan mencari di luar fucnction nya bukan di global
}
const iqbalzaelani = new Magang()



//Latihan arrow function dengan studi kasus membuat box kotak
const box = document.querySelector('box')
box.addEventListener('click', function(){
    console.log(this)
})