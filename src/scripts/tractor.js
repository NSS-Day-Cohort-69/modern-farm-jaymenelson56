import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createPlan } from './plan.js'
const yearlyPlan = createPlan()
const cornSeed = createCorn()
const potatoSeed = createPotato()
const soybeanSeed = createSoybean()
const sunflowerSeed = createSunflower()
const wheatSeed = createWheat()
const asparagusSeed = createAsparagus()
export const plantSeed = (plan) => {
    const row = []

    for (const plots of plan) {

        for (const plot of plots) {

            if (plot === "Corn") {
                row.push(cornSeed)
            } else if (plot === "Asparagus") {
                row.push(asparagusSeed)
            } else if (plot === "Potato") {
                row.push(potatoSeed)

            } else if (plot === "Soybean") {
                row.push(soybeanSeed)
            } else if (plot === "Sunflower") {
                row.push(sunflowerSeed)
            } else if (plot === "Wheat") {
                row.push(wheatSeed)
            }
        }
    }
    return row
}