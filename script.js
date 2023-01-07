
let apiData;
let apiDataId = [];
let i = 0;

function getApi () {
  fetch('https://jservice.io/api/clues')
  .then((response) => response.json())
  /* .then((data) => JSON.stringify(data)) */
  .then((data) => apiData = data) 
  /* .then((data) => apiDataId = data[i].answer); */
}

  getApi();

  setTimeout((data) => {
    /* console.log(data[i].category.title);
    JSON.parse(apiData) */
    for (let i = 0; i < 100; i++) {
      if (apiData[i].category.clues_count > 10 ) {
        apiDataId.push((apiData[i].category.id),(apiData[i].category.title));
        console.log(apiDataId)
      }
      
      /* apiDataId = apiData[i].category.title;
      console.log(apiDataId) */
    }
    console.log(apiData)
    /* console.log(apiDataId) */
}, 2000);


