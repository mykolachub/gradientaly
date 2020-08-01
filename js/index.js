const   Circle1 = document.getElementById('Circle1'),
        Circle2 = document.getElementById('Circle2'),
        Circle3 = document.getElementById('Circle3');

const cursor = document.getElementById('cursor');
const hover = document.getElementById('hover');

let randomX, 
    randomY;

const random = function (min, max) {
    return Math.floor( min + Math.random() * (max + 1 - min));
}

const animatedCircle = () => {
    randomX = random(10, 50);
    randomY = random(10, 50);
    Circle1.style.top = `calc(80% + ${randomX}px)`;
    Circle1.style.left = `calc(20% + ${randomY}px)`;

    Circle2.style.top = `calc(30% + ${randomX}px)`;
    Circle2.style.left = `calc(50% - ${randomY}px)`;

    Circle3.style.top = `calc(70% - ${randomX}px)`;
    Circle3.style.left = `calc(80% + ${randomY}px)`;
};

hover.addEventListener('mouseover', () => {
    cursor.classList.add('cursor--hovered');
});

hover.addEventListener('mouseout', () => {
    cursor.classList.remove('cursor--hovered');
});


document.addEventListener('mousemove', e => {
    let mouseX = e.clientX / 20;
    let mouseY = e.clientY / 20;

    //cursor.style.transform = `translate(calc(-50% + ${e.clientX}px) , calc(-50% + ${e.clientY}px)) rotate(45deg)`;

    cursor.style.top = `${e.clientY}px`;
    cursor.style.left = `${e.clientX}px`;

    Circle1.style.transform = `translate(calc(-50% - ${mouseX}px) , calc(-50% - ${mouseY}px))`;
    Circle2.style.transform = `translate(calc(-50% + ${mouseX}px) , calc(-50% + ${mouseY}px))`;
    Circle3.style.transform = `translate(calc(-50% + ${mouseX}px) , calc(-50% - ${mouseY}px))`;
});

/*
setInterval(() => {
    animatedCircle();
}, 4000);*/