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
        nama: 'Zaelani',
        email: 'zaelani@gmail.com'
    },
    {
        nama: 'Mohamad',
        email: 'mohamad@gmail.com'
    },
    {
        nama: 'Iqbal',
        email: 'iqbal@gmail.com'
    }
]
//disini saya mau looping data nya menggunakan data yang ada
//seperti yang tadi membuat elemen yang nanti di looping nya menggunakan expression method map higher order function ke magang
//yang di dalamnya terdapat item dan template literals lalu isinya list dan data
const elmagang = `<div class="magang">
${magang.map(m => `<ul>
<li>${m.nama}</li>
<li>${m.email}</li>
</ul>`)}
</div>`
//Menampilkan melalui dom body
document.body.innerHTML = elmagang