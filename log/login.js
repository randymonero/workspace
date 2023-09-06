const form = document.querySelector(".form");
const submitform= document.querySelector("#submit")
const pass= document.querySelector('#pswd')
const conpass= document.querySelector('#conpswd')
const icon =document.querySelector('.icon')
const icons =document.querySelector('.icons')


// submitform.addEventListener("click",function () {
// display()
// }

// )

// function display() {
//     login.classList.add("hide")
// }


localStorage.info('name','smith')


function show(input, type) {
    input.className= type ? "accept" : "refuse";
    return type;
    
}

function showError(input) {
    console.log('dd');
    return show(input, false)
}

function showSucces(input) {
    return show(input, true)
}

function hasValue(input, message) {
	if (pass.value === conpass.value) {
		return showSucces(input);
	}else{
        return showError(input);
    }
}

icon.addEventListener('click',()=>{
    if (pass.type==='password') {
        pass.type='text';
    }else{
        pass.type='password';
    }
}
)

icons.addEventListener('click',()=>{
    if (conpass.type==='password') {
        conpass.type='text';
    }else{
        conpass.type='password';
        console.log("sdsdasd");
    }


}
)


submitform.addEventListener('click',(e)=>{
    e.preventDefault()
    if (pass.value === conpass.value && pass.value !==null) {
        hasValue(pass, "")
        hasValue(conpass, "")
        window.location.replace('http://127.0.0.1:5502/index.html')
        // form.style.display="none"
    } else { 
        hasValue(pass,"password does not match")
        hasValue(conpass,"password does not match")   
    };
    
    // login.classList.add("hide")
}

)










// function showpass() {
//     var p= document.querySelector('#pswd')

//     if (p.type === 'password') {
//         p.type = 'text';
//     } else {
//         p.type = 'password'
//     }
    
// }









// login.classList.add("hide")
// // setTimeout(
// //     () => {
// //         login.classList.remove("hide")
// //         login.classList.add("show")
// //     }
// // )
// console.log(login.classList);
// console.log(login)

