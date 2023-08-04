//using selectors inside the element

const question = document.querySelectorAll(".question");

questions.forEach(function(question) {
    // console.log(question);
    const btn = question.querySelector(".question-btn");
    console.log(btn);
});




// traversing the dom

// const btns = document.querySelectorAll(".question-btn");

// btns.forEach(function(btn) {
//     btn.addEventListner("click", function (e) {
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle("show-text");
//     });
// });
