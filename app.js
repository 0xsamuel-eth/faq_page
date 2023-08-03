//using selectors inside the element
// traversing the dom

const btns = document.querySelector(".question-btn");

btns.forEach(function(btn) {
    btn.addEventListner("click", function () {
        console.log(e.currentTarget);
    });
});