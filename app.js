const search = document.getElementById('submit')
const next =  document.getElementById('meals')
const searchRandom =  document.getElementById('search-random')
const inputField = document.getElementById('field')
const resultStatement  =  document.getElementById('resultstate')
const fillSelected = document.getElementById('selected')
const ingredPar = document.getElementById('ingred')



const getSpecData = (textToFind, arrayOfSpecs)=>{

    const specData = arrayOfSpecs.filter(eachSpec=>{
        let specArray = eachSpec
        if(specArray[0].includes(textToFind) && specArray[1].trim() !=''){
            return specArray[1]
        }
    })    

    const finalArrayOfSpecsNeeded = specData.map(eachSpec=>{
        return eachSpec[1]
    })

    return finalArrayOfSpecsNeeded
}


search.addEventListener('click', (event)=>{
const finalValue =  inputField.value.toLowerCase()
event.preventDefault()
 
if(finalValue.length === 0){
    alert('Please input a Value')
}
else  if(finalValue.length > 0){
    let searchString =  finalValue.length === 1 ? 'f' : finalValue.length > 1 ? 's': ''
    fillSelected.innerHTML = ''
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?${searchString}=${finalValue}`)
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
                    const instructions = specs.strInstructions.split('.')

                    const arrayOfSpecsData =  Object.entries(specs)
                    
                    const ingredents = getSpecData('strIngredient', arrayOfSpecsData)
                    const measurements = getSpecData('strMeasure', arrayOfSpecsData)

                const newFillSeciton = 
                `
                <h1 class = 'resulthead'>${specs.strMeal}</h1><br><br>
                <img class ='food-image-b' src="${specs.strMealThumb}" alt="food" ><br><br>
                <div class ='infoDeep'>
                    <p class = 'spectext'>${specs.strArea}</p><br><br>
                    <p class = 'spectext'>${specs.strCategory}</p><br><br>
                    </div><br<br>
                <div>
                ${instructions.map(ingred=>
                    `
                    <p class = 'ingred'>${ingred}</p>
                    `)}
                </div><br><br>
                <h2 class = 'ingredientHead'>Ingredients</h2><br><br>
                <div class= 'ingredient-div'>
                ${ingredents.map((piece, index) =>
                `<h4 class = 'ingredents-tags'>${piece} Measure : ${measurements[index] === undefined ? 'By Taste' : measurements[index]}</h4>`
                )}

                    
                </div><br><br>
                     <h1 class= 'video-h1' >Video on How to Prepare ${specs.strMeal}</h1><br>
                     <button class = 'video-btn'><a href =${specs.strYoutube}>Video on ${specs.strMeal}</a<</button>

                `
                
                 fillSelected.innerHTML = newFillSeciton.replaceAll(',', '')
                 fillSelected.scrollIntoView({
                     behavior : 'smooth'
                 })
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
    const arrayOfSpecsData =  Object.entries(specs)

    const instructions = specs.strInstructions.split('.')

                    
    const ingredents = getSpecData('strIngredient', arrayOfSpecsData)
    const measurements = getSpecData('strMeasure', arrayOfSpecsData)
    const newFillSeciton = 
                `
                <h1 class = 'resulthead'>${specs.strMeal}</h1><br><br>
                <img class ='food-image-b' src="${specs.strMealThumb}" alt="food" ><br><br>
                <div class ='infoDeep'>
                    <p class = 'spectext'>${specs.strArea}</p><br><br>
                    <p class = 'spectext'>${specs.strCategory}</p><br><br>
                    </div><br<br>
                <div>
                ${instructions.map(ingred=>
                    `
                    <p class = 'ingred'>${ingred}</p>
                    `)}
                </div><br><br>
                <h2 class = 'ingredientHead'>Ingredients</h2><br><br>
                <div class= 'ingredient-div'>
                ${ingredents.map((piece, index) =>
                `<h4 class = 'ingredents-tags'>${piece} Measure : ${measurements[index] === undefined ? 'By Taste' : measurements[index]}</h4>`
                )}

                    
                </div><br><br>
                     <h1 class= 'video-h1' >Video on How to Prepare ${specs.strMeal}</h1><br>
                     <button class = 'video-btn'><a href =${specs.strYoutube}>Video on ${specs.strMeal}</a<</button>

                `

                 fillSelected.innerHTML = newFillSeciton.replaceAll(',', '')  
})
})