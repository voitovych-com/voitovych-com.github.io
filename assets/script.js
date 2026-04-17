const currentDate = new Date();
let year = currentDate.getFullYear();
document.getElementById("currentDate").innerHTML = year;

function downloadCV() {
window.print();
}

const all = document.querySelectorAll('.job, .reveal');
const io = new IntersectionObserver(entries => {
entries.forEach((e, i) => {
    if (e.isIntersecting) {
    const delay = e.target.classList.contains('job')
        ? [...document.querySelectorAll('.job')].indexOf(e.target) * 80
        : 0;
    setTimeout(() => e.target.classList.add('vis'), delay);
    io.unobserve(e.target);
    }
});
}, { threshold: 0.08 });
all.forEach(el => io.observe(el));