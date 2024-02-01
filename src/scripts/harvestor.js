export const harvestPlants = (plants) => {
    const seeds =[]
    for (const plant of plants) {
        if(Array.isArray(plant)){
            seeds.push(plant[0])
        } else{
            for(index = 0; index < plant.output; index++)
            seeds.push(plant)
        }
        
    }
    return seeds
}