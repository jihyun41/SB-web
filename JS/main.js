        window.addEventListener("DOMContentLoaded", () => {
            fetch("main HTML/header.html")
                .then(res => res.text())
                .then(data => document.getElementById("include-header").innerHTML = data);

            fetch("main HTML/footer.html")
                .then(res => res.text())
                .then(data => document.getElementById("include-footer").innerHTML = data);
        });