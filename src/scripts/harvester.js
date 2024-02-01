export const harvestPlants = (plants) => {
    const seeds = []
    for (const plant of plants) {
        if (Array.isArray(plant)) {
            seeds.push(plant[1])
        } else {
            for (let index = 0; index < plant.output; index++)
                seeds.push(plant)
        }

    }
    return seeds
}