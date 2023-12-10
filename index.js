
    let username=document.getElementById("userid");
    let usernameinp=localStorage.getItem("username");
    console.log(usernameinp)
    if(usernameinp==null)username.innerText="Sign in";
    else username.innerText=usernameinp;
    username.addEventListener("click",function(){
        if(usernameinp==null)window.location.href="./signup.html";
        else window.location.href="./logout.html";
    })
    let cart=document.getElementById("cart");
    cart.addEventListener("click",function(){
        window.location.href="/cart.html"
    })
    let container_1 = document.getElementById("container-1");
    let container_2 = document.getElementById("container-2");
    let container_3 = document.getElementById("container-3");
    let container_4 = document.getElementById("container-4");
    let container_5 = document.getElementById("container-5");
    let container_6 = document.getElementById("container-6");
    let container_7 = document.getElementById("catbar");

    container_1.addEventListener("click", function () {
        window.location.href = "./products.html";
    })
    container_2.addEventListener("click", function () {
        window.location.href = "./products.html";
    })
    container_3.addEventListener("click", function () {
        window.location.href = "./products.html";
    })
    container_4.addEventListener("click", function () {
        window.location.href = "./products.html";
    })
    container_5.addEventListener("click", function () {
        window.location.href = "./products.html";
    })
    container_6.addEventListener("click", function () {
        window.location.href = "./products.html";
    })
    container_7.addEventListener("click", function () {
        window.location.href = "./products.html";
    })
 //Default data fetching starts from here
 
    let fetcheddata =JSON.parse(localStorage.getItem("productdata"))|| [];
    console.log(fetcheddata.length);
    async function fetchdata() {
        try {
            let data = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
            data = await data.json();
            fetcheddata = data.data;
            data.data.forEach((e) => {
                fetcheddata.push(e);
            })
         localStorage.setItem("productdata", JSON.stringify(fetcheddata));
        }
        catch (arr) {
            console.log("error");
        }
    }
  if(!fetcheddata.length)  fetchdata();
