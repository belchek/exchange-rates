'use strict';

function exchange (date, usd, eur) {
    this.date = date;
    this.usd = usd;
    this.eur = eur;
}

function updateExchangeRates(exchange) {
    const date = document.getElementById('date');
    date.textContent = exchange.date;
    const usdBuyRate = document.getElementById('usd-buy-rate');
    usdBuyRate.textContent = exchange.usd.buyRate;
    const usdSellRate = document.getElementById('usd-sell-rate');
    usdSellRate.textContent = exchange.usd.sellRate;
    const eurBuyRate = document.getElementById('eur-buy-rate');
    eurBuyRate.textContent = exchange.eur.buyRate;
    const eurSellRate = document.getElementById('eur-sell-rate');
    eurSellRate.textContent = exchange.eur.sellRate;
}

function handleSubmit() {

    console.log(exchange);
    return exchange;
}

function handleSuccess(evt) {
    if (evt.target.status !== 200) {
        // TODO: handle error
        return;
    }

    const update = JSON.parse(evt.target.responseText);
    // TODO: work with data
    return update;
}
const request = new XMLHttpRequest();
request.open('GET', 'http://localhost:9999/api/hw13');
request.responseType = 'json';
request.onload = handleSuccess;
request.send();
console.log(request.response);
const update = new exchange();
updateExchangeRates(update);