//Template Literal / Template String
//String Literal Template atau biasa dikenal juga sebagai Template Literals
//merupakan fitur yang diperkenalkan dalam ECMAScript 6(ES6) yang memungkinkan pemograman untuk bekerja secara efisien dengan string

//Menurut MDN Web Docs
//Template literal adalah string literal yang memungkinkan adanya expression di dalamnya

//Contoh string literal  ''""``
let contohstringliteral1 = 'Iqbal'  //kalo menggunakan '' dan "" sama aja
let contohstringliteral2 = "123321" //kalo menggunakan '' dan "" sama aja
let contohstringliteral3 = `mohamadiqbaalzaelani@gmail.com` //untuk back tick sendiri kita bisa melakukan segala cara

//Yang bisa di lakukan Template Literal
//Membuat template literal
//Multi-line String
//Embedded Expression
//HTML Fragments
//Expression Interpolation
//Tagged Template

//contoh penggunaan template literal
`sting text` // nah ini menuliskan string biasa

`string text baris 1
string text baris 2  // yang ini multi-line string menambahkan string tanpa ribet hanya menggunakan back tick
string text baris 3`

`string text ${expression} string text` //nah ini memasukan expression atau disebut embedded expression

tag `string text ${expression} string text` //tagged template hanya menambahkan tag di depan template literal

//Penjelasan lengkap Multi Line String
//Multi-line String ada 2 cara
console.log('MultiString 1\nMultiString 2') //cara pertama
console.log(`
MultiLineString 1   //cara kedua
MultiLineString 2
`)
//Multi-line String bisa digunakan pada HTML Fragments
//ini contoh cara biasa
const mhs = {
    nama: 'Mohamad Iqbal Zaelani',
    umur: 20,
    nomor: '121212',
    email: 'mohamad@gmail.com'
}
//lalu ini jika menggunakan template literals tinggal menambahkan back tick lalu masukan html nya tanpa harus menggabungkan melalui concat
let el = `<div class="mhs">
    <h2>${mhs.nama}</h2>
    <span class="nomor">${mhs.nomor}
    </div>`
console.log(el)

//Embedded Expression
//Kita bisa menyimpan expression ke dalam template literal
const nama = 'Mohamad Iqbal Zaelani'
let umur = 20
console.log(`Halo, perkenalkan nama saya ${nama}, saya ${umur} tahun,`)
//expression ini juga bisa kita langsung polasi misalnya di dalam expression nya terdapat penjumlahan
let i = 12
let q = 7
let b = 15
let a = 10
let l = 2
console.log('Jika a = 10 dan b = 15, maka hasil penjumlahan adalah :' + (a + b) + ',bukan' + (2 * a + b))

//tetapi dengan template literal lebih simple tinggal menggunakan back tick
let g = 10
let h = 15
console.log(`Jika g = 10 dan h = 15, maka hasil penjumlahann adalah : ${g + h}, bukan${2 * g + h}`)