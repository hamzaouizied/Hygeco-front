<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
// import PricingCard from "./components/PricingCard.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import AccordionItem from "./components/AccordionItem.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import ComplexBackgroundCard from '@/views/ecommerce/components/ComplexBackgroundCard.vue';


const store = useStore();

onMounted(() => {
  store.state.showSidenav = false;
  store.state.showNavbar = false;
  store.state.showFooter = false;
  setNavPills();
});
onBeforeUnmount(() => {
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
</script>
<template>
 <navbar
          is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
          btn-background="bg-gradient-success"
          :dark-mode="true"
        />
  <div
    class="page-header position-relative"
    :style="{
      backgroundImage:
        'url(' + require('../../assets/img/hygeco.jpg') + ')',
      backgroundSize: 'cover',
      
      
    }"
  >
    <span class="mask bg-gradient-success opacity-6"></span>
    <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
      <div class="row">
        <div class=" col-md-6 mt-4">
          <h3 class="text-white" style="font-size: 4.875rem; color: #000000;">Let the green clean begin </h3>
          <p class="text-white">
            Linen's bright, cleaning's right,Hygeco's here day or night!
          </p>
        </div>
      </div>
      <div class="row">
        <div class=" col-lg-4 col-md-6 col-7">
          <div class="mt-5 nav-wrapper position-relative z-index-2">
            <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <router-link
            :to="{ name: 'Signin Basic' }"
            class="mb-0 btn btn-sm me-1"
            :class="btnBackground ? btnBackground : ' text-white'"
            >
            Book Now
            </router-link>
          
          </li>
        </ul>
            
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
            <div class="col-md-6"> 
                <div class="col-xxl" style="padding: 70px">
                    <div class="card flex-grow-1 mr-3">
                    <div class="p-3 pb-0 card-header d-flex">
                        <h6 class="my-auto">Services</h6>
                        <div class="nav-wrapper position-relative ms-auto w-50">
                        <ul class="p-1 nav nav-pills nav-fill" role="tablist">
                            <li class="nav-item">
                            <a
                                class="px-0 py-1 mb-0 nav-link active"
                                data-bs-toggle="tab"
                                href="#cam1"
                                role="tab"
                                aria-controls="cam1"
                                aria-selected="true"
                                >Ménage</a
                            >
                            </li>
                            <li class="nav-item">
                            <a
                                class="px-0 py-1 mb-0 nav-link"
                                data-bs-toggle="tab"
                                href="#cam2"
                                role="tab"
                                aria-controls="cam2"
                                aria-selected="false"
                                >Buandrie</a
                            >
                            </li>
                            
                        </ul>
                        </div>
                        
                    </div>
                    <div class="p-3 mt-2 card-body">
                        <div id="v-pills-tabContent" class="tab-content">
                        <div
                            id="cam1"
                            class="tab-pane fade show position-relative active height-400 border-radius-lg"
                            role="tabpanel"
                            aria-labelledby="cam1"
                            :style="{
                            backgroundImage:
                                'url(' + require('../../assets/img/cleaning-window.jpg') + ')',
                            backgroundSize: 'cover',
                            
                            }"
                        >
                        
                        </div>
                        <div
                            id="cam2"
                            class="tab-pane fade position-relative height-400 border-radius-lg"
                            role="tabpanel"
                            aria-labelledby="cam2"
                            :style="{
                            backgroundImage:
                                'url(' + require('../../assets/img/laundry-machine.jpg') + ')',
                            backgroundSize: 'cover',
                            
                            }"
                        >
                        
                        </div>
                        
                        </div>
                    </div>
                    </div>
                    
                </div>
                
            </div>  
              
            <div class="col-md-6">
                <div class="col-xl-7" style="padding: 70px">

                        <h6>Nos Service</h6>
                        <h2>Quels services offrons-nous ?</h2>
                        <p>
                            Découvrez Hygeco, votre partenaire ultime pour des services de nettoyage haut de gamme et une blanchisserie commerciale méticuleuse.
                             Nous nous spécialisons dans l'amélioration de la propreté et garantissant votre confort. 
                             Avec notre service de ramassage et de livraison sans faille directement à votre porte,
                              Hygeco redéfinit la commodité et transforme votre domicile en un havre immaculé.
                        </p>

                        <router-link
                        :to="{ name: 'Signin Basic' }"
                        class="mb-0 btn btn-sm me-1"
                        :class="btnBackground ? btnBackground : ' text-dark'"
                        >
                        Book Now
                        </router-link>
                    
                </div>
                
          
            </div>
 </div>
  <div class="container my-6">
    <div class="row">

            <div class="mx-auto text-center col-md-6">
            <h2>Étapes Faciles pour la Lessive</h2>
            <p>
                Nous prendrons soin de vos vêtements avec précision, garantissant une fraîcheur de qualité supérieure.
                Découvrez la simplicité de vêtements propres et répétez chaque fois que nécessaire
            </p>
            </div>
                <div class="row mt-4">
                    <complex-background-card
                    image=""
                    description="Sélectionnez Votre Forfait Lessive."
                    :action="{ route: 'javascript:;', label: 'Read more' }"
                />
                <complex-background-card
                    image=""
                    description="Réservez Votre Rendez-vous."
                    :action="{ route: 'javascript:;', label: 'Read more' }"
                />
                <complex-background-card
                    image=""
                    description="Profitez de vos vêtements fraîchement lavés."
                    :action="{ route: 'javascript:;', label: 'Read more' }"
                />
                
                </div>
     </div>
     <br/>
     <br/>
     <br/>

     <div class="row">

        <div class="mx-auto text-center col-md-6">
        <h2>Étapes Faciles de Nettoyage</h2>
        <p>
            Notre processus de nettoyage est effectué avec précision pour garantir une fraîcheur de première qualité. Adoptez la simplicité d'un espace impeccable, 
            et n'hésitez pas à revenir chaque fois que la propreté vous appelle.
        </p>
        </div>
            <div class="row mt-4">
                <complex-background-card
                image=""
                description="Sélectionnez Votre Forfait de Nettoyage."
                :action="{ route: 'javascript:;', label: 'Read more' }"
            />
            <complex-background-card
                image=""
                description="Réservez Votre Rendez-vous."
                :action="{ route: 'javascript:;', label: 'Read more' }"
            />
            <complex-background-card
                image=""
                description="Profitez d'une Maison Propre."
                :action="{ route: 'javascript:;', label: 'Read more' }"
            />
            
            </div>
     </div>
     <br/>
     <br/>
     <br/>
  </div>  
     <div class="row">
            <div class="col-md-6"> 
                <div class="col-xxl" style="padding: 70px">
                    <div class="card flex-grow-1 mr-3">
                    <div class="p-3 pb-0 card-header d-flex">
                        
                        <div class="nav-wrapper position-relative ms-auto w-50">
                        
                        </div>
                        
                    </div>
                    <div class="p-3 mt-2 card-body">
                        <div id="v-pills-tabContent" class="tab-content">
                        <div
                            id="cam1"
                            class="tab-pane fade show position-relative active height-400 border-radius-lg"
                            role="tabpanel"
                            aria-labelledby="cam1"
                            :style="{
                            backgroundImage:
                                'url(' + require('../../assets/img/hygecoo.jpg') + ')',
                            backgroundSize: 'cover',
                            
                            }"
                        >
                        
                        </div>
                        
                        </div>
                    </div>
                    </div>
                    
                </div>
                
            </div>  
              
            <div class="col-md-6">
                <div class="col-xl-7" style="padding: 70px">

                        <h6>À PROPOS DE NOUS</h6>
                        <h2>Qui sommes-nous ?</h2>
                        <p>
                            Hygeco est une entreprise basée à Montréal qui propose une gamme de services de nettoyage et de blanchisserie professionnels,
                             ainsi que des fournitures de literie et de produits de nettoyage pour des clients résidentiels et commerciaux.
                              Avec un engagement à fournir des solutions écologiques, 
                              le personnel expérimenté de Hygeco assure un nettoyage complet et efficace sans nuire à l'environnement.
                               Que ce soit pour le nettoyage, la blanchisserie ou la literie, 
                               les services de Hygeco sont adaptés pour répondre aux besoins spécifiques et aux budgets de ses clients.
                        </p>

                        <router-link
                        :to="{ name: 'Signin Basic' }"
                        class="mb-0 btn btn-sm me-1"
                        :class="btnBackground ? btnBackground : ' text-dark'"
                        >
                        Book Now
                        </router-link>
                    
                </div>
                
          
            </div>
     </div>
  <div class="container my-6">
   
    
    
    <div class="row">
      <div class="mx-auto col-md-10">
        <div id="accordionRental" class="accordion">
          <accordion-item
            accordion-id="headingOne"
            collapse-id="collapseOne"
            active
          >
            <template #question>How do I order?</template>
            <template #answer>
              We’re not always in the position that we want to be at. We’re
              constantly growing. We’re constantly making mistakes. We’re
              constantly trying to express ourselves and actualize our dreams.
              If you have the opportunity to play this game of life you need to
              appreciate every moment. A lot of people don’t appreciate the
              moment until it’s passed.
            </template>
          </accordion-item>
          <accordion-item accordion-id="headingTwo" collapse-id="collapseTwo">
            <template #question>How can i make the payment?</template>
            <template #answer>
              It really matters and then like it really doesn’t matter. What
              matters is the people who are sparked by it. And the people who
              are like offended by it, it doesn’t matter. Because it&#39;s
              motivating the doers. Because I’m here to follow my dreams and and
              inspire other people to follow their dreams, too.
              <br />We’re not always in the position that we want to be at.
              We’re constantly growing. We’re constantly making mistakes. We’re
              constantly trying to express ourselves and actualize our dreams.
              If you have the opportunity to play this game of life you need to
              appreciate every moment. A lot of people don’t appreciate the
              moment until it’s passed.
            </template>
          </accordion-item>

          <accordion-item
            accordion-id="headingThree"
            collapse-id="collapseThree"
          >
            <template #question
              >How much time does it take to receive the order?</template
            >
            <template #answer>
              The time is now for it to be okay to be great. People in this
              world shun people for being great. For being a bright color. For
              standing out. But the time is now to be okay to be the greatest
              you. Would you believe in what you believe in, if you were the
              only one who believed it? If everything I did failed - which it
              doesn&#39;t, it actually succeeds - just the fact that I&#39;m
              willing to fail is an inspiration. People are so scared to lose
              that they don&#39;t even try. Like, one thing people can&#39;t say
              is that I&#39;m not trying, and I&#39;m not trying my hardest, and
              I&#39;m not trying to do the best way I know how.
            </template>
          </accordion-item>

          <accordion-item accordion-id="headingFour" collapse-id="collapseFour">
            <template #question>Can I resell the products?</template>
            <template #answer>
              I always felt like I could do anything. That’s the main thing
              people are controlled by! Thoughts- their perception of
              themselves! They&#39;re slowed down by their perception of
              themselves. If you&#39;re taught you can’t do anything, you won’t
              do anything. I was taught I could do everything.
              <br />
              <br />If everything I did failed - which it doesn&#39;t, it
              actually succeeds - just the fact that I&#39;m willing to fail is
              an inspiration. People are so scared to lose that they don&#39;t
              even even try. Like, one thing people can&#39;t say is that
              I&#39;m not trying, and I&#39;m not trying my hardest, and I&#39;m
              not trying trying to do the best way I know how.
            </template>
          </accordion-item>

          <accordion-item
            accordion-id="headingFifth"
            collapse-id="collapseFifth"
          >
            <template #question>Where do I find the shipping details?</template>
            <template #answer>
              There’s nothing I really wanted to do in life that I wasn’t able
              to get good at. That’s my skill. I’m not really specifically
              talented at anything except for the ability to learn. That’s what
              I do. That’s what I’m here for. Don’t be afraid to be wrong
              because you can’t learn anything from a compliment. I always felt
              like I could do anything. That’s the main thing people are
              controlled by! Thoughts- their perception of themselves!
              They&#39;re slowed down by their perception of themselves. If
              you&#39;re taught you can’t do anything, you won’t do anything. I
              was taught I could do everything.
            </template>
          </accordion-item>
        </div>
      </div>
    </div>
  </div>
  <div class="container my-6">
  <div class="row">
    <div class="mx-auto text-center col-8">
        <h6 class="opacity-5">More than 50+ brands trust Hygeco</h6>
      </div>
        <br/>
        <br/>
        <br/>
    <div class="col-md-12">
      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
        <!-- Carousel Inner -->
        <div class="carousel-inner">
          <!-- Slide 1 -->
          <div class="carousel-item active">
            <div class="row justify-content-center">
              <div class="mb-4 col-lg-2 col-md-4 col-6">
                <img
                  class="w-100 opacity-9"
                  src="../../assets/img/logos/gray-logos/logo-coinbase.svg"
                  alt="logo_coinbase"
                />
              </div>
            </div>
          </div>
          
          <!-- Slide 2 -->
          <div class="carousel-item">
            <div class="row justify-content-center">
              <div class="mb-4 col-lg-2 col-md-4 col-6">
                <img
                  class="w-100 opacity-9"
                  src="../../assets/img/logos/gray-logos/logo-nasa.svg"
                  alt="logo_nasa"
                />
              </div>
            </div>
          </div>
          <!-- Add more slides if needed -->
        </div>
        
        <!-- Previous & Next Buttons -->
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
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
    background-color: black; /* Change arrow color to black */
  }

  .carousel-control-prev,
  .carousel-control-next {
    filter: invert(1); /* Invert arrow color */
  }
  .carousel {
    position: relative;
    background: #30C7B5;
  }

  .carousel-indicators button {
    background-color: #30C7B5; /* Change carousel indicators color */
    border-color: #30C7B5; /* Change carousel indicators border color */
  }

  .carousel-indicators .active {
    background-color: #30C7B5; /* Change active carousel indicator color */
    border-color: #30C7B5; /* Change active carousel indicator border color */
  }
</style>