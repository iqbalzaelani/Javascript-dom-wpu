//Penjelasan DOM
// const judul = document.getElementsByTagName("h1")
// judul[0].innerHTML = "Hello World Lagi"
// console.log(document)

//Selection DOM Javascript
//document.getElementById() -> element
const judul = document.getElementById('judul')
judul.innerHTML = "Zaelani Iqbal Mohamad"
judul.style.backgroundColor = 'red'
judul.style.color = 'white'
judul.style.fontFamily = 'times'

//document.getElementByTagName()
// -> HTMLCollections jadi meskipun elemen p ada satu tetap harus menggunakan index[] karena merupakan html collections
const p = document.getElementsByTagName('p')
p[0].style.backgroundColor = 'black'
p[0].style.color = 'white'
p[0].style.fontSize = '20px'
p[1].style.backgroundColor = 'red'
p[1].style.color = 'white'
p[1].innerHTML = 'Di ubah melalui javascript cara kedua'
p[1].style.fontSize = '20px'
p[2].style.backgroundColor = 'black'
p[2].style.color = 'white'
p[2].style.fontSize = '20px'

const h1 = document.getElementsByTagName('h1')[0]
h1.style.fontSize = '50px'

//document.getElementByClassName() sama sepeti getelementbytagename
// -> HTMLCollections
const p1 = document.getElementsByClassName('p1')
p1[0].innerHTML = 'Di ubah melalui javascript cara kesatu'

//document.querySelector() -> element
const p4 = document.querySelector('#b p');
p4.style.color = 'red'
p4.style.fontSize = '20px'

const li2 = document.querySelector('section#b ul li:nth-child(2)')
li2.style.backgroundColor = 'red'

const li3 = document.querySelector('section#b ul li:nth-child(3)')
li3.style.backgroundColor = 'black'

//kasus kali ini saya ingin ubah semua paragraf oleh karena itu saya menggunakan selectorall
//document.querySelectorAll() -> nodelist
const p6 = document.querySelectorAll('p')
p6[2].style.backgroundColor = 'red'
//bisa juga mengubah semua jika males satu satu nge ubah
// for (let i = 0; i < p.length; i++ ){
// p[i].style.backgroundColor = 'lightblue'
//}

//Kita juga bisa mengubah nodelist nya tergantung pemakaian contoh
//jadi dia hanya mencari di section b aja 
// const sectionB = document.getElementById('b')
// const p4 = sectionB.querySelector('p')
// p4.style.backgroundColor = 'green'
//bisa juga di balikin
// const sectionB = document.querySelector('section#b')
// const p4 = sectionB.getElementsByTagName('p')[0]
// p4.style.backgroundColor = 'green'