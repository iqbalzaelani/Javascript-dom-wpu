//Konsep this pada arrow function

//Constructor function
//disini saya membuat object mahasiswa
const Mahasiswa = function(){
    this.nama = 'Mohamad Iqbal Zaelani'
    this.umur = '20'
    this.sayHello = function (){
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
    }
}
const Iqbal = new Mahasiswa()

const Mahasiswa2 = function(){
    this.nama = 'iqbal'
    this.umur = '20'
    this.HelloWorld = function(){
        console.log(`Halo, nama saya${this.nama}, dan saya ${this.umur} tahun.`)
    }
}
const Mohamad = new Mahasiswa2()
//Kasus disini saya menggunakan constructor funtion dan saya membuat 3 method

//Saya akan membuat ulang tetapi menggunakan this pada arrow function
const Mahasiswa3 = function(){
    this.nama = 'Zaelani'
    this.umur = '20'
    this.sayHello = () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
    }
}
const Zaelani = new Mahasiswa3()

const Mahasiswa4 = function(){
    this.nama = 'Iqbal Zaelani'
    this.umur = '20'
    this.HelloWorld = () => {
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
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
    umur : 20,
    sayHello: function(){
        console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
    }
    //jika si sayhellow saya ganti jadi arrow function
    // sayHello: () => {
    //     console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`)
    // }
    //Nama dan Umur nya akan undefined karena si arrow function ini dia akan mencari this ke atas jika tidak ada dia akan mencari sampai ke windows
    //kalo di windows engga ada makan dia akan menampilkan undefined
    //arrow function tidak memiliki konsep this
}