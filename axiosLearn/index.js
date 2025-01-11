const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
// putBtn.addEventListener("click", putTodo);
// deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  // Write your code here
  axios.get("https://crudcrud.com/api/cb470178de4e4011a6a5700d2fb3e122/todo")
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
}

function postTodo() {
  // Write your code here
  axios
    .post("https://crudcrud.com/api/cb470178de4e4011a6a5700d2fb3e122/todo",{
  title: "abhishek",
  completed:false,
}).then((res) => console.log(res.data))
.catch((err)=> console.log(err))
}

function putTodo() {
  // Write your code here
  axios
    .put("https://crudcrud.com/api/cb470178de4e4011a6a5700d2fb3e122/todo/677d5e7f3b6dab03e8067e49",{
  title: "abhishek",
  completed:true,
}).then((res) => console.log(res.data))
.catch((err)=> console.log(err))
}

function deleteTodo() {
  // Write your code here
  axios
    .delete("https://crudcrud.com/api/cb470178de4e4011a6a5700d2fb3e122/todo/677d5e7f3b6dab03e8067e49",{
  title: "abhishek",
  completed:true,
}).then((res) => console.log(res.data))
.catch((err)=> console.log(err))
}