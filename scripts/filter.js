import { database } from './aquariumData.js';

export const mostHolyFish = () => {
    let holyFish = [];

    for (const fish of database.fish) {
        if (fish.length % 3 === 0) {
            holyFish += fish;
        }
    }

    return holyFish
};

export const soldierFish = () => {
     let soldier = [];

     for (const fish of database.fish) {
        if (fish.length % 5 === 0) {
            soldier += fish;
        }
     }
     return soldier
};

export const regularFish = () => {
    let regular = [];

    for (const fish of database.fish) {
        if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
            regular += fish;
        }
    }
    return regular
};

// const holyFish = mostHolyFish();
// console.log(holyFish)

// const soldier = soldierFish();
// console.log(soldier)

// const regular = regularFish();
// console.log(regular)
