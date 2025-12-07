const goToSections = document.querySelectorAll('a[href^="#"]');
const sections = document.querySelectorAll('section');

if(sections.length){

    const windowMetade = window.innerHeight * 0.6;

    function animaScroll(){
        sections.forEach((section) => {
            const sectionTop = section.getBoundingClientRect().top;
            const isSectionVisible = (sectionTop - windowMetade) < 0;
            if(isSectionVisible)
                section.classList.add('ativo');
            else
                section.classList.remove('ativo');
        })
    }

    animaScroll();
    window.addEventListener('scroll', animaScroll);
}

function scrollSuave(event){
    event.preventDefault();
    const href = event.currentTarget.getAttribute('href');
    const section = document.querySelector(href);
    section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
    });
}

goToSections.forEach((link) => {
    link.addEventListener('click', scrollSuave)
})