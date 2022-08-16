window.onload = ()=>{
    mapButtons();
}

function mapButtons() {

    $('#submit-btn').on("click", function (event) {
        event.preventDefault();
        handleSubmit();
    })

}

function handleSubmit() {

    let username = $('#username').val();
    let password = $('#password').val();
    let passwordConfirm = $('#passwordConfirm').val();

    let user = {
        id: 1,
        user: username,
        pass: password
    }

    localStorage.setItem("user", JSON.stringify(user));
}


