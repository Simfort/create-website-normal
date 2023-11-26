
let but = document.querySelector('.menu')
let menu = document.querySelector('.men')
let kres = document.querySelector('.krest')

but.addEventListener('click',()=>{
    
    menu.classList.add('menu2')
    kres.classList.add('krest2')
    but.classList.remove('menu')
})

kres.addEventListener('click',()=>{
    menu.classList.remove('menu2')
    kres.classList.remove('krest2')
    but.classList.add('menu')

})