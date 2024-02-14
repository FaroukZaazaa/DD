var firstText =document.getElementById("firstText")
var firstFlowerImg = document.getElementById("firstFlowerImg")
var firstBtn = document.getElementById("firstBtn")
var secondBtn = document.getElementById("secondBtn")
var secondFlowerImg = document.getElementById("secondFlowerImg")
var lastBtn = document.getElementById("lastBtn")
var lastText = document.getElementById("lastText")

function firstFlower() {
    firstText.classList.add("d-none")

    firstFlowerImg.classList.remove("d-none")
    firstFlowerImg.classList.add("d-block")

    firstBtn.classList.add("d-none")

    secondBtn.classList.remove("d-none")
    secondBtn.classList.add("d-block")

    // flower.classList.remove("d-none")
    // flower.classList.add("d-block")
}

function secondFlower() {
    firstFlowerImg.classList.remove("d-block")
    firstFlowerImg.classList.add("d-none")

    secondFlowerImg.classList.remove("d-none")
    secondFlowerImg.classList.add("d-block")

    secondBtn.classList.remove("d-block")
    secondBtn.classList.add("d-none")

    lastBtn.classList.remove("d-none")
    lastBtn.classList.add("d-block")
}

function lastQuote(){
    secondFlowerImg.classList.remove("d-block")
    secondFlowerImg.classList.add("d-none")

    lastBtn.classList.remove("d-block")
    lastBtn.classList.add("d-none")

    lastText.classList.remove("d-none")
    lastText.classList.add("d-block")
}