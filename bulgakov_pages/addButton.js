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

editor_button.appendChild(editor_a);

// editor_button.addEventListener('click', () => {
//     chrome.tabs.create({active: true, url: 'https://ithub.bulgakov.app/conspectus'});
// });
