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

// Список названий ярлыков, элемент-обёртка для ярлыков, выбранный ярлык
let labels = [];
let labels_el = document.querySelector('.labels');

let active_conspects = [];
let cur_conspect = {"name": null, "data": null};

function removeLabel(event) {
    // labels.pop(labels.indexOf(event.target.parentNode.firstChild.innerHTML));
    // labels_el.removeChild(event.target.parentNode.parentNode);
    // active_conspects.pop(active_conspects.indexOf(cur_conspect));
    
    // if (labels.length >= 1) {
    //     document.querySelector(".labels>:last-child").classList.add('primary_label');
    //     active_conspects.forEach(consp => {if (consp.name == labels_el.lastChild.firstChild.innerHTML) {cur_conspect = consp}});
    // }
    // else { 
    //     cur_conspect = {"name": null, "data": null}
    // }
}

function makePrimary(label) {
    if (!Array.from(label.classList).includes("primary_label")) {
        primary_label = document.querySelector(".primary_label");
        if (primary_label) {
            active_conspects[labels.indexOf(primary_label.firstChild.innerHTML)]["data"] = document.querySelector("textarea").value;
            primary_label.classList.remove("primary_label");
        }
        label.classList.add("primary_label");
        consp_name = label.firstChild.innerHTML;
        cur_conspect["name"] = consp_name;
        cur_conspect["data"] = active_conspects[labels.indexOf(consp_name)]["data"];
        document.querySelector("textarea").value = cur_conspect["data"];
    }
    // console.log(cur_conspect);
    // if (document.querySelector(".primary_label")) {
    //     document.querySelector(".primary_label").classList.remove('primary_label');
    // }
    // event.element.classList.add('primary_label');
    // active_conspects.forEach(consp => {if (consp.name == event.element.innerHTML) {cur_conspect = consp}});
    // console.log(cur_conspect);
    // document.querySelector("textarea").innerHTML = cur_conspect.data;
}

function openConspect(event) {
    // if(!labels.includes(event.target.innerHTML)) {
    //     labels_el.innerHTML += `<div class='label'><p>${event.target.innerHTML}</p><button><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg></button></div>`;
    //     document.querySelector(".labels>:last-child>:last-child").addEventListener('click', removeLabel);
    //     document.querySelector(".labels>:last-child").addEventListener('click', makePrimary);
    //     if (document.querySelector(".primary_label")) {
    //         document.querySelector(".primary_label").classList.remove('primary_label');
    //     }
    //     document.querySelector(".labels>:last-child").classList.add('primary_label');
    //     labels.push(event.target.innerHTML);
    //     // data = getConspectData(username, event.target.innerHTML);
    //     // data = getConspectData(username, event.target.innerHTML);

    //     document.querySelector("textarea").innerHTML = event.target.innerHTML;
    
    //     cur_conspect = {"name": event.target.innerHTML, "data": event.target.innerHTML};
    //     active_conspects.push(cur_conspect);
    // }
    consp_name = event.target.innerHTML;
    if(!labels.includes(consp_name)) {
        labels_el.innerHTML += `<div class='label'><p>${consp_name}</p><button><svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><defs><style>.cls-1{fill:none;stroke:#000;stroke-linecap:round;stroke-linejoin:round;stroke-width:2px;}</style></defs><title/><g id="cross"><line class="cls-1" x1="7" x2="25" y1="7" y2="25"/><line class="cls-1" x1="7" x2="25" y1="25" y2="7"/></g></svg></button></div>`;
        labels.push(consp_name);
        active_conspects[labels.length - 1] = {"name": null, "data": null};
        active_conspects[labels.length - 1]["name"] = consp_name;
        getConspectData(username, consp_name.slice(1, consp_name.length - 3)).then(text => {
            active_conspects[labels.length - 1]["data"] = text;
            Array.from(document.querySelectorAll('.label')).forEach(element => {
                element.onclick = (event) => {makePrimary(event.target)}
            });
            makePrimary(document.querySelector('.labels>:last-child'));
        });
    }
}

document.querySelector(".new_file").addEventListener("click", () => {conspect = prompt("Введите название конспекта", "RandomName"); createConspect(username, conspect)});
document.querySelector(".save_button").addEventListener("click", () => {setConspectData(username)});