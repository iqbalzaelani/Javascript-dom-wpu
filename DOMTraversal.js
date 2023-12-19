//Dom Traversal (penelusuran dom)
//dengan menggunakan dom traversal yang pertama kali dilkuakan yaitu menyeleksi elemen dulu menggunakan dom selection
//baru setelah elemen tertentu di seleksi kita akan memilih elemen yang lain berdasrkan elemen yang kita pilih tadi
//jadi bisa di bilang menelurusi elemennya berdasarkan elemen yang kita seleksi di awal

//Pake Event Handling
// const close = document.querySelector('.close')
// const card = document.querySelector('.card')

// close.addEventListener('click', function(){
//     card.style.display = 'none'
// })

//Pake Dom Traversal
const close = document.querySelectorAll('.close')

// for(let i = 0; i < close.length; i++){
//     close[i].addEventListener('click', function(e){
//         //close[i].parentElement.style.display = 'none'

//         e.target.parentElement.style.display = 'none'
//     })
// }


//cara kedua
close.forEach(function(el){
    el.addEventListener('click', function(e){
        e.target.parentElement.style.display = 'none'
        e.preventDefault() //untuk mencegah aksi default (penggunaan preventDefault)
        e.stopPropagation() //untuk mencegah event bubbling(event card) ke close
    })
})

const cards = document.querySelectorAll('.card')
cards.forEach(function(card){
    card.addEventListener('click', function(e){
        alert('ok')
    })
})

//disini saya menerapkan event bubbling yang dimana pada saat saya klik pada klik event card yang terlebih dahulu di panggil
//maksudnya event bubbling ketika kita punya sebuah event disini (kalo saya di tombol close) dan saya juga punya event di card
//maka ketika saya menjalankan event di (close) si card akan ikut terjalankan dia akan cek ke atas terus menerus seperti gelembung
//sampai gelembung nya pecah karena tidak ada pembungkus lagi















//disini kita akan mengathui ada method apa aja untuk menelusuri ini
//DOM Traversal Method nya ada banyak dan ada 2 type
//parentNode(mengembalikan node)            nah kita bisa ngambil parent nya
//parentElement(mengembalikan elemen)       nah kita bisa ngambil elemen nya kalo elemen udah pasti elemen html
//nextSibling(mengembalikan node)           nah dia ini harus sodara elemen yang kita pilih
//nextElementSibling()mengembalikan elemen)
//previous Sibling(mengembalikan node)
//previuseElementsSibling (mengembalikan elemen)




// const nama = document.querySelector('.nama')
// console.log(nama) //dia akan menampilkan nama
// console.log(nama.parentElement) // dia akan menampilkan parent nama
// console.log(nama.parentNode) // menampilkan parent nama
// console.log(nama.parentElement.parentElement) //menampilkan parent kedua di atas elemen nama





