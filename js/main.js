$(document).ready(() => {
  if (window.innerWidth >= 470) {
    $(".slider").slick({
      vertical: true,
      rows: 3,
      arrow: true,
      variableHeight: true,
    })
  }
  $(".slider").slick({
    vertical: true,
    rows: 1,
    arrow: true,
    variableHeight: true,
  })
})
let time = 1800

let el = document.querySelector(".form__timer")
if (time != 0) {
  setInterval(() => {
    time -= 1
    let hours = Math.floor(time / 60)
    let minutes = time % 60
    if (minutes < 10) {
      minutes = "0" + minutes
    }

    el.innerHTML = hours + ":" + minutes + ""

    console.log(el.innerHTML)
  }, 1000)
}
let nameFormEl = document.querySelector(".form__name")
let telFormEl = document.querySelector(".form__tel")
nameFormEl.addEventListener("focus", (e) => {
  let after = document.querySelector(".form__name-selector")
  after.classList.add("selected")
})
nameFormEl.addEventListener("blur", (e) => {
  let after = document.querySelector(".form__name-selector")
  after.classList.remove("selected")
})
telFormEl.addEventListener("focus", (e) => {
  let after = document.querySelector(".form__tel-selector")
  after.classList.add("selected")
})
telFormEl.addEventListener("blur", (e) => {
  let after = document.querySelector(".form__tel-selector")
  after.classList.remove("selected")
})
