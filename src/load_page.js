import dorotaImg from './dorota-semla.jpg'
import spencerImg from './spencer-davis.jpg'
import valeriaImg from './valeria-boltneva.jpg'

const loadHeader = () => {
    const headerContainer = document.createElement("div")
    headerContainer.id = 'header-container'
    const logoTitle = document.createElement("h1")
    logoTitle.textContent = "Food for life"

    const home = document.createElement('a')
    home.textContent = 'Home'
    home.id = 'home'

    const menu = document.createElement('a')
    menu.textContent = 'Menu'
    menu.id = 'menu'

    const contact = document.createElement('a')
    contact.textContent = 'Contact'
    contact.id = 'contact'

    headerContainer.appendChild(logoTitle)
    headerContainer.appendChild(home)
    headerContainer.appendChild(menu)
    headerContainer.appendChild(contact)

    return headerContainer
}

const loadMainPage = () => {
    const bodyContainer = document.createElement("div")
    bodyContainer.id = 'body-container'

    const restaurantInfo = document.createElement("p")
    restaurantInfo.textContent = 'We provide food for a lifetime of enjoyment. Live well, eat well.'

    const dorotaImgElement = document.createElement("img")
    dorotaImgElement.src = dorotaImg
    const spencerImgElement = document.createElement("img")
    spencerImgElement.src = spencerImg
    const valeriaImgElement = document.createElement("img")
    valeriaImgElement.src = valeriaImg

    bodyContainer.appendChild(restaurantInfo)
    bodyContainer.appendChild(dorotaImgElement)
    bodyContainer.appendChild(spencerImgElement)
    bodyContainer.appendChild(valeriaImgElement)

    return bodyContainer
} 


const loadMenuPage = () => {
    const bodyContainer = document.createElement("div")
    bodyContainer.id = 'body-container'
    bodyContainer.className = 'menu-body'

    const item1 = document.createElement("p")
    item1.textContent = 'Steak Bake. Straight from gregs'
    const item2 = document.createElement("p")
    item2.textContent = 'Glass Noodles. Low protein, low bcaa, high starch. Plain tasing but you\'ll get over it.'
    const item3 = document.createElement("p")
    item3.textContent = 'Gelatin Broth. So tasty.'

    const dorotaImgElement = document.createElement("img")
    dorotaImgElement.src = dorotaImg
    const spencerImgElement = document.createElement("img")
    spencerImgElement.src = spencerImg
    const valeriaImgElement = document.createElement("img")
    valeriaImgElement.src = valeriaImg

    bodyContainer.appendChild(item1)
    bodyContainer.appendChild(dorotaImgElement)
    bodyContainer.appendChild(item2)
    bodyContainer.appendChild(spencerImgElement)
    bodyContainer.appendChild(item3)
    bodyContainer.appendChild(valeriaImgElement)

    return bodyContainer
} 

const loadContactPage = () => {
    const bodyContainer = document.createElement("div")
    bodyContainer.id = 'body-container'
    bodyContainer.className = 'menu-body'

    const restaurantInfo = document.createElement("p")
    restaurantInfo.textContent = 'Location: \n515 Turn End, Yorkshire. 0114 7773333.\n\nOpening Times: \nMon-Fri: 7am-7pm\nWeekends: 4pm-12pm'

    bodyContainer.appendChild(restaurantInfo)

    return bodyContainer
} 

export { loadHeader, loadMainPage, loadMenuPage, loadContactPage }