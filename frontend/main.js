//carousel
$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        nav: false,
        pagination: true,
        dots: true,
        loop: true,
        margin:20,
        autoplay: true,
        autoplayspeed: 3000,
        responsive: {
            0: {
                items: 2
            },
            576: {
                items: 3
            },
            768: {
                items: 5
            },
            1200: {
                items: 7
            },
        }
    });
});

//typed script
let typed = new Typed('#bienvenue', {
    strings: ["Bienvenue au musée de l'Histoire de Paris."],
    typeSpeed: 80,
    backSpeed: 40,
    backDelay: 10000,
    startDelay: 500,
    loop: false,
    showCursor: false,
});

//animation au scroll
AOS.init({
    
    disable: false, 
    startEvent: 'DOMContentLoaded', 
    initClassName: 'aos-init', 
    animatedClassName: 'aos-animate', 
    useClassNames: false, 
    disableMutationObserver: false, 
    debounceDelay: 50,
    throttleDelay: 250,
    
  
    
    offset: 120, 
    delay: 0,
    duration: 400,
    easing: 'ease',
    once: false, 
    mirror: false, 
    anchorPlacement: 'top-bottom',
  });

//menu qui slide
document.getElementById("mySidenav").style.width = "0%";
function openNav() {
    document.getElementById("mySidenav").style.width = "100%";

    //tentative 1 :
    /*document.getElementById("video").addEventListener(autoplay="false");*/

    //tentative 2 :
    /*document.getElementById("video").autoplay = false;*/

    //tentative 3 :
    /*
    let videoplay = document.getElementById("video").play();
    if (openNav() == true) {
        videoplay = false;
    } else {
        videoplay = true;
    }
    */
  }
function closeNav() {
    document.getElementById("mySidenav").style.width = "0%";
}   
/*
//calendrier (billetterie)
document.addEventListener('DOMContentLoaded', function() {
    var calendarEl = document.getElementById('calendar');
    var calendar = new FullCalendar.Calendar(calendarEl, {
        initialView: 'dayGridMonth',
        initialDate: '2022-11-17',
        headerToolbar: {
          left: 'prev,next today',
          center: 'title',
          right: 'dayGridMonth,timeGridWeek,timeGridDay'
        },
      });
    calendar.render();
});
*/