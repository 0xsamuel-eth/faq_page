//using selectors inside the element
// traversing the dom

const btns = document.querySelector(".question-btn");

btns.forEach(function(btn) {
    btn.addEventListner("click", function (e) {
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle("show-text");
    });
});