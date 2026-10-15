const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hamburger-menu');
const cut = document.querySelector('#cut');

hamburger.addEventListener('click', ()=>{
    menu.style.display = "block";
})

cut.addEventListener('click', ()=>{
    menu.style.display = "none";
})



document.querySelectorAll('.faq-box').forEach((faq) => {
    const question = faq.querySelector('.ques');
    const answer = faq.querySelector('.ans');
    const arrow = faq.querySelector('.open-faq');

    question.addEventListener('click', () => {
        const isClosed = getComputedStyle(answer).display === 'none';

        answer.style.display = isClosed ? 'block' : 'none';
        arrow.classList.toggle('active', isClosed);
    });
});





const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');

const images = document.querySelectorAll('.card');

let slidenum = 1;

const nextSlide = ()=>{
    slider.style.transform = `translateX(-${slidenum*360}px)`;
    slidenum++;
}

const prevSlide = ()=>{
    slider.style.transform = `translateX(-${(slidenum-2)*360}px)`;
    slidenum --;
}

const firstSlide = ()=>{
    slider.style.transform = `translateX(0px)`;
    slidenum = 1;
}

const lastslide = ()=>{
    slider.style.transform = `translateX(-${(images.length - 2)*360}px)`;
    slidenum = images.length - 1;
}

right.addEventListener('click', ()=>{
    slidenum < (images.length - 1) ? nextSlide() : firstSlide();
})

left.addEventListener('click', ()=>{
    slidenum > 1 ? prevSlide() : lastslide();
})




right.addEventListener('mousemove', ()=>{
    right.style.cursor = "pointer";
})

left.addEventListener('mousemove', ()=>{
    left.style.cursor = "pointer";
})



const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", async function (event) {
        event.preventDefault();

        try {
            const response = await emailjs.sendForm(
                "service_2w77vxn",
                "template_p3vxgew",
                contactForm
            );

            console.log("Email sent:", response.status);

            const submitBtn = contactForm.querySelector('button[type="submit"]');

            if (submitBtn) {
                submitBtn.textContent = "We will reach You";
                submitBtn.style.backgroundColor = "#28a745";
                submitBtn.style.borderColor = "#28a745";
                submitBtn.style.color = "#ffffff";
                submitBtn.disabled = true;
            }
            contactForm.reset();

        } catch (error) {
            console.error("EmailJS error details:", error);
        
            const errorMessage =
                error?.text ||
                error?.message ||
                JSON.stringify(error);
        
            alert("EmailJS error: " + errorMessage);
        }
    });
}
