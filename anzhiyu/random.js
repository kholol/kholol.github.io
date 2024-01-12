var posts=["2024/01/12/分类文章测试/","2024/01/04/测试文章/","2024/01/12/图片插入测试/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };