<template>
    <div class="wrapper">
      <div class="container">
        <input type="radio" name="slide" id="c1" v-model="selectedCard" value="c1">
        <label for="c1" class="card" :class="{ active: selectedCard === 'c1' }">
          <div class="row">
            <div class="icon">1</div>
            <div class="description">
              <h4>Écoresponsabilité</h4>
              <p>Nous utilisons des pratiques respectueuses de l'environnement à
chaque étape de nos services, des produits écologiques, des sacs de linges réutilisables aux
véhicules électriques.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c2" v-model="selectedCard" value="c2">
        <label for="c2" class="card" :class="{ active: selectedCard === 'c2' }">
          <div class="row">
            <div class="icon">2</div>
            <div class="description">
              <h4>Fiabilité</h4>
              <p>Notre équipe professionnelle prendra soin de votre linge et de vos équipements
à la maison. Nous nous engageons à prendre soin de vos affaires et à offrir un service fiable
et de qualité à chaque visite.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c3" v-model="selectedCard" value="c3">
        <label for="c3" class="card" :class="{ active: selectedCard === 'c3' }">
          <div class="row">
            <div class="icon">3</div>
            <div class="description">
              <h4>Flexibilité </h4>
              <p>Nous comprenons que chaque client a des besoins uniques. C'est pourquoi
nous nous adaptons à vos préférences et à votre emploi du temps pour vous offrir un
service personnalisé.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c4" v-model="selectedCard" value="c4">
        <label for="c4" class="card" :class="{ active: selectedCard === 'c4' }">
          <div class="row">
            <div class="icon">4</div>
            <div class="description">
              <h4>Excellence</h4>
              <p>Nous nous efforçons constamment d'atteindre l'excellence dans tout ce que
nous faisons, que ce soit dans la qualité de nos services ou dans notre engagement envers la
satisfaction client.</p>
            </div>
          </div>
        </label>
        <input type="radio" name="slide" id="c5" v-model="selectedCard" value="c5">
        <label for="c5" class="card" :class="{ active: selectedCard === 'c5' }">
          <div class="row">
            <div class="icon">5</div>
            <div class="description">
              <h4>Épanouissement</h4>
              <p>Nous visons l'épanouissement de nos clients en leur offrant un
environnement propre et sain, tout en leur permettant de profiter pleinement de la vie
pendant que nous prenons soin de leurs besoins de nettoyage et de gestion du linge</p>
            </div>
          </div>
        </label>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        selectedCard: 'c1'
      }
    }
  }
  </script>
  
  <style scoped>
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
  
  body {
    background-color: #eeeeea;
  }
  
  .wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: -12rem;
  }
  
  .container {
    height: 400px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: center ;
  }
  
  .card {
    width: 80px;
    border-radius: .75rem;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
    transition: .6s cubic-bezier(.28,-0.03,0,.99);
    box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8);
  }
  
  .card > .row {
    color: white;
    display: flex;
    flex-wrap: nowrap;
  }
  
  .card > .row > .icon {
  background: #223;
  color: white;
  border-radius: 50%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 15px;
}

.card > .row > .description {
  display: flex;
  justify-content: center;
  flex-direction: column;
  overflow: hidden;
  height: 150px;
  width: 520px;
  opacity: 0;
  transform: translateY(30px);
  transition-delay: .3s;
  transition: all .3s ease;
}

.description p {
  color: #fff;
  padding-top: 5px;
  font-weight: 700;
}

.description h4 {
  text-transform: uppercase;
  color: #fff;
}

input {
  display: none;
}

input:checked + label {
  width: 600px;
}

input:checked + label .description {
  opacity: 1 !important;
  transform: translateY(0) !important;
}
.card[for="c1"] {
    background-image: url('../../../assets/img/nv.png');
}
.card[for="c2"] {
    background-image: url('../../../assets/img/nv.png');
}
.card[for="c3"] {
    background-image: url('../../../assets/img/nv.png');
}
.card[for="c4"] {
    background-image: url('../../../assets/img/nv.png');
}
.card[for="c5"] {
    background-image: url('../../../assets/img/nv.png');
}
/* Responsive Styles */
@media (max-width: 768px) {
  .container {
    flex-direction: column;
    height: auto;
    margin-bottom: -70rem;

  }

  .card {
    width: 100%;
    margin: 10px 0;
    align-items: center;
  }
  .card > .row {
    flex-direction: column; /* Stack icon and description vertically */
    align-items: center; /* Center the row content horizontally */
  }

  input:checked + label {
    width: 100%;
  }

  .card > .row > .description {
    width: 100%;
    height: auto;
  }

  .description p {
    padding: 10px;
  }

  .description h4 {
    padding: 10px;
  }
}

@media (max-width: 480px) {
  .card > .row > .icon {
    width: 40px;
    height: 40px;
    margin: 15px;
    font-size: 1rem;
  }

  .description p {
    font-size: 0.9rem;
  }

  .description h4 {
    font-size: 1.1rem;
  }
}
</style>
  