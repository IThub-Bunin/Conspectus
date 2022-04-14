let data_json = `
    {   "label": "Список конспектов",
        "children": [
            {"label": "folder1",
            "children": [
                {"label": "file11"},
                {"label": "file12"},
                {"label": "file13"}
            ]},

            {"label": "folder1",
            "children": [
                {"label": "file11"},
                {"label": "file12"},
                {"label": "file13"}
            ]},

            {"label": "folder2",
            "children": [
                {"label": "file21",
                "children": [
                    {"label": "file11"},
                    {"label": "file12"},
                    {"label": "file13"}
                ]},
                {"label": "file22"},
                {"label": "file23"}
            ]}
        ]
    }
`

let data = JSON.parse(data_json);

let list_tmp = node => `<div class="item">${node.children ? `<div class="item_label"><span>${node.label}</span><svg class="arrow_icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="284.929px" height="284.929px" viewBox="0 0 284.929 284.929" style="enable-background:new 0 0 284.929 284.929;"
xml:space="preserve">
<g>
<path d="M282.082,76.511l-14.274-14.273c-1.902-1.906-4.093-2.856-6.57-2.856c-2.471,0-4.661,0.95-6.563,2.856L142.466,174.441
   L30.262,62.241c-1.903-1.906-4.093-2.856-6.567-2.856c-2.475,0-4.665,0.95-6.567,2.856L2.856,76.515C0.95,78.417,0,80.607,0,83.082
   c0,2.473,0.953,4.663,2.856,6.565l133.043,133.046c1.902,1.903,4.093,2.854,6.567,2.854s4.661-0.951,6.562-2.854L282.082,89.647
   c1.902-1.903,2.847-4.093,2.847-6.565C284.929,80.607,283.984,78.417,282.082,76.511z"/>
</g></svg></div><div class="children">${node.children.map(list_tmp).join('')}</div>`: `<div class="item_label">${node.label}</div>`}</div>`;

let files_list = document.querySelector('.files_list');

files_list.innerHTML = list_tmp(data);

function changeVisibility() {
    if (Array.from(this.nextSibling.classList).includes('children__active')) {
        this.classList.remove('item_label__active');
        this.nextSibling.classList.remove('children__active');
    }
    else {
        this.classList.add('item_label__active');
        this.nextSibling.classList.add('children__active');
    }
}

Array.from(document.querySelectorAll('.item_label')).forEach(element => {
    if (element.nextSibling) {
        element.addEventListener('click', changeVisibility);
    }
});

// let link = browser.runtime.getURL("angle-arrow-down_icon-icons.com_73683.svg");
// Array.from(document.querySelectorAll('.arrow_icon')).forEach(element => {
//     element.style.background = `url('${link}')`;
// })