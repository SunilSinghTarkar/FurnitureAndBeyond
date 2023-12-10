
    // Navbar part starts from here
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
    // Storing data to localstorage part starts from here
    let fetcheddata = [];
    async function fetchdata() {
        try {
            let data = await fetch("https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-tech-products")
            data = await data.json();
            fetcheddata = data.data;
            data.data.forEach((e) => {
                fetcheddata.push(e);
            })

        }
        catch (arr) {
            console.log("error");
        }
    }
    fetchdata();

    let form = document.querySelector('form');
    let brand = document.getElementById('brand');
    let image = document.getElementById('image');
    let price = document.getElementById('price');
    let details = document.getElementById('details');
    let category = document.getElementById('category');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        let lsdata = JSON.parse(localStorage.getItem("productdata"));
        if (lsdata == null) lsdata = fetcheddata;
        let product = {
            brand: brand.value,
            img: image.value,
            price: price.value,
            details: details.value,
            category: category.value,
            id: lsdata.length + 1,
        }
        lsdata.push(product);
        localStorage.setItem("productdata", JSON.stringify(lsdata));

        form.reset();
        alert("Product added successfully");
    })

