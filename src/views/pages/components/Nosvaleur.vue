<template>

    <section class="experience">
      <div class="content">
        <h1>Nos valeurs</h1>
        <ul>
          <li v-for="(experience, index) in experiences" :key="index">
            <div class="experience-content hidden">
              <h2>{{ experience.company }}</h2>
              <!-- <div class="experience-time">{{ experience.time }}</div> -->
              <p>{{ experience.description }}</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    name: 'Valeur',
    data() {
      return {
        experiences: [
          {
            company: 'Écoresponsabilité',
            description: 'Nous utilisons des pratiques respectueuses de l environnement à chaque étape de nos services, des produits écologiques, des sacs de linges réutilisables aux véhicules électriques ',
          },
          {
            company: 'Fiabilité',
            description: 'Notre équipe professionnelle prendra soin de votre linge et de vos équipements à la maison. Nous nous engageons à prendre soin de vos affaires et à offrir un service fiable et de qualité à chaque visite.',
          },
          {
            company: 'Flexibilité ',
            description: ' Nous comprenons que chaque client a des besoins uniques. C est pourquoi nous nous adaptons à vos préférences et à votre emploi du temps pour vous offrir un service personnalisé.',
          },
          {
            company: 'Excellence ',
            description: 'Nous nous efforçons constamment d atteindre l excellence dans tout ce que nous faisons, que ce soit dans la qualité de nos services ou dans notre engagement envers la satisfaction client',
          },
          {
            company: 'Épanouissement',
            description: ' Nous visons l épanouissement de nos clients en leur offrant un environnement propre et sain, tout en leur permettant de profiter pleinement de la vie pendant que nous prenons soin de leurs besoins de nettoyage et de gestion du linge.',
          },
        ],
      };
    },
    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },
    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },
    methods: {
      handleScroll() {
        const bottomOfWindow = window.scrollY + window.innerHeight;
  
        // Experience Section
        const experienceElements = document.querySelectorAll('.experience .content .hidden');
        experienceElements.forEach(element => {
          const bottomOfObject = element.offsetTop + element.offsetHeight;
          if (bottomOfWindow > bottomOfObject) {
            element.style.opacity = '1';
            element.style.marginLeft = '0';
          }
        });
      },
    },
  };
  </script>
  
  <style lang="scss" scoped>
  @import url('https://fonts.googleapis.com/css?family=PT+Sans');
  
  $main-font: 'PT Sans', sans-serif;
  
  $text-color: #444;
  $title-color: #344767;
  $bg-color: #F0F8FF;
  $secondary-bg-color: #f9f9f9;
  
  $progressbar-bg: #F0F8FF;
  $progressbar-color: #34495e;
  
  *,
  *:before,
  *:after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  html,
  body {
    width: 100%;
    height: 100%;
  }
  
  body {
    color: $text-color;
    // background: $bg-color;
    font-size: 16px;
    font-family: $main-font;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }
  
  section {
    position: relative;
    width: 100%;
  }
  
  .experience {
    // background: $secondary-bg-color;
    padding: 50px 0;
    overflow-x: hidden;
  }
  
  .content {
    text-align: center;
  }
  
  h1 {
    font-size: 2em;
    color: #344767;
  }
  
  ul {
    padding: 50px 0;
    list-style-type: none;
  }
  
  li {
    background: $bg-color;
    position: relative;
    margin-left: 297px;
    width: 5px;
    padding-bottom: 40px;
  }
  
  li:last-child {
    padding-bottom: 7px;
  }
  
  li:before {
    content: '';
    background: $secondary-bg-color;
    position: absolute;
    left: 50%;
    top: 0;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    border: 4px solid $bg-color;
  }
  
  .hidden {
    opacity: 0;
    margin-left: 10vw;
  }
  
  .experience-content {
    background: $bg-color;
    position: relative;
    top: 7px;
    left: 48px;
    width: calc(68vw - 100px);
    padding: 20px;
    text-align: center;
    border-radius: 0 5px 5px 5px;
  }
  @media (max-width: 767px) {
  .experience-content{

    width: calc(100vw - 100px);
  }
}
@media (max-width: 767px) {
  li{

    margin-left: 20px;
  }
}
  .experience-content h2 {
    font-size: 1.5em;
    color: $title-color;
    padding-bottom: 10px;
  }
  
  .experience-time {
    color: #777;
    font-size: 1.1em;
    padding-bottom: 10px;
  }
  
  .experience-content p {
    color: #1a1a1a;
    font-size: 0.95em;
  }
  
  .experience-content:before {
    content: '';
    background: $bg-color;
    position: absolute;
    top: 0;
    left: -35px;
    width: 35px;
    height: 5px;
  }
  </style>
  