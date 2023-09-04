document.addEventListener("DOMContentLoaded", function(event) {
   
    const showNavbar = (toggleId, navId, bodyId, headerId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId),
    bodypd = document.getElementById(bodyId),
    headerpd = document.getElementById(headerId)
    
    // Validate that all variables exist
    if(toggle && nav && bodypd && headerpd){
    toggle.addEventListener('click', ()=>{
    // show navbar
    nav.classList.toggle('show')
    // change icon
    toggle.classList.toggle('fa-xmark')
    // add padding to body
    bodypd.classList.toggle('body-pd')
    // add padding to header
    headerpd.classList.toggle('body-pd')
    })
    }
    }
    
    showNavbar('header-toggle','nav-bar','body-pd','header')
    
    /*===== LINK ACTIVE =====*/
    const linkColor = document.querySelectorAll('.nav_link')
    
    function colorLink(){
    if(linkColor){
    linkColor.forEach(l=> l.classList.remove('active'))
    this.classList.add('active')
    }
    }
    linkColor.forEach(l=> l.addEventListener('click', colorLink))
    
     // Your code to run since DOM is loaded and ready
    });

    // my code
    
    let x=[];


    async function response () {
      let res=  await fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
      let newres= await res.json()
         x= newres.meals
        console.log(x);
        meals()

      }
      response()

      function meals() {

        cartona=``
        for (let i = 0; i < x.length; i++) {

            cartona+=`

            <div class="col-md-3 ">
            <div class="meal rounded-2">
                <img src=${x[i].strMealThumb} class='w-100'>
                <div class="layer text-black text-capitalize fs-4 fw-bold align-items-center d-flex">
                    ${x[i].strMeal}
                </div>

            </div>
        </div>

            `
            
        }
        document.getElementById('dinner').innerHTML=cartona

        
      }
      document.getElementById('ser').addEventListener('click',function () {
        $('.loding').fadeIn(1500,function () {
          $('.search').ready(function () {
            $('.loding').fadeOut(1500)
            $('.category').fadeOut(200);
        $('.area').fadeOut(200);
        $('.contactUs').fadeOut(200);
        $('.ingrediant').fadeOut(200);
        $('.search').fadeIn(500);
          })
        })        
      
        })

        
        async function search(inp) {
          let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inp}`)
          let newres=await res.json()
           x=newres.meals
  
          Mymeal()
        }

        

        $('#byName').on('input', function() {
          let inp= this.value;
          console.log(inp);
          search(inp)
        
        });

        function Mymeal() {

          cartona=``
          for (let i = 0; i < x.length; i++) {
  
              cartona+=`
  
              <div class="col-md-3 ">
              <div class=" meal rounded-2">
                  <img src=${x[i].strMealThumb} class='w-100'>
                  <div class="layer text-black text-capitalize fs-4 fw-bold align-items-center d-flex">
                      ${x[i].strMeal}
                  </div>
  
              </div>
          </div>
  
              `
              
          }
          $('.loding').fadeIn(1500,function () {
            $('.search').ready(function () {
              $('.loding').fadeOut(1000)
  
              document.getElementById('myMeal').innerHTML=cartona
          
            })
          })

  
          
        }
        
        $('#byFL').on('input', function() {
          let inp= this.value;
          console.log(inp);
          searchFL(inp)
        
        });
        async function searchFL(inp) {
          let res=await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${inp}`)
          let newres=await res.json()
           x=newres.meals
          Mymeal()
          
        }

        $('#mycateg').click(function () {

          $('.loding').fadeIn(1500,function () {
            $('.category').ready(function () {
              $('.loding').fadeOut(1500)
              $('.area').fadeOut(200);
              $('.contactUs').fadeOut(200);
              $('.ingrediant').fadeOut(200);
              $('.category').fadeIn(500);
    
            })
          })
      



        
          })
          async function MYcetegory() {
            let res=await fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`)
            let newres=await res.json()
             x=newres.categories
            console.log(x);
            Mycet()
          }
          MYcetegory()

          function Mycet() {

            cartona=``
            for (let i = 0; i < x.length; i++) {
    
                cartona+=`
    
                <div class="col-md-3 ">
                <div class=" meal rounded-2 " id="inf">
                    <img src=${x[i].strCategoryThumb} class='w-100'>
                    <div class="layer text-black     text-center">
                   <h3>  ${x[i].strCategory}</h3>
                     <p>${x[i].strCategoryDescription.slice(0,60)}.... </p>
                    </div>
    
                </div>
            </div>
    
                `
    
                
            }

            document.getElementById('categories').innerHTML=cartona

            $('.layer').click(function () { 
             
              let text=document.querySelector('h3').innerText
              
                  moreInf(text)
               });


          }

          async function moreInf(y) {
            let res=await fetch(`https://themealdb.com/api/json/v1/1/filter.php?c=${y}`)
            let newres=await res.json()
            x=newres.meals
            console.log(x[0].strMeal);
            njh()
          }
          function njh() {
            cartona=``
            for (let i = 0; i < x.length; i++) {
    
                cartona+=`
    
                <div class="col-md-3 ">
                <div class="meal rounded-2">
                    <img src=${x[i].strMealThumb} class='w-100'>
                    <div class="layer text-black text-capitalize fs-4 fw-bold align-items-center d-flex">
                        ${x[i].strMeal}
                    </div>
    
                </div>
            </div>
    
                `
                
            }
            document.getElementById('categories').innerHTML=cartona
          
    
    
            
          }
  
          $('#MyArea').click(function () {
    $('.loding').fadeIn(1500,function () {
      $('.area').ready(function () {
        $('.loding').fadeOut(1500)
            $('.ingrediant').fadeOut(200);
            $('.contactUs').fadeOut(200);
            $('.area').fadeIn(500);
      })
    })
          })
          async function MYarea() {
            let res=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?a=list`)
            let newres=await res.json()
             x=newres.meals
            console.log(x);
            MyArea()
          }
          MYarea()
          function MyArea() {

            cartona=``
            for (let i = 0; i < x.length; i++) {
    
                cartona+=`
    
                <div class="col-md-3 ">
                <div class=" meal rounded-2 text-center " id="kl">
                    
                <i class="fa-solid fa-house-laptop fa-4x"></i>
                
                   <h3 class="nb">  ${x[i].strArea}</h3>
                     
                    </div>
    
                </div>
            
    
                `
                
            }
            document.getElementById('Area').innerHTML=cartona
                $('#kl').click(function () { 
             
              let key=document.querySelector('.nb').innerText

              console.log(key);
                  moreinf(key)
               });

            
          }
          async function moreinf(y) {
            let res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${y}`)
            let newres=await res.json()
            x=newres.meals
            
            bhj()
          }
          function bhj() {
            cartona=``
            for (let i = 0; i < x.length; i++) {
    
                cartona+=`
    
                <div class="col-md-3 ">
                <div class="meal rounded-2">
                    <img src=${x[i].strMealThumb} class='w-100'>
                    <div class="layer text-black text-capitalize fs-4 fw-bold align-items-center d-flex">
                        ${x[i].strMeal}
                    </div>
    
                </div>
            </div>
    
                `
                
            }
            document.getElementById('Area').innerHTML=cartona
          
    
    
            
          }


          $('#Ing').click(function () {
    $('.loding').fadeIn(1500,function () {

            $('.ingrediant').ready(function () {
              $('.loding').fadeOut(1500)
              $('body').css(`overflow`,`auto`)
              $('.contactUs').fadeOut(200);
            $('.ingrediant').fadeIn(500);
              })

            
        })

          })
          async function Ingerd() {
            let res=await fetch(`https://www.themealdb.com/api/json/v1/1/list.php?i=list`)
            let newres=await res.json()
             x=newres.meals
            console.log(x);
            ingredient()
          }
          Ingerd()
          function ingredient() {

            cartona=``
            for (let i = 0; i < x.length; i++) {
    
                cartona+=`
    
                <div class="col-md-3 ">
                <div class=" meal rounded-2 text-center njk ">
                    
                <i class="fa-solid fa-drumstick-bite fa-4x"></i>
                
                   <h3 class="mio">  ${x[i].strIngredient}</h3>
                   <p> ${x[0].strDescription.slice(0,108)}</p>
                     
                    </div>
    
                </div>
            
    
                `
                
            }
            document.getElementById('Ingred').innerHTML=cartona
            $('.njk').click(function () { 
             
              let cf=document.querySelector('.mio').innerText
              console.log(cf);
              
              mioInf(cf)
               });

            
          }
          async function mioInf(y) {
            let res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${y}`)
            let newres=await res.json()
            x=newres.meals
            
            bj()
          }
          function bj() {
            cartona=``
            for (let i = 0; i < x.length; i++) {
    
                cartona+=`
    
                <div class="col-md-3 ">
                <div class="meal rounded-2">
                    <img src=${x[i].strMealThumb} class='w-100'>
                    <div class="layer text-black text-capitalize fs-4 fw-bold align-items-center d-flex">
                        ${x[i].strMeal}
                    </div>
    
                </div>
            </div>
    
                `
                
            }
            document.getElementById('Ingred').innerHTML=cartona
          
    
    
            
          }


          $('#contact').click(function () {
    $('.loding').fadeIn(1500,function () {

      $('#contact').ready(function () {
        $('.loding').fadeOut(1500)
        $('body').css(`overflow`,`auto`)
        $('.contactUs').fadeIn(500);
  
        })
  
      })


          })
// loding
$(document).ready(function () {
  $('.loding').fadeOut(1500)
  $('body').css(`overflow`,`auto`)
  })

let userName=document.getElementById('userName')
let userEmail=document.getElementById('userEmail')
let userPhone=document.getElementById('userPhone')
let userAge=document.getElementById('userAge')
let userPass=document.getElementById('userPass')
let RePass=document.getElementById('RePass')
  // regex
  var regex=/^\w{3,15}$/;
  $('#userName').on('input',  function() {
  regex.test(userName.value)
   if (regex.test(userName.value)==true) {
    document.getElementById('user').innerHTML=`<span class=" text-success ">match</span>`
  }
  else{
    document.getElementById('user').innerHTML=`<span class=" text-danger "> not match</span>`
  }

  })
  let regex1=/^\w{3,15}@[a-zA-z]{3,8}.com[\/]?$/;
  $('#userEmail').on('input', function() {
  console.log(regex1.test(userEmail.value))
  if (regex1.test(userEmail.value)==true) {
    document.getElementById('mail').innerHTML=`<span class=" text-success ">match</span>`
  }
  else{
    document.getElementById('mail').innerHTML=`<span class=" text-danger "> not match</span>`
  }

  })
    let regex2=/^01[0125][0-9]{8}$/;
  $('#userPhone').on('input', function() {
  console.log(regex2.test(userPhone.value))
  if (regex2.test(userPhone.value)==true) {
    document.getElementById('phone').innerHTML=`<span class=" text-success ">match</span>`
  }
  else{
    document.getElementById('phone').innerHTML=`<span class=" text-danger "> not match</span>`
  }

  })
    let regex3=/^[0-9]{1}[0-9]{1}$/;
  $('#userAge').on('input', function() {
  console.log(regex3.test(userAge.value))
  if (regex3.test(userAge.value)==true) {
    document.getElementById('age').innerHTML=`<span class=" text-success ">match</span>`
  }
  else{
    document.getElementById('age').innerHTML=`<span class=" text-danger "> not match</span>`
  }

  })
    let regex4=/^\w{5,20}$/;
  $('#userPass').on('input', function() {
  console.log(regex4.test(userPass.value))
  if (regex4.test(userPass.value)==true) {
    document.getElementById('pass').innerHTML=`<span class=" text-success ">match</span>`
  }
  else{
    document.getElementById('pass').innerHTML=`<span class=" text-danger "> not match</span>`
  }

  })
    
  $('#RePass').on('input', function() {
  
  if (RePass.value==userPass.value) {
    document.getElementById('repas').innerHTML=`<span class=" text-success ">match</span>`
  }
  else{
    document.getElementById('repas').innerHTML=`<span class=" text-danger "> not match</span>`
  }

  })
  
  
  