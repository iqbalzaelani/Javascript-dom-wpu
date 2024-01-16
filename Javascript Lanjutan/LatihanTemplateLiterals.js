//Latihan Template Literals
// 1. HTML Fragments
const mhs = {
    nama: 'Mohamad Iqbal Zaelani',
    umur: 20,
    nrp: '0123321',
    email: 'mohamadiqbaalzaelani@gmail.com'
}
//Lalu membuat elemennya yang akan di simpan sebagai elemen fragments
const el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<p>${mhs.umur}</p>
<span class="nrp">${mhs.nrp}</span>
<p>${mhs.email}</p>
</div>`
//Saya mau menampilkan nya ke dom ke body
// document.body.innerHTML = el

// 2. Looping
//Disini menggunakan data yang sudah di gunakan
//sekarang isinya array yang ada object nya
const magang = [
    {
        nama: 'Zaelani Iqbal Mohamad',
        email: 'ZaelaniMohamadIqbal@gmail.com',
        umur: '20'
    },
    {
        nama: 'Mohamad Zaelani Iqbal',
        email: 'MohamadZaelaniIqbal@gmail.com',
        bidang: 'Teknologi'
    },
    {
        nama: 'Iqbal Zaelani Mohamad',
        email: 'IqbalZaelaniMohamad@gmail.com',
        bagian: 'Front End Developer'
    },
    {
        nama: 'Zaelani Mohamad Iqbal',
        email: 'ZaelaniMohamadIqbal@gmail.com',
        lamawaktu: '4 Bulan'
    }
]
//disini saya mau looping data nya menggunakan data yang ada
//seperti yang tadi membuat elemen yang nanti di looping nya menggunakan expression method map higher order function ke magang
//yang di dalamnya terdapat item dan template literals lalu isinya list dan data
const elmagang = `<div class="magang"> 
${magang.map(m => `<ul>
<li>${m.nama}</li>
<li>${m.email}</li>
</ul>`).join('')}
</div>`
//Menampilkan melalui dom body
//di tampilan html ada koma karena dia bentuknya array, cara menghilangkan koma nya dengan chaining (join)
// document.body.innerHTML = elmagang


// 3. Conditionals
//Pengkondisian
//ternary
const lagu = {
    judul: 'Newcastle',
    penyanyi: 'Mohamad Iqbal Zaelani',
    feat: 'Zaelani Iqbal Mohamad'
}
//membuat elemen lagi
const ellagu = `<div class="lagu">
<ul>
<li>${lagu.penyanyi}</li>
<li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : '' }</li>
</ul>
</div>`
//kasusnya ada beberapa lagu yang ada feat/tidak ada feat saya gamau kalo lagu tersebut engga ada feat nya undifiend
//karena itu disini butuh peng kondisian yaitu yang sebelumnya (feat. ${lagu.feat}) jadi saya bungkus di dalam ${}  
//jadi jika ada lagu feat tambahkan string tambahkan template literals lagi lalu membuat expresiion lagi yg di dalamnya terdapat lagu dan feat
//tetapi kalo engga ada kosongin aja  ${lagu.feat ? `(feat. ${lagu.feat})` : ''
// document.body.innerHTML = ellagu


// 4. Nested
// HTML Fragments bersarang
const kerja = {
    nama: 'Beberapa Pekerjaan IT',
    jumlah: 7,
    namaBidang: [
        'Information Security Analyst', 
        'Artificial Intelligence (AI) / Machine Learning Engineer',
        'Data Scientist', 
        'Web Developer', 
        'Software Development Engineer',
        'Computer Hardware Engineer',
        'Cloud Architect'
    ]
}
//untuk bagian nama bidang saya buat melalui function jadi function terpisah dan memakai expression
function cetakNamaBidang(namaBidang){
    return `
    <ol>
    ${namaBidang.map(nb => `<li>${nb}</li>`).join('')}
    </ol>
    `
}

//Menampilkan semua data ini ke html fragments
const elkerja = `<div class="kerja">
<h2>${kerja.nama}</h2>
<span class="semester">Jumlah Bidang Tertera : ${kerja.jumlah}</span>
<h4>Nama Bidang :</h4> 
${cetakNamaBidang(kerja.namaBidang)} 
</div>`
document.body.innerHTML = elkerja 