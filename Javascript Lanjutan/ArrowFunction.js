//Function Declaration
// function tampilPesan(nama){
//     alert('halo' + nama)
// }
// tampilPesan('Iqbal')

//Function Expression
// let tampilPesan2 = function (nama){
//     alert('halo' + nama)
// }
// tampilPesan2('Iqbal')


//Nah ada beberapa definisi arrow function
//Bentuk lain yang lebih ringkas dari function expression, jadi kita bisa menggunakan function expression dengan lebih ringkas
//ini salah satu contohnya
// let tampilPesan3 = (nama) => {
//     alert('halo' + nama)
// }
// tampilPesan3('Iqbal')

//Membuat arrow function
//saya membuat dulu function expression
const tampilNama = function (nama){
    return `Halo, ${nama}`
}
console.log(tampilNama('Mohamad Iqbal Zaelani'))

//disini saya akan menulis uang yang di atas menjadi arrow funtion
const tampilNama2 = (nama) => {return `Halo, ${nama}`}
console.log('Iqbal')
//cara lebih simple menggunakan arrow fucntion
const tampilNama3 = (nama) => (nama)
console.log('iqbal')

//bagaimana jika yang di atas lebih dari 1 parameter
const tampilNama4 = (nama, waktu) => {
    return `Selamat ${waktu}, ${nama}`
}
console.log(tampilNama4('Iqbal', 'Pagi'))
//cara lebih simple menggunakan arrow function
const tampilNama5 = (nama, waktu) => (`Selamat ${waktu}, ${nama}` )
console.log(tampilNama5('Iqbal', 'sore'))


//Kasus kedua disini saya mempunyai variable mahasiswa dan saya ingin menghitung masing2 array yang terdapat di mahasiswa
let mahasiswa = ['Mohamad Iqbal Zaelani', 'Mohamad Sumbul', 'Abdullah Karawitan']
let jumlahHuruf = mahasiswa.map(function (nama) {
    return nama.length
})
console.log(jumlahHuruf)

//Nah disini saya akan membuat kembali yang di atas tapi berbentuk arrow function
let mahasiswa2 = ['Iqbal', 'Gama', 'Andika', 'A supri']
let jumlahHuruf2 = mahasiswa2.map( nama => nama.length)
console.log(jumlahHuruf2)

//Disini saya akan mencoba mengembalikan sebagai object bukan array dengan menggunakan arrow function
let mahasiswa3 = ['Iqbal', 'Gama', 'Andika', 'A supri']
let jumlahHuruf3 = mahasiswa3.map ( nama => ({nama:nama, jlmHuruf3:nama.length}))
console.log(jumlahHuruf3)
//disini saya akan mencoba menggunakan console table agar lebih rapih
console.table(jumlahHuruf3)
