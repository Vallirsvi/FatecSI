var body = document.querySelector("body");
var btnChange = document.querySelector("#mudarTema");
btnChange.addEventListener('click', () => {
body.classList.toggle('dark')
});