const field = []




export const addPlant = (seed) => {

    for (const plant of seed) {


        field.push(plant)
    }


    return field
}

console.log(field)

export const usePlants = (field) => {
    const newField = [...field]

    return newField
}
