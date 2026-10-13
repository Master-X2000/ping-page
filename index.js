const form = document.querySelector(".notify");
const email = document.querySelector(".email");

form.addEventListener("submit", event => {
    event.preventDefault;
    validateInput();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector(".error");

    errorDisplay.innerText = message;
    inputControl.classList.add("fail");

    email.addEventListener("click", event => {
        inputControl.classList.remove("fail");
    });
}

const setSuccess = (element) => {
    const inputControl = element.parentElement;
    inputControl.classList.remove("fail");
    console.log(`valid email\nemail: ${ element.value} `);
}

const validateEmail = (emailValue) => {
    const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/g;
    const testValue = regex.test(emailValue);
    return testValue;
}

const validateInput = () => {
    const emailValue = email.value.trim().toLowerCase();

    if(emailValue === '') {
        setError(email, "Email cannot be empty");
    } else if (!validateEmail(emailValue)) {
        setError(email, "Please provide a valid email address");
    } else {
        setSuccess(email);
    }

}