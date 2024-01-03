//Function Declaration
// function tampilPesan(nama){
//     alert('halo' + nama)
// }
// tampilPesan('Iqbal')

//Function Expression
// let tampilPesan2 = function (nama){
//     alert('halo' + nama)
// }
// tampilPesan2('Iqbal')


//Nah ada beberapa definisi arrow function
//Bentuk lain yang lebih ringkas dari function expression, jadi kita bisa menggunakan function expression dengan lebih ringkas
//ini salah satu contohnya
// let tampilPesan3 = (nama) => {
//     alert('halo' + nama)
// }
// tampilPesan3('Iqbal')

//Membuat arrow function
//saya membuat dulu function expression
const tampilNama = function (nama){
    return `Halo, ${nama}`
}
console.log(tampilNama('Mohamad Iqbal Zaelani'))