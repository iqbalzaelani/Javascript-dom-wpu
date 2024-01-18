// Terdapat Looping Baru Di Javascript

// 1. for..of
// Jadi for of ini adalah sebuah looping yg bisa mengulang atau menelurusi object2 yg iterable
// Object iterable itu ada
// String, Array, Arguments / NodeList, TypedArray, Map, Set, User-defined literables (Jadi Ini yg bisa di looping sama for..of)

// Implementasi for..of ke string
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



// 2. for..in