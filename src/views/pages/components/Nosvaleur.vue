<template>
  <div class="container">
    <div class="card__container">
      <article v-for="(landscape, index) in landscapes" :key="index" class="card__article">
        <img :src="landscape.image" :alt="landscape.description" class="card__img">
        <h2 class="card__title">{{ landscape.title }}</h2>
        <div class="card__data">
          <span class="card__description">{{ landscape.description }}</span>
        </div>
      </article>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      landscapes: [
       
        {
          image: require("../../../assets/img/f2.png"),
          description: "Nous utilisons des sacs réutilisables pour la collecte linges,réduisant ainsi notre consommation de plastique et favorisant la durabilité. ",
          title: "Sacs réutilisables Hygeco"
        },
        {
          image: require("../../../assets/img/f2.png"),
          description: "Nous utilisons exclusivement des produits de nettoyage certifiés écologiques, qui sont sûrs pour l'environnement et la santé de nos clients.  ",
          title: "Produits de nettoyage certifiés écologiques"
        },
        {
          image: require("../../../assets/img/f2.png"),
          description: "Nos véhicules de transport sont électriques,contribuant ainsi à la réduction des émissions de carbone et à la préservation de l'air.",
          title: "Véhicules de transport électriques "
        },
        
        
        
      ]
    };
  }
};
</script>

<style scoped>
/*=============== GOOGLE FONTS ===============*/
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;500&display=swap");

/*=============== VARIABLES CSS ===============*/
:root {
  --first-color: hsl(82, 60%, 28%);
  --title-color: hsl(0, 0%, 15%);
  --text-color: hsl(0, 0%, 35%);
  --body-color: hsl(0, 0%, 95%);
  --container-color: hsl(0, 0%, 100%);

  --body-font: "Poppins", sans-serif;
  --h2-font-size: 1.25rem;
  --small-font-size: .813rem;
}

@media screen and (min-width: 1120px) {
  :root {
    --h2-font-size: 1.5rem;
    --small-font-size: .875rem;
  }
}

* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: var(--body-font);
  background-color: var(--body-color);
  color: var(--text-color);
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

.container {
  display: grid;
  place-items: center;
  padding-block: 5rem;
  margin-bottom: 8rem;
}

.card__container {
  display: grid;
  row-gap: 3.5rem;
}

.card__article {
  position: relative;
  overflow: hidden;
}

.card__img {
  width: 328px;
  border-radius: 1.5rem;
}

.card__title {
  font-size: var(--h2-font-size);
  font-weight: 800;
  color: var(--title-color);
  margin-bottom: 0.75rem;
  text-align: center;
  background-color: rgba(48, 199, 181, 0.8);
  padding: 0.5rem;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  border-bottom-left-radius: 1.5rem;
  border-bottom-right-radius: 1.5rem;
  transition: transform 0.3s;
}

.card__data {
  width: 280px;
  background-color: #30c7b5;
  padding: 1.5rem 2rem;
  box-shadow: 0 8px 24px hsla(0, 0%, 0%, .15);
  border-radius: 1rem;
  position: absolute;
  bottom: -9rem;
  left: 0;
  right: 0;
  margin-inline: auto;
  opacity: 0;
  transition: opacity 0.3s 0.3s, transform 0.3s;
}

.card__description {
  display: block;
  font-size: var(--small-font-size);
  margin-bottom: 0.25rem;
}

.card__article:hover .card__data {
  opacity: 1;
  transform: translateY(-8rem);
}

.card__article:hover .card__title {
  transform: translateY(-10rem);
}

@media screen and (max-width: 340px) {
  .container {
    margin-inline: 1rem;
  }

  .card__data {
    width: 250px;
    padding: 1rem;
  }
}

@media screen and (min-width: 768px) {
  .card__container {
    grid-template-columns: repeat(2, 1fr);
    column-gap: 1.5rem;
  }
}

@media screen and (min-width: 1120px) {
  .container {
    height: 50vh;
  }

  .card__container {
    grid-template-columns: repeat(3, 1fr);
  }
  .card__img {
    width: 348px;
  }
  .card__data {
    width: 316px;
    padding-inline: 2.5rem;
  }
}

</style>
