//Event secara umum suatu agenda, kegiatan atau festival tertentu yang menunjukkan, menampilkan dan merayakan untuk memperingati hal-hal penting yang diselenggarakan pada waktu tertentu
//Evnt pada javascript mempresentasikan sebuah kejadian yang terjadi di dalam dom
//kejadiannya bisa dilakukan oleh user 
//simplenya ketika kita klik mouse event atau keyboard event, mngisi sesuatu ke kolom input
//bisa juga di lakukan secara otomatis oleh api contoh halaman selesai di load


//event pada javascript bisa di katakan mendengarkan karena nanti javascript akan menderngarkan apakah ada kegiatan yang dilakukan oleh user atau tidak
//cara penggunaan nya
// Event Handler :
// Inline HTML method
// Element method
//addEventListener()


//Event Handler 
//Menggunakan Inline HTML attribute tapi tidak di sarankan karena mencampurkan html dan javascript
//dan kita juga memodifikasi html padahal kita bisa menambahkan event tanpa menyentuh html nya
const p3 = document.querySelector('.p3')
function ubahWarna(){
    p3.style.backgroundColor = 'red'
}
//tambahkan onclick pada elemen maupun tag html yang di pilih dan masukan fuction atau nama event nya
//contoh onclick="ubahWarna()"" bisa diliat di p3 pada html


//Menggunakan element methods
const p2 = document.querySelector('.p2')
p2.onclick = ubahWarnaKedua
function ubahWarnaKedua(){
    p2.style.backgroundColor = 'black'
}

//Menggunakan addEventListener()
//disini saya membuat event yang dimana jika klik pagaraf 4 dia akan menambahkan list item baru
const p4 = document.querySelector('section#b p')
p4.addEventListener('click', function(){
    alert('Event Berjalan dengan baik')
    const ul = document.querySelector('section#b ul')
    const liBaru = document.createElement('li')
    const textBaru =  document.createTextNode('Text Baru ini')
    liBaru.appendChild(textBaru)
    ul.appendChild(liBaru)
})


//Perbedaan nya
//Event handler itu cara lama
//perbedaan nya ketika kita memberikan lebih dari satu perubahan pada sebuah event
//jika kita menggunakan event handler maka perubahaan yang terakhir dilaukan akan menimpa perubahan sebelumnya 
//jika kita mengguanakn addEventListener dia akan menambahkan perubahannya
//contoh Menggunakan Event Listener
// const p1 = document.querySelector('.p1')
// p1.onclick = ubahWarnaKesatu
// function ubahWarnaKesatu(){
    
// }
// p1.onclick = ubahWarnaKesatu
// function ubahWarnaKesatu(){
//     p1.style.backgroundColor = 'red'
// }

//contoh Menggunakan addEventListener
//nah jika kita menggunakan event handler event pertama akan ditimpa
const p1 = document.querySelector('.p1')
p1.addEventListener('mouseenter', function(){
    p1.style.backgroundColor = 'red'
})
p1.addEventListener('mouseleave', function(){
    p1.style.backgroundColor = 'black'
})

//Contoh Daftar Event Event 
//Mouser Event
// > click, dblclick, mouseover, mouseenter, mouseup, wheel
//Keyboard Event
// > keydown, keypress, keyup   
//Resources Event
//Focus Event
//View Event
// > resize, scroll
//Form Event
// > reset, submit
//Css Animation & Transition Event
//Drag & Drop Event