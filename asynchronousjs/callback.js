const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post One', body: 'This is post two'}
];

function getPosts() {
    setTimeout(() => {
        let output;
        posts.forEach((post) =>{
            output += `<li>${post.title}</li>`;
        })
        document.body.innerHTML = output;
    }, 1500);
}


function createPost (post) {
    setTimeout(() => {
        posts.push(post)
    }, 2000);
}


getPosts();

createPost({ tite: "Post 3", body: "This is post three"})

