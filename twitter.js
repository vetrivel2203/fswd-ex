```javascript
let posts = [];

function addPost() {
    let text = document.getElementById("postText").value;

    if (text.trim() == "") {
        alert("Write something!");
        return;
    }

    posts.unshift({
        text: text,
        likes: 0
    });

    document.getElementById("postText").value = "";
    displayPosts(posts);
}

function displayPosts(data) {
    let output = "";

    data.forEach((post, index) => {
        output += `
            <div class="post">
                <p>${post.text}</p>

                <button class="like"
                    onclick="likePost(${index})">
                    ❤️ ${post.likes}
                </button>

                <button class="delete"
                    onclick="deletePost(${index})">
                    Delete
                </button>
            </div>
        `;
    });

    document.getElementById("posts").innerHTML = output;
}

function likePost(index) {
    posts[index].likes++;
    displayPosts(posts);
}

function deletePost(index) {
    posts.splice(index, 1);
    displayPosts(posts);
}

function searchPosts() {
    let search =
        document.getElementById("search").value.toLowerCase();

    let result = posts.filter(post =>
        post.text.toLowerCase().includes(search)
    );

    displayPosts(result);
}
```

