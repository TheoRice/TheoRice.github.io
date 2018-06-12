function hideCertificate(cert, proj) {
    var x = document.getElementById(cert);
    if (x.style.display === "none") {
        x.style.display = "block";
        x.style.textAlign = "center";
        x.style.margin = "auto";
        x.style.justifyContent = "center";
    } else {
        x.style.display = "none";
    }
    var y = document.getElementById(proj);
    if (y.style.display === "none") {
        y.style.display = "block";
    } else {
        y.style.display = "none";
    }
} 
