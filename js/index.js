const recipes = [
    {
        name: "Roasted Lamb with Garlic",
        img: "pr-images/lamb.jpg",
        link: "lamb.html",
        info: `Prep: 20 min | Cook: 1h 30min`,
        tags: "Meat"
    },
    {
        name: "Fondue",
        img: "pr-images/fondue.jpg",
        link: "",
        info: `Prep: 30 min | Cook: 30min`,
        tags: "Cheese"
    },
    {
        name: "Carbonara",
        img: "pr-images/carbonara.jpg",
        link: "",
        info: `Prep: 5 min | Cook: 15min`,
        tags: "Pasta"
    },
    {
        name: "Pizza",
        img: "pr-images/pizza.jpg",
        link: "",
        info: `Prep: 30 min | Cook: 20min`,
        tags: "Pizza"
    }

];

const recipeSection = document.getElementById('recipe-section');

const tagList = document.querySelector('.tag-list');

window.addEventListener('DOMContentLoaded', function () {
    recipeItmCreator(recipes);

    let btnContainer = recipes.reduce(function(values, item) {
        if (!values.includes(item.tags)) {
            values.push(item.tags);
        } 
        return values
        
    }, ["All"]);

    const tagBtns = btnContainer.map(function(item) {
        return `<li class="tag-list-itm"><button class="tag-btn" data-id="${item}">${item}</button></li>`
    }).join('');

    tagList.innerHTML = tagBtns;

    const recipeTag = document.querySelectorAll('.tag-btn');
    
    recipeTag.forEach(function(btn) {
    btn.addEventListener('click', function(e) {
        const tagsId = e.currentTarget.dataset.id;
        const recipeTag = recipes.filter(function(item) {
             if (item.tags===tagsId) {
                return item;
            }
            
        })
        if (tagsId === "All"){
            return recipeItmCreator(recipes);
        } else {
            recipeItmCreator(recipeTag);
        }
        
    })
})


})




function recipeItmCreator(item) {
    let recipeItmContainer = item.map(function(item) {
        return ` <section class="recipe-itm">
        <a href="${item.link}"><img src="${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>${item.info}</p></a>
        </section>`
    })
    recipeItmContainer = recipeItmContainer.join('');
    recipeSection.innerHTML = recipeItmContainer;
}
