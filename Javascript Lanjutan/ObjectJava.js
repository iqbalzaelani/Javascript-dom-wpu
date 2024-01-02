//Object itu isinya properti dan method
//Properti isinya nilai kalo method isinya function
//di dalam object juga pake keyword this

//Cara untuk membuat Object pada Javascript

// 1.Object Literal
//TIDAK EFEKTIF UNTUK OBJECT YANG BANYAK
// disini saya membuat object mahasiswa pake literal
let mahasiswa1 = {
    nama: 'Mohamad Iqbal Zaelani',
    energy: 10,
    makan: function(porsi){
        this.energy = this.energy + porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`)
    }
}
let mahasiswa2 = {
    nama: ' Zaelani Iqbal Mohamad',
    energy: 10,
    olahraga: function(set){
        this.energy = this.energy + set
        console.log(`Selamat olahraga ${this.nama}, selamat berolahraga`)
    }
}
let mahasiswa3 = {
    nama: 'Iqbal Mohamad Zaelani',
    energy: 10,
    tidur: function(jam){
        this.energy = this.energy + jam *3
        console.log(`tidur bagus untuk pertumbuhan ${this.nama}, selamat tidur`)
    }
}
//Object Literal pakai {} yang isinya properti
//method, method adalah fuction di dalam object
//method disini makan
//menggunakan literal kita bisa langsung ambil properti atau variable di dalam console.log dengan ${} tanpa perlu keluar string
//kalo menggunakan object literal dan kita mau menambahkan mahasiwa kedua maka kita harus membuat lagi object nya



// 2.Function Declaration
//Lebih efektif cuman terkedala jika membuat method baru karena harus mengelola 2 object
//nah keuntungannya gaperlu buat object duplikat
function Mahasiswa(nama, energy){
    let mahasiswa = {}
    mahasiswa.nama = nama
    mahasiswa.energy = energy

    mahasiswa.makan = function(porsi){
        this.energy += porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`)
    }
    //tambah method
    mahasiswa.main = function(jam){
        this.energy -= jam
        console.log(`Selamat bermain ${this.nama}, selamat bermain`)
    }
    mahasiswa.tidur = function(jam){
        this.energy += jam *3
        console.log(`Selamat Istirahat ${this.nama}, selemat istirahat`)
    }
    mahasiswa.olahraga = function(set){
        this.energy -= set
        console.log(`Selamat berolahraga ${this.nama}, selamat berolahraga`)
    }
    mahasiswa.bergadang = function(jam){
        this.energy -= jam * 2
        console.log(`Kebodohan ${this.nama}, Jangan di ulang`)
    }

    return mahasiswa
}

let iqbal = Mahasiswa('Mohamad', 10)
let iqbal2 = Mahasiswa('Iqbal', 10)
let iqbal3 = Mahasiswa('Zaelani', 10)
//penggunaan declaration itu object nya kosong tidak langsung di isi
//perbedaanya juga yang tampil fuction bukan object

//perbedaanya kalo mau bikin object nya kita hasus intasiasi
//jadi buat variable untuk object lalu panggil function dan isi namanya tambahkan return object nya


// 3.Constructor function
// keyword new 
// mirip fuction declaration bedanya tidak perlu menuliskan deklarasi variabel dan return  
function Siswa(nama, energy){
    this.nama = nama
    this.energy = energy

    this.makan = function(porsi){
        this.energy += porsi
        console.log(`Selamat makan ${this.nama}, selamat makan`)
    }
    this.main = function(jam){
        this.energy -= jam
        console.log(`Selamat bermain ${this.nama}, selamat bermain`)
    }
    this.olahraga = function(set){
        this.energy -= jam
        console.log(`Selamat Berolahraga ${this.nama}, selamat berolahraga`)
    }
    this.bergadang = function(jam){
        this.energy -= jam *2
        console.log(`Kebodohan ${this.nama}, Jangan di ulang`)
    }
}

let Zaelani = new Siswa('Mohamad Iqbal Zaelani', 20)
let Sumbul = new Siswa('Mohamad Sumbul', 10)
//kenapa harus pakai new kalo tidak dia akan return sama deklarasi variable


// 4.Object.create  
//Object create berfungsi untuk menghubungkan object object
//PALING EFEKTIF
//disini saya membuat object terpisah
//penggunaan object create otomatis daftar ketika ada method baru
//penggunaan nya let buruh = Object.create(methodBuruh)
const methodBuruh = {
    makan: function(porsi){
        this.energy += porsi
        console.log(`Halo ${this.nama}, sok makan`)
    },
    main: function(jam){
        this.energy -= jam
        console.log(`Halo ${this.nama}, sok main`)
    },
    tidur: function(jam){
        this.energy += jam * 3
        console.log(`Halo ${this.nama}, sok tidur`)
    },
    bergadang: function(jam){
        this.energy -= jam * 2
        console.log(`Haduh ${this.nama}, bergadang hanya akan mengurangi kesehatan anda`)
    },
    tidakmakan: function(porsi){
        this.energy -= porsi
        console.log(`Tidak makan membuat sakit ${this.nama}, makanlah`)
    },
    olahraga: function(set){
        this.energy += set * 2
        console.log(`Jangan lupa air putih ${this.nama}, hebat`)
    },
    bermain: function(set){
        this.energy -= set
        console.log(`Jangan lupa beristirahat ${this.nama}, come go`)
    }
}


function Buruh(nama, energy){
    let buruh = Object.create(methodBuruh)
    buruh.nama = nama
    buruh.energy = energy

    return buruh
}

let buruh1 = Buruh('Mohamad', 10)
let buruh2 = Buruh('Iqbal', 10)
let buruh3 = Buruh('Zaelani', 10)
let buruh4 = Buruh('Mohamad Iqbal Zaelani', 30)



//Penggunaan Prototype agar lebih simple
//disini saya membuat Constructor function
//nah Constructor function ini sebenarnya mempunyai parent yaitu prototype
//dengan menggunakan prototype kita tidak perlu membuat object baru

function Human(nama, energy) {
    this.nama = nama
    this.energy = energy

}
Human.prototype.makan = function(porsi){
    this.energy += porsi
    return `Halo ${this.nama}, selamat makan`
}
Human.prototype.istirahat = function(menit){
    this.energy += menit
    return `Halo $(this.nama), selamat beristirahat`
}
Human.prototype.main = function(jam){
    this.energy -= porsi
    return `Halo ${this.nama}, selamat bermain`
}
Human.prototype.tidur = function(jam){
    this.energy += jam *2
    return `Halo ${this.nama}, selamat tidur`
}
Human.prototype.olahraga = function(jam){
    this.energy += jam *2
    return `Halo ${this.nama}, selamat berolahraga`
}
Human.prototype.bergadang = function(jam){
    this.energy -= jam *3
    return `Hadeh ${this.nama}, bergadang hanya mengurangi kesehatan anda`
}
Human.prototype.enggamakan = function(porsi){
    this.energy -= porsi 
    return `Tidak makan membuat sakit ${this.nama}, makanlah`
}
Human.prototype.bermain = function(main){
    this.energy -= main
    return `Selamat Bermain ${this.nama}, bermain`
}
let bal = new Human('Mohamad Iqbal Zaelani', 10)
let bal2 = new Human('Mohamad Iqbal Zaleani', 10)
let bal3 = new Human('Mobamad Iqbal Zaelani', 10)