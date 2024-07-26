
const hero = document.querySelector(".hero");

const blog = JSON.parse(localStorage.getItem("blog")) || null;

hero.innerHTML = ""

if(blog){
hero.innerHTML = `
<div class="hero-title">
<h2>${blog.title}</h2>
<p>${blog.tags}</p>
</div>
<div class="hero__image">
<img src="${blog.image}" alt="">
</div>
<div class="hero__content">
<p class="hero-description">${blog.description}</p>
</div>`
}