//Bentuk yg lebih kompleks dari Template Literals,memungkinkan kita untuk membaca template literals melalui sebuah function
//Tagged Templates
//TAGGED TEMPLATE YANG MELEWATKAN SEMUA STRING KE DALAM FUNCTION

// const nama = 'Mohamad Iqbal Zaelani'
// const umur = 20
// const email = 'MohamadIqbalZaelani@gmail.com'
// const ntlp = '087820159674'
// const alamat = 'Jl Astanaanyar'

// function coba(strings, ...values){
//     // let result = ''
//     // strings.forEach((str, i) => {
//     //     result += `${str}${values[i] || ''}`
//     // })
//     // return result

//     //Bisa juga cara lebih simple
//     return strings.reduce((result, str, i) => `${result}${str}${values[i] || ''}`, '')
// }

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

// const str = coba`Halo, nama saya ${nama}, saya berumur ${umur}, 
// alamat email saya ${email}, no telepon ${ntlp}, alamat ${alamat} ` //ini penggunaan tagged template literals

//kalo tagged template literals kita akan memasukan tag di dalam function
//javascript punya  
//Jadi string literals ini di jalankan ke function coba dan akan menghasilkan string yang sama  

// console.log(str)    


//Pertanyaan kenapa kita harus cape cape menggunakan tagged template literals kalo hasilnya sama
//nah menurut saya memakai tagged template literals itu kita bisa memilih mana aja yang mau di tampilkan dan bisa kita  highlight si string dan
//dan akan memunculkan backgoround  highlight contoh

//... (rest parameter)

//CONTOH Highlight
const namasaya = 'Mohamad Iqbal Zaelani'
const umursaya = '20'
const bebas = 1010101010

function highlight(strings, ...values){
    return strings.reduce((result, str, i) => `${result}${str}<span class="hl">${values[i] || ''}</span>`, '')
}

const str = highlight`Halo, nama saya ${namasaya}, saya ${umursaya} tahun. bebas${bebas}`

document.body.innerHTML = str


//Ada beberapa penggunaan lain dari tagged template literals
// 1.Escaping HTML Tags
// atau sanitasi html tag untuk menghindari ketika ada script/karakter yang tidak di inginkan
//contoh
function sanitize(strings, ...values){
    return DOMPurify.sanitize(aboutMe)
}
const name = 'Mohamad Iqbal Zaelani'
const aboutMe = `iqbal iqbal <img src="balbal" onload="alert('asumaso)"/>`
const html = sanitize`<h3>${name}</h3><p>${aboutMe}</p>`
//Jadi saya punya variable nama dan aboutme yang nantinya isi dari variable ini bukan saya yg nulis sendiri tapi misalkan inputan dari user
//nah pasti kita gamau si user memasukan script yang jahat nah untuk nge filter nya string ini dimasukan ke variable sanitize (dibersihkan)


// 2.Translation & Internationalization
// alih bahasa dari website 
//contoh
const html2 = i18n`Hello${name}, you have ${amount}:c in your bank account`
//jadi contohnya disini ada template literals 
//nah ada liberay i18n yang dimana dia akan menejermahkan seperti //Hallo Iqbal, you have US$1,250.33 in your bank account
//tapi ini juga tagged template yang melewatkan semua string ini ke dalam function



// 3.Styled Components 
// biasanya kalo pake vue/react digunakan untuk styled components 
//contoh
const Title = styled.h1`
font-size: 1.5em
text-align: center
color: black`
//tagged templatenya itu styled.h1 
//ini contoh ketika menggunakan react