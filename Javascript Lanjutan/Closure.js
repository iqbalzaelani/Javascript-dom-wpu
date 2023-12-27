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