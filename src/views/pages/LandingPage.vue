<script>
// import { ref } from 'vue';
import { useStore } from 'vuex';
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
// import PricingCard from "./components/PricingCard.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
// import AccordionItem from "./components/AccordionItem.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import ProjectGallerie from "./components/ProjectGallerie.vue";
import TeamCard from "./components/TeamCard.vue";
import Contact from "./components/contact.vue";
import Testimonials from './components/Testimonials.vue'


// import ComplexBackgroundCard from "@/views/ecommerce/components/ComplexBackgroundCard.vue";

export default {
  components: {
    Navbar,
    ProjectGallerie,
    TeamCard,
    Contact,
    Testimonials
    // PricingCard,
    // AppFooter,
    // AccordionItem,
    // ComplexBackgroundCard,
  },
  data() {
    return {
      store: useStore(),
      currentIndexHead: 0,
      existingSlides: [
        {
          imageUrl: require("../../assets/img/banniere11.png"),
          text: "D'un linge frais à un ménage parfait, Hygeco prend le relais!",
        },
        {
          imageUrl: require("../../assets/img/o2.png"),
          text: "D'un linge frais à un ménage parfait, Hygeco prend le relais!",
        },
      ],
      intervalId: null,
    };
  },
  mounted() {
    this.store.state.showSidenav = false;
    this.store.state.showNavbar = false;
    this.store.state.showFooter = false;
    setNavPills();
    this.startSlideshow();
  },
  beforeUnmount() {
    this.stopSlideshow();
    this.store.state.showSidenav = true;
    this.store.state.showNavbar = false;
    this.store.state.showFooter = true;
    if (this.store.state.isPinned === false) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      sidenav_show.classList.remove("g-sidenav-hidden");
      sidenav_show.classList.add("g-sidenav-pinned");
      this.store.state.isPinned = true;
    }
  },
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.currentIndexHead =
          (this.currentIndexHead + 1) % this.existingSlides.length;
      }, 5000); // Change image every 5 seconds (adjust as needed)
    },
    stopSlideshow() {
      clearInterval(this.intervalId);
    }
  }
};
</script>


