// Lấy dữ liệu từ localStorage
let posts = JSON.parse(localStorage.getItem("posts")) || [];
let profile = JSON.parse(localStorage.getItem("profile")) || {
    name: "Quân Phan",
    bio: "IT Student | Future Developer 🔥"
};

// Hiển thị profile khi load
document.getElementById("username").innerText = profile.name;
document.getElementById("bio").innerText = profile.bio;

function addPost() {
    let input = document.getElementById("postInput");
    if (input.value.trim() === "") return;

    let newPost = {
        content: input.value,
        time: new Date().toLocaleString()
    };

    posts.unshift(newPost);
    localStorage.setItem("posts", JSON.stringify(posts));

    input.value = "";
    renderPosts();
}

function renderPosts() {
    let container = document.getElementById("posts");
    container.innerHTML = "";

    posts.forEach(post => {
        let div = document.createElement("div");
        div.className = "post";

        div.innerHTML = `
            <p>${post.content}</p>
            <small style="color: gray;">${post.time}</small>
        `;

        container.appendChild(div);
    });
}

function editProfile() {
    let newName = prompt("Nhập tên mới:", profile.name);
    let newBio = prompt("Nhập mô tả mới:", profile.bio);

    if (newName) profile.name = newName;
    if (newBio) profile.bio = newBio;

    localStorage.setItem("profile", JSON.stringify(profile));

    document.getElementById("username").innerText = profile.name;
    document.getElementById("bio").innerText = profile.bio;
}

renderPosts();