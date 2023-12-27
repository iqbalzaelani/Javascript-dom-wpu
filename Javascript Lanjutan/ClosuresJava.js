//2.1 EXECUTION CONTEXT, HOISTING & SCOPE
//Execution context ada 2 fase

//Creation phase konteksnya global
//javascript akan menulis sebagai berikut
//nama var = undefined
//nama function = fn()
//hoisting
//window = global object
//this = window

console.log(nama)
var nama = 'Mohamad Iqbal Zaelani' //nah si var ini meskipun dia di bawa dia akan di naikan ke atas itu disebut HOISTING

//execution phase mengeksekusi program  nya dari baris ke baris 
console.log(sayHello())
var nami = 'Mohamad Iqbal Zaelani'
var umur = 20
function sayHello(){
    console.log(`Halo, nama saya ${nama}, saya${umur} tahun.`)
}

//function membuat local execution context
//yang di dalamnya terdapat creation dan execution phase
//window
//arguments
//hoisting

var nama2 = 'Mohamad Iqbal Zaelani'
var username = '@iqbalzaelani'
function cetakURL(username){
    var instagramURL = 'https://instagram.com/'
    return instagramURL + username
}
console.log(cetakURL('@iqbalzln'))
//jika saya ubah parameter nya username jadi @iqbalzln dia akan muncul @iqbalzln itu karena adannya scope





function satu(){
    var name = 'Zaelani'
    console.log(nama)
}
function dua(){
    var name = 'Iqbal'
    console.log(nama)
}

console.log(nama)
var nama = 'Mohamad'
satu();
dua('iqbal')
console.log(nama)




//2.2 CLOSURES
//closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut
//closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai di eksekusi
//closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain

//lexical scope
function init(){
    let nama = 'Mohamad Iqbal Zaelani' //ini local variable
    function tampilNama(){            //inner function (closure*)
        console.log(nama)            //akses ke parent variable
    }
    tampilNama()
}
init()
//jadi disini tampil nama akan mencari nama dia akan ke atas apakah ada nama di tampil ada
//kalo engga ada dia akan cari sampe ke global windows ini yang di sebut lexical scope

//Salah satu kegunaan closures 
//kasus disini saya akan mengubah atau isi nama
function init(){
    //let nama = 'iqbal'
    function tampilNama(nama){
        console.log(nama)
    }
    return tampilNama
}
let panggilNama = init()
panggilNama('Iqbal Zaelani')
//bisa juga begini
function init(){
    return function(nama){
        console.log(nama)
    }
}
let panggilNama2 = init()
panggilNama2('iqbal')
panggilNama2('zaelani')

//Kenapa harus menggunakan closures
// 1. Untuk Membuat function factoties
// contoh function factoties
function ucapkanSalam(waktu){
    return function(nama){
        console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan`)
    }
}
let selamatPagi = ucapkanSalam('Pagi')
let selamatSiang = ucapkanSalam('Siang')
let selamatMalam = ucapkanSalam('Malam')
//nah ketiga variable ini factory function karena membuat function sesuai dengan function lainnya
//jadi disini membuat function hasil dari fuction lain

console.dir(selamatPagi) //di dalem scope ini udah ada closures
console.dir(selamatMalam('iqbal')) //di kedua ini saya menambahkan nama 





// 2. Untuk membuat se olah olah kita mempunyai privat method dan closure
let add = (function(){
    let counter = 0     //disini saya membuat se olah olah counter ini privat tidak dapat di akses diluar 
                        //tapi nilainya tetep di pertahankan karena dia menjadi closure
    return function(){  //disini saya pake clousure jadi pada saat return yang di return itu fuction
        return ++ counter
    }
})()
//disini saya membungkus function nya agar tidak perlu membuat lagi variable untuk add
//setelah di bungkus kasih () untuk menjalankannya jadi pada saat di add dia langsung menjalankan inner fuction nya (yang return fuction itu)

counter = 100 //jika saya membuat ini juga tidak akan mempengaruhi function nya

console.log(add())
console.log(add())
console.log(add())