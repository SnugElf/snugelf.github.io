function convertCurrency() {
    const amount = parseFloat(document.getElementById('amount').value);
    const fromCurrency = document.getElementById('from').value;
    const toCurrency = document.getElementById('to').value;

    const exchangeRates = {
        USD: 1.00,
        EUR: 0.91,
        GBP: 0.78,
    };

    if (!isNaN(amount)) {
        const convertedAmount = amount * exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        document.getElementById('result').innerText = `${amount} ${fromCurrency} = ${convertedAmount.toFixed(2)} ${toCurrency}`;
    } else {
        document.getElementById('result').innerText = "Please enter a valid amount.";
    }
}
