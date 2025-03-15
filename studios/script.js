// Scroll to Top Button
window.onscroll = function () {
    var btn = document.getElementById("scroll-to-top-btn");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block"; // Show button
    } else {
        btn.style.display = "none"; // Hide button
    }
};

document.getElementById("scroll-to-top-btn").onclick = function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
};
