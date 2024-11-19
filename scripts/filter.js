import { database } from './aquariumData.js';

export const filterFish = () => {
    let newFishList = {
            holyFish: [],
            soldierFish: [],
            regularFish: []
        };

    for (const fish of database.fish) {
            if (fish.length % 3 === 0) {
                newFishList.holyFish.push(fish);
            }

            if (fish.length % 5 === 0) {
                newFishList.soldierFish.push(fish);
            }

            if (fish.length % 3 !== 0 && fish.length % 5 !== 0) {
                newFishList.regularFish.push(fish);
            }
        }
        return newFishList
};

//  const newFilteredFishList = filterFish();
//  console.log(newFilteredFishList.holyFish);
//  console.log(newFilteredFishList.soldierFish);
//  console.log(newFilteredFishList.regularFish);

