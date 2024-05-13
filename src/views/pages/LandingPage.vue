<script setup>
import { onMounted, onBeforeUnmount, ref } from "vue";
import { useStore } from "vuex";
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
// import PricingCard from "./components/PricingCard.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
// import AccordionItem from "./components/AccordionItem.vue";
import setNavPills from "@/assets/js/nav-pills.js";
// import ComplexBackgroundCard from "@/views/ecommerce/components/ComplexBackgroundCard.vue";

const store = useStore();
const existingSlides = [
  {
    imageUrl: require('../../assets/img/hygeco.jpg'),
    text: "Let the green clean begin. Linen's bright, cleaning's right, Hygeco's here day or night!"
  },
  {
    imageUrl: require('../../assets/img/hygecoo.jpg'),
    text: "Another text for the second slide."
  },
  {
    imageUrl: require('../../assets/img/laundry-machine.jpg'),
    text: "Text for the third slide."
  }
];
const testimonialSlides = [
  {
    name: "John Doe",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: require('../../assets/img/img-1.jpg')
  },
  {
    name: "Jane Smith",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: require('../../assets/img/img-2.jpg')
  },
  {
    name: "hygeco perso",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    image: require('../../assets/img/img-1.jpg')
  },
  {
    name: "Alice Johnson",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    image: require('../../assets/img/img-3.jpg')
  }
];
// const slides = [...existingSlides, ...testimonialSlides];
const currentIndexHead = ref(0);
// const currentIndex = ref(0);

let intervalId;
onMounted(() => {
  store.state.showSidenav = false;
  store.state.showNavbar = false;
  store.state.showFooter = false;
  setNavPills();
  startSlideshow();
});
onBeforeUnmount(() => {
  stopSlideshow();
  store.state.showSidenav = false;
  store.state.showNavbar = false;
  store.state.showFooter = true;
  if (store.state.isPinned === false) {
    const sidenav_show = document.querySelector(".g-sidenav-show");
    sidenav_show.classList.remove("g-sidenav-hidden");
    sidenav_show.classList.add("g-sidenav-pinned");
    store.state.isPinned = true;
  }
});
function startSlideshow() {
  intervalId = setInterval(() => {
    currentIndexHead.value = (currentIndexHead.value + 1) % existingSlides.length;
  }, 5000); // Change image every 5 seconds (adjust as needed)
}
// function startSlideshowTestimonial() {
//   intervalId = setInterval(() => {
//     currentIndex.value = (currentIndex.value + 1) % testimonialSlides.length;
//   }, 5000); // Change image every 5 seconds (adjust as needed)
// }
function stopSlideshow() {
  clearInterval(intervalId);
}

