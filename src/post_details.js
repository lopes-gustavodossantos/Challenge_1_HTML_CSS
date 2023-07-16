document.addEventListener('DOMContentLoaded', function () {
  // Recupere o post armazenado em localStorage
  var selectedPost = JSON.parse(localStorage.getItem('selectedPost'));

  if (selectedPost) {
      // Acesse os dados do post e exiba-os na página como necessário
      var postTitleElement = document.getElementById('postTitle');
      var postImageElement = document.getElementById('postImage');
      var postBodyElement = document.getElementById('postBody');

      postTitleElement.textContent = selectedPost.title;
      postImageElement.src = selectedPost.imageUrl;
      postBodyElement.textContent = selectedPost.body;
  }
});
