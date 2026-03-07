console.log("Chào mừng đến blog của Quân");

const posts = document.querySelectorAll(".post");

posts.forEach(post => {

post.addEventListener("mouseenter", () => {

post.style.transform = "scale(1.02)";

});

post.addEventListener("mouseleave", () => {

post.style.transform = "scale(1)";

});

});