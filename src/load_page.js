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

    mainContainer.appendChild(headerContainer)
    mainContainer.appendChild(bodyContainer)
    headerContainer.appendChild(logoTitle)
    bodyContainer.appendChild(restaurantInfo)

    return mainContainer
} 

export {loadMainPage}