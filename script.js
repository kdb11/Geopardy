
let apiData;
let apiDataId = [];
let newCategory;
let categoryTitel1 = document.getElementById('categoryTitel1');
let categoryTitel2 = document.getElementById('categoryTitel2');
let categoryTitel3 = document.getElementById('categoryTitel3');
let categoryTitel4 = document.getElementById('categoryTitel4');
let categoryTitel5 = document.getElementById('categoryTitel5');

let first1 = document.getElementById('1-1');
let first2 = document.getElementById('1-2');
let first3 = document.getElementById('1-3');
let first4 = document.getElementById('1-4');
let first5 = document.getElementById('1-5');
let second1 = document.getElementById('2-1');
let second2 = document.getElementById('2-2');
let second3 = document.getElementById('2-3');
let second4 = document.getElementById('2-4');
let second5 = document.getElementById('2-5');
let third1 = document.getElementById('3-1');
let third2 = document.getElementById('3-2');
let third3 = document.getElementById('3-3');
let third4 = document.getElementById('3-4');
let third5 = document.getElementById('3-5');
let fourth1 = document.getElementById('4-1');
let fourth2 = document.getElementById('4-2');
let fourth3 = document.getElementById('4-3');
let fourth4 = document.getElementById('4-4');
let fourth5 = document.getElementById('4-5');
let fifth1 = document.getElementById('5-1');
let fifth2 = document.getElementById('5-2');
let fifth3 = document.getElementById('5-3');
let fifth4 = document.getElementById('5-4');
let fifth5 = document.getElementById('5-5');



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
           .then(data => {console.log(data.clues[0].value);


              first1.innerHTML = data.clues[0].value;
              first2.innerHTML = data.clues[1].value;
              first3.innerHTML = data.clues[2].value;
              first4.innerHTML = data.clues[3].value;
              first5.innerHTML = data.clues[4].value;
               
           });

        fetch(`https://jservice.io/api/category?id=${newCategory[1].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            second1.innerHTML = data.clues[0].value;
            second2.innerHTML = data.clues[1].value;
            second3.innerHTML = data.clues[2].value;
            second4.innerHTML = data.clues[3].value;
            second5.innerHTML = data.clues[4].value;

           });
        fetch(`https://jservice.io/api/category?id=${newCategory[2].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            third1.innerHTML = data.clues[0].value;
            third2.innerHTML = data.clues[1].value;
            third3.innerHTML = data.clues[2].value;
            third4.innerHTML = data.clues[3].value;
            third5.innerHTML = data.clues[4].value;

           });
        fetch(`https://jservice.io/api/category?id=${newCategory[3].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            fourth1.innerHTML = data.clues[0].value;
            fourth2.innerHTML = data.clues[1].value;
            fourth3.innerHTML = data.clues[2].value;
            fourth4.innerHTML = data.clues[3].value;
            fourth5.innerHTML = data.clues[4].value;

           });
        fetch(`https://jservice.io/api/category?id=${newCategory[4].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            fifth1.innerHTML = data.clues[0].value;
            fifth2.innerHTML = data.clues[1].value;
            fifth3.innerHTML = data.clues[2].value;
            fifth4.innerHTML = data.clues[3].value;
            fifth5.innerHTML = data.clues[4].value;

           });


