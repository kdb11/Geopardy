
let apiData;
let apiDataId = [];


  await fetch('https://jservice.io/api/clues')
  .then((response) => response.json())
  .then((data) => apiData = data) 

    for (let i = 0; i < 100; i++) {
      if (apiData[i].category.clues_count > 9) {
        apiDataId.push({id: apiData[i].category.id , category: apiData[i].category.title});
      }
      
       const newCategory = apiDataId.filter(function(item, index){
        return index === apiDataId.findIndex(function(obj) {
          return JSON.stringify(item) === JSON.stringify(obj);
        })
      })
      console.log(newCategory)
    }
    console.log(apiData)




