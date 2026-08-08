const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.hamburger-menu');
const cut = document.querySelector('#cut');

hamburger.addEventListener('click', ()=>{
    menu.style.display = "block";
})

cut.addEventListener('click', ()=>{
    menu.style.display = "none";
})





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



/* ======================================
   SEO Dashboard JavaScript - Part 1
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    const dashboard = document.querySelector(".seo-dashboard");

    if (!dashboard) return;

    let hasAnimated = false;

    // -----------------------------
    // Counter Animation
    // -----------------------------

    function animateCounters() {

        const counters = document.querySelectorAll(".counter");

        counters.forEach(counter => {

            const target = Number(counter.dataset.target);

            let current = 0;

            const duration = 1800;

            const increment = target / (duration / 16);

            const formatter = new Intl.NumberFormat("en-IN");

            function update() {

                current += increment;

                if (current >= target) {

                    current = target;

                }

                counter.textContent = formatter.format(Math.floor(current));

                if (current < target) {

                    requestAnimationFrame(update);

                }

            }

            update();

        });

    }

    // -----------------------------
    // Progress Bar
    // -----------------------------

    function animateProgressBar() {

        const fill = document.querySelector(".score-fill");

        if (!fill) return;

        fill.style.transition = "width 2s ease";

        setTimeout(() => {

            fill.style.width = "98%";

        }, 300);

    }

    // -----------------------------
    // Fade-Up Animation
    // -----------------------------

    function revealCards() {

        const cards = document.querySelectorAll(
            ".stat-card,.chart-card,.activity-card,.score-card"
        );

        cards.forEach((card, index) => {

            card.style.opacity = "0";

            card.style.transform = "translateY(30px)";

            setTimeout(() => {

                card.style.transition =
                    "all .7s cubic-bezier(.22,.61,.36,1)";

                card.style.opacity = "1";

                card.style.transform = "translateY(0)";

            }, index * 120);

        });

    }

    // -----------------------------
    // Start all animations
    // -----------------------------

    function startDashboard() {

        if (hasAnimated) return;

        hasAnimated = true;

        animateCounters();

        animateProgressBar();

        revealCards();

    }

    // -----------------------------
    // Observer
    // -----------------------------

    const observer = new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    startDashboard();

                }

            });

        },

        {
            threshold: 0.35
        }

    );

    observer.observe(dashboard);

});

/* ======================================
   SEO Dashboard JavaScript - Part 2
   Animated Charts
====================================== */

function initializeCharts() {

    /* -----------------------------
       Traffic Line Chart
    ----------------------------- */

    const trafficCanvas = document.getElementById("trafficChart");

    if (trafficCanvas) {

        new Chart(trafficCanvas, {

            type: "line",

            data: {

                labels: [
                    "Jan",
                    "Feb",
                    "Mar",
                    "Apr",
                    "May",
                    "Jun",
                    "Jul"
                ],

                datasets: [

                    {

                        label: "Organic Traffic",

                        data: [
                            420,
                            680,
                            820,
                            1150,
                            1320,
                            1580,
                            1940
                        ],

                        borderColor: "#3B82F6",

                        borderWidth: 3,

                        pointRadius: 4,

                        pointHoverRadius: 7,

                        pointBackgroundColor: "#3B82F6",

                        fill: true,

                        backgroundColor: "rgba(59,130,246,.12)",

                        tension: .45

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                animation: {

                    duration: 2000,

                    easing: "easeOutQuart"

                },

                plugins: {

                    legend: {

                        display: false

                    }

                },

                scales: {

                    x: {

                        grid: {

                            display: false

                        }

                    },

                    y: {

                        grid: {

                            color: "#EEF2F7"

                        }

                    }

                }

            }

        });

    }

    /* -----------------------------
       Bar Chart
    ----------------------------- */

    const conversionCanvas = document.getElementById("conversionChart");

    if (conversionCanvas) {

        new Chart(conversionCanvas, {

            type: "bar",

            data: {

                labels: [
                    "Mon",
                    "Tue",
                    "Wed",
                    "Thu",
                    "Fri",
                    "Sat"
                ],

                datasets: [

                    {

                        data: [
                            42,
                            61,
                            55,
                            73,
                            68,
                            92
                        ],

                        backgroundColor: [

                            "#3B82F6",
                            "#60A5FA",
                            "#2563EB",
                            "#1D4ED8",
                            "#93C5FD",
                            "#132440"

                        ],

                        borderRadius: 12,

                        borderSkipped: false

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                animation: {

                    duration: 1800

                },

                plugins: {

                    legend: {

                        display: false

                    }

                },

                scales: {

                    x: {

                        grid: {

                            display: false

                        }

                    },

                    y: {

                        beginAtZero: true,

                        grid: {

                            color: "#EEF2F7"

                        }

                    }

                }

            }

        });

    }

    /* -----------------------------
       Doughnut Chart
    ----------------------------- */

    const sourceCanvas = document.getElementById("trafficSourceChart");

    if (sourceCanvas) {

        new Chart(sourceCanvas, {

            type: "doughnut",

            data: {

                labels: [

                    "Organic",
                    "Social",
                    "Ads"

                ],

                datasets: [

                    {

                        data: [

                            62,
                            24,
                            14

                        ],

                        backgroundColor: [

                            "#3B82F6",
                            "#10B981",
                            "#F59E0B"

                        ],

                        borderWidth: 0,

                        hoverOffset: 12

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                cutout: "72%",

                animation: {

                    duration: 2200,

                    animateRotate: true,

                    animateScale: true

                },

                plugins: {

                    legend: {

                        display: false

                    }

                }

            }

        });

    }

}

/* ======================================
   Run Charts
====================================== */

document.addEventListener("DOMContentLoaded", () => {

    setTimeout(() => {

        initializeCharts();

    }, 400);

});