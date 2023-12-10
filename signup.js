
    let lsdata = JSON.parse(localStorage.getItem("userdata")) || [];
    let emailinp = document.getElementById("email");
    let continuebtn = document.getElementById("continue");

    continuebtn.addEventListener("click", function () {
        let check = false;
        lsdata.forEach((e) => {
            if (e.email == emailinp.value) check = true;
        })
        if (check) {
            localStorage.setItem("email", JSON.stringify(emailinp.value));
            window.location.href = "./password.html";

        }
        else window.location.href = "./create.html";

    })
