//Nguyễn Văn Truyền Email: nguyenvantruyennvt@gmail.com

//Use JavaScript or TypeScript to write a function that fetches data from this API endpoint

// function fetchData() {
//   fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(data => console.log(data))
//     .catch(error => console.error(error));
// }

async function fetchData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
}


//Use JavaScript or TypeScript to write a function that creates a new post using this API endpoint.

// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }

//Mỗi bài đăng sẽ có một id khác nhau vì vậy ta không truyền id vào hàm này 
//(việc tạo id có thể cho tự tạo hoặc tự tăng ở database như MongoDB) 
//hoặc nếu người dùng muốn tự nhập id cho bài đăng (truyền id của bài đăng vào hàm ) thì phải kiểm tra trường hợp trùng id sẽ không cho tạo mới bài đăng

function createPost(userId, title, body) {
  const post = { userId, title, body };
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(post)
  })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error));
}

// const fetchBtn = document.getElementById("fetchBtn");
const fetchBtn = document.querySelector('#fetchBtn');
fetchBtn.addEventListener('click', fetchData);

// const fetchBtn = document.getElementById("createBtn");
const createBtn = document.querySelector('#createBtn');
createBtn.addEventListener('click', () => {
  createPost(1, 'This is Title', 'This is Body');
});
