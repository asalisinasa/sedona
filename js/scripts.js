var link = document.querySelector(".search-push");
    var popup = document.querySelector(".search-form");
    var dateArrive = popup.querySelector("[name=date-arrive]");
    var form = popup.querySelector("form");

    link.addEventListener("click", function(event) {
      event.preventDefault();
      popup.classList.toggle("search-form-show");
      dateArrive.focus()
          });
    window.addEventListener("keydown", function(event) {
      if (event.keyCode === 27) {
        if (popup.classList.contains("search-form-show")) {
          popup.classList.remove("search-form-show");
          popup.classList.remove("modal-error");
        }
      }
    });
    /* где-то ошибка, не работает. при нажатии на кнопку при наличии пустых полей, просто перезагружается страница*/
    form.addEventListener("submit", function(event) {
        if (!date-arrive.value || !date-depart.value || !adult-numb.value) {
          event.preventDefault();
          popup.classList.remove("modal-error");
          popup.offsetWidth = popup.offsetWidth;
          popup.classList.add("modal-error");
        }
      });