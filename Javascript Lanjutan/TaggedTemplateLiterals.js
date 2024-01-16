//Bentuk yg lebih kompleks dari Template Literals,memungkinkan kita untuk membaca template literals melalui sebuah function
//Tagged Templates
const nama = 'Mohamad Iqbal Zaelani'
const umur = 20

function coba(strings, nama, umur){
    return nama
}

// const str = `Halo, nama saya${nama}, saya berumur${umur}` //ini template literals biasa

const str = coba`Halo, nama saya${nama}, saya berumur${umur}` //ini penggunaan tagged template literals
//kalo tagged template literals kita akan memasukan tag di dalam function
//javascript punya 
console.log(str)