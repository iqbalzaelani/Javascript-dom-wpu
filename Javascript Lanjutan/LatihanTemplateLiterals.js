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
document.body.innerHTML = el