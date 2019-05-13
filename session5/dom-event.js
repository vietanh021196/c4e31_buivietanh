let h1 = document.getElementById('viet');

h1.addEventListener('click', () =>{

console.log('click here!')
})

let menu = document.getElementById('menu');
let btnAddfood = document.getElementById('btnAddfood')
let inputAddfood = document.getElementById('type food')
inputAddfood.addEventListener('keypress',() =>{
    console.log("Bấm nhẹ thôi")
})
btnAddfood.addEventListener('click', () =>{
    let newfood = prompt('them mon an')
    menu.innerHTML += <li>${newfood}</li>

   })