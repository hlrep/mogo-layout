(function() {
  let header = document.querySelector('.header');

  /* fixed header when scrolling */
  {
    let intro = document.querySelector('.intro');
    function updateHeaderFixedState(height) {
      if (window.pageYOffset >= height) {
        header.classList.add('fixed');
      } else {
        header.classList.remove('fixed');
      }
    }
    updateHeaderFixedState(intro.clientHeight);
    window.addEventListener('scroll', () => {
      updateHeaderFixedState(intro.clientHeight);
    });
  }

  /* smooth header-menu scroll */
  {
    let nav = header.querySelector('.nav');
    let anchors = nav.querySelectorAll('.nav__link');
    let length = anchors.length;
    for (let it = 0; it < length; it++) {
      anchors[it].addEventListener('click', (event) => {
        event.preventDefault();
        header.querySelector('.nav-toggle').classList.remove('active');
        nav.classList.remove('active');
        header.classList.remove('active');
        let anchoredBlock = anchors[it].getAttribute('href').substr(1);
        document.getElementById(anchoredBlock).scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
        for (let i = 0; i < length; i++) {
          anchors[i].classList.remove('active');
        }
        anchors[it].classList.add('active');
      });
    }
  }

  /* 'burger'-nav button pressed */
  {
    nav = header.querySelector('.nav');
    navToggle = header.querySelector('.nav-toggle');
    navToggle.addEventListener('click', () => {
      header.classList.toggle('active');
      nav.classList.toggle('active');
      navToggle.classList.toggle('active');
    });
  }

  /* accordion expand */
  {
    accordions = document.querySelectorAll('.accordion');
    let accordionsNumber = accordions.length;
    for (let accordionCount = 0; accordionCount < accordionsNumber; accordionCount++) {
      let accordionItemCollection = accordions[accordionCount].querySelectorAll('.accordion__item');
      let itemsNumber = accordionItemCollection.length;
      for (let itemCount = 0; itemCount < itemsNumber; itemCount++) {
        accordionItemCollection[itemCount].addEventListener('click', () => {
          for (let it = 0; it < itemsNumber; it++) {
            accordionItemCollection[it].classList.remove('active');
          }
          accordionItemCollection[itemCount].classList.add('active');
        });
      }
    }
  }

  /* sliders */
  {
      $("[data-slider]").slick({
        infinite: true,
        fade: false,
        slidesToShow: 1,
        slidesToScroll: 1
      });
  }

}());
