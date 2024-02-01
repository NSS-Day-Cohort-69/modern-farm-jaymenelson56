import { createPlan } from './plan.js'
import { addPlant, usePlants } from "./field.js"
import { plantSeed } from "./tractor.js"
import { harvestPlants } from "./harvester.js"
import { catalog } from "./catalog.js"


const yearlyPlan = createPlan()

const fieldSeed = plantSeed(yearlyPlan)

const fieldPlot = addPlant(fieldSeed)

const fieldPlants = usePlants(fieldPlot)

const fieldHarvest = harvestPlants(fieldPlants)

const log = catalog(fieldHarvest)


const parentHTML = document.querySelector('#container')

parentHTML.innerHTML = log


