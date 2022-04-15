// mobile burger menu
function openNav() {
  document.getElementById("burger").style.height = "100%";
}
function closeNav() {
  document.getElementById("burger").style.height = "0%";
}

// mobile share link fixed
window.onscroll = function () {
  myFunction();
};

function myFunction() {
  if (window.innerWidth <= 980) {
    var shareLink = document.getElementById("shareLink");
    var sticky = shareLink.clientHeight;
    var viewportHeight = window.visualViewport.height;
    var footerTop = document
      .getElementById("innerFooter")
      .getBoundingClientRect().top;
    var articleBottom = innerArticle.getBoundingClientRect().bottom;
    // console.log(viewportHeight);
    // console.log(sticky);
    // console.log(shareLink.getBoundingClientRect().top);
    // console.log(footerTop);
    // console.log(innerArticle.getBoundingClientRect().bottom + sticky);
    // if (shareLink.getBoundingClientRect().top <= viewportHeight - sticky) {
    // }
    if (footerTop < viewportHeight || articleBottom + sticky > viewportHeight) {
      shareLink.removeAttribute("style");
    } else {
      shareLink.style.position = "fixed";
      shareLink.style.bottom = "0";
    }
  }
}
