const feedback = document.querySelector(".main-display__button--quote");
const popup = document.querySelector(".modal");
const popupClose = popup.querySelector(".modal__close");

feedback.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.add("modal__show");
});

popupClose.addEventListener("click", function (evt) {
	evt.preventDefault();
	popup.classList.remove("modal__show");
});