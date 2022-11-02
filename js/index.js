window.addEventListener('scroll', function () {
    let button = document.querySelector(`.knopka`);
    button.classList.toggle("active", window.scrollY > 500)
})

function scrollTopTop() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}

window.addEventListener('scroll', function () {
    let button = document.querySelector(`.header`);
    button.classList.toggle("scrolling", window.scrollY > 30)
})

// {
//     tag: "div",
//     classList: {
//         value: ["knopka"], 
//         toggle: function (classname, condition) {

//         }
//     }
// }