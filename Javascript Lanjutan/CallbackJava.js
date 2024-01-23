// Konsep Callback
// secara sederhana callback itu sebuah function yang dikirimkan sebagai parameter pada function yg lain
// callback juga bisa disebut sebuah function yang di eksekusi setelah fungsi lain selesai dijalankan

// Implementasi callback
// 1. Synchronous Callback 
// Jadi kasusnya saya akan menerima parameter dari function halo
function halo(nama){
    alert(`Halo ${nama}`)
}

function tampilkanPesan(ck){
    const nama = prompt('Masukan Nama :')
    callback(nama)
}
// Jadi parameternya adalah function dan parameter nya di panggil di dalam function
tampilkanPesan(halo) // ketika kita masukan nama dan klik ok makan function callback nya di jalankan



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
console.log('mulai')
mhs.forEach(m => {
    for (let i = 0; i < 10000000; i++){
        let date = new Date()
    }
    console.log(m.nama)
})
console.log('selesai')