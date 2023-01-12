
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

let submitBtn = document.getElementById("submitBtn");
let points = document.getElementById("points");

   function returnSubmitBtn () {
      document.getElementById('questionBox').style.display = "none";
      document.getElementById('gameBox').style.display = "flex";

      let playerScore = +points.innerHTML + +localStorage.getItem("questionValue");

      if (document.querySelector('input').value == localStorage.getItem("answer")) {
        points.innerHTML = playerScore;
         alert("Correct!");
      } else {
        alert("wrong answer, the correct answer was" + " " + localStorage.getItem("answer"));
      }
      localStorage.clear();
      document.querySelector('input').value = "";
   }
   submitBtn.addEventListener("click", returnSubmitBtn);
   
   let lastTime
   function update(time) {
      if(lastTime != null) {
         const delta = time - lastTime;
         const hue = parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--hue"))
         document.documentElement.style.setProperty("--hue", hue + delta * 0.01)
      }
      lastTime = time
      window.requestAnimationFrame(update)
   }
   update();

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
    }

      console.log(apiData) 

      categoryTitel1.innerHTML = newCategory[0].category;
      categoryTitel2.innerHTML = newCategory[1].category;
      categoryTitel3.innerHTML = newCategory[2].category;
      categoryTitel4.innerHTML = newCategory[3].category;
      categoryTitel5.innerHTML = newCategory[4].category;

         fetch(`https://jservice.io/api/category?id=${newCategory[0].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            first1.innerHTML = data.clues[0].value;
            first2.innerHTML = data.clues[1].value;
            first3.innerHTML = data.clues[2].value;
            first4.innerHTML = data.clues[3].value;
            first5.innerHTML = data.clues[4].value;
               
            first1.addEventListener("click", q11 )
            first2.addEventListener("click", q12 )
            first3.addEventListener("click", q13 )
            first4.addEventListener("click", q14 )
            first5.addEventListener("click", q15 )

           function q11 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[0].question;
            first1.innerHTML = "";
            first1.removeEventListener("click", q11);
            first1.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[0].value)
            localStorage.setItem('answer',data.clues[0].answer)
           }   

           function q12 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[1].question;
            first2.innerHTML = "";
            first2.removeEventListener("click", q12);
            first2.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[1].value)
            localStorage.setItem('answer',data.clues[1].answer)
           }   
           function q13 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[2].question;
            first3.innerHTML = "";
            first3.removeEventListener("click", q13);
            first3.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[2].value)
            localStorage.setItem('answer',data.clues[2].answer)
           }   
           function q14 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[3].question;
            first4.innerHTML = "";
            first4.removeEventListener("click", q14);
            first4.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[3].value)
            localStorage.setItem('answer',data.clues[3].answer)
           }   
           function q15 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[4].question;
            first5.innerHTML = "";
            first5.removeEventListener("click", q15);
            first5.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[4].value)
            localStorage.setItem('answer',data.clues[4].answer)
           }  

         });
           
           
         fetch(`https://jservice.io/api/category?id=${newCategory[1].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            second1.innerHTML = data.clues[0].value;
            second2.innerHTML = data.clues[1].value;
            second3.innerHTML = data.clues[2].value;
            second4.innerHTML = data.clues[3].value;
            second5.innerHTML = data.clues[4].value;

            second1.addEventListener("click", q21 )
            second2.addEventListener("click", q22 )
            second3.addEventListener("click", q23 )
            second4.addEventListener("click", q24 )
            second5.addEventListener("click", q25 )

           function q21 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[0].question;
            second1.innerHTML = "";
            second1.removeEventListener("click", q21)
            second1.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[0].value)
            localStorage.setItem('answer',data.clues[0].answer)
           }   
           function q22 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[1].question;
            second2.innerHTML = "";
            second2.removeEventListener("click", q22)
            second2.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[1].value)
            localStorage.setItem('answer',data.clues[1].answer)
           }   
           function q23 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[2].question;
            second3.innerHTML = "";
            second3.removeEventListener("click", q23)
            second3.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[2].value)
            localStorage.setItem('answer',data.clues[2].answer)
           }   
           function q24 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[3].question;
            second4.innerHTML = "";
            second4.removeEventListener("click", q24)
            second4.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[3].value)
            localStorage.setItem('answer',data.clues[3].answer)
           }   
           function q25 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[4].question;
            second5.innerHTML = "";
            second5.removeEventListener("click", q25)
            second5.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[4].value)
            localStorage.setItem('answer',data.clues[4].answer)
           }

         });

         fetch(`https://jservice.io/api/category?id=${newCategory[2].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            third1.innerHTML = data.clues[0].value;
            third2.innerHTML = data.clues[1].value;
            third3.innerHTML = data.clues[2].value;
            third4.innerHTML = data.clues[3].value;
            third5.innerHTML = data.clues[4].value;

            third1.addEventListener("click", q31 )
            third2.addEventListener("click", q32 )
            third3.addEventListener("click", q33 )
            third4.addEventListener("click", q34 )
            third5.addEventListener("click", q35 )

           function q31 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[0].question;
            third1.innerHTML = "";
            third1.removeEventListener("click", q31)
            third1.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[0].value)
            localStorage.setItem('answer',data.clues[0].answer)
           }   
           function q32 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[1].question;
            third2.innerHTML = "";
            third2.removeEventListener("click", q32)
            third2.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[1].value)
            localStorage.setItem('answer',data.clues[1].answer)
           }   
           function q33 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[2].question;
            third3.innerHTML = "";
            third3.removeEventListener("click", q33)
            third3.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[2].value)
            localStorage.setItem('answer',data.clues[2].answer)
           }   
           function q34 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[3].question;
            third4.innerHTML = "";
            third4.removeEventListener("click", q34)
            third4.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[3].value)
            localStorage.setItem('answer',data.clues[3].answer)
           }   
           function q35 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[4].question;
            third5.innerHTML = "";
            third5.removeEventListener("click", q35)
            third5.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[4].value)
            localStorage.setItem('answer',data.clues[4].answer)
           }

         });

         fetch(`https://jservice.io/api/category?id=${newCategory[3].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            fourth1.innerHTML = data.clues[0].value;
            fourth2.innerHTML = data.clues[1].value;
            fourth3.innerHTML = data.clues[2].value;
            fourth4.innerHTML = data.clues[3].value;
            fourth5.innerHTML = data.clues[4].value;

            fourth1.addEventListener("click", q41 )
            fourth2.addEventListener("click", q42 )
            fourth3.addEventListener("click", q43 )
            fourth4.addEventListener("click", q44 )
            fourth5.addEventListener("click", q45 )

           function q41 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[0].question;
            fourth1.innerHTML = "";
            fourth1.removeEventListener("click", q41)
            fourth1.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[0].value)
            localStorage.setItem('answer',data.clues[0].answer)
           }   
           function q42 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[1].question;
            fourth2.innerHTML = "";
            fourth2.removeEventListener("click", q42)
            fourth2.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[1].value)
            localStorage.setItem('answer',data.clues[1].answer)
           }   
           function q43 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[2].question;
            fourth3.innerHTML = "";
            fourth3.removeEventListener("click", q43)
            fourth3.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[2].value)
            localStorage.setItem('answer',data.clues[2].answer)
           }   
           function q44 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[3].question;
            fourth4.innerHTML = "";
            fourth4.removeEventListener("click", q44)
            fourth4.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[3].value)
            localStorage.setItem('answer',data.clues[3].answer)
           }   
           function q45 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[4].question;
            fourth5.innerHTML = "";
            fourth5.removeEventListener("click", q45)
            fourth5.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[4].value)
            localStorage.setItem('answer',data.clues[4].answer)
           }

         });

         fetch(`https://jservice.io/api/category?id=${newCategory[4].id}`)
           .then(response => response.json())
           .then(data => {console.log(data);

            fifth1.innerHTML = data.clues[0].value;
            fifth2.innerHTML = data.clues[1].value;
            fifth3.innerHTML = data.clues[2].value;
            fifth4.innerHTML = data.clues[3].value;
            fifth5.innerHTML = data.clues[4].value;

            fifth1.addEventListener("click", q51 )
            fifth2.addEventListener("click", q52 )
            fifth3.addEventListener("click", q53 )
            fifth4.addEventListener("click", q54 )
            fifth5.addEventListener("click", q55 )

           function q51 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[0].question;
            fifth1.innerHTML = "";
            fifth1.removeEventListener("click", q51)
            fifth1.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[0].value)
            localStorage.setItem('answer',data.clues[0].answer)
           }   
           function q52 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[1].question;
            fifth2.innerHTML = "";
            fifth2.removeEventListener("click", q52)
            fifth2.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[1].value)
            localStorage.setItem('answer',data.clues[1].answer)
           }   
           function q53 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[2].question;
            fifth3.innerHTML = "";
            fifth3.removeEventListener("click", q53)
            fifth3.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[2].value)
            localStorage.setItem('answer',data.clues[2].answer)
           }   
           function q54 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[3].question;
            fifth4.innerHTML = "";
            fifth4.removeEventListener("click", q54)
            fifth4.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[3].value)
            localStorage.setItem('answer',data.clues[3].answer)
           }   
           function q55 () {
            document.getElementById('questionBox').style.display = "block";
            document.getElementById('gameBox').style.display = "none";
            document.getElementById('questionText').innerHTML = data.clues[4].question;
            fifth5.innerHTML = "";
            fifth5.removeEventListener("click", q55);
            fifth5.style.pointerEvents = "none";
            localStorage.setItem('questionValue',data.clues[4].value)
            localStorage.setItem('answer',data.clues[4].answer)
           }
           
        });


