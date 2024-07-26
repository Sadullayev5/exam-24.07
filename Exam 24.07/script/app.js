
const cardWrapper = document.querySelector(".card__wrapper");

const cutting = (text,limit)=> {
    if (text.length > limit ) {
      return text.slice(0, limit) + "... "
    }
    return text
  }

fetch("https://blog-post-production-b61c.up.railway.app/api/v1/blogs")
    .then((response) => response.json())
    .then((data) => {
        data.data.forEach((blog) => {
            const card = document.createElement("div");
            card.classList.add("card");
            card.setAttribute("data-id", blog._id);
            card.innerHTML = `
                    <div class="card__image">
                        <img src="${blog.image}" alt="">
                    </div>
                    <div class="card__content">
                        <h3>${cutting(blog.title , 20)}</h3>
                        <p>${cutting(blog.description , 100 )}</p>
                        <div class="card__profile">
                            <div class="card__profile__image">
                                <img src="./images/profile.png" alt="">
                            </div>
                            <div class="card__profile__content">
                                <p>${blog.author}</p>
                                <p>Author</p>
                            </div>
                        </div>
                    </div>
            `
            cardWrapper.appendChild(card);

            card.addEventListener("click", () => {
                localStorage.removeItem("blog")
                fetch(`https://blog-post-production-b61c.up.railway.app/api/v1/blogs/${blog._id}`)
                .then((response) => response.json())
                .then((data) => {
                    localStorage.setItem("blog", JSON.stringify(data.data))
                    location.replace(location.origin + "/pages/singleuser.html")
                })
                
            })
        })  
})