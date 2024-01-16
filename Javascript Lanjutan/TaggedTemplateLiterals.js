//Bentuk yg lebih kompleks dari Template Literals,memungkinkan kita untuk membaca template literals melalui sebuah function
//Tagged Templates
const nama = 'Mohamad Iqbal Zaelani'
const umur = 20
const email = 'MohamadIqbalZaelani@gmail.com'
const ntlp = '087820159674'
const alamat = 'Jl Astanaanyar'

function coba(strings, ...values){
    let result = ''
    strings.forEach((str, i) => {
        result += `${str}${values[i]}`
    })
    return result
}
//disini saya bikin variable str untuk menampung string nya
//lalu saya akan looping ke dalam isi values nya
//jadi str ngambil ke halo nama saya lalu gabung ke index i (iqbal atau expression nya) di looping lagi sampe str selesai

//disini ada race parameter jadi dia bisa menampung seluruh expression yg ada di dalam template literals nya agar tidak cape cape masukin
//values ini dia akan menjadi array yg isinya semua expression yg ada di dalam template literals nya
//jadi string untuk ngambil string biasa
//values buat ngambil expression

//jadi secara default tag template ini bisa menerima parameneter atau argumen contoh  coba(strings, nama, umur, email, ntlp, alamat)
//jadi ketika di jalankan tag coba ini dia akan memecah tiap string yg ada di dalamnya

// const str = `Halo, nama saya${nama}, saya berumur${umur}` //ini template literals biasa

const str = coba`Halo, nama saya${nama}, saya berumur${umur}, 
alamat email saya${email}, no telepon${ntlp}, alamat${alamat}` //ini penggunaan tagged template literals
//kalo tagged template literals kita akan memasukan tag di dalam function
//javascript punya  
console.log(str)    