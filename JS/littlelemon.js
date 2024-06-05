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
  const currentPathname = window.location.pathname;

  // Get all links in the navigation
  const links = document.querySelectorAll('.nav-links > li > a');

  // Iterate through each link and check if its href is included in the current pathname
  links.forEach(function(link) {
      const linkPathname = new URL(link.href).pathname;

      // Check if the current pathname includes the link's pathname
      if (currentPathname.includes(linkPathname)) {
          // If it does, add the 'active' class to highlight the link
          link.classList.add('active');
      }
  });
});




//hero background animation;

function  handleSlider() {
  const carouselWrap = document.querySelector('.hero-bg');
  const card = document.querySelectorAll(".card");
  let startX = card[0].offsetWidth - carouselWrap.offsetLeft;
  let scrollLeft = carouselWrap.scrollLeft;

  const walk = Math.round(startX + scrollLeft);
  carouselWrap.scrollLeft = walk;

  
  if (scrollLeft + carouselWrap.offsetWidth >= carouselWrap.scrollWidth) {
       carouselWrap.scrollLeft = 0;
  }
}


  






const fadeElements = document.querySelectorAll('.second-heading, .third-heading, .third-para,  .third-link, .fourth-heading, .fourth-para, .history-heading, .history-first-para, .history-second-para, .venue-heading, .venue-para-one, .venue-para-two')

// Trigger the fade-in when the element becomes visible in the viewportg
// Create an Intersection Observer
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
       entry.target.classList.add('visible-up');
    }
  });
}, { threshold: 0.4 }); // Adjust the threshold as needed

// Observe each element
fadeElements.forEach(element => {
  observer.observe(element);
});








//date input function(JQuery UI datepicker)
$(document).ready(function() {

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
        defaultTime: 'null',
        dynamic: true,
        dropdown: true,
        scrollbar: true
    });

    $('[data-bs-toggle="tooltip"]').tooltip({placement: "bottom"});  
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
    reserveButton.addEventListener('click', function() {
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





const scrollToTopBtn = document.getElementById("scrollToTopBtn");

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







 
   const contactForm = document.querySelector(".contact-form");
    function  handleContactform(e){
      e.preventDefault();
      if (e.target.checkValidity()) {
          // Clear inputs and show submit text
          clearFormInputs();
          showSubmitText();
      } else {
          // If the form is not valid, show validation messages
          contactForm.classList.add('was-validated');
      }
  };


  // Function to clear form inputs
  function clearFormInputs() {
      const inputs = contactForm.querySelectorAll('input, textarea');
      inputs.forEach(function (input) {
          input.value = '';
      });
  }

  // Function to show submit text
  function showSubmitText() {
      const submitText = document.getElementById('contact-submit-text');
      // Remove the validation styling
      contactForm.classList.remove('was-validated')
      submitText.style.display = 'block';

      // Hide the submit text after 3 seconds
      setTimeout(function () {
          submitText.style.display = 'none';
      }, 3000);
  }




  function handleHomeForm(e){
    e.preventDefault();
   const guestVal = e.target[0].value;
   const dateVal = e.target[1].value;
   const timeVal = e.target[2].value;

   const reservationDetails = {
       guestVal,
       dateVal,
       timeVal
   }

   localStorage.setItem("reservationDetails", JSON.stringify(reservationDetails));
   
   if(e.target.checkValidity()){
      updateReserveForm();
      window.location.href = 'Reservations.html';
     
   }else{
       e.reportValidity();
   }

    
 }

  function updateReserveForm(){
    const reserveGuest = document.querySelector(".reserve-guest");
    const reserveDate = document.querySelector(".reserve-date");
    const reserveTime = document.querySelector(".reserve-time");

     if (reserveGuest && reserveDate && reserveTime) {
      const reservationDetails = JSON.parse(localStorage.getItem("reservationDetails"));

        if(reservationDetails){
          reserveGuest.value = reservationDetails.guestVal;
          reserveDate.value = reservationDetails.dateVal;
           reserveTime.value = reservationDetails.timeVal;
        }
        
      } else {
        return;
      }
  }


  updateReserveForm();
  setInterval(handleSlider, 2500);
