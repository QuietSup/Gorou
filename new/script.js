const menu = document.getElementsByClassName('menu')[0]
const menuTitle1 = document.getElementsByClassName('menu_title')[0]
const menuTitle2 = document.getElementsByClassName('menu_title')[1]
const menuTitle3 = document.getElementsByClassName('menu_title')[2]
const menuTitle4 = document.getElementsByClassName('menu_title')[3]
const menuTitle5 = document.getElementsByClassName('menu_title')[4]
const menuTitle6 = document.getElementsByClassName('menu_title')[5]
const avatar = document.getElementsByClassName('avatar')[0]
const avatar2 = document.getElementsByClassName('avatar')[1]
const account = document.getElementsByClassName('account')[0]
const accountLink = document.getElementsByClassName('account-link')[0]
const navbar = document.getElementsByClassName('navbar')[0]
const logo = document.getElementsByClassName('logo')[0]
const close1 = document.getElementsByClassName('close')[0]
const close2 = document.getElementsByClassName('close')[1]
const flashcard = document.getElementsByClassName('flashcard')[0]
const term = document.getElementsByClassName('term')[0]
const definition = document.getElementsByClassName('definition')[0]

    avatar.addEventListener('click', () => {
        menu.classList.toggle('active')
        account.classList.toggle('active')
        accountLink.classList.toggle('active')
        navbar.classList.toggle('active')
        avatar.classList.toggle('active')
        avatar2.classList.toggle('active')
        logo.classList.toggle('active')
        close1.classList.toggle('active')
        close2.classList.toggle('active')

        menuTitle1.classList.toggle('active')
        menuTitle2.classList.toggle('active')
        menuTitle3.classList.toggle('active')
        menuTitle4.classList.toggle('active')
        menuTitle5.classList.toggle('active')
        menuTitle6.classList.toggle('active')
    })
// }

close1.addEventListener('click', () => {
    menu.classList.toggle('active')
    account.classList.toggle('active')
    accountLink.classList.toggle('active')
    navbar.classList.toggle('active')
    avatar.classList.toggle('active')
    avatar2.classList.toggle('active')
    logo.classList.toggle('active')
    close1.classList.toggle('active')
    close2.classList.toggle('active')

    menuTitle1.classList.toggle('active')
    menuTitle2.classList.toggle('active')
    menuTitle3.classList.toggle('active')
    menuTitle4.classList.toggle('active')
    menuTitle5.classList.toggle('active')
    menuTitle6.classList.toggle('active')
})

flashcard.addEventListener('click', () => {
    flashcard.classList.toggle('active')
    term.classList.toggle('show')
    definition.classList.toggle('hide')
})