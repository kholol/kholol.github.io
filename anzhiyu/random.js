var posts=["2024/01/01/hello-world/","2024/01/01/第一篇文章/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };