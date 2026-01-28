console.log('HI')

// Функция, отвечающая за бургер
document.querySelector('.burger').addEventListener('click', function click(params) {
    console.log('clik');
    
    document.querySelector('.burger').classList.toggle('active')
    if (document.querySelector('.active')) {
        document.querySelector('.header_menu').classList.toggle('active_menu')
        console.log('Добавил класс');
    } else {
        console.log('Убрал класс');
        document.querySelector('.header_menu').classList.toggle('active_menu')
    }
})



// Функция, отвечающая за костыль в секции Project
const breakpoint = window.matchMedia('(max-width: 1400px)');

function handleTabletChange(e) {
  if (e.matches) {
    // Сработает, если ширина экрана 1400px или меньше
    const element = document.getElementById('del');
    const element2 = document.getElementById('del2');
    while (element.firstChild) {
        element.parentElement.insertBefore(element.firstChild, element);
      }
    while (element2.firstChild) {
        element2.parentElement.insertBefore(element2.firstChild, element2);
      }
    element.remove()
    element2.remove()
  }
}
breakpoint.addEventListener('change', handleTabletChange);

// Вызов функции сразу при загрузке страницы
handleTabletChange(breakpoint)

// Скролл из навигации

// Мобильное меню

    // Experience
    document.getElementById('Experience_mobile').addEventListener('click', function click(params) { 
        document.querySelector('.burger').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active_menu')
        document.querySelector('.experience').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })

    // Work
    document.getElementById('Work_mobile').addEventListener('click', function click(params) { 
        document.querySelector('.burger').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active_menu')
        document.querySelector('.project').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })

    // Photography
    document.getElementById('Photography_mobile').addEventListener('click', function click(params) { 
        document.querySelector('.burger').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active_menu')
        document.querySelector('.photography').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })
        
    // Contact
    document.getElementById('Contact_mobile').addEventListener('click', function click(params) { 
        document.querySelector('.burger').classList.toggle('active')
        document.querySelector('.header_menu').classList.toggle('active_menu')
        document.querySelector('.started').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })

// Скролл вверх 
const scrollBtn = document.querySelector(".scroll_up");
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};
scrollBtn.addEventListener("click", function() {
    document.querySelector('.header_menu').scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    })
});

//Десктопное меню
    // Experience
    document.getElementById('Experience_desktop').addEventListener('click', function click(params) { 
        document.querySelector('.header_menu').classList.toggle('active_menu')
        document.querySelector('.experience').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })

    // Work
    document.getElementById('Work_desktop').addEventListener('click', function click(params) { 
        document.querySelector('.header_menu').classList.toggle('active_menu')
        document.querySelector('.project').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })

    // Photography
    document.getElementById('Photography_desktop').addEventListener('click', function click(params) { 
        document.querySelector('.header_menu').classList.toggle('active_menu')
        document.querySelector('.photography').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })
        
    // Contact
    document.getElementById('Contact_desktop').addEventListener('click', function click(params) { 
        document.querySelector('.header_menu').classList.toggle('active_menu')
        document.querySelector('.started').scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        })
        })