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
width="284.929px" height="284.929px" viewBox="0 0 100 100" style="enable-background:new 0 0 284.929 284.929;"
xml:space="preserve"><g><path d="M7 25 L50 65 L93 25" stroke="black" stroke-width="12" fill="transparent" stroke-linecap="round" /></g></svg></div><div class="children">${node.children.map(list_tmp).join('')}</div>`: `<div class="item_label">${node.label}</div>`}</div>`;

let files_list = document.querySelector('.files_menu');

files_list.innerHTML = list_tmp(data);

function changeVisibility() {
    if (Array.from(this.nextSibling.classList).includes('children__active')) {
        this.classList.remove('item_label__active');
        this.nextSibling.classList.remove('children__active');
        this.lastChild.firstChild.firstChild.setAttribute("stroke", "black");
    }
    else {
        this.classList.add('item_label__active');
        this.nextSibling.classList.add('children__active');
        this.lastChild.firstChild.firstChild.setAttribute("stroke", "#0080ff");
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