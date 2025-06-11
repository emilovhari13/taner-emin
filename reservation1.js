// Преводи на езици
const translations = {
    bg: {
        "username_label": "Потребителско име:",
        "email_label": "Имейл адрес:",
        "password_label": "Парола:",
        "confirm_password_label": "Потвърдете паролата:",
        "register_button": "Регистрирай се",
        "time_period": "Часови диапазон",
        "court_price": "Цена за корт /час",
        "couch0": "Треньори",
        "extra_services": "Допълнителни услуги",
        "racket_rental": "Ракети: 7 лв./час",
        "coach_fee": "Треньор: 120 лв./час",
        "lighting_fee": "Осветление (след 20:00): 15 лв.",
        "leva": "25 лв.",
        "leva1": "15 лв.",
        "leva2": "25 лв.",
        "processing": "⚠️ Сайтът е в процес на обработка ⚠️",
        "coach": "Боби Борисов - 60лв./ 30евро",
        "coach2": "Дамян Дамянов - 50лв./ 25евро",
        "coach3": "Хари Емилов - 40лв./ 20евро",
        "coach4": "Тенис ментор: Танер Емин - 120лв./ 60евро",
    },
    en: {
        "username_label": "Username:",
        "email_label": "Email address:",
        "password_label": "Password:",
        "confirm_password_label": "Confirm password:",
        "register_button": "Register",
        "time_period": "Time period",
        "court_price": "Price per court /hour",
        "couch0": "Trainers",
        "extra_services": "Extra services",
        "racket_rental": "Rackets: 7 BGN/hour",
        "coach_fee": "Coach: 120 BGN/hour",
        "lighting_fee": "Lighting (after 8:00 PM): 15 BGN",
        "leva": "25 BGN",
        "leva1": "15 BGN",
        "leva2": "25 BGN",
        "processing": "⚠️ The site is under construction. ⚠️",
        "coach":"Bobi Borisov - 60BGN/ 30EUR",
        "coach2":"Damyan Damyanov - 50BGN/ 25EUR",
        "coach3":"Hari Emilow - 40BGN/ 20EUR",
        "coach4":"Tennis mentor: Taner Emin - 120BGN/ 60EUR",
    },
    ru: {
        "username_label": "Имя пользователя:",
        "email_label": "Электронная почта:",
        "password_label": "Пароль:",
        "confirm_password_label": "Подтвердите пароль:",
        "register_button": "Зарегистрироваться",
        "time_period": "Часовой диапазон",
        "court_price": "Цена за корт /час",
        "couch0": "Кроссовки",
        "extra_services": "Дополнительные услуги",
        "racket_rental": "Ракеты: 7 лв./час",
        "coach_fee": "Тренер: 120 лв./час",
        "lighting_fee": "Освещение (после 20:00): 15 лв.",
        "processing": "⚠️ Сайт находится в стадии разработки. ⚠️",        
        "coach": "Боби Борисов - 60лв./ 30евро",
        "coach2": "Дамян Дамянов - 50лв./ 25евро",
        "coach3": "Хари Емилов - 40лв./ 20евро",
        "coach4": "Тенис ментор: Танер Емин - 120лв./ 60евро",
    }
};

function changeLanguage(lang) {
    // Записваме избора на език в localStorage
    localStorage.setItem('language', lang);

    let elements = document.querySelectorAll("[data-translate]");
    elements.forEach(function(element) {
        let translationKey = element.getAttribute("data-translate");
        if (translations[lang][translationKey]) {
            element.innerHTML = translations[lang][translationKey];
        }
    });
}

document.addEventListener("DOMContentLoaded", function() {
    // Проверяваме дали има записан език в localStorage
    let savedLanguage = localStorage.getItem('language') || 'bg';  // Ако няма, по подразбиране да е български
    changeLanguage(savedLanguage);

    // Събития за флаговете
    document.querySelector(".language-switcher img").addEventListener("click", function() {
        changeLanguage('bg');
    });
});

function toggleMenu() {
    let menu = document.querySelector(".navbar ul");
    menu.classList.toggle("active");
}

document.addEventListener('click', function(event) {
    const menu = document.querySelector('.navbar ul');
    const toggleButton = document.querySelector('.menu-toogle');

    if (!menu.contains(event.target) && !toggleButton.contains(event.target)) {
        menu.classList.remove('active');
    }
});
