
let apiData;
/* let apiDataId = []; */
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

  setTimeout(() => {
    /* console.log(data[i].category.title);
    JSON.parse(apiData) */
    for (let i = 0; i < 100; i++) {
      if (apiData[i].category.clues_count > 9) {
        /* apiDataId.push((apiData[i].category.id),(apiData[i].category.title)); */
        apiDataId.push({id: apiData[i].category.id , category: apiData[i].category.title});
      }
      
       const newCategory = apiDataId.filter(function(item, index){
        return index === apiDataId.findIndex(function(obj) {
          return JSON.stringify(item) === JSON.stringify(obj);
        })
      })
      console.log(newCategory)
      /* apiDataId = apiData[i].category.title;
      console.log(apiDataId) */
    }
    console.log(apiData)
    /* console.log(apiDataId) */
}, 1500);


