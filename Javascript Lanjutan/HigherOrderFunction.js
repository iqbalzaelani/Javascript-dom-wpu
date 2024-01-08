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
//bagaimana saya ingin mengganti 10 jadi 1000 tanpa mengganti looping nya
function repeatLog(n){
    for (let i=0; i<n; i++){
        console.log(i)
    }
}
repeatLog(10)
//ada juga yang lebih simple
function repeat(n, action){
    for(let i = 0; i < n; i++){
        action()
    }
}
repeat(10, console.log)
repeat(3, alert)