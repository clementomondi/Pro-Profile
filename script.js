// Add JavaScript code here
const img = document.querySelector("img");
img.onclick = function () {
    this.classList.toggle('active')
}

const anchors = document.querySelectorAll("a");

anchors.forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault()
    })
})