const aboutAccordion = document.querySelector("#about_accordion");
const aboutAccordionIcon = aboutAccordion.querySelector(".fas");
const aboutSection = document.querySelector("#about");
const skillsAccordion = document.querySelector("#skills_accordion");
const skillsAccordionIcon = skillsAccordion.querySelector(".fas");
const skillsSection = document.querySelector("#skills");
const educationAccordion = document.querySelector("#education_accordion");
const educationAccordionIcon = educationAccordion.querySelector(".fas");
const educationSection = document.querySelector("#education");
const interestAccordion = document.querySelector("#interests_accordion");
const interestAccordionIcon = interestAccordion.querySelector(".fas");
const interestSection = document.querySelector("#interest");
const contactMeAccordion = document.querySelector("#contact_accordion");
const contactMeAccordionIcon = contactMeAccordion.querySelector(".fas");
const contactMeSection = document.querySelector("#contact-me");

let aboutOpen = false;
let skillsOpen = false;
let educationOpen = false;
let interestOpen = false;
let contactMeOpen = false;

aboutAccordion.addEventListener("click", () => {
    if(aboutOpen){
        aboutSection.style.display = "none";
        aboutAccordionIcon.classList.remove("fa-minus");
        aboutAccordionIcon.classList.add("fa-plus");
    }
    else{
        aboutSection.style.display = "block";
        aboutAccordionIcon.classList.remove("fa-plus");
        aboutAccordionIcon.classList.add("fa-minus");
    }
    aboutOpen = !aboutOpen;
})

skillsAccordion.addEventListener("click", () => {
    if(skillsOpen){
        skillsSection.style.display = "none";
        skillsAccordionIcon.classList.remove("fa-minus");
        skillsAccordionIcon.classList.add("fa-plus");
    }
    else{
        skillsSection.style.display = "block";
        skillsAccordionIcon.classList.remove("fa-plus");
        skillsAccordionIcon.classList.add("fa-minus");
    }
    skillsOpen = !skillsOpen;
})

educationAccordion.addEventListener("click", () => {
    if(educationOpen){
        educationSection.style.display = "none";
        educationAccordionIcon.classList.remove("fa-minus");
        educationAccordionIcon.classList.add("fa-plus");
    }
    else{
        educationSection.style.display = "block";
        educationAccordionIcon.classList.remove("fa-plus");
        educationAccordionIcon.classList.add("fa-minus");
    }
    educationOpen = !educationOpen;
})

interestAccordion.addEventListener("click", () => {
    if(interestOpen){
        interestSection.style.display = "none";
        interestAccordionIcon.classList.remove("fa-minus");
        interestAccordionIcon.classList.add("fa-plus");
    }
    else{
        interestSection.style.display = "block";
        interestAccordionIcon.classList.remove("fa-plus");
        interestAccordionIcon.classList.add("fa-minus");
    }
    interestOpen = !interestOpen;
})

contactMeAccordion.addEventListener("click", () => {
    if(contactMeOpen){
        contactMeSection.style.display = "none";
        contactMeAccordionIcon.classList.remove("fa-minus");
        contactMeAccordionIcon.classList.add("fa-plus");
    }
    else{
        contactMeSection.style.display = "block";
        contactMeAccordionIcon.classList.remove("fa-plus");
        contactMeAccordionIcon.classList.add("fa-minus");
    }
    contactMeOpen = !contactMeOpen;
})
