// const sections = document.querySelectorAll(".section");
// const sectBtns = document.querySelectorAll(".controlls")
// const secBtn = document.querySelectorAll(".control")
// const allSections = document.querySelector(".main-contant")
// const pageTransitions = () => {
//     for (let i = 0; i < secBtn.length; i++) {
//         //     toggle
//         secBtn[i].addEventListener('click', function(e) {
//             let currentBtn = document.querySelectorAll(".active-btn")
//             currentBtn[0].className = currentBtn[0].className.replace("active-btn", " ");
//             this.classList.add('active-btn');
//             console.log(e.target.dataset.id);

//         })

//     }
//     allSections.addEventListener("click", (e) => {
//         console.log(e.target.dataset.id);

//         const id = e.target.dataset.id;
//         console.log(e.target);

//         if (id) {
//             sectBtns.forEach((btn) => {
//                 btn.classList.remove('active-btn');
//             })
//             e.target.classList.add('active-btn');
//             sections.forEach((section) => {
//                 section.classList.remove('active')
//             })
//             const element = document.getElementById(id)
//             element.classList.add('active');
//         }
//     })
// }

// pageTransitions()
//     //
// function addActiveClass(section) {
//     const id = section.getAttribute('id');
//     document.querySelector(`#${id}`).classList.add('your-active-class');
// }

// function removeActiveClass(section) {
//     const id = section.getAttribute('id');
//     document.querySelector(`#${id}`).classList.remove('your-active-class');
// }

// function makeActiveSection() {
//     sectionsElements.forEach((section) => {
//         let elementOffset = section.getBoundingClientRect();
//         if (elementOffset.top <= 150 && elementOffset.bottom >= 150) {
//             addActiveClass(section);
//         } else {
//             removeActiveClass(section);
//         }
//     });
// }


(function() {
    [...document.querySelectorAll(".control")].forEach(button => {
        button.addEventListener("click", function() {
            document.querySelector(".active-btn").classList.remove("active-btn");
            this.classList.add("active-btn");
         
        })
    });

    let progSpans = document.querySelectorAll(".progress span");
    window.onscroll = function() {
        progSpans.forEach((spano) => {
            spano.style.width = spano.dataset.width;
        });

    };

    document.querySelector('.theme-btn').addEventListener('click', () => {
        document.body.classList.toggle('light-mode');
    
     })
  
     var swiper = new Swiper(".mySwiper", {
       effect: "coverflow",
       grabCursor: true,
       centeredSlides: true,
       slidesPerView: "auto",
       coverflowEffect: {
         rotate: 50,
         stretch: 0,
         depth: 100,
         modifier: 1,
         slideShadows: true,
       },
       pagination: {
         el: ".swiper-pagination",
       },
     });
  








})();