let Circle1 = document.getElementById('Circle1'),
    Circle2 = document.getElementById('Circle2'),
    Circle3 = document.getElementById('Circle3');

let cursor = document.getElementById('cursor');
    hovered = document.querySelectorAll('.hovered');
    StartLogo = document.getElementById('StartLogo');
    HeaderLogo = document.getElementById('HeaderLogo');

// cursor
hovered.forEach(element => {
    element.addEventListener('mouseover', () => {
        if (element.classList.contains("hovered-xl")) {
            cursor.classList.add('cursor--hovered-xl');
        } else{
            cursor.classList.add('cursor--hovered-sm');
        }
    });

    element.addEventListener('mouseout', () => {
        if (element.classList.contains("hovered-xl")) {
            cursor.classList.remove('cursor--hovered-xl');
        } else{
            cursor.classList.remove('cursor--hovered-sm');
        }
    });
});

document.addEventListener('mousemove', e => {
    let mouseX = e.clientX / 20;
    let mouseY = e.clientY / 20;

    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    Circle1.style.transform = `translate(calc(-50% - ${mouseX}px) , calc(-50% - ${mouseY}px))`;
    Circle2.style.transform = `translate(calc(-50% + ${mouseX}px) , calc(-50% + ${mouseY}px))`;
    Circle3.style.transform = `translate(calc(-50% + ${mouseX}px) , calc(-50% - ${mouseY}px))`;
});

const options = {
    root: null,
    threshold: 0,
    rootMargin: "0px 0px 0px 0px"
};

const observer = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
        console.log(entry.isIntersecting);
        if (!entry.isIntersecting) {
            HeaderLogo.classList.add('header__logo-a--active');
        } else{
            HeaderLogo.classList.remove('header__logo-a--active');
        }
    });
}, options);

observer.observe(StartLogo);