</script>
<template>
  <navbar is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success"
    :dark-mode="true" />
  <div class="page-header position-relative" :style="{
    backgroundImage: existingSlides[currentIndexHead] ? `url(${existingSlides[currentIndexHead].imageUrl})` : '',

    backgroundSize: 'cover',
    padding: '100px',
  }">
    <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mt-4">
          <h3 class="text-white" style="font-size: 2.5rem; color: #000000">
            {{ existingSlides[currentIndexHead] ? existingSlides[currentIndexHead].text : '' }}
          </h3>
          <router-link :to="{ name: 'Signin Basic' }" class="mb-0 btn btn-sm me-1"
            :class="btnBackground ? btnBackground : ' text-white'">
            Book Now
          </router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <!-- Column for images -->
      <div class="  col-md-6  " style="padding: 70px">
        <div class="card flex-grow-1 mr-3">
          <div class="p-3 pb-0 card-header d-flex">
            <h6 class="my-auto">Services</h6>
            <div class="nav-wrapper position-relative ms-auto w-50">
              <ul class="p-1 nav nav-pills nav-fill" role="tablist">
                <li class="nav-item">
                  <a class="px-0 py-1 mb-0 nav-link active" data-bs-toggle="tab" href="#cam1" role="tab"
                    aria-controls="cam1" aria-selected="true">Ménage</a>
                </li>
                <li class="nav-item">
                  <a class="px-0 py-1 mb-0 nav-link" data-bs-toggle="tab" href="#cam2" role="tab" aria-controls="cam2"
                    aria-selected="false">Buandrie</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="p-3 mt-2 card-body">
            <div id="v-pills-tabContent" class="tab-content">
              <div id="cam1" class="tab-pane fade show position-relative active height-400 border-radius-lg opacity-6 "
                role="tabpanel" aria-labelledby="cam1" :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/img/cleaning-window.jpg') +
                    ')',
                  backgroundSize: 'cover',
                }"></div>
              <div id="cam2" class="tab-pane fade position-relative height-400 border-radius-lg opacity-6"
                role="tabpanel" aria-labelledby="cam2" :style="{
                  backgroundImage:
                    'url(' +
                    require('../../assets/img/laundry-machine.jpg') +
                    ')',
                  backgroundSize: 'cover',
                }">
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- Column for paragraph and button -->
      <div class="col-md-6">
        <div class="col-xxl-10" style="padding: 70px">
          <h6>Nos Service</h6>
          <h2>Quels services offrons-nous ?</h2>
          <p>
            Découvrez Hygeco, votre partenaire ultime pour des services de nettoyage haut de gamme et une
            blanchisserie commerciale méticuleuse. Nous nous spécialisons dans l'amélioration de la propreté
            et garantissant votre confort. Avec notre service de ramassage et de livraison sans faille
            directement à votre porte, Hygeco redéfinit la commodité et transforme votre domicile en un
            havre immaculé.
          </p>
          <router-link :to="{ name: 'Signin Basic' }" class="mb-0 btn btn-sm me-1"
            :class="btnBackground ? btnBackground : ' text-dark'">Book Now</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="mx-auto text-center col-md-6">
        <h2>Étapes Faciles de Nettoyage</h2>
        <p>
          Notre processus de nettoyage est effectué avec précision pour garantir
          une fraîcheur de première qualité. Adoptez la simplicité d'un espace
          impeccable, et n'hésitez pas à revenir chaque fois que la propreté
          vous appelle.
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img src='../../assets/img/img-3.jpg' class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Sélectionnez Votre Forfait.</h5>
            <p class="card-text">Indiquez-nous ce que vous souhaitez faire nettoyer, et nous vous proposerons les
              meilleurs prix du marché.</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img src='../../assets/img/img-3.jpg' class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Réservez Votre Rendez-vous.</h5>
            <p class="card-text">Explorez notre outil de planification en ligne pour sélectionner un horaire qui
              correspond parfaitement à votre emploi du temps.</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img src='../../assets/img/img-3.jpg' class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Profitez d'une Maison Propre</h5>
            <p class="card-text">Saisissez la Sérénité d'une Maison Parfaitement Propre, Où Chaque Coin Brille de
              Fraîcheur.Profitez d'une Maison Propre</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <br />
  <br />
  <div class="container">
    <div class="row">
      <div class="mx-auto text-center col-md-6">
        <h2>Étapes Faciles de Lessive</h2>
        <p>
          Nous prendrons soin de vos vêtements avec précision, garantissant une fraîcheur de qualité supérieure.
          Découvrez la facilité des vêtements propres et répétez chaque fois que nécessaire.
        </p>
      </div>
    </div>
    <div class="row mt-4">
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img src='../../assets/img/img-3.jpg' class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Sélectionnez Votre Forfait Lessive</h5>
            <p class="card-text">Indiquez-nous les services de lessive dont vous avez besoin, et nous vous proposerons
              les meilleurs prix du marché.</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img src='../../assets/img/img-3.jpg' class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Réservez Votre Rendez-vous.</h5>
            <p class="card-text">Explorez notre outil de planification en ligne pour choisir un créneau qui correspond
              parfaitement à votre emploi du temps.</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
      <div class="col-lg-4 col-md-6 mb-4">
        <div class="card h-100">
          <img src='../../assets/img/img-3.jpg' class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">Vêtements fraîchement lavés</h5>
            <p class="card-text">Immergez-vous dans le confort d'une garde-robe propre, où chaque vêtement se sent
              rafraîchi et prêt à être porté.</p>
            <a href="#" class="btn btn-primary">Read more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row">
      <div class="col-md-6 d-flex align-items-stretch" style="padding: 70px">
        <div class="card  ">
          <div class="card-body d-flex align-items-center justify-content-center p-0">
            <img src="../../assets/img/hygecoo.jpg" alt="Hygeco Image" class="img-fluid w-100 h-100">
          </div>
        </div>
      </div>
      <div class="col-md-6" style="padding: 70px">
        <div class="col-xxl-10">
          <h6>À PROPOS DE NOUS</h6>
          <h2>Qui sommes-nous ?</h2>
          <p>
            Hygeco est une entreprise basée à Montréal qui propose une gamme de
            services de nettoyage et de blanchisserie professionnels, ainsi que
            des fournitures de literie et de produits de nettoyage pour des
            clients résidentiels et commerciaux. Avec un engagement à fournir des
            solutions écologiques, le personnel expérimenté de Hygeco assure un
            nettoyage complet et efficace sans nuire à l'environnement. Que ce
            soit pour le nettoyage, la blanchisserie ou la literie, les services
            de Hygeco sont adaptés pour répondre aux besoins spécifiques et aux
            budgets de ses clients.

          </p>
          <router-link :to="{ name: 'Signin Basic' }" class="mb-0 btn btn-sm me-1"
            :class="btnBackground ? btnBackground : ' text-dark'">Book Now</router-link>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
  <div class="row align-items-center">
    <div class="mx-auto text-center col-8">
      <h6 class="opacity-5">Avis Clients</h6>
    </div>
    <div class="col-md-12 mt-4">
      <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel" style="background-color: transparent;">
        <div class="carousel-inner">
          <div v-for="(testimonial, index) in Math.ceil(testimonialSlides.length / 3)" :key="index" class="carousel-item" :class="{ 'active': index === 0 }">
            <div class="row justify-content-center align-items-center">
              <div v-for="(testimonial, i) in testimonialSlides.slice(index * 3, (index + 1) * 3)" :key="i" class="col-lg-4 col-md-12 col-sm-12">
                <div class="card">
                  <div class="card-body">
                    <img :src="testimonial.image" class="card-img-top" alt="...">
                    <h5 class="card-title">{{ testimonial.name }}</h5>
                    <p class="card-text">{{ testimonial.text }}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#testimonialCarousel" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  </div>
