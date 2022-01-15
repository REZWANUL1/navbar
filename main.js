// let nav_links = document.querySelector('.nav_links');
// let burger_menu = document.querySelector('.burger_menu');
// const nav_li = document.querySelectorAll('.nav_links li');
// console.log(nav_li.innerHTML)
// burger_menu.onclick = function (nav_include) {
//    nav_links.classList.toggle("nav_active");

//    //?NOTE: this is individual links
//    //?##############################

//    if (nav_include) {
//       nav_li.forEach((links, index) => {
//          // console.log(index)
//          if (links.style.animation) {
//             links.style.animation = '';
//          } else {
//             links.style.animation = `nav_fade 0.5s ease forwards ${index/7+0.9}s`;
//             console.log(index / 5)
//          }
//          burger_menu.classList.toggle("burger_toggle");
//       });

//    }
// }
// nav_links.innerHTML="hi";
// !##########################burger_menu with Response######################################
// !#########################################################################################
const nav_a = document.querySelectorAll('.nav_links li a');
const nav_links = document.querySelector('.nav_links');
const burger_menu = document.querySelector('.burger_menu');
const nav_li = document.querySelectorAll('.nav_links li');
const main_nav = document.querySelector('.main_nav');
const holder = document.querySelector('.holder');
const cards = document.querySelectorAll(".cards >span");
cards.onclick = () => {
   alert("hi");
}


// !##### finding top of the nav####
const nav_top = main_nav.offsetTop;


// console.log(main_nav.offsetHeight);

function add_sticky() {
   console.log(window.scrollY, nav_top)
   if (window.scrollY >= nav_top) {
      document.body.classList.add("top_nav")
      document.body.style.paddingTop = main_nav.offsetHeight + "px";
      // main_nav.offsetHight
   } else {
      document.body.classList.remove("top_nav")
      // document.body.style.paddingTop = 0;


   }
}

window.addEventListener("scroll", add_sticky);

function nav_function() {
   nav_links.classList.toggle("nav_active");


   //    //?NOTE: this is individual links
   //    //?##############################

   nav_li.forEach((links, index) => {
      // console.log(index)
      if (links.style.animation) {
         links.style.animation = '';
      } else {
         links.style.animation = `nav_fade 0.5s ease forwards  ${index/7+0.9}s`;
         // console.log(links)
      }
   });
   burger_menu.classList.toggle("burger_toggle");
}



burger_menu.addEventListener("click", nav_function);

// console.log(nav_li.length)

// nav_links.addEventListener("click", fun2)

// !################################## adding active class to the nav#######################################################
// !               #################################################################
const arrow = () => {
   function active(active) {
      // if (active === nav_a) {
      //    console.log("hi");
      // }else{
      //    console.log("no")
      // }
      active.forEach(links => {

         links.addEventListener("click", function () {
            active.forEach(links2 => links2.classList.remove('active'));
            links.classList.add("active")
         })
      })
   }
   active(nav_a)
   active(cards)
}
arrow()
// !################################## adding active class to the nav#######################################################
// ?               ##############################Mukto_style###################################

// nav_a.forEach(links => {
//    links.addEventListener("click", function () {
//       nav_a.forEach(links2 => {
//          let contains = links2.classList.contains("active")
//          if(contains){
//             links2.classList.remove("active");
//          }
//       })
//       this.classList.add("active");
//    })

// !################################## adding active class to the nav#######################################################
// ?:               #######################jquery########################################

// $(document).ready(function () {
//    $(function () {
//       $('li a').click(function (e) {
//          e.preventDefault();
//          $('a').removeClass('active');
//          $(this).addClass('active');
//       });
//    });
// });

// !################################## add stick nav on the navbar#######################################################
// !:               ###############################################################

// function add_sticky() {

// }

var lastName = "Lovelace";

// Only change code below this line
var secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line

console.log(secondToLastLetterOfLastName);