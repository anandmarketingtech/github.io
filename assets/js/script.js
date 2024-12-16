/*Project section- card slider*/


var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: 'true',
  fade: 'true',
  grabCursor: 'true',
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});





/* New EmailJS integration java script*/
function sendMail() {
  var parms = {
    name: document.getElementById("contact_form_name").value,
    email: document.getElementById("contact_form_email").value,
    subject: document.getElementById("contact_form_subject").value,
    message: document.getElementById("contact_form_message").value,
  }

  const serviceID = "service_7zkfrni"
  const templateID = "template_5lx78mf"

  emailjs.send(serviceID, templateID, parms).then(
    (res) => {
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
      console.log(res);
      alert("Message Sent Successfully !");
    })
    .catch((err) => console.log(err));

}