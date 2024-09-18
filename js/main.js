function validatePassword(){
    let password=document.getElementById("password").value
    let repassword=document.getElementById("repassword").value
    let message=document.getElementById("message") 
    
    if(password.length !=0 && repassword.length !=0){
        if(password===repassword){
            message.textContent="Matched"
            message.style.backgroundColor="#3ae374"
        }
        else{
            message.textContent="Don't Matched"
            message.style.backgroundColor="#ff4d4d"
        }
    }
    else{
        alert("Please Enter All Data")
    }
}