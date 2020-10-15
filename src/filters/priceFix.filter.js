export default function priceFix(value) {
    value = parseFloat(value)
    return value.toFixed(2);
}