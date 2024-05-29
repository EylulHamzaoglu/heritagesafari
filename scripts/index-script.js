

function myFunction() {
    alert("We will update with new flavors very soon!");
    return false;
  }




  document.addEventListener("DOMContentLoaded", function () {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = document.getElementsByClassName("fade");
    
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
    
        slideIndex++;
    
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
    
        slides[slideIndex - 1].style.display = "block";
    
        setTimeout(showSlides, 2000); 
    };
});
