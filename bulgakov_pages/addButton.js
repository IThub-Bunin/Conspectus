// let theme_title = document.querySelector('.lesson-content-header.lesson-content__header > .lesson-content-header__title');

// theme_title.addEventListener('DOMSubtreeModified', () => {
//     let task_name = "Задание. " + theme_title.innerText;
//     document.querySelector('.lesson-content__tasks').innerHTML = `<div class="title_status_wrapper"><div class="task_title">${task_name}</div><div class="task_status">Task status</div></div><button class="button_task_conspectus">Открыть в редакторе</button>`;
// });

let node = document.querySelector('.lesson-content__header');
let editor_button = document.createElement('button');
editor_button.classList.add('editor_button');
node.parentNode.insertBefore(editor_button, node);

let editor_a = document.createElement('a');
editor_a.innerHTML = 'Открыть в редакторе';
editor_a.setAttribute('href', 'https://ithub.bulgakov.app/conspectus');
editor_a.setAttribute('target', '_blank');

editor_button.appendChild(editor_a);

text = "";

editor_button.addEventListener("click", () => {
    content = document.querySelector(".lesson-content__inner").children;
    for (let elem of content) {
        if (!Array.from(elem.classList).includes("navigation-step")) {
            text += elem.innerHTML;
        }
    }
    
    console.log(text);
    consp_name = document.querySelector(".lesson-content-header__title").innerHTML;
    text = consp_name;
    user_name = document.querySelector(".top-menu__user-profile__link__name").innerHTML.trim();
    try {
        createConspect(user_name, consp_name);
    }
    finally {
        setConspectData(user_name, consp_name, text.replace("\n", "%0A"));
    }
});

// document.querySelector(".lesson-content-header__title").addEventListener("DOMSubtreeModified", () => text += document.querySelector(".lesson-content-header__title").innerHTML)

// editor_button.onclick = )

// editor_button.addEventListener('click', () => {
//     chrome.tabs.create({active: true, url: 'https://ithub.bulgakov.app/conspectus'});
// });
