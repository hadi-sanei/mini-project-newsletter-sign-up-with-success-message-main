let form = document.querySelector(".sign-up form");
let input = form.querySelector("input[type=text]");
form.addEventListener("submit", (e) => {
    if (!ValidateEmail(input)) {
        let error=document.querySelector("#validation");
        error.textContent='valid email required';
        input.style.border="3px solid #eb1919";
        input.style.backgroundColor="rgba(243, 3, 3, 0.36)";
        input.style.backgroundColor="rgba(243, 3, 3, 0.36)";
        e.preventDefault();
     }
});

function ValidateEmail(input) {
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return input.value.match(mailformat);
}