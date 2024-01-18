//Destructuring Variable atau bisa disebut juga Destructuring Assignment (PADA ARRAY DAN OBJECT)

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

const contoharray = ['satu', 'dua', 'tiga']
const [satuarray, duaarray, tigaaray] = contoharray
console.log(satuarray)
console.log(duaarray)
console.log(tigaaray)


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

//Array > simple nya
const arraytest = ['Halo', 'Nama', 'Saya', 'Mohamad Iqbal Zaelani']
const [halonamanyasiapa, , , halonamasayaadalah] = arraytest
//Object > simple nya 
const objecttest = {
    namatest: 'Mohamad Sumbul',
    umurtest: 2
}
const{namatest, umurtest} = objecttest

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
const [variableA, variableB] = cobareturn()
console.log(variableB)  
//nah pengggunaan biasa "const variableA = cobareturn()" tapi kalo kita memakai destrucring function kita bisa langsung menjadi 1,2 variable
//jadi bisa di pecah langsung/di bongkar array nya langsung di jadikan variable



//kalo kita mau bongkar array nya banyak dan kita gatau bakal ada berapa elemen kita bisa gunakan rest parameter
// 4. Rest Parameter
const [rpA, ...values] = [1, 2, 3]      //Permasalahannya kita gatau array kita ada berapa dan berapa banyak oleh karena itu pake rest parameter
console.log(rpA)                        //jadi 1 akan masuk ke array rpA sedangkan sisanya akan masuk ke array values
console.log(values)




// 5. Destructuring Object
const magang = {
    namamagang: 'Mohamad Sumbul Zaelani',
    umurmagang: 30
}
const {namamagang, umurmagang} = magang
console.log(namamagang);

// Ada yang menarik di destructuring object kita bisa langsung membuatnya tanpa membuat dulu object literals nya
// Assignment tanpa deklarasi object 
// Syaratnya kita harus block() di awal
({ kerja, pengalaman} ={
    kerja: 'Front End Developer',
    pengalaman: 4
});
console.log(kerja);
//PERTANYAAN = Console.log di object atas harus di tutup kalo engga program error, kenapa bisa? padahal beda parameter. Apa sama2 object?




//kasus disini bagaimana jika mau nama baru karena nama properti nya terlalu panjang
// 6.Assign ke variable baru
const pemilu = {
    prabowo: 'Gesit Sehat Goyang',
    ganjapranowo: 'Zetsu Putih'
}
const { prabowo: p, ganjapranowo: gp} = pemilu   //untuk mengubah variable bisa dengan : langsung 
console.log(p)



// 7. Memberikan default value
// Jadi kasusnya saya akan memberikan object dan nilai (default value) tetapi di dalam variable nya tidak ada object tersebut
const daging = {
    daging1: 'ayam',
    daging2: 'sapi'     //disini saya tidak saya akan memberikan default value daging ke 3
}                      //jd daging3 ini dia akan mencari di variabel atas kalo gd dia akan ngambil yang ada aja tapi kalo ada dia akan milih yg atas
const { daging1, daging2, daging3 = 'ikan'} = daging      
console.log(daging3)


// 8. Kolaborasi nilai default + assign variabel baru
const hewan = {
    hewan1: 'kucing',
    hewan2: 'kelinci'
}
const {hewan1: hw1, hewan2: hw2, hewan3: hw3 = 'monyet'} = hewan
console.log(hw3)

// 9. Versi Rest Parameter
const hewanlaut = {
    hewan3: 'kucing',
    hewan4: 'kelinci'
}
const {hewan3, ...value} = hewanlaut
console.log(values)
//HEWAN3 BERISI STRING
//VALUE BERISI OBJECT




// 10. Kasus sekarang mengambil field pada object, setelah dikirim sebagai parameter untuk function
const fpo = {
    idfpo: 123,
    namafpo: 'Balz',
    umurfpo: '20',
    emailfpo: 'emailfbo@gmail.com'
}

// Terus saya membuat function untuk mengambil id 
// nanti function ini parameter nya ngambil object fpo nya dan akan nge return / mengembalikan id
// function getIdFpo(fpo){
//     return fpo.idfpo
// }
// console.log(getIdFpo(fpo))

//Nah Dengan Menggunakan Destructuring kita bisa menyimpan nya sebagai parameternya tidak object padahal yg di kirim object
//syaratnya menambahkan {} dan yang di return cuman id nya aja 
function getIdFpo({idfpo}){
    return idfpo
}
console.log(getIdFpo(fpo))