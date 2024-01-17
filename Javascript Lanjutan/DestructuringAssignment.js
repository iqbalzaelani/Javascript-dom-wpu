//Destructuring Variable atau bisa disebut juga Destructuring Assignment

// Defisini 1
// Expression pada javascript yg membuat kita dapat membongkar nilai dari array atau properti dari object kedalam variable yang terpisah

//Contoh sederhananya

//ARRAY
const contoh1 = ['satu', 'dua', 'tiga']
const [d, e, f] = contoh1
console.log(d) 
console.log(e) 
console.log(f) 
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
const [satu, dua, tiga, empat] = perkenalan
console.log(empat)
//kita juga bisa costum kalo yang mau di petakan cuman mau bagian halo sama nama aja
//skipping items
//const [satu, , , empat] = perkenalan jadi tinggal tulis aja seperti tadi namun isinya di hapus tapi tanda koma nya jgn di hapus


// 2.Swap items atau menukar isinya
let a = 1
let b = 3
console.log(a);
console.log(b);
//untuk menukar isinya biasanya di butuhkan sebuah variable tetaoi dengan destructuring tinggal
[a, b] = [b, a]
console.log(a)
console.log(b)     //kagak jelas erroy nya 
//Pelajaran baru kalo mau menulis console.log dengan yg sama parameternya harus di tambahin titik koma(;)


// 3.Return value pada function
//jadi function nya bisa mengembalikan array dan array nya langsung di tangkap oleh sintaks destructurring
//contoh
function cobareturn(){
    return [1, 2]
}
const variableA = cobareturn()
console.log(variableA)