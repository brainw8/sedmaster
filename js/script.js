var link = document.querySelector(".booking-form-link");
var popup = document.querySelector(".booking-form-content");

link.addEventListener("click", function(event) {
  event.preventDefault();

   if (!popup.classList.contains("booking-form-content-show")) {
  popup.classList.add("booking-form-content-show");
  } else {
    popup.classList.remove("booking-form-content-show");
  }


})
