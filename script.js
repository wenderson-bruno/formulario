const button = document.querySelector('button')
const container = document.querySelector('.confirm')

button.addEventListener('click', () => {
    container.classList.toggle('confirm_show')
    setTimeout(() => {
        container.classList.remove('confirm_show')
    }, 2000)
})