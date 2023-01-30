const tabsEl = document.querySelector(".tabs");
const btnEls = document.querySelectorAll(".button");
const articleEls = document.querySelectorAll(".content");

tabsEl.addEventListener("click", (event)=>{
    const id = event.target.dataset.id;

    if (id){
        btnEls.forEach((btnEl)=>{
        btnEl.classList.remove("live");
        });
        event.target.classList.add("live");
        articleEls.forEach((articleEl)=>{
            articleEl.classList.remove("live");
        });
        const element = document.getElementById(id)
        element.classList.add("live");
    }
})