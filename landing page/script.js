window.addEventListener("scroll",function(){
    let nav=document.getElementById("navor")
    if(window.scrollY>50){
        nav.style.backgroundColor="#353b16"
    }
    else{
        nav.style.backgroundColor="transparent"
    }
})

let signup=document.querySelector(".signupbtn")
let signIn=document.querySelector(".disable")
let namefield=document.querySelector(".namefield")
let title=document.querySelector(".title")
let underline=document.querySelector(".underline")
let text=document.querySelector(".txtx")
signIn.addEventListener('click',function(){
     namefield.style.maxHeight='0'
     title.innerHTML="sign in"
     text.innerHTML="lost password"
     signup.classList.add("disable")
     signIn.classList.remove("disable")

 })
 signup.addEventListener('click',function(){
    namefield.style.maxHeight='60px'
    title.innerHTML="sign up"
    text.innerHTML="password suggestion"
    signup.classList.remove("disable")
    signIn.classList.add("disable")
    
})

let login=document.querySelector(".login")
let txt=document.querySelector(".text")
let container=document.querySelector(".container")
let lltr=document.querySelector('lltr')

login.addEventListener("click", function(){
   container.style.display="block"
   txt.style.display="none"

})

window.addEventListener("click",function(Event){
    if(Event.target==container)
    {
        container.style.display="none"
        txt.style.display="flex"
    }
})
const toggle=document.querySelector(".toggle")
let drop=document.querySelector(".dropdown-menu ")
const icon=document.querySelector(".togglr i")
toggle.onclick=function(){
    drop.classList.toggle("open")
    const isopen=drop.classList.contains("open")
    // icon.classList=isopen?  "fa-brands fa-facebook-f"  :"fa-brands fa-instagram" 
}

