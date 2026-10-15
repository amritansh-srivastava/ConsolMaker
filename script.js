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

const btn = document.querySelector('#btn');

btn.addEventListener('click', (e)=>{
    e.preventDefault();
    btn.innerHTML = "We will reach you";
    btn.style.backgroundColor = "green";
})