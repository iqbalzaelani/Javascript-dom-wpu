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
const impnama = 'Mohamad Iqbal Zaelani'
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