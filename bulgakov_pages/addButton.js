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