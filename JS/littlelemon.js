const toggleMenu = () => {
    const navigation = document.querySelector(".nav-links");
    const burgerMenu = document.querySelector(".menu-icon");
    const iconElement = burgerMenu.querySelector("i");
    

    const isBurger = iconElement.classList.contains("fa-bars");
    const iconName = isBurger ? "fa-xmark" : "fa-bars";

    iconElement.setAttribute("class", "fa-solid " + iconName);
    if (!isBurger) {
        navigation.classList.add("nav-links--mobile--fadeout");
        setTimeout(() => {
            navigation.classList.toggle("nav-links--mobile");
        }, 300);
    } else {
        navigation.classList.remove("nav-links--mobile--fadeout");
        navigation.classList.toggle("nav-links--mobile");
    }
};


document.addEventListener('DOMContentLoaded', function() {
  // Get the current pathname
  var currentPathname = window.location.pathname;

  // Get all links in the navigation
  var links = document.querySelectorAll('.nav-links > li > a');

  // Iterate through each link and check if its href is included in the current pathname
  links.forEach(function(link) {
      var linkPathname = new URL(link.href).pathname;

      // Check if the current pathname includes the link's pathname
      if (currentPathname.includes(linkPathname)) {
          // If it does, add the 'active' class to highlight the link
          link.classList.add('active');
      }
  });
});




//Carousel Function for mobile and desktop 
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.carousel-wrap');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', handleMouseDown);
  slider.addEventListener('touchstart', handleTouchStart);

  slider.addEventListener('mouseleave', handleMouseLeave);
  slider.addEventListener('touchend', handleTouchEnd);

  slider.addEventListener('mouseup', handleMouseUp);
  slider.addEventListener('touchcancel', handleTouchEnd);

  slider.addEventListener('mousemove', handleMouseMove);
  slider.addEventListener('touchmove', handleTouchMove);

  function handleMouseDown(e) {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
  }

  function handleTouchStart(e) {
      isDown = true;
      slider.classList.add('active');
      startX = e.touches[0].pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
  }

  function handleMouseLeave() {
      isDown = false;
      slider.classList.remove('active');
  }

  function handleTouchEnd() {
      isDown = false;
      slider.classList.remove('active');
  }

  function handleMouseUp() {
      isDown = false;
      slider.classList.remove('active');
  }

  function handleMouseMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
  }

  function handleTouchMove(e) {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - slider.offsetLeft;
      const walk = (x - startX) * 3;
      slider.scrollLeft = scrollLeft - walk;
  }

  function nextSlide() {
      const nextScrollLeft = (scrollLeft + slider.offsetWidth) % slider.scrollWidth;
      slider.scrollLeft = nextScrollLeft;
      scrollLeft = nextScrollLeft;
  }

  // Automatically move the slider every 3 seconds
  setInterval(() => {
      if (!isDown) {
          // Reset to the first slide when reaching the end
          if (scrollLeft + slider.offsetWidth >= slider.scrollWidth) {
              slider.scrollLeft = 0;
              scrollLeft = 0;
          } else {
              nextSlide();
          }
      }
  }, 3000);
});






const fadeElements = document.querySelectorAll('.second-heading, .third-heading, .third-para, .third-image, .fourth-heading, .fourth-para, .third-link, .history-heading, .history-first-para, .history-second-para, .venue-heading, .venue-para-one, .venue-para-two, .history-img-one, .history-img-two')

// Trigger the fade-in when the element becomes visible in the viewportg
// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-stable');
    }
  });
}, { threshold: 0.3 }); // Adjust the threshold as needed

// Observe each element
fadeElements.forEach(element => {
  observer.observe(element);
});















//for mobile screen potrait
const mobilefadeElements = document.querySelectorAll('.second-heading, .third-image')
const mobileobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-mobile');
    }
  });
}, { threshold: 0.3 }); // Adjust the threshold as needed

// Observe each element
mobilefadeElements.forEach(element => {
 mobileobserver.observe(element);
});

const secondfadeElements = document.querySelectorAll('.second-heading, .third-heading, .third-para, .third-link, .fourth-heading, .fourth-para')

// Trigger the fade-in when the element becomes visible in the viewport
const secondobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-mobile-two');
    }
  });
}, { threshold: 0.3 }); // Adjust the threshold as needed


secondfadeElements.forEach(element => {
 secondobserver.observe(element);
});


