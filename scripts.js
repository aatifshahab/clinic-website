// Quote Slider Functionality
let quoteIndex = 0;
function showQuote(index) {
  const slides = document.getElementsByClassName("quote-slide");
  if (index >= slides.length) {
    quoteIndex = 0;
  }
  if (index < 0) {
    quoteIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[quoteIndex].style.display = "block";
}

function changeQuote(n) {
  quoteIndex += n;
  showQuote(quoteIndex);
}

// Initialize quote slider and auto-rotate every 5 seconds
showQuote(quoteIndex);
setInterval(() => {
  changeQuote(1);
}, 5000);

// Modal Functionality for Gallery Images
function openModal(img) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-image").src = img.src;
  document.getElementById("caption").innerText = img.alt;
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}
