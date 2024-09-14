const dark = document.getElementById("dark");
dark.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if (document.body.classList.contains('dark-mode')) {
        dark.src = "moon.png";
    } else {
        dark.src = "sun.png";
    }
})