var arr = [];

function show(event) {
  var username = document.getElementById("userName").value;
  var email = document.getElementById("email").value;
  var rollNumber = document.getElementById("rollNumber").value;
  var fatherName = document.getElementById("father").value;
  var button = document.getElementById("button");
  var searchButton = document.getElementById("searchButton");

  if (
    !rollNumber.trim() ||
    !username.trim() ||
    !email.trim() ||
    !fatherName.trim()
  ) {
    alert("Please fill all the fields.");
    return;
  }
  if (!/^\d+$/.test(rollNumber.trim())) {
    alert("Please enter a valid number in the Roll Number field.");
    return;
  }
  var students = {};
  students[+rollNumber] = {
    rollNumber: +rollNumber,
    fatherName: fatherName,
    email: email,
    username: username,
  };
  arr.push(students);
  console.log(arr);
  console.log(students);

}
button.addEventListener("click", function (event) {
  show(event);
});
searchButton.addEventListener("click", function (event) {
    var studentsList = document.getElementById('studentsList')
  var search = +document.getElementById("search").value;
  for (var details in arr) {
    if (arr[details][search]) {
      console.log(arr[details][search]);
       studentsList.innerHTML = `<div class="card">
       <h1>${arr[details][search].username}</h1>
       </div>`
    }
  }
});
