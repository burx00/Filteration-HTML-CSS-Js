const movieData = [
    {
        id: 1,
        title: "Jarhead",
        img: "jarhead.jpg",
        category: "Action",
    },

    {
        id: 2,
        title: "***** ****",
        img: "fc.jpg",
        category: "Sci-Fiction",
    },

    {
        id: 3,
        title: "Destiny",
        img: "kader.jpg",
        category: "Drama",
    },

    {
        id: 4,
        title: "Lost Highway",
        img: "lh.jpg",
        category: "Drama",
    },

    {
        id: 5,
        title: "Maudie",
        img: "mau.jpg",
        category: "Drama",
    },

    {
        id: 6,
        title: "se7en",
        img: "seven.jpg",
        category: "Action",
    },

    
];

const productContainer = document.querySelector('.movie-container')
const linkEl = document.querySelectorAll('li a');

window.addEventListener('DOMContentLoaded', ()=>{
    displayMovieData(movieData);
})

linkEl.forEach((links)=>{
    links.addEventListener('click', (e)=>{
        const category = e.target.dataset.id;
        const movieCategory = movieData.filter(function(data){
            if(data.category === category){
                return data;
            }
        });
       if(category === "ALL"){
        displayMovieData(movieData);
       }else{
        displayMovieData(movieCategory);
       }
    
    });
});

function displayMovieData(galerija){
    let displayData = galerija.map(function(movie_items){
        return          ` <div class="movie movie1">
                          <img src="${movie_items.img}" alt="">
                          <h4>${movie_items.category}</h4>
                          <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel, provident explicabo asperiores ducimus perspiciatis quaerat!</p>
                          <h2>${movie_items.title}</h2>
                          </div>`;
    });

    displayData = displayData.join("");
    productContainer.innerHTML = displayData;

}