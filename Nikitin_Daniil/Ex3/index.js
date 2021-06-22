let inputNumbers = []
let count = 10
for (let elements = 0; elements < count; elements++) {
    inputNumbers[elements] = parseInt(prompt("Введите элементы массива"))
}
inputNumbers.forEach(function (elements) {
    if (elements % 3 === 0) {
        console.log(`Введённый массив ${inputNumbers}, \n Элементы кртаные 3: ${elements}`)
    }
})