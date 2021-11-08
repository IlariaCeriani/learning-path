//toggle menu btn
const menuBtn = document.getElementById('menu-toggle-btn');
const nav = document.getElementById('nav');


menuBtn.addEventListener('click', function (){
    nav.classList.toggle('nav');
})

document.addEventListener('click', function(e) {
    if (!menuBtn.contains(e.target) && nav.classList.contains('nav')) {
        nav.classList.remove('nav');
    }
    
})


// tags and recipes 

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

    //sort an array of strings alphabetically
    btnContainer.sort();

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

    // LINK COPIED WITH TIMEOUT FUNCTION
 
    const shareBtns = document.querySelectorAll('.share-btn');
    const copiedMsgs = document.querySelectorAll('.copied-msg');
    
   shareBtns.forEach ((btn) => {
       btn.addEventListener('click', (e) => {
           copiedMsgs.forEach((item) => {
               if (item.parentElement.contains(e.target)) {
                   item.classList.add('show-msg');
                   setTimeout(function() {
                       item.classList.remove('show-msg');
                   }, 1000);
               }
           })
       })
   })
    

})




function recipeItmCreator(item) {
    let recipeItmContainer = item.map(function(item) {
        return ` <article class="recipe-itm">
        <a href="${item.link}"><img src="${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>${item.info}</p></a>
        <button class="share-btn"><i class="far fa-share-square share-icon"></i><span class="copied-msg">Link copied!</span></button>
        </article>`
    })
    recipeItmContainer = recipeItmContainer.join('');
    recipeSection.innerHTML = recipeItmContainer;
}


//go up arrow

const upBtn = document.getElementById('go-up-btn');

window.addEventListener('DOMContentLoaded', function() {
    upBtn.style.display = 'none';
})
window.onscroll = function(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        upBtn.style.display = 'block';
    } else {
        upBtn.style.display = 'none';
    }
};

upBtn.addEventListener('click', function() {
   document.body.scrollTop = 0;  //for Safari
   document.documentElement.scrollTop = 0;  //for chrome, firefox, IE, Opera
})

//scroll right
const main = document.getElementById('recipe-section');

main.addEventListener('scroll', (e) => {
    e.currentTarget.scrollLeft;
})
