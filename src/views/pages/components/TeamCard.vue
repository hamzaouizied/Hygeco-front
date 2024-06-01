<template>
  <section>
    <span>Nos Services</span>
    <h2 class="service">Hygeco</h2>
    <p> Pour le ménage, ou la lessive, nous avons tout ce qu'il vous faut pour
      simplifier votre quotidien!
    </p>
    <!-- <span class="bg-watermark">hygeco</span> -->

    <div class="cards">
      <a class="ref" href="/pages/service-menage">

        <div class="card">
          <img src="../../../assets/img/t-2.png"
            alt="Franklin Carlson">

          <h3 class="service">Buandrie</h3>
          <p>Self Service</p>
        </div>
      </a>

      <div class="card">
        <img src="../../../assets/img/t-1.png"
          alt="Antonia Moore">

        <h3 class="service">Services Résidentiels</h3>
        <p>Full package</p>
      </div>

      <a class="ref" href="/pages/menage-commercial">
        <div class="card">
          <img src="../../../assets/img/t-3.png"
            alt="Travis Lynch">

          <h3 class="service">Services Commerciaux</h3>
          <p>Full Package</p>
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
  margin-top: 1.5rem;
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
  width: calc(min(90rem, 90%));
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
  color: #a3a3a3;
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
  gap: 2rem;
}

@media screen and (min-width: 51rem) {
  .cards {
    gap: 0;
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
  max-width: 100%;
}

.card::before {
  position: absolute;
  content: "";
  width: 5rem;
  height: 6.25rem;
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
  bottom: -0.375rem;
  left: -0.375rem;
  top: auto;
}

.card:nth-child(3)::before {
  top: -0.375rem;
  left: -0.375rem;
}
</style>