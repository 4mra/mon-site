console.log("coucou");
// let age = prompt("quel est ton age")
// if(age >=14) {alert("bienvenue à Jump in tech")
// } else {alert("reviens dans quelques années")}


  let index = 0;
        const images = document.querySelector(".images");
        const totalImages = document.querySelectorAll(".images img").length;

        function mettreAJourCarrousel() {
            let deplacement = -index * 300; // 300px correspond à la largeur d'une image
            images.style.transform = `translateX(${deplacement}px)`;
        }

        function suivant() {
            index = (index + 1) % totalImages;
            mettreAJourCarrousel();
        }

        function precedent() {
            index = (index - 1 + totalImages) % totalImages;
            mettreAJourCarrousel();
        }