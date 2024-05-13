var typingEffect = new Typed(".typedText",{
    strings : ["Lea Kokir","Kokir Lea","Lea Kokir"],
loop : true,
typeSpeed: 100,
backSpeed:100,
backDelay:1000
}) ;

function scrollToContact() {
    var contactSection = document.getElementById("contact");
    contactSection.scrollIntoView({ behavior: "smooth" });
}

function showCV() {
  
    var cvPath = 'image/CV_Lea_Kokir.pdf';
    window.open(cvPath, '_blank');
}