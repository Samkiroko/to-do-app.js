document.addEventListener("click", function (e) {
  if (e.target.classList.contains("edit-me")) {
    let userInput = prompt("enter")
    axios.post('/update-item', { text: userInput }).then(function () {
      //  do something
    }).catch(function () {
      console.log("please try again later")
    })
  }
})