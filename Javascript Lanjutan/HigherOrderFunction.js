//Higher Order Function merupakan fungsi yg memiliki argumen/param dlm bentuk fungsi, 
//dia mempunyai tujuan untuk membuat code lebih sederhana(abstraksi) dan dpt digunakan ulang

//Function yang beroperasi  pada function yang lain. Baik digunakan dalam argument,maupun sebagai return value
//javascript memperlakukan function sebagai object

//Contoh
function kerjakanTugas(matakuliah, selesai){
    console.log(`Mulai mengerjakan tugas ${matakuliah} ...`)
    selesai()
}
//disini ada 2 function yang menerima 2 argumen yaitu matakuliah, dan selesai
//function kerjakanTugas disini kita bisa memanggilnya Higher Order Function
//function argumen disini (selesai) bisa kita panggil dengan callback
//jadi function yang memiliki callback di dalamnya itu bisa kita sebut dengan Higher Order Function
//callback merupakan function yang di teruskan sebagai argumen ke function lain

//contoh lainnya
function ucapkanSalam(waktu){
    return function (nama){
        console.log(`Halo ${nama}, Selamat${waktu}, semoga harimu menyenagkan`)
    }
}
let selamatMalam = ucapkanSalam('Malam')
console.dir(selamatMalam('iqbal'))
//function ucapkanSalam bisa kita sebut sebagai higher order function karena di dalamnya terdapat return value yang juga function


//Kenapa harus menggunakan higher order function
//Abstraksi agar code kita lebih sederhana karena higher order function memiliki function2 lain di dalamnya

//contoh perbandingannya
//disini saya mempunyai sebuah looping
for (let i = 0; i < 10; i++){
    console.log(i)
}
//nah bagaimana jika saya mau looping nya 100x atau 1000x

//nah di bawah ini lebih simple lagi
//disini saya menggunakan sebuah funtion jadi nulis for nya cuman sekali angka 10 di ganti variable n yang jadi argumen repeat log
//jadi kalo mau mengulang sebanyak apapun tinggal panggil repeat log dan panggil parameternya berapa tanpa mengubah lagi looping nya
function repeatLog(n){
    for (let i=0; i<n; i++){
        console.log(i)
    }
}
repeatLog(10)

//ada juga yang lebih efektif lagi menggunakan code di bawah ini
//disini saya melakukan aksi nya bukan menggunakan console tapi alrert
//function repeat log nya jadi function repeat dan di dalamnya terdapat 2 argumen yaitu n dan action parameter action ini berupa function
function repeat(n, action){
    for(let i = 0; i < n; i++){
        action()
    }
}
repeat(10, console.log)
repeat(3, alert)

//jadi lebih efektif menggunakan higher order function
//alasan yang lain dengan higher order function kita akan terbiasa memasukan segala sesuatu ke dalam function
//secara tidak langsung kita membuat javascript jadi sebuah bahasa pemograman functional
//dan akan membuat program kita lebih efektif lebih aman dan lebih efisien

//Beberapa contoh higher order funtion yang sering digunakan
//Array.prototype.map() //untuk mapping pada array
//Array.prototype.filter() //untuk seleksi isi array
//Array.prototype.reduce()