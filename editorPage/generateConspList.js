let res = ["file1", "file2", "file3"];

let data_json = `
    {   "label": "Список конспектов",
        "children": [`;

for (let consp of res) {
    data_json += `{"label": "${consp}"},`
}''

data_json = data_json.slice(0, data_json.length-1);

data_json += `
        ]
    }
`;

let data = JSON.parse(data_json);

let list_tmp = node => `<div class="item">${node.children ? `<div class="item_label"><span>${node.label}</span><svg class="arrow_icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="284.929px" height="284.929px" viewBox="0 0 100 100" style="enable-background:new 0 0 284.929 284.929;"
xml:space="preserve"><g><path d="M7 25 L50 65 L93 25" stroke="black" stroke-width="12" fill="transparent" stroke-linecap="round" /></g></svg></div><div class="children">${node.children.map(list_tmp).join('   ')}</div>`: `<div class="item_label">${node.label}</div>`}</div>`;

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

function removeLabel(event) {
    labels.pop(labels.indexOf(event.target.parentNode.firstChild.innerHTML));
    console.log(event.target.parentNode);
    labels_el.removeChild(event.target.parentNode.parentNode)
}

function addLabel(event) {
    if(!labels.includes(event.target.innerHTML)) {
        labels_el.innerHTML += `<div class='label'><p>${event.target.innerHTML}</p><button><svg class="arrow_icon" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
        width="284.929px" height="284.929px" viewBox="0 0 100 100" style="enable-background:new 0 0 284.929 284.929;"
        xml:space="preserve"><g><path d="M7 25 L50 65 L93 25" stroke="black" stroke-width="12" fill="transparent" stroke-linecap="round" /></g></svg></button></div>`;
        labels_el.lastChild.lastChild.addEventListener('click', removeLabel);
        if (labels.length > 0) {
            primary_label.classList.remove('primary_label');
        }
        primary_label = labels_el.lastChild;
        primary_label.classList.add('primary_label');
        labels.push(event.target.innerHTML);
    }
}

Array.from(document.querySelectorAll('.item_label')).forEach(element => {
    if (element.nextSibling) {
        element.addEventListener('click', changeVisibility);
    }
    else {
        element.addEventListener('click', addLabel);
    }
});

// let link = browser.runtime.getURL("angle-arrow-down_icon-icons.com_73683.svg");
// Array.from(document.querySelectorAll('.arrow_icon')).forEach(element => {
//     element.style.background = `url('${link}')`;
// })