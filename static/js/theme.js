
// const html = document.getElementsByTagName('html')[0]
const prefersDarkScheme=window.matchMedia('(prefers-color-scheme:dark)')
const prefersLightScheme=window.matchMedia('(prefers-color-scheme:light)')



if (prefersDarkScheme.matches){
     html.classList.add('theme-dark')
}else{
 html.classList.add('theme-light')
}

prefersDarkScheme.addEventListener("change",(e)=>{
    if(e.matches){
         html.classList.add('theme-dark')
          html.classList.remove('theme-light')
    }else{
          html.classList.remove('theme-dark')
          html.classList.add('theme-light')
    }
})

let btntheme = document.getElementById('theme')
btntheme.addEventListener("click", function (e) {
 
     html.classList.toggle('theme-dark')
     html.classList.toggle('theme-light') 
    })
