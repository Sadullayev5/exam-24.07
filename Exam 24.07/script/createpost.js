const profile = document.querySelector('.profile'); 
const postForm = document.querySelector('#post-form');
const title = document.querySelector('#title');
const postImage = document.querySelector('#postImage');
const tags = document.querySelector('#tags');
const description = document.querySelector('#description');
let user = localStorage.getItem("user") || null;


if (user) {
    profile.innerHTML = `<h2>Hello ${user}!</h2>
    <button id="logout" type="button">Log out</button>`
} 

const createPost = (e) => {
    e.preventDefault();

    const post = {
    "title" : title.value,
    "description" : description.value,
    "image" : postImage.value,
    "tags" : tags.value,
    "author" : user,
    }

    fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs" ,
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                 "Authorization" :` Berear ${localStorage.getItem("token")}`
            },
            body: JSON.stringify(post)
        }
    )
    .then(response => response.json())
    .then(data => data)
}

postForm.addEventListener('submit', createPost)

profile.addEventListener('click', (e) => {
    if (e.target.id === "logout") {
        localStorage.removeItem("user");
        localStorage.removeItem("userId");
        location.replace(location.origin + "/index.html")
    }
})
