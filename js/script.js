$(document).ready(function () {


  var slider = document.getElementById('po'),
  sliderItems = document.getElementById('items-wrapper'),
  //prev = document.getElementById('prev'),
  next = document.getElementById('adelante');

  slide(slider, sliderItems, /*prev, */next);


  function slide(wrapper, items/*, prev,*/, next) {

    var posX1 = 0,

      posX2 = 0,

      posInitial,

      posFinal,

      threshold = 100,

      slides = items.getElementsByClassName('sliding'),

      slidesLength = slides.length,

      slideSize = items.getElementsByClassName('sliding')[0].offsetWidth,

      firstSlide = slides[0],

      lastSlide = slides[slidesLength - 1],

      cloneFirst = firstSlide.cloneNode(true),

      cloneLast = lastSlide.cloneNode(true),

      index = 0,

      allowShift = true,

      x = window.matchMedia("(max-width: 576px)");

    if (x.matches) {

      slideSize = (items.getElementsByClassName('sliding')[0].offsetWidth) / 3;
      slidesLength = (slides.length) * 3

    }

    // Clone first and last slide

    items.appendChild(cloneFirst);

    items.insertBefore(cloneLast, firstSlide);

   // wrapper.classList.add('loaded');


    // Mouse and Touch events

    items.onmousedown = dragStart;


    // Touch events

    items.addEventListener('touchstart', dragStart);

    items.addEventListener('touchend', dragEnd);

    items.addEventListener('touchmove', dragAction);


    // Click events

    // prev.addEventListener('click', function () { shiftSlide(-1) });

    next.addEventListener('click', function () { shiftSlide(1) });


    // Transition events

    items.addEventListener('transitionend', checkIndex);


    function dragStart(e) {

      e = e || window.event;

      e.preventDefault();

      posInitial = items.offsetLeft;


      if (e.type == 'touchstart') {

        posX1 = e.touches[0].clientX;

      } else {

        posX1 = e.clientX;

        document.onmouseup = dragEnd;

        document.onmousemove = dragAction;

      }

    }


    function dragAction(e) {

      e = e || window.event;


      if (e.type == 'touchmove') {

        posX2 = posX1 - e.touches[0].clientX;

        posX1 = e.touches[0].clientX;

      } else {

        posX2 = posX1 - e.clientX;

        posX1 = e.clientX;

      }

      items.style.left = (items.offsetLeft - posX2) + "px";

    }


    function dragEnd(e) {

      posFinal = items.offsetLeft;

      if (posFinal - posInitial < -threshold) {

        shiftSlide(1, 'drag');

      } else if (posFinal - posInitial > threshold) {

        shiftSlide(-1, 'drag');

      } else {

        items.style.left = (posInitial) + "px";

      }


      document.onmouseup = null;

      document.onmousemove = null;

    }


    function shiftSlide(dir, action) {

      items.classList.add('shifting');


      if (allowShift) {

        if (!action) { posInitial = items.offsetLeft; }


        if (dir == 1) {

          items.style.left = (posInitial - slideSize) + "px";

          index++;

        } else if (dir == -1) {

          items.style.left = (posInitial + slideSize) + "px";

          index--;

        }

      };


      allowShift = false;

    }


    function checkIndex() {

      items.classList.remove('shifting');


      if (index == -1) {

        items.style.left = -(slidesLength * slideSize) + "px";

        index = slidesLength - 1;

      }


      if (index == slidesLength) {

        items.style.left = -(1 * slideSize) + "px";

        index = 0;

      }

      allowShift = true;

    }

  }

  $(".hamburger").click(function () {

    $(".links-wrapper").slideToggle(200);

  })

  var cabecera = document.getElementById("cabecera"),
      sombraAfter = document.getElementById("chairs-desktop-after"),
      botonRojo = {boton:document.getElementById("rojo"),color:"red"},
      botonAzul = {boton:document.getElementById("azul"),color:"rgb(60,31,226)"},
      botonVerde = {boton:document.getElementById("verde"), color:"green"};

  function cambiarColor(boton) {

    boton.boton.addEventListener("click", function () {
      cabecera.style.backgroundColor = boton.color;
      sombraAfter.style.boxShadow = `inset 4em 0 2em -2em ${boton.color}`;
    })
    
  } 
  
  cambiarColor(botonRojo);
  cambiarColor(botonAzul);
  cambiarColor(botonVerde);


})