//for mobile screen potrait
const phonefadeElements = document.querySelectorAll('.anchor, .two-fish, .coral')
const phoneobserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible-mobile-three');
    }
  });
}, { threshold: 0.3});


phonefadeElements.forEach(element => {
 phoneobserver.observe(element);
});




//date input function(JQuery UI datepicker)
$(function() {
  
  $("#date").datepicker({
    minDate: 0,
    maxDate: "+5Y",
    defaultDate: "null"
       });

    
     $('#time').timepicker({
        timeFormat: 'h:mm p',
        interval:  '15',
        minTime: '2:00pm',
        maxTime: '11:00pm',
        defaultTime: '2:00pm',
        dynamic: false,
        dropdown: true,
        scrollbar: true
    });
     });

document.addEventListener('DOMContentLoaded', function () {

   var findbtn = document.querySelector('.find-btn')
   findbtn.addEventListener('click', function() {
    let findform = document.getElementById('second-form');

    if (findform && findform.checkValidity()) {
        window.location.href = 'Reservations.html';
    } else if (findform) {
        findform.reportValidity();
    }

})
});





//toggle input icon functions 
document.addEventListener('DOMContentLoaded', function() {
      const selects = document.querySelectorAll('#guestLists, #time');
      const icons = document.querySelectorAll('.guest-icon i, .time-icon i');
    
      selects.forEach((select, index )  => {
      select.addEventListener('mousedown', function() {
        icons[index].classList.toggle('fa-angle-up');
      });
    
      // Add event listener to remove class when the select loses focus
      select.addEventListener('blur', function() {
        icons[index].classList.remove('fa-angle-up');
      });

    })
    });
    


document.addEventListener('DOMContentLoaded', function () {
      // Get a reference to the button and the modal
      const reserveButton = document.getElementById('reserveButton');
      const myModal = new bootstrap.Modal(document.getElementById('myModal'));

      // Check form validity
     // Add a click event listener to the button
    reserveButton.addEventListener('click', function () {
      // Get a reference to the form inputs
      const formInputs = document.querySelectorAll('#date, #time, #guestLists');

      // Check form validity
      let isValid = true;
      formInputs.forEach(input => {
          if (!input.checkValidity()) {
              isValid = false;
              input.reportValidity();
          }
      });

      // If the form is valid, show the modal
      if (isValid) {
          myModal.show();
      }
  });
  });



    function submitEmail() {
     // Check if the email input is valid
      const emailInput = document.getElementById('send-email');
      if (emailInput.checkValidity()) {
          // Clear the email input
          emailInput.value = '';

          // Display the submit text after clearing the email input
          const submitText = document.getElementById('submitText');
          submitText.style.display = 'block';

          // Hide the submit text after 3 seconds
          setTimeout(function () {
              submitText.style.display = 'none';
          }, 3000);
      } else {
          // If the email input is not valid, show a validation message
          emailInput.reportValidity();
      }
  }



  $(document).ready(function(){
    $('[data-bs-toggle="tooltip"]').tooltip({placement: "bottom"});   
});




var scrollToTopBtn = document.getElementById("scrollToTopBtn");

window.onscroll = function () {
    showHideScrollTopButton();
};

window.onresize = function () {
    showHideScrollTopButton();
};

// When the user scrolls down 50px from the top, show the button for devices lower than 992px;
function showHideScrollTopButton() {
    if (window.innerWidth <= 991.98 && (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

 // Scroll to the top when the button is clicked
 function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}







 
  let form = document.querySelector('.contact-form');
  let submitBtn = document.getElementById('submitBtn');

  submitBtn.addEventListener('click', function(){
      if (form.checkValidity()) {
          // Clear inputs and show submit text
          clearFormInputs();
          showSubmitText();
      } else {
          // If the form is not valid, show validation messages
          form.classList.add('was-validated');
      }
  });

  // Function to clear form inputs
  function clearFormInputs() {
      var inputs = form.querySelectorAll('input, textarea');
      inputs.forEach(function (input) {
          input.value = '';
      });
  }

  // Function to show submit text
  function showSubmitText() {
      var submitText = document.getElementById('contact-submit-text');
      // Remove the validation styling
      form.classList.remove('was-validated')
      submitText.style.display = 'block';

      // Hide the submit text after 3 seconds
      setTimeout(function () {
          submitText.style.display = 'none';
      }, 3000);
  }
