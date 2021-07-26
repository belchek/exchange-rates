'use strict';

function updateExchangeRates(update) {
    const date = document.getElementById('date');
    date.textContent = update.date;
    const usdBuyRate = document.getElementById('usd-buy-rate');
    usdBuyRate.textContent = update.usd.buyRate;
    const usdSellRate = document.getElementById('usd-sell-rate');
    usdSellRate.textContent = update.usd.sellRate;
    const eurBuyRate = document.getElementById('eur-buy-rate');
    eurBuyRate.textContent = update.eur.buyRate;
    const eurSellRate = document.getElementById('eur-sell-rate');
    eurSellRate.textContent = update.eur.sellRate;

}

const update = {
    date: '23 июля',
    usd: {
        buyRate: '74,75',
        sellRate: '76,24',
    },
    eur: {
        buyRate: '87,70',
        sellRate: '89,74',
    },

};
updateExchangeRates(update);