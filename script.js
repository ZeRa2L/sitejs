/* крутая 3д картинка */

const cards = document.querySelectorAll('.card');

for (let i = 0; i < cards.length; i++) {
    const card = cards[i];
    card.addEventListener('mousemove', startRotate);
    card.addEventListener('mouseout', stopRotate);
}

function startRotate(event) {
    const cardItem = this.querySelector('.card-item');
    const halfHeight = cardItem.offsetHeight / 2;
    const halfWidth = cardItem.offsetWidth / 2;
    cardItem.style.transform = 'rotateX(' + -(event.offsetY -
    halfHeight) / 5 + 'deg) rotateY(' + (event.offsetX -
    halfWidth) / 5 + 'deg)';       
}

function stopRotate(event) {
    const cardItem = this.querySelector('.card-item');
    cardItem.style.transform = 'rotate(0)';
}

/* крутая 3д картинка */

/* вылет из неоткуда */

const animItems = document.querySelectorAll('._anim-items');

if (animItems.length > 0) {
    window.addEventListener('scroll', animOnScroll);
    function animOnScroll() {
        for (let index = 0; index < animItems.length; index++) {
            const animItem = animItems[index];
            const animItemHeight = animItem.offsetHeight;
            const animItemOffset = offset(animItem).top;
            const animStart = 4;

            let animItemPoint = window.innerHeight - animItemHeight / animStart;
            if (animItemHeight > window.innerHeight) {
                animItemPoint = window.innerHeight - window.innerHeight / animStart;
            }

            if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)){
                animItem.classList.add('_active');
            } else {
            if (!animItem.classList.contains('_anim-no-hide')) {
                animItem.classList.remove('_active');
            }

            }
        }
    }
function offset(el) {
   const rect = el.getBoundingClientRect(),
   scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
   scrollTop = window.pageXOffset || document.documentElement.scrollTop;
   return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

setTimeout(() => {
    animOnScroll();
},  1000);

}

/* вылет из неоткуда */

/* menu */

document.querySelector('.header-burger').addEventListener('click', function(
    ){
    document.querySelector('.header-burger span').classList.toggle('active');
    document.querySelector('.menu').classList.toggle('animate');
    });

/* menu */

/* slider */

var slider = document.getElementById('slider');
var line1 = document.getElementById('line1_id');
var line2 = document.getElementById('line2_id');
var line3 = document.getElementById('line3_id');
var line4 = document.getElementById('line4_id');
var active = document.getElementById('active_)id');

line1.onclick = function() {
    slider.style.transform = 'translateX(0)';
    active.style.top = '0px';
}

line2.onclick = function() {
    slider.style.transform = 'translateX(-25%)';
    active.style.top = '80px';
}

line3.onclick = function() {
    slider.style.transform = 'translateX(-50%)';
    active.style.top = '160px';
}

line4.onclick = function() {
    slider.style.transform = 'translateX(-75%)';
    active.style.top = '240px';
}

/* slider */