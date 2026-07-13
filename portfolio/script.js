const menuIcon = document.querySelector("#menu-icon");
const navbar = document.querySelector(".navbar");
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("header nav a");

window.addEventListener("scroll", () => {

    sections.forEach(section => {

        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (top >= offset && top < offset + height) {

            navLinks.forEach(link => {
                link.classList.remove("active");
            });

            const activeLink =
                document.querySelector(`header nav a[href="#${id}"]`);

            if (activeLink) {
                activeLink.classList.add("active");
            }
        }

    });

});

menuIcon.onclick = () => {
    menuIcon.classList.toggle("bx-x");
    navbar.classList.toggle("active");
};
// ===========================
// EmailJS Contact Form
// ===========================

emailjs.init({
    publicKey: "2Tn24krXivcX09Yky",
});

const contactForm = document.getElementById("contact-form");

if (contactForm) {

    contactForm.addEventListener("submit", function (e) {

        e.preventDefault();

        console.log("Form submitted");

        emailjs.send(
            "service_rjg5p1p",
            "template_gxd2ad9",
            {
                name: document.getElementById("name").value,
                email: document.getElementById("email").value,
                phone: document.getElementById("phone").value,
                subject: document.getElementById("subject").value,
                message: document.getElementById("message").value
            }
        )
        .then(() => {
            alert("✅ Message sent successfully!");
            contactForm.reset();
        })
        .catch((error) => {
            console.error(error);
            alert("❌ Failed to send message.");
        });

    });

}
let lastScroll = 0;

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    const current = window.pageYOffset;

    if(current > lastScroll && current > 100){

        header.style.transform = "translateY(-100%)";

    }else{

        header.style.transform = "translateY(0)";

    }

    lastScroll = current;

});
document.querySelectorAll(".hidden-left").forEach(el=>{

const observerLeft=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-left");

}

});

});

observerLeft.observe(el);

});

document.querySelectorAll(".hidden-right").forEach(el=>{

const observerRight=new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show-right");

}

});

});

observerRight.observe(el);

});
// ===========================
// Scroll Reveal (Repeat Animation)
// ===========================

const observer = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }else{
            entry.target.classList.remove("show");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".hidden").forEach(el=>{
    observer.observe(el);
});


const observerLeft = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show-left");
        }else{
            entry.target.classList.remove("show-left");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".hidden-left").forEach(el=>{
    observerLeft.observe(el);
});


const observerRight = new IntersectionObserver((entries)=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){
            entry.target.classList.add("show-right");
        }else{
            entry.target.classList.remove("show-right");
        }

    });

},{
    threshold:0.15
});

document.querySelectorAll(".hidden-right").forEach(el=>{
    observerRight.observe(el);
});
// ===========================
// Card Stagger Animation
// ===========================

const cards = document.querySelectorAll(
    ".skill-card, .project-card, .certificate-item, .achievement-card, .stat"
);

cards.forEach(card=>{

card.style.transitionDelay="0ms";

});
