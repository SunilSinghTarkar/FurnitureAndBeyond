
    //  log in  part start from here
    let username = document.getElementById("userid");
    let usernameinp = localStorage.getItem("username");
    console.log(usernameinp)
    if (usernameinp == null) username.innerText = "Sign in";
    else username.innerText = usernameinp;
    //log out part starts from here
    username.addEventListener("click", function () {
        if (usernameinp == null) window.location.href = "./signup.html";
        else window.location.href = "./logout.html";
    })

    // For move on admin page part starts from here;
    let admincheck = false;
    let adminemail = localStorage.getItem("email");
    let home = document.getElementById("home");

    let adminaccess = document.createElement("a");
    if (adminemail == '"sunilsinghtarkar1@gmail.com"') {
        adminaccess.innerText = "ADMIN PAGE";
        home.append(adminaccess);
        admincheck = true;
    }
    if (admincheck) adminaccess.addEventListener("click", () => {
        window.location.href = "./admin.html";
    })
    // ***********
    let cart = document.getElementById("cart");
    cart.addEventListener("click", function () {
        window.location.href = "/cart.html"
    })
    let icon = document.getElementById("icon");
    let container = document.getElementById("container-2");
    icon.addEventListener("click", function () {
        window.location.href = "./index.html";
    })
    let globaldata = JSON.parse(localStorage.getItem("productdata")) || [];

    display(globaldata);
    // filer part starts from here
    let filtercat = document.getElementById("filterbycategory");
    let filterpri = document.getElementById("filterbyprice");
    let data = globaldata;

    // filter by category starts from here
    filtercat.addEventListener("change", function () {
        if (filtercat.value == "") data = globaldata;
        if (filtercat.value !== "") {
            data = globaldata.filter((e) => {
                return filtercat.value == e.category;
            })
        }
        display(data);
    })
    // filter by price starts from here
    filterpri.addEventListener("change", function () {
        if (data[0] == null) data = globaldata;
        let ndata = data;
        console.log(ndata)
        if (filterpri.value == "low") ndata = data.sort((a, b) => a.price - b.price);
        else if (filterpri.value == "high") ndata = data.sort((a, b) => b.price - a.price);
        display(ndata);

    })
    // search by name starts from here
    let searchinp = document.getElementById("searchinp");
    let searchbtn = document.getElementById("search");

    searchbtn.addEventListener("click", function () {
        let searchdata = globaldata;
        if (searchinp.value !== "") {
            searchdata = searchdata.filter((e) => {
                return searchinp.value == e.brand;
            })
        }
        console.log(searchdata);
        display(searchdata);
        searchinp.value = null;
    })

    let lsdata = JSON.parse(localStorage.getItem(adminemail)) || [];
    //Display part start from here
    function display(data) {
        container.innerHTML = null;
        data.forEach((e) => {
            let card = document.createElement("div");
            let img = document.createElement("img");
            //  img.setAttribute("width","200px");
            img.setAttribute("height", "200px");
            let brand = document.createElement("h2");
            let price = document.createElement("h3");
            let details = document.createElement("p");
            let category = document.createElement("p");
            let btn = document.createElement("button");

            img.src = e.img;
            brand.innerText = e.brand;
            price.innerText = "$" + e.price;
            details.innerText = e.details;
            category.innerText = e.category;
            btn.innerText = "Add To Cart";

            // add to cart part starts from here
            btn.addEventListener("click", function () {
                if(!usernameinp)window.location.href="./signup.html";
              else  if (checkduplicate(e)) { alert("Product Already in Cart"); }
                else {
                    lsdata.push({ ...e, quantity: 1 });
                    localStorage.setItem(adminemail, JSON.stringify(lsdata));
                    alert("Product Added To Cart")
                }
            })

            card.append(img, brand, price, details, category, btn);
            container.append(card);
        })
    }
    function checkduplicate(data) {

        for (let i = 0; i < lsdata.length; i++) {
            if (lsdata[i].id == data.id) return true;
        }
        return false;
    }
