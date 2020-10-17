export default function currencyFilter(value, discount) {
    return Math.ceil(value - value * discount / 100);
}