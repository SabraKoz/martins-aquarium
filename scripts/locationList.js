import { database } from './aquariumData.js';

export const generateLocationList = () => {
    let locationHTML = '';

    for (const location of database.locations) {
        locationHTML += `
            <article class="locations">
                <div class="location__details">
                    <section class="location">
                        <h2 class="location__title">${location.name} in ${location.country}</h2>
                        <p class="location__description">${location.description}</p>
                    </section>
                </div>
            </article>
            `;
    }
    return locationHTML
};

export const renderLocationsToDOM = (locationHTML) => {
    const locationList = document.getElementById('locationList');

    if (locationList) {
        locationList.innerHTML = locationHTML;
    } else {
        console.error('Could not find element with id "locationList"');
    }
};