let urlStart = 'https://conspectus-api.herokuapp.com/api/';

function userExist(username) {
    fetch(`${urlStart}UserExist/${username.trim()}`)
        .then(res => res.text())
        .then(data => data)
        .catch((error) => console.log(error));
}

function getConspectsOf(username) {
    return fetch(`${urlStart}GetConspectsOfUser/${username.trim()}`)
        .then(res => res.text())
        .then(data => data.split('>'))
        .then(arr => {for (let i = 0; i < arr.length; i++) {consp = arr[i]; arr[i] = consp.slice(1, consp.length - 3)};return arr})
        .catch((error) => console.log(error))
}

function getConspectData(username, conspect) {
    return fetch(`${urlStart}GetConspectData/${username.trim()}/${conspect.trim()}`)
        .then(res => res.text())
        .then(data => data)
        .catch((error) => console.log(error));
}

function createUser(username) {
    fetch(`${urlStart}CreateUser/${username.trim()}`, {
        method: 'POST'
    }).then(res => res.status)
    .catch((error) => console.log(error));
}

function createConspect(username, conspect) {
    fetch(`${urlStart}CreateConspect/${username.trim()}/${conspect.trim()}`, {
        method: 'POST'
    }).then(res => res.status)
    .catch((error) => console.log(error));
}

function setConspectData(username, conspect, data) {
    fetch(`${urlStart}SetConspectData/${username.trim()}/${conspect.trim()}/${data.trim()}`, {
        method: 'POST'
    }).then(res => res.status)
    .catch((error) => console.log(error));
}