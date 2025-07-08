
  function telechargerCV() {
    const lien = document.createElement("a");
    lien.href = "assets/cv/mon_cv.pdf"; // Remplace par le chemin réel de ton fichier CV
    lien.download = "Mon_CV.pdf"; // Nom du fichier lors du téléchargement
    document.body.appendChild(lien);
    lien.click();
    document.body.removeChild(lien);
    console.log("Downloading CV...");

  }