<template>
  <!-- <div class="green-bar" style="background-color: #34C759; height: 5px;"></div> -->

  <div class="container-fluid" style="background-color: #30c7b5; height: 41px">
    <div class="text-center">
      <h3 style="color: white">50% OFF</h3>
    </div>
  </div>

  <navbar is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success"
    :dark-mode="true" style="position: absolute" />

  <div class="page-header position-relative" :style="{
    backgroundImage: existingSlides[currentIndexHead]
      ? `url(${existingSlides[currentIndexHead].imageUrl})`
      : '',

    backgroundSize: 'cover',
    padding: '100px',
  }">
    <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
      <div class="row">
        <div class="col-md-6 mt-4">
          <h3 class="text-white" style="font-size: 2.5rem; color: #000000">
            {{
              existingSlides[currentIndexHead]
                ? existingSlides[currentIndexHead].text
                : ""
            }}
          </h3>
          <!-- <router-link :to="{ name: 'Signin Basic' }" class="mb-0 btn btn-sm me-1"
            :class="btnBackground ? btnBackground : ' text-white'">
            Book Now
          </router-link> -->
        </div>
      </div>
    </div>
  </div>

  <TeamCard />


  <section class="relative bg-cover bg-center py-7 mt-10" :style="{
    backgroundImage: 'url(' + require('../../assets/img/o2.png') + ')',
    backgroundAttachment: 'fixed',
  }">

    <div class="absolute inset-0"></div>
    <div class="container mx-auto relative flex justify-center items-center text-center">
      <div class="max-w-lg">
        <h2 class="text-white text-3xl md:text-4xl font-bold mb-4">
          Services Résidentiels
        </h2>
        <a href="/pages/reservation" class="bg-yellow-button text-gray-900 font-medium py-3 px-6 rounded">
          Reserver Maintenant
        </a>
      </div>
    </div>
  </section>

  <div class="container">
    <div class="work-wrapper1 mt-7">
      <img decoding="async"
        src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/flower.png"
        alt="How It Works" class="follower-section" />
      <div class="row justify-content-lg-between justify-content-center">
        <div class="col-lg-7">
          <div class="work-thumb">
            <img decoding="async" src="../../assets/img/menage.png" alt="How It Works" />
          </div>
        </div>
        <div class="col-lg-5 col-md-7">
          <div class="howwork-content">
            <div class="cmn-section-title">
              <!-- <div class="cmn--btn cmn-alt1 wow fadeInDown" data-wow-delay="0.4"
                style="visibility: visible; animation-name: fadeInDown">
                <span> Working Process </span>
              </div> -->
              <h2 class="white mt-xxl-4 mt-2 wow fadeInUp" data-wow-delay="0.5" style="
                  visibility: visible;
                  animation-name: fadeInUp;
                  color: #032b52;
                ">
                Service Resedentiel
              </h2>
              <!-- <p class="text-white wow fadeInDown" data-wow-delay="0.6"
                style="visibility: visible; animation-name: fadeInDown">
                We love help you get your clothes fresh and clean so we here for
                you 24/7 for any question, concern or suggestion.
              </p> -->
            </div>
            <div class="howit-work-info">
              <div class="howit-item wow fadeInUp" data-wow-delay="0.7" style="
                  visibility: visible;
                  animation-name: fadeInUp;
                  padding: 50px;
                  padding-left: 20px;
                  /* margin-top: 12rem; */
                ">
                <h3 class="title d-flex align-items-center gap-2" style="font-size: 1.3rem;">Service de Ménage
                  Résidentiel : C'est l'heure du ménage, sans que vous ayez à lever le petit
                  doigt !</h3>
                <p class="pra">
                  Entrez dans un foyer impeccable grâce à notre service de ménage résidentiel sur mesure.
                </p>
                <p class="pra">
                  équipes expérimentées s'adaptent à vos besoins spécifiques pour vous offrir un environnement
                  propre et confortable.
                </p>
                <p class="pra">
                  Que ce soit pour un nettoyage régulier, ménage de printemps, postconstruction ou déménagement, nous
                  sommes là pour vous.
                </p>
              </div>
            </div>
            <div class="cmn--btn cmn-alt2 wow fadeInDown" data-wow-delay="0.4s" style="
                    visibility: visible;
                    animation-delay: 0.4s;
                    animation-name: fadeInDown;
                  ">
              <a href="/pages/service-menage"> <span> Voir Plus </span></a>

            </div>
          </div>
        </div>
      </div>
      <img decoding="async"
        src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/working-ball.png"
        alt="How It Works" class="working-bable" />
    </div>
  </div>
  <section class="working-process" style="text-align: center; padding: 40px 20px; background-color: #f9f9f9">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 15px">
      <div class="title-section" style="margin-bottom: 40px">
        <h2 style="font-size: 2em; margin-bottom: 10px">Comment ça fonctionne ?</h2>
        <!-- <p style="font-size: 1em; color: #666">
          Perspiciatis unde omnis iste natus error sit voluptatem accusantium
          dol oremque laudantium, totam remeaque ipsa.
        </p> -->
      </div>
      <div class="process-steps" style="display: flex; flex-wrap: wrap; justify-content: space-between">
        <div class="step">
          <div class="icon">
            <i class="fa fa-calendar-check-o"></i>
          </div>
          <h3><a href="#">Prenez votre rendez-vous</a></h3>
          <p>
            Choisissez le forfait de ménage et la fréquence qui vous conviennent à la date souhaitée.
          </p>
        </div>
        <div class="step">
          <div class="icon">
            <i class="fa fa-envelope-o"></i>
          </div>
          <h3><a href="#">Recevez votre confirmation</a></h3>
          <p>
            Nous vous enverrons un
            courriel instantané avec votre confirmation.
          </p>
        </div>
        <div class="step">
          <div class="icon">
            <i class="fa fa-smile-o"></i>
          </div>
          <h3><a href="#">Détendez-vous !</a></h3>
          <p>
            Relaxez ou profitez de votre temps pour faire des
            activités qui vous plaisent pendant que notre équipe transforme votre maison en un espace
            impeccable.
          </p>
        </div>
      </div>
    </div>
  </section>
  <section class="relative bg-cover bg-center py-7 mt-10" :style="{
    backgroundImage: 'url(' + require('../../assets/img/banniere11.png') + ')',
    backgroundAttachment: 'fixed',
  }">
    <div class="absolute inset-0"></div>
    <div class="container mx-auto relative flex justify-center items-center text-center">
      <div class="max-w-lg">
        <h2 class="text-white  md:text-4xl font-bold mb-4" style="font-size: 3.875rem;">
          Buanderie
        </h2>
        <a href="/pages/reservation-buanderie" class="bg-yellow-button text-gray-900 font-medium py-3 px-6 rounded">
          Reserver Maintenant
        </a>
      </div>
    </div>
  </section>


  <div class="container">
    <img decoding="async"
      src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/flower.png"
      alt="How It Works" class="follower-section" style="position: relative; left: 30px; top: -27px" />
    <div class="row justify-content-lg-between justify-content-center">
      <div class="col-lg-5 col-md-7">
        <div class="howwork-content">
          <div class="cmn-section-title">
            <!-- <div class="cmn--btn cmn-alt1 wow fadeInDown" data-wow-delay="0.4"
              style="visibility: visible; animation-name: fadeInDown">
              <span> Working Process </span>
            </div> -->
            <h2 class="white mt-xxl-4 mt-2 wow fadeInUp" data-wow-delay="0.5" style="
                visibility: visible;
                animation-name: fadeInUp;
                color: #30c7b5;
                margin-bottom: -62px;
              ">
              Buanderie
            </h2>

            <!-- <p class=" wow fadeInDown" data-wow-delay="0.6"
                style="visibility: visible; animation-name: fadeInDown;color: #30c7b5;">
                We love help you get your clothes fresh and clean so we here for
                you 24/7 for any question, concern or suggestion.
              </p> -->
          </div>
          <h3 class="title d-flex align-items-center gap-2" style="font-size: 1.3rem;margin-top: 4.5rem;">Service de
            Buanderie: ça sent le linge frais et prêt à porter !</h3>
          <div class="howit-work-info">
            <div class="howit-item wow fadeInUp" data-wow-delay="0.7" style="
                visibility: visible;
                animation-name: fadeInUp;
                padding: 35px;
                padding-left: 17px;
              ">
              <p class="pra">
                Dites adieu aux corvées de lessive avec notre service de buanderie pratique !
              </p>
              <p class="pra">
                Que vous
                préfériez une collecte et livraison à domicile ou que vous déposiez vos vêtements dans l'un de
                nos points de service,nous nous assurons que vos vêtements sont traités avec le plus grand
                soin et vous sont rendus frais et impeccables.
              </p>

            </div>
          </div>
          <div class="cmn--btn cmn-alt2 wow fadeInDown" data-wow-delay="0.4s" style="
                    visibility: visible;
                    animation-delay: 0.4s;
                    animation-name: fadeInDown;
                  ">
            <a href="/pages/service-menage"> <span> Voir Plus </span></a>

          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <div class="work-thumb">
          <img decoding="async" src="../../assets/img/33.png" alt="How It Works"
            style="width: 90%; border-radius: 60px" />
        </div>
      </div>
    </div>
    <img decoding="async"
      src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/working-ball.png"
      alt="How It Works" class="working-bable" />
  </div>
  <section class="working-process" style="text-align: center; padding: 40px 20px; background-color: #f9f9f9">
    <div class="container" style="max-width: 1200px; margin: 0 auto; padding: 0 15px">
      <div class="title-section" style="margin-bottom: 40px">
        <h2 style="font-size: 2em; margin-bottom: 10px">Comment ça fonctionne ?</h2>

      </div>
      <div class="process-steps" style="display: flex; flex-wrap: wrap; justify-content: space-between">
        <div class="step">
          <div class="icon">
            <i class="fa fa-calendar-check-o"></i>
          </div>
          <h3><a href="#"> Planifiez votre collecte</a></h3>
          <p>
            Choisissez la date et l'heure qui vous
            conviennent pour la collecte de votre linge via notre application ou notre site web. Vous
            y êtes presque !

          </p>
        </div>
        <div class="step">
          <div class="icon">
            <i class="fa fa-envelope-o"></i>
          </div>
          <h3><a href="#"> Recevez votre confirmation</a></h3>
          <p>
            Nous vous enverrons
            une notification pour confirmer votre rendez-vous.
          </p>
        </div>
        <div class="step">
          <div class="icon">
            <i class="fa fa-smile-o"></i>
          </div>
          <h3><a href="#"> Détendez-vous !</a></h3>
          <p>
            Profitez de votre temps pendant que notre
            équipe s'occupe du nettoyage de votre linge.

          </p>
        </div>
      </div>
    </div>
  </section>
  <div class="container">
    <section class="counter-section pt-120 mt-7" style="background-color: #f8f9fa;">
      <div class="container">
        <div class="counter-wrapper">
          <div class="counter__items odometer-item wow fadeInDown" data-wow-duration="0.4s" style="
              visibility: visible;
              animation-duration: 0.4s;
              animation-name: fadeInDown;
            ">
            <div class="cont d-flex align-items-center">
              <span class="odometer odometer-auto-theme" data-odometer-final="99">
                <div class="odometer-inside">
                  <span class="odometer-digit"><span class="odometer-digit-inner"><span class="odometer-ribbon"><span
                          class="odometer-ribbon-inner"></span></span></span></span><span class="odometer-digit"><span
                      class="odometer-digit-inner"><span class="odometer-ribbon"><span
                          class="odometer-ribbon-inner"><span class="odometer-value">9</span>
                          <span class="odometer-value">9</span>
                          <span class="odometer-value">9</span></span></span></span></span>
                </div>
              </span>

            </div>
            <p>maison éclatante</p>
          </div>
          <div class="vline"></div>
          <div class="text-center">
            <h3>découvrez notre expertise en action chez
              Hygeco ! </h3>
          </div>
          <div class="vline"></div>
          <div class="counter__items odometer-item wow fadeInDown" data-wow-duration="0.4s" style="
              visibility: visible;
              animation-duration: 0.4s;
              animation-name: fadeInDown;
            ">
            <div class="cont d-flex align-items-center">
              <span class="odometer odometer-auto-theme" data-odometer-final="99">
                <div class="odometer-inside">
                  <span class="odometer-digit"><span class="odometer-digit-inner"><span class="odometer-ribbon"><span
                          class="odometer-ribbon-inner"></span></span></span></span><span class="odometer-digit"><span
                      class="odometer-digit-inner"><span class="odometer-ribbon"><span
                          class="odometer-ribbon-inner"><span class="odometer-value">9</span>
                          <span class="odometer-value">9</span>
                          <span class="odometer-value">9</span></span></span></span></span>
                </div>
              </span>
              <!-- <span class="plus__icon">
                <svg aria-hidden="true" class="e-font-icon-svg e-fas-percent" viewBox="0 0 448 512"
                  xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M112 224c61.9 0 112-50.1 112-112S173.9 0 112 0 0 50.1 0 112s50.1 112 112 112zm0-160c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zm224 224c-61.9 0-112 50.1-112 112s50.1 112 112 112 112-50.1 112-112-50.1-112-112-112zm0 160c-26.5 0-48-21.5-48-48s21.5-48 48-48 48 21.5 48 48-21.5 48-48 48zM392.3.2l31.6-.1c19.4-.1 30.9 21.8 19.7 37.8L77.4 501.6a23.95 23.95 0 0 1-19.6 10.2l-33.4.1c-19.5 0-30.9-21.9-19.7-37.8l368-463.7C377.2 4 384.5.2 392.3.2z">
                  </path>
                </svg>
              </span> -->
            </div>
            <p>clients satisfaits</p>
          </div>

        </div>
      </div>
    </section>
  </div>
  <ProjectGallerie />
  <Testimonials />



  <Contact />
  <footer class="footer__section position-relative">
    <div class="container">
      <div class="newsletter-section" style="padding-top: 130px; padding-bottom: 65px; text-align: center">
        <div id="block-15" class="footer-top-widget widget_block">
          <h3 class="title subcribe-title wow fadeInDown" data-wow-delay="0.4s" style="
              visibility: visible;
              animation-delay: 0.4s;
              animation-name: fadeInDown;
              font-size: 24px;
              line-height: 120%;
              font-weight: 700;
            ">
            Abonnez-vous à notre infolettre et ne ratez aucun de nos bons plans exclusifs !
          </h3>
          <div class="wp-widget-group__inner-blocks">
            <p>
              <!-- <script>
                (function () {
                  window.mc4wp = window.mc4wp || {
                    listeners: [],
                    forms: {
                      on: function (evt, cb) {
                        window.mc4wp.listeners.push({
                          event: evt,
                          callback: cb,
                        });
                      },
                    },
                  };
                })();
              </script> -->
              <!-- Mailchimp for WordPress v4.9.12 - https://wordpress.org/plugins/mailchimp-for-wp/ -->
            </p>
            <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-227" method="post" data-id="227"
              data-name="subscription">
              <div class="mc4wp-form-fields">
                <label class="fz-16 title fw-700 prafont" style="padding-right: 10px;">Entre Ton Email</label>
                <input type="email" name="EMAIL" required="" style="
                        width: 100%;
                        max-width: 500px;
                        border: 1px solid rgba(0, 0, 0, 0.09);
                        color: var(--pra);
                        padding: 13px 16px;
                        margin-bottom: 10px;
                        border-bottom-left-radius: 0px;
                        border-top-left-radius: 0px;
                        border-bottom-left-radius: 25px;
                        border-top-left-radius: 25px;
                  " />
                <input class="cmn--btn" type="submit" value="Decouvrir Nos Offers" style="
                    padding: 13px 28px 15px;
                    color: white;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px;
                    display: inline-block;
                    position: relative;
                    background: #30c7b5;
                    overflow: hidden;
                    border-radius: 100px;
                    transition: all 0.5s;
                    border: unset;
                    margin-top: 10px;
                    border-bottom-left-radius: 0px;
                    border-top-left-radius: 0px;
                  " />
              </div>
              <label style="display: none !important">Leave this field empty if you're human:
                <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input
                type="hidden" name="_mc4wp_timestamp" value="1715706989" /><input type="hidden" name="_mc4wp_form_id"
                value="227" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
              <div class="mc4wp-response"></div>
            </form>
            <!-- / Mailchimp for WordPress Plugin -->
            <p></p>
          </div>
        </div>
      </div>
      <div class="footer__top pb-120" style="border-top: 1px solid rgba(0, 0, 0, 0.09); padding-top: 60px">
        <div class="row g-4" style="margin-bottom: 30px">
          <div class="col-xl-4 col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-duration="2.1s" style="
              visibility: visible;
              animation-duration: 2.1s;
              animation-name: fadeInUp;
            ">
            <div class="footer__item" style="margin-bottom: 24px; display: block">
              <a href="https://www.4damstheme.com/clenis/" class="footer-logo"
                style="margin-bottom: 24px; display: block">
                <img src="../../assets/img/H-Logo.png" alt="Clenis" />
              </a>
              <div class="footer prag" style="
                  color: #748aa0;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 28px;
                  margin-bottom: 50px;
                  max-width: 325px;
                  margin-top: 40px;
                ">
                Avec une histoire riche s'étendant sur des décennies, notre club est devenu un symbole d'excellence dans
                la communauté du golf. Il propose un gameplay stimulant mais gratifiant.
              </div>
              <ul class="footer-social d-flex align-items-center" style="gap: 24px">
                <li style="list-style: none">
                  <a href="" style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    ">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"></path>
                    </svg>
                  </a>
                </li>
                <li style="list-style: none">
                  <a href="" style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    ">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.8571 0H6.85714C3.49714 0 0.857143 2.64 0.857143 6V18C0.857143 21.36 3.49714 24 6.85714 24H18.8571C22.2171 24 24.8571 21.36 24.8571 18V6C24.8571 2.64 22.2171 0 18.8571 0ZM22.4571 18C22.4571 20.04 20.8971 21.6 18.8571 21.6H6.85714C4.81714 21.6 3.25714 20.04 3.25714 18V6C3.25714 3.96 4.81714 2.4 6.85714 2.4H18.8571C20.8971 2.4 22.4571 3.96 22.4571 6V18Z"
                        fill="#30c7b5"></path>
                      <path
                        d="M12.8571 6C9.49714 6 6.85714 8.64 6.85714 12C6.85714 15.36 9.49714 18 12.8571 18C16.2171 18 18.8571 15.36 18.8571 12C18.8571 8.64 16.2171 6 12.8571 6ZM12.8571 15.6C10.8171 15.6 9.25714 14.04 9.25714 12C9.25714 9.96 10.8171 8.4 12.8571 8.4C14.8971 8.4 16.4571 9.96 16.4571 12C16.4571 14.04 14.8971 15.6 12.8571 15.6Z"
                        fill="#30c7b5"></path>
                      <path
                        d="M18.8566 7.1998C19.5194 7.1998 20.0566 6.66255 20.0566 5.9998C20.0566 5.33706 19.5194 4.7998 18.8566 4.7998C18.1939 4.7998 17.6566 5.33706 17.6566 5.9998C17.6566 6.66255 18.1939 7.1998 18.8566 7.1998Z"
                        fill="#30c7b5"></path>
                    </svg>
                  </a>
                </li>
                <li style="list-style: none">
                  <a href="" style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    ">
                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.9178 0.25H21.2258L13.9988 8.51L22.5008 19.75H15.8438L10.6298 12.933L4.66383 19.75H1.35383L9.08383 10.915L0.927826 0.25H7.75383L12.4668 6.481L17.9178 0.25ZM16.7568 17.77H18.5898L6.75783 2.126H4.79083L16.7568 17.77Z"
                        fill="#30c7b5"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="2.3s" style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            ">
            <div id="block-16" class="widget-footer widget_block footer__item">
              <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                Liens rapides
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li>
                    <a href="/pages/about">A propos</a>
                  </li>

                  <li>
                    <a href="/pages/contact">Contact Nous</a>
                  </li>


                  <li>
                    <a href="/pages/service-menage">Services</a>
                  </li>


                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="2.3s" style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            ">
            <div id="block-17" class="widget-footer widget_block footer__item">
              <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                Services
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li>
                    <a href="/pages/reservation">Menage</a>
                  </li>

                  <li>
                    <a href="/pages/reservation-buandrie">buanderie</a>
                  </li>

                  <li>
                    <a href="/pages/menage-commercial">Menage commercial</a>
                  </li>


                </ul>
              </div>
            </div>
          </div>

          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="2.3s" style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            ">
            <div id="block-19" class="widget-footer widget_block footer__item">
              <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                Coordonnées
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li style="margin-bottom: 24px">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.84091 12.25L0.5 14.875V1C0.5 0.58579 0.83579 0.25 1.25 0.25H14.75C15.1642 0.25 15.5 0.58579 15.5 1V11.5C15.5 11.9142 15.1642 12.25 14.75 12.25H3.84091ZM3.32211 10.75H14V1.75H2V11.7888L3.32211 10.75ZM7.25 5.5H8.75V7H7.25V5.5ZM4.25 5.5H5.75V7H4.25V5.5ZM10.25 5.5H11.75V7H10.25V5.5Z"
                        fill="#30c7b5"></path>
                    </svg>
                    <a href="mailto:info@hygeco.ca" style="
                        transition: all 0.4s;
                        font-size: 16px;
                        font-weight: 400;
                        color: #748aa0;
                      ">
                      info@hygeco.ca
                    </a>
                  </li>
                  <li style="margin-bottom: 24px">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.02417 6.01158C5.7265 7.2466 6.7534 8.2735 7.98842 8.9758L8.6518 8.04708C8.87238 7.73838 9.2887 7.64297 9.6217 7.82485C10.6768 8.40123 11.8428 8.75148 13.0592 8.84778C13.4492 8.87868 13.75 9.20417 13.75 9.59545V12.9426C13.75 13.3271 13.4591 13.6493 13.0766 13.6886C12.6792 13.7295 12.2783 13.75 11.875 13.75C5.45469 13.75 0.25 8.5453 0.25 2.125C0.25 1.7217 0.270565 1.32078 0.311418 0.92332C0.350725 0.540812 0.672955 0.25 1.05749 0.25H4.40456C4.79583 0.25 5.12135 0.55078 5.15222 0.940817C5.2485 2.15716 5.59877 3.32323 6.17515 4.37833C6.35703 4.7113 6.26162 5.12766 5.95292 5.34818L5.02417 6.01158ZM3.13319 5.5189L4.55815 4.50107C4.1541 3.62885 3.87721 2.70387 3.73545 1.75H1.7568C1.75227 1.87474 1.75 1.99975 1.75 2.125C1.75 7.71685 6.28315 12.25 11.875 12.25C12.0002 12.25 12.1253 12.2478 12.25 12.2432V10.2645C11.2962 10.1228 10.3712 9.84587 9.49892 9.44185L8.4811 10.8668C8.06935 10.7069 7.6717 10.5186 7.29055 10.3046L7.24697 10.2797C5.77728 9.44402 4.55601 8.22272 3.72025 6.75303L3.69545 6.70945C3.48137 6.3283 3.29316 5.93065 3.13319 5.5189Z"
                        fill="#30c7b5"></path>
                    </svg>
                    <span style="
                        color: #748aa0;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      ">
                      +1 514-939-2020
                    </span>
                  </li>

                  <li style="margin-bottom: 24px">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.75 0.75V2.25H10.25V0.75H11.75V2.25H14.75C15.1642 2.25 15.5 2.58579 15.5 3V15C15.5 15.4142 15.1642 15.75 14.75 15.75H1.25C0.83579 15.75 0.5 15.4142 0.5 15V3C0.5 2.58579 0.83579 2.25 1.25 2.25H4.25V0.75H5.75ZM14 8.25H2V14.25H14V8.25ZM4.25 3.75H2V6.75H14V3.75H11.75V5.25H10.25V3.75H5.75V5.25H4.25V3.75Z"
                        fill="#30c7b5"></path>
                    </svg>
                    <span style="
                        color: #748aa0;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      ">
                      Lun - Ven 12:00 - 18:00
                    </span>
                  </li>
                  <li style="margin-bottom: 24px">
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 14.6746L10.7123 10.9623C12.7625 8.91208 12.7625 5.58794 10.7123 3.53769C8.66208 1.48744 5.33794 1.48744 3.28769 3.53769C1.23744 5.58794 1.23744 8.91208 3.28769 10.9623L7 14.6746ZM7 16.7959L2.22703 12.023C-0.40901 9.3869 -0.40901 5.11307 2.22703 2.47703C4.86307 -0.15901 9.1369 -0.15901 11.773 2.47703C14.409 5.11307 14.409 9.3869 11.773 12.023L7 16.7959ZM7 8.75C7.82845 8.75 8.5 8.07845 8.5 7.25C8.5 6.42157 7.82845 5.75 7 5.75C6.17155 5.75 5.5 6.42157 5.5 7.25C5.5 8.07845 6.17155 8.75 7 8.75ZM7 10.25C5.34314 10.25 4 8.90683 4 7.25C4 5.59314 5.34314 4.25 7 4.25C8.65683 4.25 10 5.59314 10 7.25C10 8.90683 8.65683 10.25 7 10.25Z"
                        fill="#30c7b5"></path>
                    </svg>
                    <span style="
                        color: #748aa0;
                        font-size: 15px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      ">
                      4260 Notre Dame,Ouest
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom" style="background: #30c7b5">
      <p style="
          padding: 25px 5px;
          color: #748aa0;
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
          text-transform: capitalize;
          margin: 0;
        ">
        © Hygeco All Rights Reserved Developed By GcsHolding
      </p>
    </div>
    <img src="https://www.4damstheme.com/clenis/wp-content/themes/clenis/assets/images/footer/footer-spra.png"
      alt="Footer backgound image" class="footer-spara" style="position: absolute; right: 60px; bottom: 220px" />
    <img src="https://www.4damstheme.com/clenis/wp-content/themes/clenis/assets/images/icon/working-ball.png"
      alt="Footer backgound image" class="footer-working" style="
        position: absolute;
        bottom: 420px;
        left: 60px;
        animation: updown 2s linear infinite;
      " />
  </footer>
  <!-- <app-footer /> -->
