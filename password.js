
    let lsdata = JSON.parse(localStorage.getItem("userdata")) || [];
    let passinp = document.getElementById("pass");
    let continuebtn = document.getElementById("continue");
    let email = document.getElementById("email");
    email.innerText = JSON.parse(localStorage.getItem("email"));

    continuebtn.addEventListener("click", function () {
        let check = false;
        lsdata.forEach((e) => {
            if (e.email == email.innerText) {
                if (e.password == passinp.value) {
                    localStorage.setItem("username", e.first);
                    check = true;
                }
            }
        })
        if (check) {
            if (email.innerText == "sunilsinghtarkar1@gmail.com") window.location.href = "./admin.html";
            else window.location.href = "./index.html";
        }
        else alert("Wrong Password");

    })