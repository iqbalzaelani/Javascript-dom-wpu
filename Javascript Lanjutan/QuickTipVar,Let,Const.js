//Ada 3 cara untuk membuat variable, ada var let dan const
//cuman sekarang kita gauasa pake var lagi tapi beralih ke let
//disini saya akan menjelasakan kenapa harus pake let
//Kenapa Javacript bukan block scope karena javascript hanya dibuat 10 hari jadi banyak kekurangan

//console.log(i)
//var i = 10
//var ini global scope yang membuat menjadi kekurangannya ketika kita salah nilainya tetep jadi undifined bukan jadi error

//console.log(j)
//let j = 12
//Nah salah satu alasan pake let atau const itu biar perilaku variable nya sama dengan bahasa pemograman lain
//Karena seharusnya sebelum memanggil menggunakan console kita harus membuat variable dulu

for(var r =0; r < 10; r++){
    console.log(r)
}
console.log(r)
//catatan dengan menggunakan javascript kita bisa memanggil looping
//kalo di program bahasa lain engga akan bisa karena menganut block scope karena tidak dapat mengakses i diluar block{}
//kalo javascript menganut function scope 

//disini saya akan mengubah function scope javascript menjadi block scope agar sama seperti program lain dengan menggunakan function
//jadi dia tidak akan bisa mengakses diluar block
// function tes(){
//     for(var e =0; e < 10; e++){
//         console.log(e)
//     }
//     console.log(e)
// }
// tes()
// console.log(e)



//IIFE (Immediately Invoked Function Expression)
//jadi sebuah function expression yang dipanggil langsung ketika dibuat

//SIAF (Self Invoking Anonymous Function)
//jadi ini dibuat supaya kita menjadi variable yang ada di dalam function nya tidak bisa di akses dari luar
//anonymous function itu fungsi tidak bernama di javascript yang dibuat menggunakan function expression


//javascript dulu itu variable nya bersifat global (var) tetapi sekarang udah es6 ada namanya let
//jadi kita tidak perlu cape cape untuk membuat block scope agar variable tidak dapat di akses diluar tinggal pakai let aja
//karena let menganut block scope

//jadi di sarankan menggunakan let jangan var dan anda dapat menggunakan const jika yakin bahwa variable nya tidak akan di ubah
const y = 100
console.log(y)
//nah ini contoh penggunaan const dia bersifat variable tetap dan kalo kita mengubah isi variable nya dia akan error
//kenapa bisa ada const karena untuk meminimalisir perubahan state jadi nilai variable tidak berubah

//tetapi ada cara untuk mengubah const
const mhs = {
    nama: "Mohamad Iqbal Zaelani",
    umur: 20
}
mhs.umur = 19 //dia akan bisa mengubah asal kita mengubah object di dalamnya
//disini saya akan memberi contoh apabila membuat object baru
mhs = {
    jurusan: "Manajemen Informatika"
}
//disini dia akan error karena tidak dapat membuat object baru
console.log(mhs)

//jadi kesimpulannya kita tetap bisa mengganti const tapi tidak sepenuhnya makannya const untuk meminimalisir perubahan state