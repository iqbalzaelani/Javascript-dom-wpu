// Spread Operator dan Rest Parameter
// Kedua hal ini di presentasikan dengan karakter titik tiga ( ... )
// Walaupun konotasinya sama tetapi 2 hal itu berbeda

// Spread Operator
// Sebuah operator yang memecah (expand / unpack) sebuah iterables menjadi single element
// Contohnya gini saya punya variable mhs yang di dalamnya ada array nah jika saya menambahkan ... pada saat pemanggilan array itu akan di pecah
const mhsso = ['Mohamad', 'Iqbal', 'Zaelani']
console.log(...mhsso) //spread operator 
// console.log(...mhssos[0]) //disini saya memilih detail array mohamad maka akan dipecah juga array tersebut

// Alasan Menggunakan Spread Operator
// 1. Menggabungkan 2 array atau lebih >> Contoh
const mhsgabung1 = ['Mohamad', 'Iqbal']
const mhsgabung2 = ['Iqbal', 'Mohamad']
const mhsgabung3 = [...mhsgabung1, 'Test', ...mhsgabung2]       //Spread Operator
//Keuntungannya kalo pake spread operator kita lebih mudah menambahkan array lagi tapi kalo pake concat tidak semudah itu
console.log(mhsgabung3)

// 2. Meng-copy array
// Misalnya saya punya array mahasiswa nah saya pengen punya array mhs lagi
const mhscp = ['satu', 'dua', 'tiga']
const mhscp1 = [...mhscp]       //Spread Operator
mhscp1[0] = 'Empat'     //Keutungan nya kalo pake spread operator dia akan berubah sesuai apa yang kita pilih tidak mhscp nya ikut berubah
console.log(mhscp1)

// Contoh lain
// saya punya list di html dan saya ingin simpan di array
const liMhs = document.querySelectorAll('li')
const mhsli = []
for (let i = 0; i < liMhs.length; i++){
    mhsli.push(liMhs[i].textContent)
}
console.log(mhsli)


// Kasus disini saya punya nama di h1 saya kasih transisi sama style tetapi ketika saya arahkan kursornya saya inginnya per huruf bukan per kata
const nama = document.querySelector('.nama')
const huruf = [...nama.textContent].map(h => `<span>${h}</span>`).join('')  
nama.innerHTML = huruf