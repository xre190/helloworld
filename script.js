var hamburguer = document.querySelector(".hamburguer");

hamburguer.addEventListener("click", function () {
    document.querySelector(".container").classList.toggle("show-menu");

});

document.querySelector("#qty").addEventListener("change", updatePrice)
document.querySelector("#js").addEventListener("change", updatePrice)
document.querySelector("#layout-yes").addEventListener("change", updatePrice)
document.querySelector("#layout-no").addEventListener("change", updatePrice)
document.querySelector("#deadline").addEventListener("change", function(){
    const deadline = document.querySelector("#deadline").value
    if (deadline == "1") {
        document.querySelector("label[for=deadline]").innerHTML = "Prazo: " + deadline + " semana"
    } else {
        document.querySelector("label[for=deadline]").innerHTML = "Prazo: " + deadline + " semanas"
    }
    updatePrice()
})

function updatePrice(){
    const qty = document.querySelector("#qty").value
    const ifJS = document.querySelector("#js").checked
    const layoutyes = document.querySelector("#layout-yes").checked
    const deadline = document.querySelector("#deadline").value

    let price = qty * 100
    if (ifJS) price *= 1.1
    if (layoutyes) price += 500
    let urgency = 1 - deadline * 0.1
    price *= 1 + urgency
    document.querySelector("#price").innerHTML = "R$ " + price.toFixed(2)
}