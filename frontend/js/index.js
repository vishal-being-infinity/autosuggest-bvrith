const users = [
  { name: "Jane Doe", gender: "Female", image: "/static/jane.png" },
  { name: "John Doe", gender: "Male", image: "/static/john.png" }
];

let index = 0;

function toggleUser() {


  console.log("im running")
  // Finding elements fresh on every click
  const avatar = document.getElementById('user-avatar');
  const nameTxt = document.getElementById('user-name');
  const genTxt = document.getElementById('user-gender');
  
  index = index === 0 ? 1 : 0;
  
  avatar.src = users[index].image;
  nameTxt.textContent = users[index].name;
  genTxt.textContent = users[index].gender;
}

function getRandomUser() {
  fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data => {
      const user = data.results[0];

      document.getElementById("user-avatar").src = user.picture.large;
      document.getElementById("user-name").textContent =
        user.name.first + " " + user.name.last;
      document.getElementById("user-gender").textContent = user.gender;
    })
    .catch(error => {
      console.error(error);
    });
}