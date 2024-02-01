import { createPlan } from './plan.js'
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { addPlant, usePlants } from "./field.js"
import { plantSeed } from "./tractor.js"
import { harvestPlants } from "./harvestor.js"
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const asparagusSeed = createAsparagus()
const plantAdd = addPlant()
const plantsUse = usePlants()

const yearlyPlan = createPlan()

const planThis = plantSeed(yearlyPlan)






