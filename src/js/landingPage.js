function copy() {
    navigator.clipboard.writeText('contacter.dana@gmail.com');
    alert("L'adresse mail a été copiée dans le presse papier.");
}

document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('toggleMenu').addEventListener('click', () => {
        document.getElementById('topNav').classList.toggle('responsive')
    })
})