</template>
<style scoped>
#contactForm {
  width: 100%;
}

#contactForm .form-control {
  width: 100%;
}

.choose-section1::before {
  position: absolute;
  top: -200px;
  right: -200px;
  width: 800px;
  height: 800px;
  content: "";
  border-radius: 795px;
  background: none;
  filter: blur(350px);
}

.choose-section1::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 490px;
  height: 490px;
  content: "";
  border-radius: 484px;
  background: none;
  filter: blur(350px);
}

.choose-wrapper {
  position: relative;
  z-index: 1;
}

.choose-wrapper .ripple {
  position: absolute;
  top: 150px;
  left: 260px;
  animation: updown 2s linear infinite;
}

@media (max-width: 991px) {
  .choose-wrapper .ripple {
    display: none;
  }
}

.choose-wrapper .ripple-ps {
  position: absolute;
  top: 80px;
  right: 150px;
}

@media (max-width: 1399px) {
  .choose-wrapper .ripple-ps {
    display: none;
  }
}

@keyframes updown {
  50% {
    transform: translateY(-14px);
  }
}

.choose-left-cont .thumb1 {
  width: 100%;
}

.choose-left-cont .thumb1 img {
  border-radius: 10px;
  width: 100%;
}

@media (max-width: 991px) {
  .choose-left-cont .thumb1 {
    display: none;
  }
}

