import socialLinks from '../assets/links.json' with {type: 'json'}

let obj = Object.keys(socialLinks)
let section = document.querySelector("section")
for (let i = 0; i < obj.length; i++){
    let social = document.createElement("div")
    function redirect(){
        social.style.background = '#fff'
        social.style.color = '#282828'
        open(`${socialLinks[obj[i]]}`)
    }
    social.setAttribute('class',`social`)
    social.onclick = redirect
    social.innerHTML = obj[i]
    section.appendChild(social)
}