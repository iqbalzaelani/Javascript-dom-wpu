//disini saya melanjutkan materi Higher Order Function
//3 contoh dari higher order function yang sering di gunakan (filter, map & reduce)
//Array.prototype.map()
//map (potong) ini bila kita menggunakan map di higher order funtion dia akan menghasilnya array baru yang telah terpotong

//Array.prototype.filter()
//gambaran filter ini seperti kita punya apel dan mangga lalu saya akan filter apel hasilnya akan memunculkan array baru

//Array.prototype.reduce()
//misalnya kasus nya bahan makanan si reduce ini bisa menggabunkan semua bahan makanan menjadi sesuatu yang utuh

//ketiga higher order funtion ini bisa kita gabungkan menggunakan method chaining


//praktek

//filter
//disini saya membuat variable angka
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9]

//ini cara biasa menggunakan for untuk mencari angka >= 3
//disini saya siapkan dulu array nya 
// const newAngka = []
//lalu saya membuat looping biasa dengan for
// for (let i = 0; i < angka.length; i++){
//     if (angka[i] >= 3){
//         newAngka.push(angka[i])
//     }
// }
// console.log(newAngka)

//Sekarang menggunakan filter
const newAngka = angka.filter(function (a) {
    return a >=3
})
console.log(newAngka)
//bisa diliat penggunaa filter lebih simple karenya setelah membuat variable kita langsung memasukan filter- nya dan function callback

//map
//disini saya mau punya array baru yang dimana semua angka dikalikan dengan 2
const newAngka2 = angka.map(a => a*2)
console.log(newAngka2)
//maka seperti yang saya jelaskan tadi dia akan membuat array baru


//reduse
//untuk melakukan sesuatu terharap semua elemen array
//misalnya disini saya ingin menjumlahkan array pada angka
//karena reduce punya 2 argumen makan tanda kurung nya 2
//currentValue itu elemen array yang sedang di looping nya
//accumulator hasil dari prosesnya
const newAngka3 = angka.reduce((accumulator, currentValue) => 
accumulator + currentValue)
console.log(newAngka3)


//method chaining
//menggabungkan fungsi fungsi pada higher order fuction dalam satu kali eksekusi dan tidak perlu di simpan ke dalam variable dulu
//contohnya dari array di atas saya mau mencari angka yang > 5
//lalu hasilnya saya kalikan 3
//yang terakhir saya jumlahkan
const hasil = angka.filter(a => a > 5)
.map(a => a * 3)
.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(hasil)

//bisa juga di tulis berulang ulang di method chaining ini dan bisa di bilang titik(.) itu chaining nya
//contoh seperti
// .map(a => a * 3)
// .map(a => a / 2)
//nah menulis berulang ulang juga gapapa