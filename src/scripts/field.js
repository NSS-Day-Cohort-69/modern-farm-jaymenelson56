import { plantSeed } from "./tractor.js"

const field = []




export const addPlant = () => {
    const plantPlan = plantSeed()
    for (const plant of plantPlan) {
       
        
        field.push(plant)
    }
    

    return field
}

console.log(field)

export const usePlants = () => {

    return field.map(grass => ({ ...grass }))

}
