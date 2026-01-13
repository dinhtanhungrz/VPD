
let inputData = {
  username: "admin",
  age: 25,
  isLogin: true,
  tasks: [
    { title: "Learn JS", done: true },
    { title: "Learn Node", done: false }
  ]
};


if (!inputData.isLogin) {
  console.log("Chưa đăng nhập");
  return;
}


if (inputData.age < 18) {
  console.log("Tuổi không hợp lệ");
  return;
}


let role;

if (inputData.username === "admin") {
  role = "ADMIN";
} else {
  role = "USER";
}

console.log("Role:", role);


console.log("\nDanh sách task:");

for (let task of inputData.tasks) {
  if (task.done) {
    console.log("- [DONE]", task.title);
  } else {
    console.log("- [TODO]", task.title);
  }
}


let undoneCount = 0;

for (let task of inputData.tasks) {
  if (!task.done) {
    undoneCount++;
  }
}

console.log("\nTask chưa xong:", undoneCount);
