const login = document.querySelector(".login")
const profile = document.querySelector(".profile")

let value = profile.innerText
function info(){
    // let info=JSON.parse(localStorage.getItem("info"))
    if(profile.textContent==null || profile.textContent==undefined){
        login.style.display='flex'
        profile.style.display='none'
        console.log(login);
    }else{
        profile.style.display='flex'
        login.style.display='none'
    }
}
info()

console.log(value);