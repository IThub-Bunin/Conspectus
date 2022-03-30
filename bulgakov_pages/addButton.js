let theme_title = document.querySelector('.lesson-content-header.lesson-content__header > .lesson-content-header__title');

theme_title.addEventListener('DOMSubtreeModified', () => {
    let task_name = "Задание. " + theme_title.innerText
    document.querySelector('.lesson-content__tasks').innerHTML = `<div class="title_status_wrapper"><div class="task_title">${task_name}</div><div class="task_status">Task status</div></div><button class="button_task_conspectus">Открыть в редакторе</button>`;

});