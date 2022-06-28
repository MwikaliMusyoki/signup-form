pwd = document.getElementById("pw1").value;
pwd2= document.getElementById("pw2").value;

if(pwd.value != pwd2){
    Error("dont match")
    alert("passwords dont match");
}