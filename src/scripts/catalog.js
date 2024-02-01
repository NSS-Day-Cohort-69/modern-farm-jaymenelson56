export const catalog = (food) => {
    let foodHTML = `<article class="food">\n`
    for (const plant of food) {
        foodHTML += `<section class="plant">${plant.type}</section>`

    }
    foodHTML += `</article>`
    return foodHTML
}

