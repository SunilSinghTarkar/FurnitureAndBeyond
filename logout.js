
    let email=document.getElementById("email");
    let name=document.getElementById("name");
    name.innerText=localStorage.getItem("username");
    email.innerText=JSON.parse(localStorage.getItem("email"));
    
   let logout=document.getElementById("logout");
   let cancel=document.getElementById("cancel");

   logout.addEventListener("click",function(){
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    alert("You are log out");
    window.location.href="/index.html";
   })
   cancel.addEventListener("click",function(){
    window.location.href="/index.html";
  
   })

   
