function copy() {
    navigator.clipboard.writeText('contacter.dana@gmail.com');
    alert("L'adresse mail a été copiée dans le presse papier.");
}

document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', event => {
        const menu = document.getElementById('topNav')
        const links = menu.getElementsByTagName('a')
        for(link of links) {
            link.addEventListener('click', () => {
                document.getElementById('topNav').classList.remove('active')
                checkScroll()
            })
        }
        const menuIcon = document.getElementById('toggleMenu')
        if(!menu.contains(event.target) && !menuIcon.contains(event.target)) {
            document.getElementById('topNav').classList.remove('active')
            checkScroll()
        }
    })

    document.getElementById('toggleMenu').addEventListener('click', event => {
        document.getElementById('topNav').classList.toggle('active')
    })
})

function checkScroll() {
    let html = document.querySelector('html')
    if(document.getElementById('topNav').classList.contains('active'))
        html.style.overflow = 'hidden'
    else html.style.overflow = 'scroll'
}