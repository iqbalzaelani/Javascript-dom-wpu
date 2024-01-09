//studi kasus kali ini
//saya akan mengambil 10 data yang terdapat di website channel youtube WPU
//setelah saya mengambil 10 video saya akan menyeleksi viedo/data yang berupa playlist javascript lanjutan 
//terus saya akan menulis berapa videonya dan total durasi 1 playlist itu

// langkah langkah pengerjaan

// ambil semua elemen video
const videos =  Array.from(document.querySelectorAll('[data-duration]'))
//console.log(videos)

// pilih hanya yang 'Javascript Lanjutan' (di filter)
let jsLanjut = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))


// setelah dapat videonya ambil masing masing durasi video (yang di ambil dalam bentuk string) pake map
//disini saya pake chaining jadi langsung titik
.map(item => item.dataset.duration)

// ubah durasi menjadi int, lalu ubah menit menjadi detik (pake map)
//disini pakai chaining lagi
.map(waktu => {
    //10:30 saya akan ubah jadi array [10, 30] dengan memakai split
    const parts = waktu.split(':').map(part => parseFloat(part))
    return (parts[0] * 60) + parts[1] //tinggal di tambahkan alkurasi jadi parts dikali ke 60 tambah parts ke 1
})

// jumlahkan semua detiknya (pakai reduce)
//disini sama sepeti sebelumnya pakai chaining lagi
.reduce((total, detik) => total + detik)

// ubah formatnya jadi jam menit detik
//untuk ubah tidak bisa pakai chaining karena harus satu satu
//3600 itu dapet dari 1 jam 3600 detik yaa jadi jslanjut bagi 1 jam
//Pake math floor biar angka bulatnya tidak ikut 
const jam = Math.floor(jsLanjut / 3600)
jsLanjut = jsLanjut - jam * 3600
const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60


// simpan di dom
const pDurasi = document.querySelector('.total-durasi')
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik.`
const jmlVideo = videos.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length
const pJmlVideo = document.querySelector('.jumlah-video')
pJmlVideo.textContent = `${jmlVideo} Video.`

console.log(jmlVideo)