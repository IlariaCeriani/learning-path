// ************************************navbar toggle menu btn

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

// *********************************go up arrow

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

// **********************************scroll right

const recipeSection = document.getElementById('recipe-section');

recipeSection.addEventListener('scroll', (e) => {
    e.currentTarget.scrollLeft;
})


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
    },
    {
        name: "Fiorentina",
        img: "pr-images/fiorentina.jpg",
        link: "",
        info: `Prep: 10 min | Cook: 5min`,
        tags: "Meat"
    },
    {
        name: "Risotto with Saffron",
        img: "pr-images/risotto-zaf.jpg",
        link: "",
        info: `Prep: 5 min | Cook: 20min`,
        tags: "Rice"
    },
    {
        name: "Pasta Amatriciana",
        img: "pr-images/pasta-ama.jpg",
        link: "",
        info: `Prep: 20 min | Cook: 15min`,
        tags: "Pasta"
    }

];

window.addEventListener('DOMContentLoaded',function() {
    let recipeItmCreator = (item) => {
    
     let recipeItmContainer = [];
     let randomNum = () => {
        let randomItm = item[Math.floor(Math.random() * item.length)]
        return randomItm;
     }
    
     do {
         let randomItm = randomNum();
         if (!recipeItmContainer.includes(randomItm)) {
            recipeItmContainer.push(randomItm);
         } 
        
        } while (recipeItmContainer.length<3);
        
     recipeItmContainer = recipeItmContainer.map((item) => {
        return ` <article class="recipe-itm">
        <a href="${item.link}"><img src="${item.img}" alt="${item.name}">
        <h4>${item.name}</h4>
        <p>${item.info}</p></a>
        </article>`
     }).join('');

      recipeSection.innerHTML = recipeItmContainer;
    }

    recipeItmCreator(recipes);
})