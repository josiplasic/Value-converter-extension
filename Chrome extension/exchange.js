document.addEventListener('DOMContentLoaded', function() {
    const amount = document.querySelector('#amount');
    const currency = document.querySelector('#currency');
    const convert = document.querySelector('#convert');
    const result = document.querySelector('#result');

    const API_KEY = "Gl7qhc7YRDx/4LI7P9PepA==cBJVxNvxj9czFUCU";
    const apiUrl = "https://api.api-ninjas.com/v1/exchangerate?pair=USD_";

    convert.addEventListener('click', () => {
        const amountTotal = amount.value;
        const currencyTotal = currency.value;
        const url = apiUrl + currencyTotal;

        fetch(url, {
            headers: {
                'X-API-KEY': API_KEY
            }
        })
        .then(response => response.json())
        .then(data => {
            const rate = data.exchange_rate;
            const resultPrice = amountTotal * rate;
            result.innerHTML = `${amountTotal} ${currencyTotal} = ${resultPrice.toFixed(2)} USD`;
        })
        .catch(error => {
            console.error('Request failed', error);
            result.innerHTML = 'An error occurred, please try again later';
        });
    });
});
