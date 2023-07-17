document.addEventListener('DOMContentLoaded', function () {
    var selectedPost = JSON.parse(localStorage.getItem('selectedPost'));

    if (selectedPost) {
        var postImageElement = document.getElementById('postImage');
        var postTitleElement = document.getElementById('postTitle');
        var postBodyElement = document.getElementById('postBody');
        var card_comments = document.getElementById('card_comments');

        postImageElement.src = selectedPost.imageUrl;
        postTitleElement.textContent = selectedPost.title;
        postBodyElement.textContent = selectedPost.body;

        if (selectedPost.comments && selectedPost.comments.length > 0) {
            selectedPost.comments.forEach((comment) => {
                const comments_text = document.createElement("div");
                comments_text.className = "comments_text";

                const commentContent = `
                    <p><strong>${comment.user}</strong> (${comment.email})</p>
                    <p class = "commentbody">${comment.body}</p>
                `;
                comments_text.innerHTML = commentContent;

                card_comments.appendChild(comments_text);
            });
        }
    }
});