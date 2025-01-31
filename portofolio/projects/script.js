// Fungsi untuk menghasilkan warna random dalam format hex (#RRGGBB)
function getRandomColor() {
    return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

// Event listener untuk tombol
document.getElementById("changeColorBtn").addEventListener("click", function () {
    let randomColor = getRandomColor();
    document.body.style.backgroundColor = randomColor;
});


document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Cek apakah user sudah mengaktifkan dark mode sebelumnya
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
    }

    // Tambahkan event listener untuk toggle dark mode
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        // Simpan status dark mode ke localStorage
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
        } else {
            localStorage.setItem("darkMode", "disabled");
        }
    });
});
