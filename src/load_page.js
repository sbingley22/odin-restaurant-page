import dorotaImg from './dorota-semla.jpg'
import spencerImg from './spencer-davis.jpg'
import valeriaImg from './valeria-boltneva.jpg'

const loadMainPage = () => {
    const mainContainer = document.createElement("div")
    const headerContainer = document.createElement("div")
    const bodyContainer = document.createElement("div")

    mainContainer.id = "main-container"
    headerContainer.id = "header-container"
    bodyContainer.id = 'body-container'

    const logoTitle = document.createElement("h1")
    logoTitle.textContent = "Food for life"

    const restaurantInfo = document.createElement("p")
    restaurantInfo.textContent = 'We provide food for a lifetime of enjoyment. Live well, eat well.'

    const dorotaImgElement = document.createElement("img")
    dorotaImgElement.src = dorotaImg
    const spencerImgElement = document.createElement("img")
    spencerImgElement.src = spencerImg
    const valeriaImgElement = document.createElement("img")
    valeriaImgElement.src = valeriaImg

    mainContainer.appendChild(headerContainer)
    mainContainer.appendChild(bodyContainer)
    headerContainer.appendChild(logoTitle)
    bodyContainer.appendChild(restaurantInfo)
    bodyContainer.appendChild(dorotaImgElement)
    bodyContainer.appendChild(spencerImgElement)
    bodyContainer.appendChild(valeriaImgElement)

    return mainContainer
} 

export {loadMainPage}