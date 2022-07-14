//----------------------Get Request----------------------//
const getBtn = document.querySelector("#get-btn");
getBtn.addEventListener("click", () => {
  axios
    .get(`https://jsonplaceholder.typicode.com/comments/501`)
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

//--------------------Post Request-------------------//
const postBtn = document.querySelector("#post-btn");

postBtn.addEventListener("click", () => {
    axios.post(`https://jsonplaceholder.typicode.com/comments`, {
        name: 'John',
        email: 'John@gmail.com',
        body: 'test 123'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
})

//--------------------patch Request-------------------//
const patchBtn = document.querySelector("#post-btn");

postBtn.addEventListener("click", () => {
    axios.post(`https://jsonplaceholder.typicode.com/comments`, {
        name: 'John',
        email: 'John@gmail.com',
        body: 'test 123'
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
})
