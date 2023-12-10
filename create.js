
    let emailinp=document.getElementById("email");
    let firstinp=document.getElementById("first");
    let lastinp=document.getElementById("last");
    let phoneinp=document.getElementById("phone");
    let passinp=document.getElementById("password");
    let continuebtn=document.getElementById("continue");
    
    
    
    continuebtn.addEventListener("click",function(){
        let lsdata=JSON.parse(localStorage.getItem("userdata"))||[];
        if(emailinp.value=="")alert("Please enter email");
        else if(passinp.value=="")alert("Please enter password")
     else{   let obj={
            email:emailinp.value,
            first:firstinp.value,
            last:lastinp.value,
            phone:phoneinp.value,
            password:passinp.value
        }
        let check=false;
        lsdata.forEach((e)=>{
            if(e.email==emailinp.value)check=true;
        })
        if(check) alert("This email is already exit with another account")
        else{
            lsdata.push(obj);
            localStorage.setItem("userdata",JSON.stringify(lsdata));
            window.location.href="./signup.html";
        }
    }     

         
    })
