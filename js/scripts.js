var link = document.querySelector(".search-push");
    var popup = document.querySelector(".search-form");
    var dateArrive = popup.querySelector("[name=date-arrive]");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.toggle("search-form-show");
      dateArrive.focus()
          });
    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup.classList.contains("search-form-show")) {
          popup.classList.remove("search-form-show");
        }
      }
    });