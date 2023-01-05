function getApi () {
fetch('https://jservice.io//api/clues')
  .then((response) => response.json())
  .then((data) => console.log(data)); }

  setTimeout(() => {
    getApi();
}, 1000);