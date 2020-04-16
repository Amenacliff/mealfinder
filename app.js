const search = document.getElementById('submit')
const next =  document.getElementById('meals')
const searchRandom =  document.getElementById('search-random')
const inputField = document.getElementById('field')
const resultStatement  =  document.getElementById('resultstate')
const fillSelected = document.getElementById('selected')
const ingredPar = document.getElementById('ingred')

search.addEventListener('click', (event)=>{
const finalValue =  inputField.value.toLowerCase()
event.preventDefault()
 
if(finalValue.length === 0){
    alert('Please input a Value')
}
if(finalValue.length === 1){
    fillSelected.innerHTML = ''
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${finalValue}`)
    .then(res => res.json())
    .then(data =>{
        const meals = data.meals
        resultStatement.innerHTML= `Showing Result for ${finalValue}`
        next.innerHTML  = meals.map(meal =>
     `<div class='meals' id = 'clickmeal'>
    <img class ='food-image' src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h3 class='return-text'>${meal.strMeal}</h3>
    </div>`
        )
        const cards = document.getElementsByClassName('food-image')
        Array.from(cards).map(card =>{
            card.addEventListener('click',(event)=>{
                const specs = meals.find(meal=>
                    meal.strMeal.toLowerCase() === event.target.alt.toLowerCase()
                    )
                    const ingredent = specs.strInstructions.split('.')
                    const ingredentPiece = []
                    const measurements = []
                    ingredentPiece.push(specs.strIngredient1)
                    ingredentPiece.push(specs.strIngredient2)
                    ingredentPiece.push(specs.strIngredient3)
                    ingredentPiece.push(specs.strIngredient4)
                    ingredentPiece.push(specs.strIngredient5)
                    ingredentPiece.push(specs.strIngredient6)
                    ingredentPiece.push(specs.strIngredient7)
                    ingredentPiece.push(specs.strIngredient8)
                    ingredentPiece.push(specs.strIngredient9)
                    ingredentPiece.push(specs.strIngredient10)
                    ingredentPiece.push(specs.strIngredient11)
                    ingredentPiece.push(specs.strIngredient12)
                    ingredentPiece.push(specs.strIngredient13)
                    ingredentPiece.push(specs.strIngredient14)
                    ingredentPiece.push(specs.strIngredient15)
                    ingredentPiece.push(specs.strIngredient16)
                    ingredentPiece.push(specs.strIngredient17)
                    ingredentPiece.push(specs.strIngredient18)
                    ingredentPiece.push(specs.strIngredient19)
                    ingredentPiece.push(specs.strIngredient20)

                    measurements.push(specs.strMeasure1)
                    measurements.push(specs.strMeasure2)
                    measurements.push(specs.strMeasure3)
                    measurements.push(specs.strMeasure4)
                    measurements.push(specs.strMeasure5)
                    measurements.push(specs.strMeasure6)
                    measurements.push(specs.strMeasure7)
                    measurements.push(specs.strMeasure8)
                    measurements.push(specs.strMeasure9)
                    measurements.push(specs.strMeasure10)
                    measurements.push(specs.strMeasure11)
                    measurements.push(specs.strMeasure12)
                    measurements.push(specs.strMeasure13)
                    measurements.push(specs.strMeasure14)
                    measurements.push(specs.strMeasure15)
                    measurements.push(specs.strMeasure16)
                    measurements.push(specs.strMeasure17)
                    measurements.push(specs.strMeasure18)
                    measurements.push(specs.strMeasure19)
                    measurements.push(specs.strMeasure20)

                    const filteredMeasure =  measurements.filter(measure =>{
                        return measure !== " " && measure !== "" && measure !== null
                    })
                    const filteredPiece = ingredentPiece.filter(piece=>{
                       return  piece !== " "  && piece !== "" && piece !== null
                    })
                fillSelected.innerHTML = 
                `
                <h1 class = 'resulthead'>${specs.strMeal}</h1><br><br>
                <img class ='food-image-b' src="${specs.strMealThumb}" alt="food" ><br><br>
                <div class ='infoDeep'>
                    <p class = 'spectext'>${specs.strArea}</p><br><br>
                    <p class = 'spectext'>${specs.strCategory}</p><br><br>
                    </div><br<br>
                <div>
                ${ingredent.map(ingred=>
                    `
                    <p class = 'ingred'>${ingred}</p>
                    `)}
                </div><br><br>
                <h2 class = 'ingredientHead'>Ingredients</h2><br><br>
                <div class= 'ingredient-div'>
                ${filteredPiece.map((piece, index) =>
                `<h4 class = 'ingredents-tags'>${piece}, Measure : ${filteredMeasure[index] === undefined ? 'By Taste' : filteredMeasure[index]}</h4>`
                )}


                    
                </div><br><br>
                     <h1 class= 'video-h1' >Video on How to Prepare ${specs.strMeal}</h1><br>
                     <button class = 'video-btn'><a href =${specs.strYoutube}>Video on ${specs.strMeal}</a<</button>

                `
                
            })
            
        
        })
       })
       .catch((err)=>{
        err = 'NO RESULTS FOUND',
        resultStatement.innerText = err
        next.innerHTML ='';
        fillSelected.innerHTML = ''
       })
}

else  if(finalValue.length > 0){
    fillSelected.innerHTML = ''
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${finalValue}`)
    .then(res => res.json())
    .then(data =>{
        const meals = data.meals
        resultStatement.innerHTML= `Showing Result for ${finalValue}`
        next.innerHTML  = meals.map(meal =>
     `<div class='meals' id = 'clickmeal'>
    <img class ='food-image' src="${meal.strMealThumb}" alt="${meal.strMeal}">
    <h3 class='return-text'>${meal.strMeal}</h3>
    </div>`
        )
        const cards = document.getElementsByClassName('food-image')
        Array.from(cards).map(card =>{
            card.addEventListener('click',(event)=>{
                const specs = meals.find(meal=>
                    meal.strMeal.toLowerCase() === event.target.alt.toLowerCase()
                    )
                    const ingredent = specs.strInstructions.split('.')
                    const ingredentPiece = []
                    const measurements = []
                    ingredentPiece.push(specs.strIngredient1)
                    ingredentPiece.push(specs.strIngredient2)
                    ingredentPiece.push(specs.strIngredient3)
                    ingredentPiece.push(specs.strIngredient4)
                    ingredentPiece.push(specs.strIngredient5)
                    ingredentPiece.push(specs.strIngredient6)
                    ingredentPiece.push(specs.strIngredient7)
                    ingredentPiece.push(specs.strIngredient8)
                    ingredentPiece.push(specs.strIngredient9)
                    ingredentPiece.push(specs.strIngredient10)
                    ingredentPiece.push(specs.strIngredient11)
                    ingredentPiece.push(specs.strIngredient12)
                    ingredentPiece.push(specs.strIngredient13)
                    ingredentPiece.push(specs.strIngredient14)
                    ingredentPiece.push(specs.strIngredient15)
                    ingredentPiece.push(specs.strIngredient16)
                    ingredentPiece.push(specs.strIngredient17)
                    ingredentPiece.push(specs.strIngredient18)
                    ingredentPiece.push(specs.strIngredient19)
                    ingredentPiece.push(specs.strIngredient20)

                    measurements.push(specs.strMeasure1)
                    measurements.push(specs.strMeasure2)
                    measurements.push(specs.strMeasure3)
                    measurements.push(specs.strMeasure4)
                    measurements.push(specs.strMeasure5)
                    measurements.push(specs.strMeasure6)
                    measurements.push(specs.strMeasure7)
                    measurements.push(specs.strMeasure8)
                    measurements.push(specs.strMeasure9)
                    measurements.push(specs.strMeasure10)
                    measurements.push(specs.strMeasure11)
                    measurements.push(specs.strMeasure12)
                    measurements.push(specs.strMeasure13)
                    measurements.push(specs.strMeasure14)
                    measurements.push(specs.strMeasure15)
                    measurements.push(specs.strMeasure16)
                    measurements.push(specs.strMeasure17)
                    measurements.push(specs.strMeasure18)
                    measurements.push(specs.strMeasure19)
                    measurements.push(specs.strMeasure20)

                    const filteredMeasure =  measurements.filter(measure =>{
                        return measure !== "" && measure !== " " && measure !== null
                    })
                    const filteredPiece = ingredentPiece.filter(piece=>{
                       return piece !== "" && piece !== " " && piece !== null
                    })
                fillSelected.innerHTML = 
                `
                <h1 class = 'resulthead'>${specs.strMeal}</h1><br><br>
                <img class ='food-image-b' src="${specs.strMealThumb}" alt="food" ><br><br>
                <div class ='infoDeep'>
                    <p class = 'spectext'>${specs.strArea}</p><br><br>
                    <p class = 'spectext'>${specs.strCategory}</p><br><br>
                    </div><br<br>
                <div>
                ${ingredent.map(ingred=>
                    `
                    <p class = 'ingred'>${ingred}</p>
                    `)}
                </div><br><br>
                <h2 class = 'ingredientHead'>Ingredients</h2><br><br>
                <div class= 'ingredient-div'>
                ${filteredPiece.map((piece, index) =>
                `<h4 class = 'ingredents-tags'>${piece}, Measure : ${filteredMeasure[index] === undefined ? 'By Taste' : filteredMeasure[index]}</h4>`
                )}


                    
                </div><br><br>
                     <h1 class= 'video-h1' >Video on How to Prepare ${specs.strMeal}</h1><br>
                     <button class = 'video-btn'><a href =${specs.strYoutube}>Video on ${specs.strMeal}</a<</button>

                `
                
            })
            
        
        })
       })
       .catch((err)=>{
        err = 'NO RESULTS FOUND',
        resultStatement.innerText = err
        next.innerHTML ='';
        fillSelected.innerHTML = ''
       })
}


    
})

