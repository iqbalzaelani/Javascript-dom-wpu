//Destructuring Pada FUNCTION

// Kasus disini saya punya function penjumlahan yang memiliki 2 buah parameter/argumen 
// yang akan di return jumlah nilai nya jadi nilainya di kembalikan dalam bentuk array
function PenjumlahanPerkalian(a, b){
    return [a + b, a * b]
}
// Nah saya akan memasukan nya ke dalam variable cuman agak ribet kalo nulis seperti ini
// const jumlah = PenjumlahanPerkalian(2, 3)[0]
// const kali = PenjumlahanPerkalian(2, 3)[1]


// PAKAI DESTRUCTURING
const [jumlah, kali] = PenjumlahanPerkalian(2, 3);
console.log(kali);


// Kasus berikutnya gimana kalo return nya makin banyak dan tidak ada nilai bagi
function kalkulasi(a, b){
    return [a + b, a- b, a * b, a / b]
}
//tinggal kita tambah aja destructuring nya sesuai dengan deskripsi permasalahan di atas
const [tambah, kurang, kalik, bagi = 'tidak ada'] = kalkulasi(2,3)
console.log(bagi)

// Versi Function Object
function kalkulasiObject(c, d) {
    return {
    tambahO: c + d,
    kurangO: c - d,
    kaliO: c * d,
    bagiO: c / d
 }
}
const {bagiO, tambahO, kaliO, kurangO} = kalkulasiObject(2,3)
console.log(kurangO)



// Destructuring function arguments
const mhs1 = {
    nama: 'Mohamad Iqbal Zaelani',
    umur: 30,
    email: 'mohamadiqbaalzaelani@gmail.com',
    nilai: {
        tugas: 80,
        uts: 85,
        uas: 75
    }
}
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas}}){
    return `Halo, nama saya ${nama}, saya berumur ${umur} tahun, dan nilai uas saya adalah ${uas}`
}
console.log(cetakMhs(mhs1))