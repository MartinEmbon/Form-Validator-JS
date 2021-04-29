const fname = document.getElementById("fname")
const lname = document.getElementById("lname")
const email = document.getElementById("email")
const password = document.getElementById("password")
const confPassword = document.getElementById("conf-password")
const form = document.getElementById("form")
const errorElement=document.getElementById("error")
const edad = document.getElementById("edad")

form.addEventListener("submit",(e)=>{
    let mensaje = []
    if (fname.value === "" || fname.value==null){
        mensaje.push("Campo NOME es obrigatorio")
    }
    else if (fname.value === "" || fname.value==null){
        mensaje.push("Campo SOBRENOME es obrigatorio")
    }
    else if (email.value === "" || email.value==null){
        mensaje.push("Campo EMAIL es obrigatorio")
    }
    else if (password.value <= 6){
        mensaje.push("Campo SENHA es obrigatorio e deve ter minimo 6 caracteres")
    }

    else if (confPassword.value === "" || confPassword.value==null || confPassword.value != password.value){
        mensaje.push("Ambas senhas deven coincidir")
    }

    else if (!edad.checked){
        mensaje.push("Tem quer ser maior de 18 para acceder")
    }
    
    if (mensaje.length>0){
        e.preventDefault()
        errorElement.innerText = mensaje.join(", ")
   
    } else {
        alert("Cadastrado com sucesso!!")
    }
})


