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
                <p>Место для редактора</p>
            </div>
        </div>
    </div>
`;

// функция для изменения "открытой вкладки"
function makePrimary(event) {
    primary_label.classList.remove('primary_label');
    event.target.classList.add('primary_label');
    primary_label = event.target;
}

// Список названий ярлыков, элемент-обёртка для ярлыков, выбранный ярлык
let labels = ['Label1', 'Label2', 'Labeliuguguuyguyguguyh3', 'Label4'];
let labels_el = document.querySelector('.labels');
let primary_label = null;

// Генерация ярлыков
for (let i = 0; i < labels.length; i++) {
    labels_el.innerHTML += `<div class='label'>${labels[i]}</div>`;
}

// Добавляем событие по клику мышкой
Array.from(labels_el.children).forEach(element => {
    element.addEventListener('click', makePrimary)
});

// Делаем первый ярлык активным
primary_label = labels_el.lastChild;
labels_el.lastChild.classList.add('primary_label');
