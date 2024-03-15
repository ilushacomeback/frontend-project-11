export default (container, text) => {
    const divContainer = document.createElement('div')
    divContainer.classList.add('card', 'border-0')

    const divInner = document.createElement('div')
    divInner.classList.add('card-body')

    const h2 = document.createElement('h2')
    h2.classList.add('card-title', 'h4')
    h2.textContent = text

    const list = document.createElement('ul')
    list.classList.add('list-group', 'border-0', 'rounded-0')

    divInner.append(h2)
    divContainer.append(divInner)
    divContainer.append(list)
    container.append(divContainer)
}