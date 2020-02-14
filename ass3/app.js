
/*-------------------------------------------*/

function choose1() {
    let url = "https://swapi.co/api/people/1/"
    info(url)
}

function choose2() {
    let url = "https://swapi.co/api/people/2/"
    info(url)
}

function choose3() {
    let url = "https://swapi.co/api/people/3/"
    info(url)
}

function choose4() {
    let url = "https://swapi.co/api/people/4/"
    info(url)
}

function choose5() {
    let url = "https://swapi.co/api/people/5/"
    info(url)
}





/*-------------------------------------------*/


function info(url) {
    fetch(url)
    .then(response => response.json())
    .then(data => {
        getName(data.name)
        getGender(data.gender)
        getHeight(data.height)
        getWeight(data.mass)
        getHairColor(data.hair_color)
        getBirthYear(data.birth_year)
        getEyeColor(data.eye_color)
        console.log(data.name)
})
}


function getName(text) {
    document.getElementById("nameShow").innerHTML = text
}

function getGender(text) {
    document.getElementById("genderShow").innerHTML = text
}

function getHeight(text) {
    document.getElementById("heightShow").innerHTML = text
}

function getWeight(text) {
    document.getElementById("weightShow").innerHTML = text
}

function getHairColor(text) {
    document.getElementById("haircolorShow").innerHTML = text
}

function getBirthYear(text) {
    document.getElementById("birthyearShow").innerHTML = text
}

function getEyeColor(text) {
    document.getElementById("eyecolorShow").innerHTML = text
}