.prograss-box {
  border-radius: 10px;
  background: #fff;
  padding: 24px 24px;
  display: flex;
  align-items: center;
  gap: 11px;
  margin-left: 23px;
  margin-top: 38px;
  z-index: 2;
  position: relative;
}

.prograss-box .content {
  width: calc(100% - 104px);
}

.prograss-box .content h3 {
  margin-bottom: 14px;
}

.prograss-box .content p {
  font-size: 16px;
  color: var(--pra);
  margin-bottom: 0;
}

.prograss-box .icons {
  position: relative;
  display: block;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: var(--base);
  padding: 0px 4px 0 0;
}

.prograss-box .icons .texts {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  display: block;
  color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 575px) {
  .prograss-box {
    padding: 18px 10px;
    margin-left: 0;
    margin-top: 20px;
  }

  .prograss-box .content h3 {
    margin-bottom: 8px;
  }
}

.choose-content-right .cmn-section-title {
  margin-bottom: 35px;
}

@media (max-width: 1399px) {
  .choose-content-right .cmn-section-title {
    padding-left: 20px;
  }
}

@media (max-width: 991px) {
  .choose-content-right .cmn-section-title {
    padding-left: 4px;
  }
}

.choose-content-right .adjust-first-item {
  margin-bottom: 45px;
}

.choose-content-right .adjust-content {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.choose-content-right .adjust-content .adjust-content-info {
  max-width: 400px;
}

.choose-content-right .adjust-content .thumb-ad {
  max-width: 421px;
  height: 449px;
  margin-left: -140px;
}

.choose-content-right .adjust-content .thumb-ad img {
  width: 100%;
  height: 100%;
}

@media (max-width: 1199px) {
  .choose-content-right .adjust-content .thumb-ad {
    height: auto;
  }

  .choose-content-right .adjust-content .thumb-ad img {
    height: auto;
  }
}

.choose-content-right .adjust-content .adjust-item {
  display: flex;
  gap: 28px;
}

.choose-content-right .adjust-content .adjust-item .conts h3 {
  margin-bottom: 10px;
}

.choose-content-right .adjust-content .adjust-item .conts p {
  margin: 0;
}

@media (max-width: 991px) {
  .choose-content-right .adjust-content .thumb-ad {
    margin-left: 4px;
  }
}

.choose-content-right .btn-custom-space {
  margin-top: 40px;
}

@media (max-width: 991px) {
  .choose-content-right .adjust-first-item {
    margin-bottom: 24px;
  }

  .choose-content-right .btn-custom-space {
    margin-top: 24px;
  }
}

@media (max-width: 767px) {
  .choose-content-right .adjust-content {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
  }

  .choose-content-right .adjust-content .thumb-ad {
    max-width: 100%;
    width: 100% !important;
    height: 100%;
  }

  .choose-content-right .adjust-content .thumb-ad img {
    width: 100% !important;
    height: 100%;
  }

  .choose-content-right .adjust-content .adjust-content-info {
    max-width: 100%;
  }
}

.marquee-wrapper {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  z-index: 1;
}

.text-slider {
  padding: 10px 0;
  height: 90px;
}

@media (max-width: 767px) {
  .text-slider {
    padding: 0px 0;
    height: 65px;
  }
}

.marquee-inner.to-left {
  animation: marqueeLeft 25s linear infinite;
}

.marquee-inner.to-right {
  animation: marqueeRight 25s linear infinite;
}

.marquee-inner {
  position: absolute;
  display: inline-flex;
  width: 200%;
}

.marquee-item {
  display: flex;
  align-items: center;
  float: left;
  transition: animation 0.2s ease-out;
}

.marquee-item img {
  width: 36px;
}

@keyframes marqueeLeft {
  0% {
    left: 0;
  }

  100% {
    left: -100%;
  }
}

.sotrk-t {
  font-family: "Geologica Cursive";
  font-size: 50px;
  font-weight: 800;
  line-height: 62px;
  color: rgba(3, 43, 82, 0.35);
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(3, 43, 82, 0.35);
  background: transparent;
}

@media (max-width: 767px) {
  .sotrk-t {
    font-size: 36px;
  }
}

.stroke-thumb {
  padding: 0 16px 0;
  margin-top: 7px;
}

.counter-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.counter-wrapper .vline {
  border-width: 1px;
  border: 1px solid rgba(3, 43, 82, 0.17);
  height: 100px;
}

@media (max-width: 767px) {
  .counter-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 100px;
  }

  .counter-wrapper .vline {
    display: none;
  }

  .counter-wrapper .cont {
    justify-content: center;
    margin-bottom: 0 !important;
  }

  .counter-wrapper .cont span {
    font-size: 36px !important;
  }
}

