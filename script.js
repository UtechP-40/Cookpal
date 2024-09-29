let arr = [
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": true,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
];

let card = `
<div class="image-container">
            <img
              src="https://images.unsplash.com/photo-1725727532120-8b2d88f47fe3?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Russian Salad"
            />
          </div>
          <div class="card-content">
            <div class="category">Veg</div>
            <div class="rate">
              <h3 class="recipe-title">Russian Salad</h3>
            <div class="rating">
              <span class="star">★</span>
              <span class="rating-value">4.5</span>
            </div>
            </div>
            <div class="bottom-card">
              <div class="time">40 min</div>
              <div>
                <div class="actions">
                  <!-- <svg class="svg" 
                  id="like"
                    width="22"
                    height="20"
                    viewBox="0 0 22 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg" >
                    <path
                      d="M15.3927 2.57866C16.5976 2.64527 17.7273 3.18541 18.5357 4.08136C19.344 4.97731 19.7656 6.15645 19.7083 7.36183C19.7083 10.1778 17.2773 11.9076 14.9444 13.982C12.6417 16.0381 11.4015 17.1619 11 17.4213C10.5627 17.1381 9.03557 15.7502 7.05557 13.982C4.71257 11.8993 2.29166 10.1531 2.29166 7.36183C2.23443 6.15645 2.65593 4.97731 3.46431 4.08136C4.27269 3.18541 5.40243 2.64527 6.60732 2.57866C7.27479 2.55843 7.93608 2.71175 8.52656 3.02361C9.11703 3.33548 9.61648 3.79523 9.97607 4.35791C10.7461 5.435 10.8744 5.97399 11.0027 5.97399C11.1311 5.97399 11.2576 5.435 12.0202 4.35516C12.3778 3.78987 12.8774 3.3283 13.4692 3.01657C14.061 2.70483 14.7242 2.55383 15.3927 2.57866ZM15.3927 0.745328C14.5603 0.718678 13.7326 0.880155 12.9712 1.21773C12.2099 1.55531 11.5345 2.0603 10.9954 2.69508C10.4567 2.06214 9.78276 1.55833 9.02324 1.22085C8.26372 0.883375 7.43808 0.720866 6.60732 0.745328C4.91595 0.811468 3.31959 1.54465 2.1673 2.78454C1.01501 4.02443 0.400567 5.67015 0.458322 7.36183C0.458322 10.671 2.79582 12.7032 5.05541 14.6677C5.31482 14.8932 5.57699 15.1205 5.83732 15.3524L6.77874 16.1939C7.80544 17.1709 8.88182 18.0943 10.0036 18.9604C10.3004 19.1526 10.6464 19.2548 11 19.2548C11.3536 19.2548 11.6996 19.1526 11.9964 18.9604C13.1539 18.0678 14.2634 17.1147 15.3202 16.105L16.1654 15.3497C16.434 15.1113 16.7062 14.8739 16.9767 14.6402C19.1162 12.7839 21.5417 10.6802 21.5417 7.36183C21.5994 5.67015 20.985 4.02443 19.8327 2.78454C18.6804 1.54465 17.084 0.811468 15.3927 0.745328Z"
                      stroke="black" 
                      stroke-width="1"
                    />
                  </svg> -->

                  <svg id="like" width="22"
                  height="20"
                  viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 0.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" 
                          stroke="red" stroke-width="2"/>
                </svg>

                  <svg class="svg"
                    width="22"
                    height="22"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.9347 15.5907C20.0485 13.6639 20.4228 11.3976 19.9877 9.21499C19.5526 7.03241 18.3377 5.08289 16.5701 3.73063C14.8025 2.37837 12.6031 1.71587 10.3827 1.86689C8.16225 2.01791 6.07277 2.97212 4.50454 4.55127C2.93632 6.13041 1.99663 8.22647 1.86103 10.4479C1.72542 12.6693 2.40317 14.8641 3.76766 16.6222C5.13215 18.3804 7.09006 19.5817 9.27561 20.0017C11.4612 20.4217 13.7249 20.0316 15.6438 18.9044L20.1667 20.1667L18.9347 15.5907Z"
                      stroke="#252525"
                      stroke-width="2"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
`

for(let obj of arr){
    obj.display = true;
}
//Function for set display
let veg = document.querySelector("#veg-recipes")
veg.addEventListener("click", () => {
    let cont = document.querySelector(".right");
    cont.innerHTML = "";

    for (let obj of arr) {
        if (obj.type !== "veg") {
            obj.display = false;
        } else {
            obj.display = true;
        }
    }
    c();
});

let non_veg = document.querySelector("#non-veg-recipes")
non_veg.addEventListener("click", () => {
    let cont = document.querySelector(".right");
    cont.innerHTML = "";

    for (let obj of arr) {
        if (obj.type !== "non-veg") {
            obj.display = false;
        } else {
            obj.display = true;
        }
    }
    c();
});

let AllRecipes = document.querySelector("#all-recipes")
AllRecipes.addEventListener("click", () => {
    let cont = document.querySelector(".right");
    cont.innerHTML = "";

    for (let obj of arr) {
        obj.display = true;
    }
    c();
});



// let card = 
function c(){
    let cont = document.querySelector(".right")
    cont.innerHTML = "";
// let card = document.querySelector(".recipe-card");
// cont.innerHTML = ""
    for(let obj of arr){
        if (obj.display === true) {
        let card1 = document.createElement("div")
        card1.className = "repp"
         card1.innerHTML = card
         let img_cont = card1.querySelector(".image-container")
         
         img_cont.innerHTML = `<img
                  src=https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141353.jpg
                  alt=${obj.name}
                />`
                card1.querySelector(".category").innerText = obj.type
    
        card1.querySelector(".recipe-title").innerText = obj.name
        card1.querySelector(".rating-value").innerText = obj.rating;
        card1.querySelector(".time").innerText = obj.time;
        let like = card1.querySelector("#like");
        like.addEventListener("click",()=>{
            if(obj.isLiked==true){
                obj.isLiked = false;
            }else{
                obj.isLiked = true;
            }

            if(obj.isLiked===true){
                card1.querySelector("#like").setAttribute('fill', 'red');
            }else{
                card1.querySelector("#like").setAttribute('fill', 'none');
            }
        })
        
        cont.append(card1)

    }
}
};
c()
let allCards = document.querySelectorAll(".repp")

