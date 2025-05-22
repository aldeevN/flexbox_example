"use strict"

document.querySelectorAll("#btn").forEach((e) => {
    e.addEventListener("click", showSection)
})

function showSection(e) {
    let flag = e.target.getAttribute("data-btn-flag")
    let idBtn = e.target.getAttribute("data-id")
    const section = document.getElementById(`${idBtn}`)
    if (flag == "true") {
        e.target.setAttribute("data-btn-flag", "false")
        section.classList.replace("hide", "show__section")
    } else {
        e.target.setAttribute("data-btn-flag", "true")
        section.classList.replace("show__section", "hide")
    }
}