@media (max-width: 500px) {
  .counter-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 30px;
  }

  .counter-wrapper .vline {
    display: none;
  }
}

.counter__items .cont {
  margin-bottom: 10px;
}

.counter__items .cont span {
  font-size: 50px;
  font-weight: 800;
  color: #032b52;
  line-height: 64px;
}

.plus__icon svg {
  width: 30px;
  height: 30px;
}

.plus__icon svg {
  fill: #032b52;
}

.counter__items p {
  font-size: 16px;
  color: rgba(3, 43, 82, 0.7);
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
}

.counter-wrapper {
  border-radius: 60px;
  background: #30c7b5;
  padding: 80px 80px;
}

.howit-worksection {
  position: relative;
  overflow: hidden;
}

.howit-worksection::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  border-radius: 484px;
  background: #30c7b5;
  filter: blur(350px);
  width: 490px;
  height: 490px;
}

.work-wrapper1 {
  position: relative;
  padding-top: 80px;
}

.work-wrapper1::before {
  position: absolute;
  width: 100%;
  height: 280px;
  content: "";
  top: 61px;
  left: 0;
  background: #30c7b5;
  z-index: 0;
  border-radius: 60px;
}

@media (max-width: 1399px) {
  .work-wrapper1 {
    padding-top: 60px;
  }

  .work-wrapper1::before {
    height: 290px;
  }
}

@media (max-width: 1199px) {
  .work-wrapper1 {
    padding-top: 20px;
  }

  .work-wrapper1::before {
    height: 230px;
  }
}

.work-thumb {
  position: relative;
  width: 100%;
  max-width: 613px;
  margin: 0 auto;
}

.work-thumb img {
  width: 100%;
  border-radius: 60px;
}

@media (max-width: 1199px) {
  .work-thumb {
    padding-left: 20px;
  }
}

@media (max-width: 991px) {
  .work-thumb {
    padding-right: 20px;
  }
}

.howwork-content {
  position: relative;
}

.howwork-content .cmn-section-title {
  margin-bottom: 90px;
}

.howwork-content .cmn-section-title p {
  color: rgba(255, 255, 255, 0.75) !important;
}

.howwork-content .howit-work-info .howit-item h3 {
  margin-bottom: 12px;
}

.howwork-content .howit-work-info .howit-item:not(:last-child) {
  margin-bottom: 40px;
}

@media (max-width: 1399px) {
  .howwork-content .cmn-section-title {
    margin-bottom: 60px;
  }

  .howwork-content .cmn-section-title h2 {
    margin-bottom: 14px;
  }

  .howwork-content .howit-work-info .howit-item:not(:last-child) {
    margin-bottom: 30px;
  }
}

@media (max-width: 1199px) {
  .howwork-content .cmn-section-title {
    margin-bottom: 50px;
  }

  .howwork-content .cmn-section-title h2 {
    margin-bottom: 14px;
  }

  .howwork-content .howit-work-info .howit-item:not(:last-child) {
    margin-bottom: 16px;
  }
}

