//Bentuk yg lebih kompleks dari Template Literals,memungkinkan kita untuk membaca template literals melalui sebuah function
//Tagged Templates
const nama = 'Mohamad Iqbal Zaelani'
const umur = 20
const email = 'MohamadIqbalZaelani@gmail.com'
const ntlp = '087820159674'

function coba(strings, nama, umur, email, ntlp){
    return ntlp
}

// const str = `Halo, nama saya${nama}, saya berumur${umur}` //ini template literals biasa

const str = coba`Halo, nama saya${nama}, saya berumur${umur}, 
alamat email saya${email}, no telepon${ntlp}` //ini penggunaan tagged template literals
//kalo tagged template literals kita akan memasukan tag di dalam function
//javascript punya     
console.log(str) 