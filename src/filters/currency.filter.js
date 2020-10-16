// https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Global_Objects/Intl/NumberFormat
export default function currencyFilter(value, currency = 'USD') {
    return new Intl.NumberFormat('ua-UA', {
        style: 'currency',
        currency
    }).format(value);
}