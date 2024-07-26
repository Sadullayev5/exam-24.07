
const $regForm = document.querySelector('#reg-form');
const $inputs = $regForm.querySelectorAll('input');
const $link = $regForm.querySelector('span');
const password = document.querySelector('.password');
const eye = document.querySelector('.eye');
const eyeFill = document.querySelector('.eye-fill');


const handleUserRegister = (e) =>{
    e.preventDefault();

    const values = Array.from($inputs).map(input => input.value);
    const user ={
        name: values[0],
        email: values[1],
        password: values[2],
    }
    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/user/register" , 
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
            location.replace(location.origin + '/pages/login.html')
        }
        else{
            alert(data.message)
        }
        
    }
    )
}

$regForm.addEventListener('submit', handleUserRegister);

$link.addEventListener('click', (e) => {
    e.preventDefault();
    location.replace(location.origin + "/pages/login.html")
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
