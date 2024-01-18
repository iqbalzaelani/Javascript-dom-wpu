// Terdapat Looping Baru Di Javascript

// 1. for..of
// Jadi for of ini adalah sebuah looping yg bisa mengulang atau menelurusi object2 yg iterable
// Object iterable itu ada
// String, Array, Arguments / NodeList, TypedArray, Map, Set, User-defined literables (Jadi Ini yg bisa di looping sama for..of)

// >> Implementasi for..of Looping Array
const mhs = ['Mohamad', 'Iqbal', 'Zaelani']

// for (let i = 0; i < mhs.length; i++){
//     console.log(mhs[i])               //JADI SAYA MAU MENAMPILKAN MAHASISWA TAPI INI PAKE LOOPING BIASA
// }

// mhs.forEach(m => console.log(m))      //PAKAI LOOPING FOR EACH


for (const m of mhs){
    console.log(m)      //ini pakai for of jadi 
}
// Jadi di dalam looping nya kita presentasikan string nya sebagai variable (m) yang dimana di dalamnya terpaku pada variable mhs 
// lebih simple seperti forEachs

// >> Implementasi for..of Looping String
const impnama = 'IQBAL'
for (const n of impnama){
    console.log(n)
}

// >> Kembali lagi ke array menggunakan for..of yang ada entris nya
const mhsarray = ['Mohamad Iqbal Zaelani', 'Zaelani Iqbal Mohamad', 'Iqbal Mohamad Zaelani']
for (const [i, ma] of mhsarray.entries()){
    console.log(`${ma} adalah mahasiswa ke-${i + 1}`)
}



// >> NODELIST  
// disini saya mau quey isinya nodelist ini agar seperti sebuah variable bentuknya
const liNama = document.querySelectorAll('.nama')
// liNama.forEach(n => console.log(n.textContent))   //ini pakai forEach
for (ln of liNama){
    console.log(ln.innerHTML)       //INI PAKAI FOR OF
}


// >> ARGUMENTS
// dengan for of kita bisa looping arguments
function jumlahkanAngka(){
    let jumlah = 0
    for(a of arguments){
        jumlah += a
    }
    return jumlah
}
console.log(jumlahkanAngka(1, 2, 3, 4, 5))






// 2. for..in
// Jadi for in ini hanya untuk properti pada object
const mhsfi = {
    nama: 'Iqbal Ackerman',
    umur: 20,
    email: 'iqbalackerman@gmail.com'
}

//Nah jadi kalo mau looping properti nya itu kita pake for in kalo for of gabisa

//contoh si mhsfi ini bukan iterale jadi akan error kalo kita looping seperti ini
for (m in mhsfi){
    console.log(m)       // tapi kalo si of nya jadi in dia akan mau
}
//CATATAN KALO MAU NGAMBIL VALUENYA JUGA BUKAN CUMAN INDEX PANNGIL NYA (mhs[m])

//KESIMPULAN
//Jadi kalo mau looping nya properti dari object pake nya for in
//Sedangkan kalo mau mengolah isi array dan interable object yang lain pake nya for of

