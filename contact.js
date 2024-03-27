let form=document.querySelector("#submit_form");

form.addEventListener("submit",(event)=>{
    event.preventDefault();

    const formData=new FormData(event.target);

    let name=formData.get("name");//এখানে গেট হচ্ছে নাম ভ্যালু থেকে আট্রিবিউট নিচ্ছে।
    let uemail=formData.get("email");
    let password=formData.get("password");
    let number=formData.get("phone"); 
    let msg=formData.get("message")

    console.log(`N:${name},E:${uemail},P:${password},N:${number},M:${msg}`);

    //reset
    document.querySelector("#username").value='';
    document.querySelector("#email").value='';
    document.querySelector("#password").value='';
    document.querySelector("#phone").value='';
    document.querySelector("#message").value='';

})

function showFunc() {
    var passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";

    } else {
        passwordField.type = "password";
    }
}