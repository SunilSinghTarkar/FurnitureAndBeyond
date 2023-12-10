
    let total = 0;
    let extradisc = 1;
    let adminemail = localStorage.getItem("email");
    let lsdata = JSON.parse(localStorage.getItem(adminemail)) || [];

    //navbar part starts from here
    let username = document.getElementById("userid");
    let usernameinp = localStorage.getItem("username");
    if (usernameinp == null) username.innerText = "Sign in";
    else username.innerText = usernameinp;
    username.addEventListener("click", function () {
        if (usernameinp == null) window.location.href = "./signup.html";
        else window.location.href = "./logout.html";
    })
    let icon = document.getElementById("icon");
    icon.addEventListener("click", function () {
        window.location.href = "./index.html";
    })
    // Applying coupon part starts from here
    let applybtn = document.getElementById("apply")
    applybtn.addEventListener("click", function () {
        let inputdiv = document.getElementById("coupon-input");
        applybtn.style.display = "none";
        inputdiv.style.display = "block";
    })
    let applycouponbtn = document.getElementById("couponapply")
    let coupontext = document.getElementById("coupontext")

    applycouponbtn.addEventListener("click", (() => {
        if (coupontext.value == "Sunil30"||coupontext.value == "sunil30") {
            extradisc = 0.7;
            coupontext.value = "Coupon code applied";
            coupontext.style.color = "green";
            coupontext.style.borderColor = "green";
        }
        else {
            coupontext.placeholder = "Invalid Coupon code";
            coupontext.style.color = "red";
        }
        display(lsdata);
    }));
    // Applying otp part starts from here
    let paymentbtn = document.getElementById("payment");
    let otpdiv=document.getElementById("otp-input");
    paymentbtn.addEventListener("click",(()=>{
        paymentbtn.style.display="none";
        otpdiv.style.display="block";
    }))
    let otpnumber=document.getElementById("otpnumber");
    let otpapplybtn=document.getElementById("otpapply");

    otpapplybtn.addEventListener("click",(()=>{
        if(otpnumber.value=="0000"){
            otpdiv.style.display="none";
            paymentbtn.style.display="block";
            paymentbtn.style.color="#164C00";
            paymentbtn.style.background="none";
            paymentbtn.innerText="Payment Successful ✅"; 
            paymentbtn.disabled=true;
        }
        else {
            alert("Wrong otp");
            otpnumber.value=null;
        }
    }))
     

    let container = document.getElementById("products");
    let ctotal = document.getElementById("sbtotal");
    let discount = document.getElementById("discount");
    let pretotal = document.getElementById("pretotal");
    let saving = document.getElementById("tsaving");
    let procount = document.getElementById("procount");

    display(lsdata);
    function display(data) {
        container.innerHTML = null;
        total = 0;
        let count = 0;
        data.forEach((e, i) => {
            let card = document.createElement("div");
            let img = document.createElement("img");
            let brand = document.createElement("h2");
            let price = document.createElement("h3");
            let details = document.createElement("p");
            let category = document.createElement("p");
            let quantity = document.createElement("span");
            let add = document.createElement("button");
            let sub = document.createElement("button");
            let btn = document.createElement("button");

            img.src = e.img;
            brand.innerText = e.brand;
            price.innerText = "$" + e.price;
            details.innerText = e.details;
            category.innerText = e.category;
            btn.innerText = "Remove";
            add.innerText = "+";
            quantity.innerText = e.quantity;
            sub.innerText = "-";
            total += e.price * e.quantity;
            count += e.quantity;
            //Increasing of quantity happening here
            add.addEventListener("click", function () {
                e.quantity++;
                localStorage.setItem(adminemail, JSON.stringify(lsdata))
                display(lsdata)
                console.log(e.quantity)
            })
            //Decreasing of quantity happening here
            sub.addEventListener("click", function () {
                if (e.quantity > 1) e.quantity--;
                localStorage.setItem(adminemail, JSON.stringify(lsdata))
                display(lsdata)
                console.log(e.quantity)
            })
            //Deleting  of Product for cart happening here
            btn.addEventListener("click", function () {
                lsdata.splice(i, 1);
                localStorage.setItem(adminemail, JSON.stringify(lsdata))
                display(lsdata)
            })
            /* Add to cart starts from here*/
            card.append(img, brand, price, details, category, add, quantity, sub, btn);
            container.append(card);
        })
        procount.innerText = count;
        ctotal.innerText = "$" + total;
        discount.innerText = "$" + total / 10
        saving.innerText = "$" +Math.ceil(((total / 10) + (total - total * extradisc)));
        pretotal.innerText = "$" +Math.floor((total - total / 10)*extradisc);
    }
