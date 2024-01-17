//Destructuring Variable atau bisa disebut juga Destructuring Assignment

// Defisini 1
// Expression pada javascript yg membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variable yang terpisah

//Contoh sederhananya

//ARRAY
const contoh1 = ['satu', 'dua', 'tiga']
const [a, b, c] = contoh1
console.log(a) 
console.log(b) 
console.log(c) 
//jadi misalnya kita punya sebuah variable tetapi isinya array yang di dalamnya juga berupa string
//nah kita bisa membuat string ini menjadi nilai nilai variable terpisah
//untuk destructuring assigment ini kita cukup membuat array yang isinya abc kemudian di assign dengan contoh1 sehingga tidak perlu di assign satu2

//OBJECT
const contoh2 = {
    nama1: 'Mohamad Iqbal Zaelani',
    umur2: 20,
    email3: 'mohamadiqbaalzaelani@gmail.com'
}
const {nama1, umur2, email3} = contoh2
console.log(nama1)
console.log(umur2)
console.log(email3)
//sama seperti array saya punya object literals lalu mau saya petakan menjadi variable tinggal pake sintaks destructuring agar tidak satu2
//jadi tinggal variable isinya destructuring object lalu di assign ke variable contoh2

//Implememtasi Destructuring Variable / Destructuring Assignment

// 1. Destructuring Array
const perkenalan = ['Halo', 'nama', 'saya', 'Mohamad Iqbal Zaelani']

//penggunaan biasa
// const salam = perkenalan[0]
// const nama = perkenalan[3]
// console.log(nama)

// Kalo pakai Destructuring Array cukup petakan aja yang nantinya di assign ke variable perkenalan yang nanti dia akan langsung jadi variable
const [halo, nama, saya, mohamadiqbalzaelani] = perkenalan
console.log(halo)