</div>

  <br />
  <br />
  <div class="container">
  <div class="row">
    <div class="col-lg-4 d-flex align-items-stretch" style="padding: 70px">
      
          <!-- Contact Form -->
          <form id="contactForm">
            <div class="mb-3">
              <label for="fullName" class="form-label">Nom Prénom</label>
              <input type="text" class="form-control" id="fullName" name="fullName" required>
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input type="email" class="form-control" id="email" name="email" required>
            </div>
            <div class="mb-3">
              <label for="telephone" class="form-label">Téléphone</label>
              <input type="tel" class="form-control" id="telephone" name="telephone" required>
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea class="form-control" id="message" name="message" rows="4" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
          </form>
          <!-- End of Contact Form -->
        </div>
     
    <div class="col-md-6" style="padding: 70px">
      <div class="col-xxl-10">
        <h6>Avez-vous des questions ?</h6>
        <h2>Contactez-nous</h2>
        <p>
          Vous avez des questions ou êtes prêt à réserver votre prochain service de nettoyage ?
           Nous sommes là pour vous aider !
            Notre équipe dévouée chez Hygeco Cleaning Service n'est qu'à un message de distance !
        </p>
        <router-link :to="{ name: 'Signin Basic' }" class="mb-0 btn btn-sm me-1" :class="btnBackground ? btnBackground : ' text-dark'">Book Now</router-link>
      </div>
    </div>
  </div>
</div>

  <div class="container-fluid">
    <div class="row align-items-center">
      <div class="mx-auto text-center col-8">
        <h6 class="opacity-5">More than 50+ brands trust Hygeco</h6>
      </div>
      <div class="col-md-12 mt-4">
        <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="row justify-content-center align-items-center">
                <div class="mb-4 col-lg-2 col-md-4 col-6">
                  <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-coinbase.svg"
                    alt="logo_coinbase">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center align-items-center">
                <div class="mb-4 col-lg-2 col-md-4 col-6">
                  <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-nasa.svg" alt="logo_nasa">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center align-items-center">
                <div class="mb-4 col-lg-2 col-md-4 col-6">
                  <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-netflix.svg" alt="logo_nasa">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center align-items-center">
                <div class="mb-4 col-lg-2 col-md-4 col-6">
                  <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-pinterest.svg"
                    alt="logo_nasa">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center align-items-center">
                <div class="mb-4 col-lg-2 col-md-4 col-6">
                  <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-spotify.svg" alt="logo_nasa">
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="row justify-content-center align-items-center">
                <div class="mb-4 col-lg-2 col-md-4 col-6">
                  <img class="w-100 opacity-9" src="../../assets/img/logos/gray-logos/logo-vodafone.svg"
                    alt="logo_nasa">
                </div>
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true" style="display: none;"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators"
            data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true" style="display: none;"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  </div>





  <app-footer />
</template>
<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
  background-color: black;
  /* display: none; */
  /* Change arrow color to black */
}

.carousel-control-prev,
.carousel-control-next {
  filter: invert(1);
  /* Invert arrow color */
}

.carousel {
  position: relative;
  background: #30c7b5;
}

.carousel-indicators button {
  background-color: #30c7b5;
  /* Change carousel indicators color */
  border-color: #30c7b5;
  /* Change carousel indicators border color */
}

.carousel-indicators .active {
  background-color: #30c7b5;
  /* Change active carousel indicator color */
  border-color: #30c7b5;
  /* Change active carousel indicator border color */
}
#contactForm {
    width: 100%;
  }
#contactForm .form-control {
    width: 100%;
  }
</style>