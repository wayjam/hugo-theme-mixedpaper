(function() {
  const backToTopBtn = document.getElementById("back_to_top");

  window.onscroll = function() {
    scrollFunction(backToTopBtn);
  };
})();

function scrollFunction(btn) {
  const pageOffset =
    document.documentElement.scrollTop || document.body.scrollTop;
  if (btn) btn.style.visibility = pageOffset > 450 ? "visible" : "hidden";
}

// When the user clicks on the button, scroll to the top of the document
function backToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
