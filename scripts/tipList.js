import { database } from './aquariumData.js';

export const generateTipList = () => {
    let tipHTML = '<header id="tips-title">Tips</header>';

    for (const tip of database.tips) {
        tipHTML += `
            <article class="tipHTML">
                <div class="tip__details">
                    <ul class="tips">
                        <li class="tip">
                            <h2 class="tip__topic">${tip.topic}</h2>
                            <p class="tip__text">${tip.text}</p>
                        </li>
                    </ul>
                </div>
            </article>
            `;
    }
    return tipHTML
};

export const renderTipsToDOM = (tipHTML) => {
    const tipList = document.getElementById('tipList');

    if (tipList) {
        tipList.innerHTML = tipHTML;
    } else {
        console.error('Could not find element with id "tipList"');
    }
};