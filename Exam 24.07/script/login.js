
const $loginForm = document.querySelector('#login-form');
const $inputs = $loginForm.querySelectorAll('input');
const $link = $loginForm.querySelector('span');
const password = document.querySelector('.password');
const eye = document.querySelector('.eye');
const eyeFill = document.querySelector('.eye-fill');




const handleUserLogin = (e) =>{
    e.preventDefault();
    const values = Array.from($inputs).map(input => input.value);
    const user ={
        email: values[0],
        password: values[1],
    }
    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/login",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        }
    )
    .then (response => response.json())
    .then (data =>

    {
        if(data.status === "success"){
            console.log(data)
            let token = data.data.token
            localStorage.setItem("token", token)
            let userName =data.data.user.name
        localStorage.setItem("user", userName)
        let userId =data.data.user._id
        localStorage.setItem("userId", userId)
            location.replace(location.origin + '/pages/createpost.html')
            
        }
        else{
            alert(data.message)
        }
    }
    )
}

$loginForm.addEventListener('submit', handleUserLogin);

$link.addEventListener("click", (e) => {
    e.preventDefault();
    location.replace(location.origin + "/pages/register.html")
})

let showPassword = false;
eyeFill.style.display = "none";

eye.addEventListener('click', () => {
    if (!showPassword) {
        password.setAttribute('type', 'text');
        eye.computedStyleMap.display = "none";
        showPassword = true;
        eyeFill.style.display = "block";
    }
})

eyeFill.addEventListener('click', () => {
    if (showPassword) {
        password.setAttribute('type', 'password');
        eye.computedStyleMap.display = "block";
        showPassword = false;
        eyeFill.style.display = "none";
    }
})