// Konsep Callback
// secara sederhana callback itu sebuah function yang dikirimkan sebagai parameter pada function yg lain
// callback juga bisa disebut sebuah function yang di eksekusi setelah fungsi lain selesai dijalankan

// Implementasi callback
// 1. Synchronous Callback 
// Jadi kasusnya saya akan menerima parameter dari function halo
// function halo(nama){
//     alert(`Halo ${nama}`)
// }

// function tampilkanPesan(callback){
//     const nama = prompt('Masukan Nama :')
//     callback(nama)
// }
// // Jadi parameternya adalah function dan parameter nya di panggil di dalam function
// tampilkanPesan(halo) // ketika kita masukan nama dan klik ok makan function callback nya di jalankan



// 2. Asynchronous Callback
// Kasus kali ini saya mempunyai variable mahasiswa yang di dalamnya array object dan mempunyai string\
// Tetapi saya hanya mau menampilkan namanya aja ke dalam console
// Sebenarnya saya bisa pake higher order function yg merupakan callback " mhs.forEach(m => console.log(m.nama)) " 
//tetapi saya mau pakai asynchronous callback
const mhs = [
    {
        "nama": "Mohamad Iqbal Zaelani",
        "nrp": "12321",
        "email": "bal@gmail.com",
        "jurusan": "mi",
        "idDosenWali": 1
        
    },
    {
        "nama": "Iqbal Mohamad Zaelani",
        "nrp": "12321",
        "email": "bal@gmail.com",
        "jurusan": "mi",
        "idDosenWali": 2
        
    },
    {
        "nama": "Zaelani Iqbal Mohamad",
        "nrp": "12321",
        "email": "bal@gmail.com",
        "jurusan": "mi",
        "idDosenWali": 3
    }
]

// Ini contoh synchronus jadi script nya di eksekusi dari atas ke bawah

function tambah(a, b){
    var hasil = a + b;
    return hasil;
}
console.log(tambah(2, 5))


//Test
const sum = (a, b) => {
     return a * b;
}
console.log(sum(4, 4));

const kali = (a, b) => {
    return a + b;
}
console.log(`Ini adalah kali ${kali(4, 4)}`);

const bagi = (a, b) => {
    return a / b;
}
console.log(`Ini adalah bagi ${bagi(4, 4)}`);

const kurang = (a, b) => {
    return a - b;
}
console.log(`Ini adalah kurang ${kurang(4, 4)}`);