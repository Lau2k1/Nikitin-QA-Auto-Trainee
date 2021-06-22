let inputName = prompt ("Введите имя")
if (inputName === "Вячеслав") {
    alert(`Здравствуйте ${inputName}`)
} else if (inputName > 0) {
    alert(`Вы ввели ${inputName}, а надо имя`)
} else if (inputName === "") {
    alert("Вы ничего не ввели, необходио ввести имя")
} else {
    alert(`Нет такого имени  ${inputName}`)
}