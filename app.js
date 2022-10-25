// Collapsible content - about section
const interests = document.getElementsByClassName('aboutButton');
let i;

for(i = 0; i < interests.length; i++){
    interests[i].addEventListener("click", function () {
        this.classList.toggle("active")

        const interestsContent = document.querySelector(".interestsParagraph");
        if (interestsContent.style.display == "block") {
            interestsContent.style.display = "none";
        } else {
            interestsContent.style.display = "block";
        }
    })
}

// Image Carousel - Projects
