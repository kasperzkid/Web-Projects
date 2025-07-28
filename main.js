
// Function to validate the contact form before submission
function validateForm() {
  // Get values from input fields
  var name = document.getElementById('name').value;
  var phone = document.getElementById('phone').value;
  var email = document.getElementById('email').value;
  var message = document.getElementById('message').value;

  // Check if name is empty
  if (name.trim() == '') {
      alert('Please enter your name');
      return false;
  }

  // Check if phone number is empty
  if (phone.trim() == '') {
      alert('Please enter your phone number');
      return false;
  }

  // Check if email is empty
  if (email.trim() == '') {
      alert('Please enter your email');
      return false;
  }

  // Check if message is empty
  if (message.trim() == '') {
      alert('Please enter your message');
      return false;
  }

  // All fields are filled, return true for form submission
  return true;
}

const scrollRevealOption = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
  };
  
  ScrollReveal().reveal(".header__image img", {
    ...scrollRevealOption,
    origin: "right",
  });
  ScrollReveal().reveal(".header__content h1", {
    ...scrollRevealOption,
    delay: 500,
  });
  ScrollReveal().reveal(".header__content p", {
    ...scrollRevealOption,
    delay: 1000,
  });
  ScrollReveal().reveal(".header__content button", {
    ...scrollRevealOption,
    delay: 1500,
  });
  ScrollReveal().reveal("#About h1", {
    ...scrollRevealOption,
    origin: "top",
    delay: 50,
  });
  ScrollReveal().reveal("#About .about img", {
    ...scrollRevealOption,
    origin: "left",
    delay: 150,
  });
  ScrollReveal().reveal("#About .about .text", {
    ...scrollRevealOption,
    origin: "right",
    delay: 200,
  });
 
  ScrollReveal().reveal("#service .head_text", {
    ...scrollRevealOption,
    origin: "top",
    delay: 300,
  });
  ScrollReveal().reveal("#service .container", {
    ...scrollRevealOption,
    origin: "top",
    delay: 1000,
  });
  ScrollReveal().reveal("#faq .accordion", {
    ...scrollRevealOption,
    origin: "top",
    delay: 500,
  });

  window.addEventListener("scroll", function() {
    const header = document.querySelector("nav");
    header.classList.toggle("sticky-nav", window.scrollY > 0);
});

let li = document.querySelectorAll(".faq-text li");
for (var i = 0; i < li.length; i++) {
  li[i].addEventListener("click", (e)=>{
    let clickedLi;
    if(e.target.classList.contains("question-arrow")){
      clickedLi = e.target.parentElement;
    }else{
      clickedLi = e.target.parentElement.parentElement;
    }
   clickedLi.classList.toggle("showAnswer");
  });
}
