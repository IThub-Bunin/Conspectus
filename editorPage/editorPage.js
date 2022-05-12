// Генерация странички редактора
document.querySelector('.app__content').innerHTML = `
    <div>
        <div class='conspects_menu'>
            <div class="list_wrapper">
                <div class='files_menu'>
                </div>
            </div>
            <div class='files_bar'><button class="new_file"><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
            viewBox="0 0 463.307 463.307" style="enable-background:new 0 0 463.307 463.307;" xml:space="preserve">
       <g>
           <path d="M269.534,399.201c-9.616,0-17.483,7.867-17.483,17.483s7.867,17.483,17.483,17.483h160.263
               c9.616,0,17.483-7.867,17.483-17.483V138.409c0-4.954-2.04-9.616-5.536-12.821L310.62,4.662C307.414,1.748,303.043,0,298.673,0
               h-195.23c-9.616,0-17.483,7.867-17.483,17.483v189.402c0,9.616,7.867,17.483,17.483,17.483s17.483-7.867,17.483-17.483V34.967
               h139.866v151.522c0,9.616,7.867,17.483,17.483,17.483H409.4c0.874,0,2.04,0,2.914-0.291v195.521H269.534z M409.4,169.005H295.759
               V38.463l116.555,107.522v23.311C411.44,169.005,410.274,169.005,409.4,169.005z M16.026,372.977
               c0-9.616,7.867-17.483,17.483-17.483h52.45V300.13c0-9.616,7.867-17.483,17.483-17.483s17.483,7.867,17.483,17.483v55.364h58.278
               c9.616,0,17.483,7.867,17.483,17.483s-7.867,17.483-17.483,17.483h-58.278v55.364c0,9.616-7.867,17.483-17.483,17.483
               s-17.483-7.867-17.483-17.483V390.46H33.51C23.894,390.46,16.026,382.592,16.026,372.977z"/>
       </g></svg></button></div>
        </div>
        <div class='editor_block'>
            <div class='labels'>
            </div>
            <div class='editor_area'>
                <textarea id="editor-md"></textarea>
                <div class="buttons_bar">
                    <button class="save_button">Сохранить</button>
                </div>
            </div>
        </div>
    </div>
`;

let labels = [];
let labels_el = document.querySelector('.labels');

let temp_conspects = {};
let cur_conspect = {"name": null, "data": null};

function removeLabel(event, element) {
    event.stopPropagation();
    element_index = labels.indexOf(element.firstChild.innerHTML);
    if (labels.length > 1) {
        if (Array.from(element.classList).includes("primary_label")) {
            makePrimary(element.previousElementSibling || element.nextElementSibling);
        }
    }
    else {
        cur_conspect = {"name": null, "data": null};
        document.querySelector("textarea").value = "";
    }
    labels.pop(element_index);
    temp_conspects[element.firstChild.innerHTML] = null;
    labels_el.removeChild(element);
}

function makePrimary(label) {
    if (!Array.from(label.classList).includes("primary_label")) {
        primary_label = document.querySelector(".primary_label");
        if (primary_label) {
            temp_conspects[primary_label.firstChild.innerHTML] = document.querySelector("textarea").value;
            primary_label.classList.remove("primary_label");
        }
        label.classList.add("primary_label");
        consp_name = label.firstChild.innerHTML;
        cur_conspect["name"] = consp_name;
        cur_conspect["data"] = temp_conspects[consp_name];
        document.querySelector("textarea").value = cur_conspect["data"];
    }
}

function openConspect(event) {
    consp_name = event.target.innerHTML;
    if(!labels.includes(consp_name)) {
        labels_el.innerHTML += `<div class='label'><p>${consp_name}</p><button><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg></button></div>`;
        labels.push(consp_name);
        temp_conspects[consp_name] = null;
        // active_conspects.push({"name": null, "data": null});
        // active_conspects[labels.length - 1]["name"] = consp_name;
        getConspectData(username, consp_name).then(text => {
            temp_conspects[consp_name] = text;
            Array.from(document.querySelectorAll('.label')).forEach(element => {
                element.onclick = () => {makePrimary(element)}
                element.lastChild.onclick = (event) => {removeLabel(event, element)}
            });
            makePrimary(document.querySelector('.labels>:last-child'));
        });
    }
}

document.querySelector(".new_file").addEventListener("click", () => {conspect = prompt("Введите название конспекта", "RandomName"); createConspect(username, conspect)});
document.querySelector(".save_button").addEventListener("click", () => {cur_conspect.data = document.querySelector("textarea").value.replace("\n", "%0A");conspect = cur_conspect.name; data = cur_conspect.data; setConspectData(username, conspect, data)});