@media (max-width: 991px) {
  .howwork-content {
    text-align: center;
    margin: 0 auto;
  }

  .howwork-content .howit-work-info {
    text-align: center;
    margin: 0 auto;
  }

  .howwork-content .howit-work-info .howit-item:not(:last-child) {
    margin-bottom: 22px;
  }

  .howwork-content .howit-work-info .howit-item h3 {
    justify-content: center;
    display: grid !important;
  }

  .howwork-content .cmn-section-title {
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .howwork-content .cmn-section-title .cmn-alt1 {
    background: var(--subtitle);
  }

  .howwork-content .cmn-section-title .cmn-alt1 span {
    color: #000;
  }

  .howwork-content .cmn-section-title h2 {
    margin-bottom: 14px;
    color: var(--title) !important;
  }

  .howwork-content .cmn-section-title p {
    color: var(--pra) !important;
  }
}

.options {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  max-width: 100%;
  height: 550px;
}

.options .option {
  position: relative;
  overflow: hidden;
  min-width: 200px;
  margin: 10px;
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.options .option:nth-child(1) {
  --defaultBackground: #ff8000;
}

.options .option.active {
  flex-grow: 10000;
  transform: scale(1);
  border-radius: 5px;
  background-size: auto 100%;
}

.options .option.active .shadow {
  box-shadow:
    inset 0 -120px 120px -120px black,
    inset 0 -120px 120px -100px black;
}

.options .option.active .label {
  bottom: 20px;
  left: 20px;
}

.options .option.active .label .info>div {
  left: 0px;
  opacity: 1;
}

.options .option:not(.active) {
  flex-grow: 1;
  border-radius: 5px;
}

.bg-yellow-button {
  background-color: #30c7b5;
  /* Yellow color */
  color: #333;
  /* Dark text color */
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
  /* Smooth transition */
}

/* Hover effect for button */
.bg-yellow-button:hover {
  background-color: #fff;
  /* White background color */
  color: #30c7b5;
  /* Yellow text color */
}

.options .option:not(.active) .shadow {
  bottom: -40px;
  box-shadow:
    inset 0 -120px 0px -120px black,
    inset 0 -120px 0px -100px black;
}

.options .option:not(.active) .label {
  bottom: 10px;
  left: 10px;
}

.options .option:not(.active) .label .info>div {
  left: 20px;
  opacity: 0;
}

.options .option:not(.active) .label .icon-custom {
  display: flex !important;
}

.options .option:not(.active) .label .info {
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s;
}

.options .option .shadow {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 120px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.options .option .label {
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: 0px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.options .option .label .icon-custom {
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 87px;
  max-width: 87px;
  height: 250px;
  border-radius: 0px 10px;
  background: #f0f8ff;
}

.options .option .label .icon-custom h3 {
  transform: rotate(-90deg);
  color: var(--title);
  min-width: 187px;
}

.options .option .label .info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  color: white;
  gap: 30px;
  background: var(--base);
  border-radius: 5px;
  padding: 35px 35px;
  opacity: 1;
  visibility: visible;
  transition: all 0.4s;
  height: 116px;
}

.options .option .label .info i {
  font-size: 24px;
  color: var(--subtitle);
}

.options .option .label .info .main {
  font-weight: bold;
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
}

.options .option .label .info .sub {
  transition-delay: 0.1s;
  font-size: 16px;
  font-weight: 400;
  color: var(--subtitle);
}

@media (max-width: 1199px) {
  .options {
    display: flex;
    height: 450px;
  }

  .options .option {
    min-width: 80px;
    margin: 10px;
  }

  .options .option.active .label {
    bottom: 10px;
    left: 10px;
  }

  .options .option.active .label .info>div {
    left: 0px;
    opacity: 1;
  }

  .options .option:not(.active) .label {
    bottom: 10px;
    left: 10px;
  }

  .options .option:not(.active) .label .info>div {
    left: 20px;
    opacity: 0;
  }

  .options .option:not(.active) .label .icon-custom {
    display: flex !important;
  }

  .options .option:not(.active) .label .info {
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
  }

  .options .option .shadow {
    height: 120px;
  }

  .options .option .label .icon-custom {
    min-width: 30px;
    max-width: 30px;
    height: 170px;
  }

  .options .option .label .icon-custom h3 {
    min-width: 140px;
    font-size: 16px;
  }

  .options .option .label .info {
    display: grid;
    justify-content: center;
    gap: 8px;
    padding: 18px 20px;
    height: 116px;
  }

  .options .option .label .info i {
    font-size: 18px;
  }

  .options .option .label .info .main {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .options .option .label .info .sub {
    transition-delay: 0.1s;
    font-size: 14px;
    font-weight: 400;
  }
}

@media (max-width: 1199px) and (max-width: 575px) {
  .options .option:nth-child(1) {
    display: none;
  }
}

@media (max-width: 575px) {
  .options {
    display: grid;
    flex-wrap: wrap;
    height: 1300px;
  }

  .options .option {
    min-height: 400px;
  }
}

.follower-tung {
  position: absolute;
  bottom: 0;
  right: -40px;
}

@media (max-width: 1399px) {
  .follower-tung {
    display: none;
  }
}

.project-made-section {
  background: #f0f8ff;
}

.project-made-item .info {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 30px;
  background: var(--base);
  border-radius: 5px;
  padding: 35px 35px;
  opacity: 1;
  visibility: visible;
  transition: all 0.4s;
  height: 116px;
}

.project-made-item .info i {
  font-size: 24px;
  color: var(--subtitle);
}

.project-made-item .info .main {
  font-weight: bold;
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
}

.project-made-item .info .sub {
  transition-delay: 0.1s;
  font-size: 16px;
  font-weight: 400;
  color: var(--subtitle);
}

.custom-project-slidewrap .swiper-slide {
  transition: all 0.4s;
  width: 100%;
}

.custom-project-slidewrap .swiper-slide .info {
  opacity: 0;
}

.custom-project-slidewrap .swiper-slide img {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  height: 462px;
  object-fit: cover;
}

.custom-project-slidewrap .swiper-slide-duplicate-active img,
.custom-project-slidewrap .swiper-slide.swiper-slide-active img {
  border-radius: 10px;
}

@media (min-width: 992px) {

  .custom-project-slidewrap .swiper-slide-duplicate-active,
  .custom-project-slidewrap .swiper-slide.swiper-slide-active {
    width: 638px !important;
  }
}

.custom-project-slidewrap .swiper-slide-duplicate-active .info,
.custom-project-slidewrap .swiper-slide.swiper-slide-active .info {
  opacity: 1;
}

.project-custom-madewrap .project-made-item {
  overflow: hidden;
  border-radius: 10px;
}

.project-custom-madewrap .project-made-item .info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #f0f9fc;
}

.project-custom-madewrap .project-made-item .info i {
  color: var(--title) !important;
}

.project-custom-madewrap .project-made-item .info .cont .main {
  color: var(--title) !important;
}

.project-custom-madewrap .project-made-item .info .cont .sub {
  color: var(--base) !important;
}

@media (max-width: 1199px) {
  .project-custom-madewrap .project-made-item .info {
    padding: 10px 16px;
  }

  .project-custom-madewrap .project-made-item .info .cont .main {
    font-size: 18px;
  }
}

.project-custom-madewrap .custom-left-right2 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.project-custom-madewrap .custom-left-right2 .mcustom__next2 {
  margin-left: -20px;
}

.project-custom-madewrap .custom-left-right2 .mcustom__next2:hover {
  cursor: pointer;
}

.project-custom-madewrap .custom-left-right2 .mcustom__prev2 {
  margin-right: -20px;
}

.project-custom-madewrap .custom-left-right2:hover {
  cursor: pointer;
}

@media (max-width: 1399px) {
  .project-custom-madewrap .custom-left-right2 .mcustom__next2 {
    margin-left: 5px;
  }

  .project-custom-madewrap .custom-left-right2 .mcustom__next2:hover {
    cursor: pointer;
  }

  .project-custom-madewrap .custom-left-right2 .mcustom__prev2 {
    margin-right: 5px;
  }
}

.main-project-madeitem {
  position: relative;
}

.main-project-madeitem .thumb {
  width: 100%;
}

.main-project-madeitem .thumb img {
  width: 100%;
  border-radius: 5px;
}

.main-project-madeitem .info {
  max-width: 364px;
  background: var(--white);
  position: absolute;
  bottom: 0px;
  left: 0px;
  transition: all 0.4s;
  visibility: hidden;
  opacity: 0;
}

.main-project-madeitem .info .cont .main {
  font-size: 18px;
  color: var(--title);
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

.main-project-madeitem .info .cont .sub {
  color: var(--base);
}

.main-project-madeitem .info i {
  color: var(--title);
}

.main-project-madeitem:hover .info {
  bottom: 30px;
  left: 30px;
  visibility: visible;
  opacity: 1;
}

@media (max-width: 1399px) {
  .main-project-madeitem .info {
    padding: 10px 10px;
  }

  .main-project-madeitem .info .cont .main {
    font-size: 18px;
  }

  .main-project-madeitem:hover .info {
    bottom: 10px;
    left: 10px;
    visibility: visible;
    opacity: 1;
  }
}

.made-smallitem .info {
  max-width: 290px;
  padding: 35px 24px;
}

.made-smallitem .info .cont .main {
  font-size: 18px;
}

.made-smallitem:hover .info {
  left: 10px;
  bottom: 10px;
}

@media (max-width: 1399px) {
  .made-smallitem .info {
    padding: 18px 18px;
  }
}

@media (max-width: 1199px) {
  .made-smallitem .info {
    max-width: 200px !important;
  }
}

.project-big {
  width: 100%;
  margin-bottom: 40px;
}

.project-big img {
  width: 100%;
  border-radius: 60px;
}

@media (max-width: 1399px) {
  .project-big {
    margin-bottom: 20px;
  }
}

.project-details-info .cmn-box-cont1 {
  margin-top: 0;
  border-bottom: unset;
  padding-bottom: 0;
  margin-bottom: 0;
}

.project-details-vidwrap {
  display: flex;
  align-items: center;
  gap: 34px;
  margin-top: 39px;
  margin-bottom: 39px;
}

.project-details-vidwrap .thumb {
  border-radius: 60px;
}

.project-details-vidwrap .thumb img {
  border-radius: 60px;
}

.project-details-vidwrap .thumb .provid {
  width: 86px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--subtitle);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.project-details-vidwrap .thumb .provid i {
  font-size: 36px;
  color: var(--title);
}

.project-details-vidwrap .content h3 {
  margin-bottom: 10px;
}

.project-details-vidwrap .content .por-cont-list {
  margin-top: 20px;
}

.project-details-vidwrap .content .por-cont-list li {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: var(--pra);
}

.project-details-vidwrap .content .por-cont-list li:not(:last-child) {
  margin-bottom: 16px;
}

@media (max-width: 767px) {
  .project-details-vidwrap {
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 28px;
  }

  .project-details-vidwrap .content h3 {
    margin-bottom: 10px;
  }

  .project-details-vidwrap .content .por-cont-list li:not(:last-child) {
    margin-bottom: 8px;
  }
}

.cmn-padding {
  padding: 45px 45px;
  border-radius: 10px;
  background: #f0f8ff;
}

@media (max-width: 1399px) {
  .cmn-padding {
    padding: 24px 20px;
  }
}

.callbox .call-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.callbox .call-item .icon {
  background: #30c7b5;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  transition: all 0.4s;
}

.callbox .call-item .icon svg {
  width: 24px;
  height: 24px;
}

.callbox .call-item .icon i {
  color: var(--title);
  transition: all 0.4s;
  font-size: 24px;
}

.callbox .call-item .cont .callsub {
  font-size: 16px;
  color: var(--pra);
  display: block;
  margin-bottom: 5px;
}

.callbox .call-item .cont span,
.callbox .call-item .cont a {
  font-size: 24px;
  color: var(--title);
  font-weight: 700;
  transition: all 0.4s;
}

.callbox .call-item:hover .icon {
  background: var(--base);
}

.callbox .call-item:hover .icon svg {
  fill: var(--white);
}

.callbox .call-item:hover .icon i {
  color: var(--white);
}

@media (max-width: 1199px) {
  .callbox .call-item {
    gap: 14px;
  }

  .callbox .call-item .icon {
    width: 48px;
    height: 48px;
  }

  .callbox .call-item .icon svg {
    width: 20px;
    height: 20px;
  }

  .callbox .call-item .icon i {
    font-size: 20px;
  }

  .callbox .call-item .cont a {
    font-size: 18px;
  }
}

.se-boxlist2 li {
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  padding-bottom: 20px;
}

.se-boxlist2 li .bold {
  font-size: 16px;
  font-weight: 700;
  color: var(--title);
}

.se-boxlist2 li .bold-m {
  font-size: 16px;
  font-weight: 400;
  color: var(--pra);
}

.se-boxlist2 li:not(:first-child) {
  padding-top: 20px;
}

.se-boxlist2 li:hover a {
  color: var(--base);
}

.cmn-padding {
  padding: 45px 45px;
  border-radius: 10px;
  background: #f0f8ff;
}

@media (max-width: 1399px) {
  .cmn-padding {
    padding: 24px 20px;
  }
}

.pt-cust23 {
  padding-top: 23px;
}

.project-social li a {
  background: rgba(2, 54, 166, 0.1);
  border: unset;
}

.project-social li a svg {
  width: 20px;
}

.project-social li a svg path {
  stroke: rgba(2, 54, 166, 0.5803921569);
  opacity: 58%;
}

.project-social li a:hover {
  background: var(--base);
}

.project-social li a:hover svg path {
  stroke: var(--white);
  opacity: 100%;
}

.details-pages .thumb {
  width: 100%;
  border-radius: 60px;
}

.details-pages .thumb img {
  width: 100%;
  border-radius: 60px;
}

.cmn-box-cont1 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  padding-bottom: 70px;
  margin-bottom: 34px;
  margin-top: 40px;
}

.cmn-box-cont1 h2 {
  margin-bottom: 20px;
}

.cmn-box-cont1 .text1 {
  margin-bottom: 34px;
}

.cmn-box-cont1 .text2 {
  margin-bottom: 25px;
}

.cmn-box-cont1 .con-checkbox {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.cmn-box-cont1 .con-checkbox li {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 15px 0px;
  width: 33.3333333333%;
}

.cmn-box-cont1 .con-checkbox li span {
  font-size: 18px;
  font-weight: 500;
  color: var(--title);
}

.cmn-box-cont1 .text3 {
  margin-top: 25px;
}

@media (max-width: 1399px) {
  .cmn-box-cont1 {
    padding-bottom: 30px;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .cmn-box-cont1 h2 {
    margin-bottom: 14px;
  }

  .cmn-box-cont1 .text1 {
    margin-bottom: 14px;
  }

  .cmn-box-cont1 .text2 {
    margin-bottom: 16px;
  }

  .cmn-box-cont1 .text3 {
    margin-top: 14px;
  }
}

@media (max-width: 1199px) {
  .cmn-box-cont1 {
    margin-top: 24px;
    padding-bottom: 24px;
  }

  .cmn-box-cont1 .con-checkbox {
    margin-bottom: 10px;
  }

  .cmn-box-cont1 .con-checkbox li {
    padding: 5px 0px;
    width: 50%;
  }

  .cmn-box-cont1 .con-checkbox li span {
    font-size: 16px;
    font-weight: 500;
  }
}

@media (max-width: 500px) {
  .cmn-box-cont1 {
    margin-top: 20px;
    padding-bottom: 20px;
  }

  .cmn-box-cont1 .con-checkbox {
    margin-bottom: 0px;
  }

  .cmn-box-cont1 .con-checkbox li {
    padding: 5px 0px;
    width: 100%;
  }
}

.cmn-box-cont2 h3 {
  margin-bottom: 16px;
}

.cmn-box-cont2 .fasi-text {
  margin-bottom: 22px;
}

.details-fasterwrap {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 50px;
}

.details-fasterwrap .faster-item img {
  width: 34px;
}

.details-fasterwrap .faster-item p {
  font-size: 16px;
  color: var(--pra);
  line-height: 28px;
  margin-top: 16px;
  max-width: 231px;
}

@media (max-width: 1199px) {
  .details-fasterwrap {
    gap: 24px 0px;
  }

  .details-fasterwrap .faster-item {
    padding-left: 10px;
    width: 50%;
  }

  .details-fasterwrap .faster-item p {
    margin-top: 10px;
  }
}

@media screen and (max-width: 400px) {
  .details-fasterwrap .faster-item {
    padding-left: 10px;
    width: 100%;
  }

  .details-fasterwrap .faster-item p {
    margin-top: 10px;
  }
}

.wman-thumb {
  width: 100%;
}

.wman-thumb img {
  width: 100%;
  border-radius: 8px;
}

.follower-section {
  position: relative;
  left: 30px;
  top: -151px;
}

.testimonail-items {
  border-radius: 10px;
  padding: 35px 35px 0;
  background: #fff;
  overflow: visible;
}

.testimonail-items p {
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  margin-bottom: 24px;
  font-weight: 16;
}

.testimonail-items .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.testimonail-items .content .degination .name {
  font-size: 18px;
  font-weight: 700;
  color: var(--title);
  margin-bottom: 9px;
  display: block;
}

.testimonail-items .content .degination .gra {
  font-size: 16px;
  color: var(--pra);
  display: block;
}

.testimonail-items .content .days {
  font-size: 16px;
  color: var(--pra);
}

.testimonail-items .ratting {
  margin-bottom: 22px;
}

.testimonail-items .ratting li i {
  font-size: 22px;
  color: #30c7b5;
}

.testimonail-items .quote-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(20px);
  margin-top: -20px;
}

.testimonail-items .quote-wrap .joh {
  width: 64px;
  height: 64px;
}

.testimonail-items .quote-wrap .joh img {
  border-radius: 50%;
}

.testimonail-items .quote-wrap .qicon {
  margin-bottom: -20px;
}

@media (max-width: 1399px) {
  .testimonail-items {
    padding: 25px 25px 0;
  }

  .testimonail-items p {
    padding-bottom: 18px;
    margin-bottom: 18px;
  }

  .testimonail-items .content {
    margin-bottom: 20px;
  }

  .testimonail-items .content .degination .name {
    margin-bottom: 4px;
  }

  .testimonail-items .ratting {
    margin-bottom: 18px;
  }
}

.testimonail-itemsv2 {
  max-width: 850px;
  margin: 0 auto;
}

.testimonail-itemsv2 .ratting {
  margin-bottom: 22px;
}

.testimonail-itemsv2 .ratting li i {
  font-size: 22px;
  color: #30c7b5;
}

.testimonail-itemsv2 p {
  color: #032b52;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 60px;
}

.testimonail-itemsv2 .quote-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 630px;
  margin: 0 auto;
}

.testimonail-itemsv2 .quote-wrap .joh {
  width: 64px;
  height: 64px;
}

.testimonail-itemsv2 .quote-wrap .joh img {
  border-radius: 50%;
}

.testimonail-itemsv2 .quote-wrap .qicon {
  margin-bottom: -20px;
}

.testimonail-itemsv2 .degination .name {
  font-size: 18px;
  font-weight: 700;
  color: var(--title);
  margin-bottom: 2px;
  display: block;
}

.testimonail-itemsv2 .degination .gra {
  font-size: 16px;
  color: var(--pra);
  display: block;
}

.testimonail-itemsv2 .man-designation {
  gap: 24px;
}

@media (max-width: 767px) {
  .testimonail-itemsv2 p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 40px;
  }
}

@media (max-width: 575px) {
  .testimonail-itemsv2 p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 20px;
  }
}

.cleaning-thumbing {
  width: 100%;
  margin-bottom: -400px;
}

.cleaning-thumbing img {
  width: 100%;
}

@media (max-width: 1199px) {
  .cleaning-thumbing {
    margin-bottom: 30px;
  }
}

.cmn-section-title h2 {
  font-size: 51px;
}

.cleaning-quote-content .cleaning-info {
  margin-top: 110px;
}

@media (max-width: 1199px) {
  .cleaning-quote-content .cleaning-info {
    margin-top: 60px;
  }

  .cleaning-quote-content .cmn-section-title h2 {
    color: var(--title) !important;
  }
}

@media (max-width: 991px) {
  .cleaning-quote-content .cleaning-info {
    margin-top: 34px;
  }
}

.cleaning-info-item .c-info-icon {
  gap: 6px;
  margin-bottom: 20px;
}

.cleaning-info-item .c-info-icon span {
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  color: #748aa0;
}

.cleaning-info-item .c-info-icon svg {
  width: 20px;
  height: 20px;
}

.cleaning-info-item .c-info-icon svg {
  fill: #30c7b5;
}

.cleaning-info-item:not(:last-child) {
  margin-bottom: 50px;
}

@media (max-width: 1199px) {
  .cleaning-info-item:not(:last-child) {
    margin-bottom: 30px;
  }

  .cleaning-info-item .c-info-icon {
    margin-bottom: 10px !important;
  }
}

@media (max-width: 991px) {
  .cleaning-info-item h3 {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
  }

  .cleaning-info-item:not(:last-child) {
    margin-bottom: 20px;
  }

  .cleaning-info-item .c-info-icon {
    margin-bottom: 10px !important;
  }
}

.cleaning-form {
  border-radius: 60px;
  background: #30c7b5;
  padding: 60px 60px;
}

@media (max-width: 991px) {
  .cleaning-form {
    padding: 36px 20px;
  }
}

.clean-form-grp label {
  font-size: 16px;
  font-family: "DM Sans", sans-serif;
  color: rgba(255, 255, 255, 0.77);
  font-weight: 700;
  display: block;
  margin-bottom: -13px;
}

.clean-form-grp textarea,
.clean-form-grp input[type="email"],
.clean-form-grp input[type="text"] {
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  color: rgba(255, 255, 255, 0.55);
  padding: 16px 23px;
  background: transparent;
  width: 100%;
}

.clean-form-grp ::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.clean-form-grp input[type="submit"] {
  border: unset;
  color: #032b52;
}

.wpcf7 form .wpcf7-response-output {
  color: #30c7b5;
}

.clean-form-grp textarea {
  height: 170px;
}

.clean-form-grp p {
  margin-bottom: 0px;
}

.working-customwrap {
  display: flex;
  align-items: center;
  position: relative;
  gap: 14px;
}

.working-customwrap .working-itemv2 {
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
}

.working-customwrap .working-itemv2 .seri {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 24px;
  font-weight: 500;
  background: var(--base);
  margin: 0 auto 30px;
}

.working-customwrap .working-itemv2 h3 {
  margin-bottom: 18px;
}

.working-customwrap .working-itemv2 p {
  color: var(--pra);
}

.working-customwrap .work-line {
  border: 1px solid rgba(0, 0, 0, 0.09);
  height: 256px;
  border-width: 1;
}

.working-customwrap .waroow-rotate1 {
  position: absolute;
  left: 320px;
  top: 10px;
}

.working-customwrap .waroow-rotate2 {
  position: absolute;
  right: 340px;
  top: 10px;
}

@media (max-width: 1199px) {

  .working-customwrap .waroow-rotate1,
  .working-customwrap .waroow-rotate2 {
    display: none;
  }

  .working-customwrap .working-itemv2 {
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
  }

  .working-customwrap .working-itemv2 .seri {
    width: 50px;
    height: 50px;
    font-size: 14px;
    margin: 0 auto 10px;
  }

  .working-customwrap .working-itemv2 h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .working-customwrap .working-itemv2 p {
    color: var(--pra);
  }
}

@media (max-width: 991px) {
  .working-customwrap {
    flex-wrap: wrap;
  }

  .working-customwrap .work-line {
    display: none;
  }
}

.bn2-worball {
  position: absolute;
  bottom: 10%;
  right: 0;
}

.cleaning-shape2 {
  position: absolute;
  top: 130px;
  right: 20%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cleaning-quote {
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

.step {
  margin-left: 1rem;
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.step:hover {
  transform: translateY(-10px);
}

.icon {
  font-size: 48px;
  color: #30c7b5;
  margin-bottom: 20px;
}

.step h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.step p {
  font-size: 1em;
  color: #666;
}

@media (max-width: 768px) {
  .process-steps {
    flex-direction: column;
  }

  .step {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }
}

.testimonials {
  background: url("https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/testimonail/testi-bg.png") center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 32px 0 59px;
  color: #ffffff;
  position: relative;
  margin-bottom: 90px;
}

.testimonials:before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  left: 0;
}

.testimonials .heading h2 {
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
}

.testimonials .heading h2 span {
  color: #30c7b5;
}

.testimonials p {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: #d1e5e7;
  margin: 20px 0;
  padding: 0;
}

/* Image */
.testimonials .carousel-inner .carousel-item .team {
  width: 100px;
  height: 100px;
  border: 2px solid #30c7b5;
  border-radius: 100%;
  padding: 5px;
  margin: 50px 0 15px;
}

.testimonials .carousel-inner .carousel-item h3 {
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
}

.testimonials .carousel-inner .carousel-item h4 {
  font-size: 14px;
  font-weight: 300;
  color: #e2e1e1;
  margin-bottom: 20px;
}

.testimonials .carousel-indicators {
  bottom: -30px;
}

.testimonials .carousel-indicators li {
  background-color: #b8b7b7;
  border-radius: 30px;
  height: 4px;
  width: 40px;
}

.testimonials .carousel-indicators .active {
  background-color: #30c7b5;
}

.testimonials .control span {
  cursor: pointer;
}

.testimonials .icon {
  height: 40px;
  width: 40px;
  background-size: 100%, 100%;
  border-radius: 50%;
  font-size: 30px;
  background-image: none;
  color: #ffffff;
}

.heading {
  position: relative;
}

:root {
  --clip-size: 1.5rem;
  --clip-bottom-right: polygon(0 0,
      100% 0,
      100% calc(100% - var(--clip-size)),
      calc(100% - var(--clip-size)) 100%,
      0% 100%,
      0 0);
  --clip-bottom-left: polygon(0 0,
      100% 0,
      100% 100%,
      var(--clip-size) 100%,
      0 calc(100% - var(--clip-size)),
      0 0);
  --nav-x: 0;
  --width-nav: 20ch;
}

:root {
  --bg: #eee;
  --fg: #494949;
  --border: rgba(120, 120, 130, 0.3);
  --hover: rgba(100, 100, 130, 0.2);
  --confirmation: #268500;
}

:where(html) {
  min-height: 100%;
  background-color: #242932;
  color: #d8dee9;
}

:where(body) {
  margin: 0;
  font-family: system-ui, Verdana, sans-serif;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.5;
}

:where(h1, .title) {
  font-family:
    Josefin Sans,
    sans-serif;
  font-style: normal;

}

:where(a) {
  color: inherit;
}

:where(.clipped, .clipped--br) {
  clip-path: var(--clip-bottom-right);
}

:where(h1, h2, h3, p) {
  margin: 0;
}

.page {
  display: grid;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 100vh;
  min-height: 100svh;
}

/* nav {
  --gap: 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: var(--gap);

  box-sizing: border-box;
  width: 100vw;
  max-width: 100ch;
  margin: 0 auto;
  padding: var(--gap);
} */

.logo {
  --gap: 1rem;

  display: grid;
  grid-template-columns: auto auto;
  place-content: end start;

  padding: var(--gap);
  background: #0000001d;
  color: #70757e;
}

.link {
  --border: calc(100% - 2rem);
  --gap: clamp(1.2rem, calc(1.18rem + 0.1vw), 1.25rem);
  --colour: color-mix(in srgb, black 70%, var(--bg));
  --bg-stripe: color-mix(in srgb, black 8%, var(--bg));

  display: grid;
  align-content: end;
  gap: var(--gap);

  aspect-ratio: 1;
  padding: 1rem;
  line-height: 1;
  text-decoration: none;

  transition: background-size 0.25s;

  background: var(--bg) repeating-linear-gradient(-45deg,
      transparent 0,
      transparent 1rem,
      var(--bg-stripe) 0,
      var(--bg-stripe) 2rem);
  background-size: var(--border) var(--border);
  background-position: center;
  background-repeat: no-repeat;
  color: var(--colour);

  &:hover,
  &:focus {
    --border: 70%;
  }

  & span {
    background: var(--bg);

    &.subtitle {
      padding: 4px 0;
      font-family: Lora, serif;
      font-size: 1.45rem;
      line-height: 1.5;
    }

    &.title {
      padding: 12px 0 6px;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: 2px;
      line-height: 1.2;
    }
  }

  &[href="/about"] {
    --bg: #be6069;
  }

  &[href="/projects"] {
    --bg: #d18771;
  }

  &[href="/articles"] {
    --bg: #ebca89;
  }

  &[href="/weeknotes"] {
    --bg: #a4bf8d;
  }

  &[href="/in-use"] {
    --bg: #b48ead;
  }
}

.cmn--btn {
  padding: 12px 28px 15px;
  color: var(--white);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px;
  display: inline-block;
  position: relative;
  background: #30c7b5;
  overflow: hidden;
  border-radius: 100px;
  transition: all 0.5s;
}
</style>