searchRandom.addEventListener('click',(event)=>{

    next.innerHTML = ''
    resultStatement.innerHTML = ''
    event.preventDefault()

    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
    .then(res => res.json())
    .then(data=>{
        const meals = data.meals
    //     next.innerHTML  = meals.map(meal =>
    //  `<div class='meals' id = 'clickmeal'>
    // <img class ='food-image' src="${meal.strMealThumb}" alt="${meal.strMeal}">
    // <h3 class='return-text'>${meal.strMeal}</h3>
    // </div>`
    //     )
    const specs = meals[0]
        const ingredent = specs.strInstructions.split('.')
        const ingredentPiece = []
        const measurements = []
        ingredentPiece.push(specs.strIngredient1)
        ingredentPiece.push(specs.strIngredient2)
        ingredentPiece.push(specs.strIngredient3)
        ingredentPiece.push(specs.strIngredient4)
        ingredentPiece.push(specs.strIngredient5)
        ingredentPiece.push(specs.strIngredient6)
        ingredentPiece.push(specs.strIngredient7)
        ingredentPiece.push(specs.strIngredient8)
        ingredentPiece.push(specs.strIngredient9)
        ingredentPiece.push(specs.strIngredient10)
        ingredentPiece.push(specs.strIngredient11)
        ingredentPiece.push(specs.strIngredient12)
        ingredentPiece.push(specs.strIngredient13)
        ingredentPiece.push(specs.strIngredient14)
        ingredentPiece.push(specs.strIngredient15)
        ingredentPiece.push(specs.strIngredient16)
        ingredentPiece.push(specs.strIngredient17)
        ingredentPiece.push(specs.strIngredient18)
        ingredentPiece.push(specs.strIngredient19)
        ingredentPiece.push(specs.strIngredient20)

        measurements.push(specs.strMeasure1)
        measurements.push(specs.strMeasure2)
        measurements.push(specs.strMeasure3)
        measurements.push(specs.strMeasure4)
        measurements.push(specs.strMeasure5)
        measurements.push(specs.strMeasure6)
        measurements.push(specs.strMeasure7)
        measurements.push(specs.strMeasure8)
        measurements.push(specs.strMeasure9)
        measurements.push(specs.strMeasure10)
        measurements.push(specs.strMeasure11)
        measurements.push(specs.strMeasure12)
        measurements.push(specs.strMeasure13)
        measurements.push(specs.strMeasure14)
        measurements.push(specs.strMeasure15)
        measurements.push(specs.strMeasure16)
        measurements.push(specs.strMeasure17)
        measurements.push(specs.strMeasure18)
        measurements.push(specs.strMeasure19)
        measurements.push(specs.strMeasure20)

        const filteredMeasure =  measurements.filter(measure =>{
            return measure !== " " && measure !== "" && measure !== null
        })
        const filteredPiece = ingredentPiece.filter(piece=>{
           return  piece !== " "  && piece !== "" && piece !== null
        })
    fillSelected.innerHTML = 
    `
    <h1 class = 'resulthead'>${specs.strMeal}</h1><br><br>
    <img class ='food-image-b' src="${specs.strMealThumb}" alt="food" ><br><br>
    <div class ='infoDeep'>
        <p class = 'spectext'>${specs.strArea}</p><br><br>
        <p class = 'spectext'>${specs.strCategory}</p><br><br>
        </div><br<br>
    <div>
    ${ingredent.map(ingred=>
        `
        <p class = 'ingred'>${ingred}</p>
        `)}
    </div><br><br>
    <h2 class = 'ingredientHead'>Ingredients</h2><br><br>
    <div class= 'ingredient-div'>
    ${filteredPiece.map((piece, index) =>
    `<h4 class = 'ingredents-tags'>${piece}, Measure : ${filteredMeasure[index] === undefined ? 'By Taste' : filteredMeasure[index]}</h4>`
    )}


        
    </div><br><br>
         <h1 class= 'video-h1' >Video on How to Prepare ${specs.strMeal}</h1><br>
         <button class = 'video-btn'><a href =${specs.strYoutube}>Video on ${specs.strMeal}</a<</button>

    `
    
})



})