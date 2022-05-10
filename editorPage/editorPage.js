// Генерация странички редактора
document.querySelector('.app__content').innerHTML = `
    <div>
        <div class='conspects_menu'>
            <div class="list_wrapper">
                <div class='files_menu'>
                </div>
            </div>
            <div class='files_bar'></div>
        </div>
        <div class='editor_block'>
            <div class='labels'>
            </div>
            <div class='editor_area'>
                <div id="editor-md"></div>
            </div>
        </div>
    </div>
`;

// Вставить зависимости в сайт
// let chrome_editor = chrome.runtime.getURL("editor-md");
// console.log(chrome.runtime.getURL("editor-md/lib/codemirror"));

// document.body.innerHTML += `
//     <script src="${chrome_editor}/jquery.min.js"></script>
//     <script src="${chrome_editor}/editormd.min.js"></script>
// `

// функция для изменения "открытой вкладки"
function makePrimary(event) {
    if (primary_label) {
        primary_label.classList.remove('primary_label');
    }
    event.target.classList.add('primary_label');
    primary_label = event.target;
}

// Список названий ярлыков, элемент-обёртка для ярлыков, выбранный ярлык
let labels = [];
let labels_el = document.querySelector('.labels');
let primary_label = null;

// // Генерация ярлыков
// for (let i = 0; i < labels.length; i++) {
//     labels_el.innerHTML += `<div class='label'>${labels[i]}</div>`;
// }

// Добавляем событие по клику мышкой
Array.from(labels_el.children).forEach(element => {
    element.addEventListener('click', makePrimary)
});

// // Делаем первый ярлык активным
// primary_label = labels_el.lastChild;
// labels_el.lastChild.classList.add('primary_label');
