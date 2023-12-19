//MANIPULASI ELEMEN
//di dalam innerHTML kita bebas mau memasukan apa contoh mau masukin tulisan miring boleh atau paragraf div boleh
//Penggunaan element.innerHTML

// const judul = document.getElementById('judul')
// judul.innerHTML = 'Mohamad Iqbal Zaelani'

// const sectionA = document.querySelector('section#a')
// sectionA.innerHTML = 'Hallo World'

//Penggunaan element.style
// const judul = document.querySelector('#judul')
// judul.style.color = 'red'
// judul.style.backgroundColor = 'black'

//Penggunaan element attribute
//nah attribute itu sesuatu yang menempel pada html kayak attribute id yang nilanya judul id="judul"
//element.getAttribute()
//element.setAttribute()
//element.removeAttribute()
// const judul = document.getElementsByTagName('h1')[0];
// judul.setAttribute('name', 'iqbal')     //ini untuk menambahkan attribute baru ke sebuah elemen

//getAttribute() digunakan untuk cek attrribute kita , buka console(untuk test) ketik judul.getAttribute('id')
//di atas adalah contoh apabila saya ingin cek attribute id pada elemen judul

//removeAttribute() digunakan untuk menghilangkan attribute kita, buka console(untuk test) ketik judul.removeAttribute('id')
//di atas adalah contoh apabila saya ingin menghilangkan attribute id pada elemen judul

//Penggunaan element.classList
//digunakan untuk mengelola class
//element.classList.add()      untuk menambahkan class baru
//element.classList.toggle()   jika elemen tidak mempunyai kelas tertentu dia akan menambahkan tapi kalo elemen itu ada toggle akan menghilangkan class tersebut
//element.classList.item()     untuk mengetahui class di sebuah elemen
//element.classList.contains() untuk cek akapah elemen mempunyai class tertentu
//element.classList.replace () untuk nge ganti kelas yang ada dengan yang terbaru

const p2 = document.querySelector('.p2')

//Nah misalnya saya ingin menggunakann classList pada variable dan cl4ass di atas bisa pergi ke console untuk cek nya
// p2.classList
// p2.classList.add ('classbarunih')       //nambah class
// p2.classList.remove ('classbarunih')   //remove class
// p2.classList.toggle ('classbarunih')  //nah kalo elemen p2 ini udah punya class dgn nama 'classbarunih' dia akan hapus kalo belum tambah
// p2.classList.item(2)                 //nah contoh disini saya ingin mengetahui class urutan kedua dari elemen p
// p2.classList.contains('dua')        //nah contoh disini saya ingin mengetahui apakah di dalam elemen p udah ada class yang namanya dua
// p2.classList.replace('dua' 'tiga') //nah contoh disini saya mengganti nama class yang tadinya dua menjadi tiga di dalam elemen p

//classList juga berlaku dimana saja misalnya saya mau menambahkan class biru ke body
//document.body.classList.toggle('biru-muda')




//Jadi kalo dia gapunya id dan class bisa pakai query selector



//MANIPULASI NODE
//document.createElement()   //Membuat Element baru
//document.createTextNode()  // Membuat teks baru untuk isi elemen
//node.appendChild()        //Menambahkan atau simpan ke akhir 
//node.insertBefore()       //Menambahkan atau simpan tapi bukan di akhir di tengah penggunaan mirip appendChild()
//parentNode.removeChild()
//parentNode.replaceChild()

//buat elemen baru
const pBaru = document.createElement('p')
const teksBaru = document.createTextNode('Paragraf Baru')       //membuat variabel teks untuk di masukan ke elemen baru
//simpan tulisan teksbaru ke dalam paragraf baru
pBaru.appendChild(teksBaru)     //appendChild berfungsi untuk menambahkan jadi disini paragraf baru di tambah teks baru

//simpan pagaraf baru ke dalam section yang bertempatan di bawah paragraf 3
const sectionA = document.getElementById('a')   //Nah disini saya menyimpannya di sectionA jadi buat variabel dan panggil id section nyas
sectionA.appendChild(pBaru)   //setelah dibuat panggil sectionA nya dan masukan paragraf baru hanya paragraf saja karena teks sudah connet ke paragraf
//istilah appendChild itu simpan ke akhir dari elemen tersebut jadi disini parent nya itu section

//penggunaan insertBefore()
const liBaru = document.createElement('li')
const teksliBaru = document.createTextNode('Item Baru')
liBaru.appendChild(teksliBaru)

//disini membuat variable dulu
const ul = document.querySelector('section#b ul') //disini kita memanggil parent li yaitu ul karena bukan tag dan class saya memakai query selector
const li2 = ul.querySelector('li:nth-child(2)') //disini kenapa engga documen karena sebelumnya udah bikin var ul lalu panggil li urutan ke 2

ul.insertBefore(liBaru, li2) 
//nah disini jadi kita memanggil parent yaitu ul nya lalu masukan paramenter baru yaitu liBaru
//lalu simpan dengan titik , setelah li2 karena mau meyimpan di urutan kedua






//removechild() disini saya akan remove link 
//karena di atas sudah di panggil section nya jadi langsung bikin variable link aja sama manggil id a nya
const link = document.getElementsByTagName('a')[0]
sectionA.removeChild(link)



//replacechild() disini saya akan ganti pada section b tag p dengan h2
//karena belum ada parent section b nya kita tangkap dulu
const sectionB = document.getElementById('b')
const p4 = sectionB.querySelector('p') //disini saya memakai sectionB agar dia nangkap p di awal section b kalo document dia akan nangkap yg awal

const h2Baru = document.createElement('h2')
const teksH2baru = document.createTextNode('Ini Judul Baru')
h2Baru.appendChild(teksH2baru)

sectionB.replaceChild(h2Baru, p4) //aturan mainnya panggil dulu parent yaitu sectionB lalu masukan (node baru, node lama yang mau di ganti) 

pBaru.style.backgroundColor = 'lightgreen'
pBaru.style.color = 'white'
pBaru.style.fontFamily = 'arial'
pBaru.style.fontSize = '30px'

liBaru.style.backgroundColor = 'lightblue'
liBaru.style.color = 'white'
liBaru.style.fontFamily = 'times'
liBaru.style.fontSize = '30px'

h2Baru.style.backgroundColor = 'red'
h2Baru.style.color = 'white'
h2Baru.style.fontFamily = 'times'
h2Baru.style.fontSize = '30px'