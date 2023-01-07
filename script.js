
let apiData;
let apiDataId = [];
let newCategory;
let categoryTitel1 = document.getElementById('categoryTitel1');
let categoryTitel2 = document.getElementById('categoryTitel2');
let categoryTitel3 = document.getElementById('categoryTitel3');
let categoryTitel4 = document.getElementById('categoryTitel4');
let categoryTitel5 = document.getElementById('categoryTitel5');


  await fetch('https://jservice.io/api/clues')
  .then((response) => response.json())
  .then((data) => apiData = data) 

    for (let i = 0; i < 100; i++) {
      if (apiData[i].category.clues_count > 9) {
        apiDataId.push({id: apiData[i].category.id , category: apiData[i].category.title});
      }
      
       newCategory = apiDataId.filter(function(item, index){
        return index === apiDataId.findIndex(function(obj) {
          return JSON.stringify(item) === JSON.stringify(obj);
        })
      })
      console.log(newCategory)

      /* setTimeout (categoryTitel1 = newCategory[i].category, 5000); */
    }
    /* console.log(apiData) */


categoryTitel1.innerHTML = newCategory[0].category;
categoryTitel2.innerHTML = newCategory[1].category;
categoryTitel3.innerHTML = newCategory[2].category;
categoryTitel4.innerHTML = newCategory[3].category;
categoryTitel5.innerHTML = newCategory[4].category;




        fetch(`https://jservice.io/api/category?id=${newCategory[0].id}`)
           .then(response => response.json())
           .then(data => {console.log(data.clues[0]);
           });
        fetch(`https://jservice.io/api/category?id=${newCategory[1].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);
           });
        fetch(`https://jservice.io/api/category?id=${newCategory[2].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);
           });
        fetch(`https://jservice.io/api/category?id=${newCategory[3].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);
           });
        fetch(`https://jservice.io/api/category?id=${newCategory[4].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);
           });


