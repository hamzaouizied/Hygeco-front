<!-- <template>
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
          image: require("../../../assets/img/hygeco/1.png"),
          description: "Nous utilisons des sacs réutilisables pour la collecte linges,réduisant ainsi notre consommation de plastique et favorisant la durabilité. ",
          title: "Sacs réutilisables Hygeco"
        },
        {
          image: require("../../../assets/img/hygeco/2.jpeg"),
          description: "Nous utilisons exclusivement des produits de nettoyage certifiés écologiques, qui sont sûrs pour l'environnement et la santé de nos clients.  ",
          title: "Produits de nettoyage certifiés écologiques"
        },
        {
          image: require("../../../assets/img/hygeco/16.jpeg"),
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

</style> -->

<template>
  <section style="background-color: #f8f9fa;">
    <!-- <span>Nos Services</span>
    <h2 class="service">Hygeco</h2>
    <p> Pour le ménage, ou la lessive, nous avons tout ce qu'il vous faut pour
      simplifier votre quotidien!
    </p> -->
    <!-- <span class="bg-watermark">hygeco</span> -->

    <div class="cards">
      <a class="ref" href="/pages/service-menage">

        <div class="card">
          <img src="../../../assets/img/hygeco/11.jpeg" alt="Franklin Carlson">
          <p style="  margin-top: -10rem;
">Nous utilisons des sacs réutilisables pour la collecte linges,réduisant ainsi notre consommation de plastique et favorisant la durabilité.</p>
          <h3 class="service">Sacs réutilisables Hygeco</h3>
          
        </div>
      </a>

      <div class="card">
        <img src="../../../assets/img/hygeco/11.jpeg" alt="Antonia Moore">
        <p style="  margin-top: -10rem;
">Nous utilisons exclusivement des produits de nettoyage certifiés écologiques, qui sont sûrs pour l'environnement et la santé de nos clients.</p>
        <h3 class="service">Produits de nettoyage certifiés écologiques</h3>
        
      </div>

      <a class="ref" href="/pages/menage-commercial">
        <div class="card">
          <img src="../../../assets/img/hygeco/11.jpeg" alt="Travis Lynch">
          <p style="  margin-top: -10rem;
">Nos véhicules de transport sont électriques,contribuant ainsi à la réduction des émissions de carbone et à la préservation de l'air.</p>
          <h3 class="service">Véhicules de transport électriques </h3>
          
        </div>
      </a>

    </div>
  </section>
</template>

<script>
export default {
  name: 'TeamCard'
}
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.ref {
  text-decoration: none;
  color: inherit;
}

.service {
  color: #30c7b5;
  margin-top: 3.5rem;
}
.services {
  color: #30c7b5;
  margin-top: 4.5rem;
}

body {
  background: #171717;
  min-height: 100vh;
}

img {
  max-width: 100%;
  display: block;
}


ul {
  list-style-type: none;
}

ul i {
  color: #fff;
  font-size: clamp(0.9rem, 0.825rem + 0.3vw, 1.2rem);
}

ul i:hover {
  color: #f2709c;
}

section {
  font-family: "Poppins", sans-serif;
  font-weight: 300;
  font-style: normal;
  padding-block: min(20vh, 6rem);
  text-align: center;
  width: calc(min(90rem, 100%));
  margin-inline: auto;
}

section span,
section p,
section h2,
section h3 {
  letter-spacing: 0.035rem;
}

section p {
  line-height: 1.6;
  color: #fff;
  max-width: 50rem;
  margin: 0 auto;
  font-size: clamp(0.9rem, 0.825rem + 0.3vw, 1.2rem);
}

.bg-watermark {
  color: #30c7b5;
  font-size: clamp(6rem, 1.3333rem + 14.9333vw, 20rem);
  font-weight: 800;
  position: absolute;
  z-index: -1;
  left: 50%;
  transform: translateX(-50%) translateY(-25%);
  user-select: none;
  letter-spacing: 0.5rem;
}

section span {
  text-transform: uppercase;
  display: block;
  font-size: 1.2rem;
  color: #a3a3a3;
}

section h2 {
  font-size: clamp(3.5rem, 3rem + 1.6vw, 5rem);
  margin-top: -0.625rem;
  color: #fff;
}

.cards {
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(12rem, 100%), 1fr));
  gap: 4rem;
}

@media screen and (min-width: 51rem) {
  .cards {
    gap: 0.5rem;
    padding-bottom: 2.5rem;
  }
}

.card {
  position: relative;
  cursor: pointer;
}

.card h3,
.card p {
  text-transform: capitalize;
}

.card h3 {
  font-size: clamp(1rem, 0.9167rem + 0.2667vw, 1.25rem);
  font-weight: 400;
}

.card p {
  font-size: clamp(0.85rem, 0.75rem + 0.32vw, 1.15rem);
  letter-spacing: 0.12rem;
  font-weight: 300;
  max-width: 150%;
}

.card::before {
  position: absolute;
  content: "";
  width: 5rem;
  height: 8.25rem;
  z-index: 0;
  transition: 0.3s ease-in-out;
  background: #30c7b5;
  background: -webkit-linear-gradient(to left, #30c7b5, #30c7b5);
  background: linear-gradient(to left, #30c7b5, #30c7b5);
  top: -0.375rem;
  left: -0.375rem;
}

.card::after {
  position: absolute;
  inset: 0;
  content: "";
  width: 100%;
  height: 100%;
  background: #232526;
  background: -webkit-linear-gradient(to bottom, hsla(0, 3%, 26%, 0.2), hsla(0, 0%, 3%, 0.156));
  background: linear-gradient(to bottom, hsla(345, 3%, 26%, 0.2), hsl(0deg 0% 3.14% / 10%));
}

.card img {
  /* filter: grayscale(100%); */

  transition: transform 0.3s ease;
}

.card-content {
  position: absolute;
  bottom: 0;
  z-index: 99;
  left: 0;
  color: #fff;
  width: 100%;
  padding: 1.875rem 1.25rem;
  text-align: center;
}

.card-content ul {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.625rem;
  margin-top: 1.25rem;
}

.card:hover img {
  transform: scale(1.1);
}

.card:hover::before {
  transform: scale(1.03);
}

.card:nth-child(1)::before {
  top: -0.375rem;
  left: -0.375rem;
}

@media screen and (min-width: 31.25rem) {
  .card:nth-child(2) {
    transform: translateY(15%);
  }
}

.card:nth-child(2)::before {
  bottom: 5.375rem;
  left: -0.375rem;
  top: auto;
}

.card:nth-child(3)::before {
  top: -0.375rem;
  left: -0.375rem;
}
.card p {
  opacity: 0;
  transform: translateY(100%);
  transition: opacity 0.3s, transform 0.3s;
}

.card:hover p {
  opacity: 1;
  transform: translateY(0);
}
</style>
