<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
// import PricingCard from "./components/PricingCard.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
// import AccordionItem from "./components/AccordionItem.vue";
import setNavPills from "@/assets/js/nav-pills.js";
// import ProjectGallerie from "./components/ProjectGallerie.vue";
import ArgonAlert from "@/components/ArgonAlert.vue";
import Contact from "./components/contact.vue";






const store = useStore();


// const slides = [...existingSlides, ...testimonialSlides];
// const currentIndex = ref(0);

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


  <div class="container-fluid" style="background-color: #30c7b5;height: 41px;">
    <div class="text-center">
      <h3 style="color: white;">50% OFF</h3>
    </div>
  </div>

  <navbar is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success"
    :dark-mode="true" style="position: absolute;" />


  <div class="page-header position-relative" :style="{
    backgroundImage: 'url(' + require('../../assets/img/o2.png') + ')',
    backgroundSize: 'cover',
    padding: '100px',
  }">

    <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
      <div class="row">
        <div class="mx-auto text-center col-md-6 mt-4">
          <h3 class="text-white">Services </h3>
          <p class="text-white">
            Hygeco est une entreprise basée à Montréal qui offre une gamme de services professionnels de nettoyage et de buanderie.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="mx-auto text-center col-lg-4 col-md-6 col-7">

        </div>
      </div>
    </div>
  </div>







  <!-- Features Section -->
  <section id="features" class="features section" style="background-color: #f8f9fa;">


    <div class="container section-title" data-aos="fade-up">
  <h2 class="">Ménage Régulier</h2>
  <p> Notre service de nettoyage régulier est conçu pour vous offrir un entretien constant et fiable de
            votre espace résidentiel, vous permettant ainsi de profiter pleinement de votre temps libre. Que
            vous soyez un propriétaire occupé ou souhaitiez simplement maintenir un environnement propre
            et organisé sans les tracas du ménage, notre service de nettoyage régulier est là pour dépasser
            vos attentes  </p>
</div>
    <div class="container">
      <div class="row justify-content-between">

        <div class="col-lg-5 d-flex align-items-center">

          <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1"
                style="margin-bottom: 0px;">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-binoculars" viewBox="0 0 16 16">
                    <path
                      d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
                  </svg>
                </div>
                <div>
                  <h4 class="d-none d-lg-block">Dépoussiérage</h4>
                  <p>
                    Essuyer et dépoussiérer toutes les surfaces, y compris les étagères, les
                    comptoirs et les meubles
                  </p>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2" style="margin-bottom: 0px;">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box"
                    viewBox="0 0 16 16">
                    <path
                      d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                  </svg>
                </div>
                <div>
                  <h4 class="d-none d-lg-block">Aspiration</h4>
                  <p>
                    Passer l'aspirateur sur tous les tapis et moquettes pour enlever la saleté et les
                    débris
                  </p>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3" style="margin-bottom: 0px;">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                    <path
                      d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
                </div>
                <div>
                  <h4 class="d-none d-lg-block">Nettoyage des sols</h4>
                  <p>
                    Passer la serpillière sur les sols durs pour qu'ils soient propres et
                    brillants
                  </p>
                </div>
              </a>
            </li>
          </ul><!-- End Tab Nav -->

        </div>

        <div class="col-lg-6">

          <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

            <div class="tab-pane fade active show" id="features-tab-1">
              <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
            </div><!-- End Tab Content Item -->

            <div class="tab-pane fade" id="features-tab-2">
              <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
            </div><!-- End Tab Content Item -->

            <div class="tab-pane fade" id="features-tab-3">
              <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
            </div><!-- End Tab Content Item -->
          </div>

        </div>

      </div>

    </div>

  </section><!-- /Features Section -->
  
  <section id="features" class="features section" style="background-color: #f8f9fa;">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2 class="">Ménage En Profondeur</h2>
  <p>Notre service de nettoyage en profondeur est méticuleusement conçu pour offrir un nettoyage complet et
        exhaustif de votre espace. Pourquoi passer vos fins de semaine à vous occuper des tâches ménagères lorsque vous
        pourriez les consacrer à des activités en famille ou entre amis ?  </p>
</div><!-- End Section Title -->

<div class="container">
  <div class="row justify-content-between">
    <div class="col-lg-6">

      <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

        <div class="tab-pane fade active show" id="features-tab-111">
          <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
        </div><!-- End Tab Content Item -->

        <div class="tab-pane fade" id="features-tab-222">
          <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
        </div><!-- End Tab Content Item -->

        <div class="tab-pane fade" id="features-tab-333">
          <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
        </div><!-- End Tab Content Item -->
        <div class="tab-pane fade" id="features-tab-444">
          <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
        </div><!-- End Tab Content Item -->
      </div>

    </div>

    <div class="col-lg-5 d-flex align-items-center">

      <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
          <li class="nav-item">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-111"
              style="margin-bottom: 0px;">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                  class="bi bi-binoculars" viewBox="0 0 16 16">
                  <path
                    d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
                </svg>
              </div>
              <div>
                <h4 class="d-none d-lg-block">Nettoyage des appareils électroménagers</h4>
                <p>
                  Essuyer et dépoussiérer toutes les surfaces, y compris les étagères, les
                  comptoirs et les meubles
                </p>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-222" style="margin-bottom: 0px;">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box"
                  viewBox="0 0 16 16">
                  <path
                    d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
              </div>
              <div>
                <h4 class="d-none d-lg-block">Dépoussiérage détaillé</h4>
                <p>
                  Essuyer et dépoussiérer toutes les surfaces, y compris les zones difficiles d'accès
                </p>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-333" style="margin-bottom: 0px;">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                  class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                  <path
                    d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </div>
              <div>
                <h4 class="d-none d-lg-block">Nettoyage des sols</h4>
                <p>
                  Frotter les sols durs.
                </p>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-444" style="margin-bottom: 0px;">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                  class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                  <path
                    d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </div>
              <div>
                <h4 class="d-none d-lg-block">Désinfection des salles de bains</h4>
                <p>
                  Nettoyer et désinfecter les installations sanitaires, les carreaux et les surfaces de la salle de
                  bains.
                </p>
              </div>
            </a>
          </li>
        </ul><!-- End Tab Nav -->

    </div>



  </div>

</div>

</section>
<section id="features" class="features section" style="background-color: #f8f9fa;">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2 class="">Ménage Déménagement/Emménagement</h2>
  <p>Notre service de nettoyage lors d'un déménagement est votre partenaire de confiance pour
        garantir une transition en douceur lors de votre emménagement dans une nouvelle maison ou de
        votre préparation à quitter votre ancien logement. Avec un déménagement, la liste des tâches ne
        finit jamais. Laissez-nous  </p>
</div><!-- End Section Title -->

<div class="container">
  <div class="row justify-content-between">
    

    <div class="col-lg-5 d-flex align-items-center">

      <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
        <li class="nav-item">
          <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tabs-11"
            style="margin-bottom: 0px;">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                class="bi bi-activity" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
              </svg>
            </div>
            <div>
              <h4 class="d-none d-lg-block">Nettoyage complet </h4>
              <p>
                Nous offrons un service de nettoyage complet et exhaustif
              pour la propriété que vous quittez et celle dans laquelle vous emménagez. 
              </p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tabs-22" style="margin-bottom: 0px;">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-easel"
                viewBox="0 0 16 16">
                <path
                  d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0M2 3v7h12V3z" />
              </svg>
            </div>
            <div>
              <h4 class="d-none d-lg-block">Attention aux détails </h4>
              <p>
                Nous faisons attention à chaque recoin, en veillant à ce que
              toutes les surfaces, les installations et les appareils soient nettoyés et désinfectés.
              </p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tabs-33" style="margin-bottom: 0px;">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                class="bi bi-broadcast" viewBox="0 0 16 16">
                <path
                  d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
              </svg>
            </div>
            <div>
              <h4 class="d-none d-lg-block">Déménagement sans stress</h4>
              <p>
                Avec notre service, vous pouvez vous concentrer sur
              la logistique de votre déménagement pendant que nous nous occupons du
              nettoyage.
              </p>
            </div>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tabs-44" style="margin-bottom: 0px;">
            <div class="icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                class="bi bi-activity" viewBox="0 0 16 16">
                <path fill-rule="evenodd"
                  d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
              </svg>
            </div>
            <div>
              <h4 class="d-none d-lg-block">Délai rapide</h4>
              <p>
                Notre équipe efficace assure un délai rapide, pour que vous
              puissiez vous installer dans votre nouveau logement ou remettre l'ancien en toute
              confiance
              </p>
            </div>
          </a>
        </li>
      </ul><!-- End Tab Nav -->

    </div>

    <div class="col-lg-6">

<div class="tab-content" data-aos="fade-up" data-aos-delay="200">

<div class="tab-pane fade active show" id="features-tabs-11">
<img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
</div><!-- End Tab Content Item -->

<div class="tab-pane fade" id="features-tabs-22">
<img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
</div><!-- End Tab Content Item -->

<div class="tab-pane fade" id="features-tabs-33">
<img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
</div><!-- End Tab Content Item -->
<div class="tab-pane fade" id="features-tabs-44">
<img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
</div><!-- End Tab Content Item -->
</div>

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
          Ménage
        </h2>
        <a href="/pages/reservation-buanderie" class="bg-yellow-button text-gray-900 font-medium py-3 px-6 rounded">
          Reserver Maintenant
        </a>
      </div>
    </div>
  </section>

  <section id="features" class="features section" style="background-color: #f8f9fa;">

<!-- Section Title -->
<div class="container section-title" data-aos="fade-up">
  <h2 class="">Nettoyage De Meubles En Tissu Et De Tapis</h2>
  <p> Quand avez-vous pour la dernière fois pris le temps de nettoyer vos meubles et tapis ? Craignezvous
              d'abîmer votre canape que vous avez payé cher ? Avec Hygeco, vous pouvez compter sur
              notre équipe professionnelle pour prendre soin de vos meubles en tissu délicats et de vos tapis
              nécessitant un soin particulier  </p>
</div><!-- End Section Title -->

<div class="container">
  <div class="row justify-content-between">
    <div class="col-lg-6">

      <div class="tab-content" data-aos="fade-up" data-aos-delay="200">

        <div class="tab-pane fade active show" id="features-tab-1111">
          <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
        </div><!-- End Tab Content Item -->

        <div class="tab-pane fade" id="features-tab-2222">
          <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
        </div><!-- End Tab Content Item -->

        <div class="tab-pane fade" id="features-tab-3333">
          <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
        </div><!-- End Tab Content Item -->
        <div class="tab-pane fade" id="features-tab-4444">
          <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
        </div><!-- End Tab Content Item -->
      </div>

    </div>

    <div class="col-lg-5 d-flex align-items-center">

      <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
          <li class="nav-item">
            <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-1111"
              style="margin-bottom: 0px;">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                  class="bi bi-binoculars" viewBox="0 0 16 16">
                  <path
                    d="M3 2.5A1.5 1.5 0 0 1 4.5 1h1A1.5 1.5 0 0 1 7 2.5V5h2V2.5A1.5 1.5 0 0 1 10.5 1h1A1.5 1.5 0 0 1 13 2.5v2.382a.5.5 0 0 0 .276.447l.895.447A1.5 1.5 0 0 1 15 7.118V14.5a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 14.5v-3a.5.5 0 0 1 .146-.354l.854-.853V9.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v.793l.854.853A.5.5 0 0 1 7 11.5v3A1.5 1.5 0 0 1 5.5 16h-3A1.5 1.5 0 0 1 1 14.5V7.118a1.5 1.5 0 0 1 .83-1.342l.894-.447A.5.5 0 0 0 3 4.882zM4.5 2a.5.5 0 0 0-.5.5V3h2v-.5a.5.5 0 0 0-.5-.5zM6 4H4v.882a1.5 1.5 0 0 1-.83 1.342l-.894.447A.5.5 0 0 0 2 7.118V13h4v-1.293l-.854-.853A.5.5 0 0 1 5 10.5v-1A1.5 1.5 0 0 1 6.5 8h3A1.5 1.5 0 0 1 11 9.5v1a.5.5 0 0 1-.146.354l-.854.853V13h4V7.118a.5.5 0 0 0-.276-.447l-.895-.447A1.5 1.5 0 0 1 12 4.882V4h-2v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5zm4-1h2v-.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5zm4 11h-4v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5zm-8 0H2v.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5z" />
                </svg>
              </div>
              <div>
                <h4 class="d-none d-lg-block">Nettoyage complet</h4>
                <p>
                  Nous offrons un service de nettoyage complet et exhaustif pour vos
                meubles en tissu et vos tapis, en éliminant la saleté, les taches et les allergènes.
                </p>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-2222" style="margin-bottom: 0px;">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-box"
                  viewBox="0 0 16 16">
                  <path
                    d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5 8 5.961 14.154 3.5zM15 4.239l-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464z" />
                </svg>
              </div>
              <div>
                <h4 class="d-none d-lg-block">Attention aux détails</h4>
                <p>
                  Nous prêtons une attention particulière à chaque pièce, en veillant
                à ce que tous les matériaux soient nettoyés avec soin et désinfectés
                </p>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-3333" style="margin-bottom: 0px;">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                  class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                  <path
                    d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </div>
              <div>
                <h4 class="d-none d-lg-block">Propreté durable</h4>
                <p>
                  Grâce à notre service, vos meubles et tapis resteront propres et frais
                plus longtemps, améliorant ainsi la qualité de l'air intérieur et l'apparence de votre maison                </p>
              </div>
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-4444" style="margin-bottom: 0px;">
              <div class="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                  class="bi bi-brightness-high-fill" viewBox="0 0 16 16">
                  <path
                    d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                </svg>
              </div>
              <div>
                <h4 class="d-none d-lg-block">Délai rapide</h4>
                <p>
                  Nous comprenons l'importance de la rapidité. Notre équipe efficace assure
                un nettoyage rapide, pour que vous puissiez profiter de votre espace de vie sans
                interruption.
                </p>
              </div>
            </a>
          </li>
        </ul><!-- End Tab Nav -->

    </div>



  </div>

</div>

</section>


 


  <argon-alert class="font-weight-light" color="danger" dismissible style="margin-top: -2rem;">
    ce service exclut le nettoyage des fenêtres situées à une hauteur
    inaccessible sans équipement spécialisé.

  </argon-alert>

  <section id="features" class="features section" style="background-color: #f8f9fa;">

    <!-- Section Title -->
    <div class="container section-title" data-aos="fade-up">
      <h2 class="">Nettoyage Après Construction</h2>
      <p>Hésitez-vous à rénover votre cuisine ou votre espace extérieur pour éviter le ménage à faire
        après ? Notre service de nettoyage après construction est conçu pour garantir que votre espace
        nouvellement rénové ou construit soit impeccable et prêt à être utilisé </p>
    </div><!-- End Section Title -->

    <div class="container">
      <div class="row justify-content-between">
        

        <div class="col-lg-5 d-flex align-items-center">

          <ul class="nav nav-tabs" data-aos="fade-up" data-aos-delay="100">
            <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" data-bs-target="#features-tab-11"
                style="margin-bottom: 0px;">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-activity" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
                  </svg>
                </div>
                <div>
                  <h4 class="d-none d-lg-block">Elimination minutieuse de la poussière et des débris </h4>
                  <p>
                    Nous éliminons méticuleusement
                    toute la poussière et les débris liés à la construction.
                  </p>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-22" style="margin-bottom: 0px;">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-easel"
                    viewBox="0 0 16 16">
                    <path
                      d="M8 0a.5.5 0 0 1 .473.337L9.046 2H14a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1.85l1.323 3.837a.5.5 0 1 1-.946.326L11.092 11H8.5v3a.5.5 0 0 1-1 0v-3H4.908l-1.435 4.163a.5.5 0 1 1-.946-.326L3.85 11H2a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h4.954L7.527.337A.5.5 0 0 1 8 0M2 3v7h12V3z" />
                  </svg>
                </div>
                <div>
                  <h4 class="d-none d-lg-block">Détail des surfaces</h4>
                  <p>
                    Nous portons une attention particulière aux surfaces, y compris les
                    murs, les plafonds et les sols.
                  </p>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-33" style="margin-bottom: 0px;">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-broadcast" viewBox="0 0 16 16">
                    <path
                      d="M3.05 3.05a7 7 0 0 0 0 9.9.5.5 0 0 1-.707.707 8 8 0 0 1 0-11.314.5.5 0 0 1 .707.707m2.122 2.122a4 4 0 0 0 0 5.656.5.5 0 1 1-.708.708 5 5 0 0 1 0-7.072.5.5 0 0 1 .708.708m5.656-.708a.5.5 0 0 1 .708 0 5 5 0 0 1 0 7.072.5.5 0 1 1-.708-.708 4 4 0 0 0 0-5.656.5.5 0 0 1 0-.708m2.122-2.12a.5.5 0 0 1 .707 0 8 8 0 0 1 0 11.313.5.5 0 0 1-.707-.707 7 7 0 0 0 0-9.9.5.5 0 0 1 0-.707zM10 8a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
                  </svg>
                </div>
                <div>
                  <h4 class="d-none d-lg-block">Nettoyage intérieur et extérieur</h4>
                  <p>
                    Des espaces intérieurs aux zones extérieures, nous
                    nettoyons tout.
                  </p>
                </div>
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" data-bs-target="#features-tab-44" style="margin-bottom: 0px;">
                <div class="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor"
                    class="bi bi-activity" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                      d="M6 2a.5.5 0 0 1 .47.33L10 12.036l1.53-4.208A.5.5 0 0 1 12 7.5h3.5a.5.5 0 0 1 0 1h-3.15l-1.88 5.17a.5.5 0 0 1-.94 0L6 3.964 4.47 8.171A.5.5 0 0 1 4 8.5H.5a.5.5 0 0 1 0-1h3.15l1.88-5.17A.5.5 0 0 1 6 2" />
                  </svg>
                </div>
                <div>
                  <h4 class="d-none d-lg-block">Nettoyage et polissage des sols</h4>
                  <p>
                    Notre équipe est équipée pour nettoyer et faire briller les
                    sols durs, les laissant à leur meilleur aspect.
                  </p>
                </div>
              </a>
            </li>
          </ul><!-- End Tab Nav -->

        </div>

        <div class="col-lg-6">

<div class="tab-content" data-aos="fade-up" data-aos-delay="200">

  <div class="tab-pane fade active show" id="features-tab-11">
    <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
  </div><!-- End Tab Content Item -->

  <div class="tab-pane fade" id="features-tab-22">
    <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
  </div><!-- End Tab Content Item -->

  <div class="tab-pane fade" id="features-tab-33">
    <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
  </div><!-- End Tab Content Item -->
  <div class="tab-pane fade" id="features-tab-44">
    <img src="../../assets/img/hygeco/100.jpeg" alt="" class="img-fluid">
  </div><!-- End Tab Content Item -->
</div>

</div>

      </div>

    </div>

  </section>

 
  <section class="relative bg-cover bg-center py-7 mt-10" :style="{
    backgroundImage: 'url(' + require('../../assets/img/o2.png') + ')',
    backgroundAttachment: 'fixed',
  }">
    <div class="absolute inset-0"></div>
    <div class="container mx-auto relative flex justify-center items-center text-center">
      <div class="max-w-lg">
        <h2 class="text-white  md:text-4xl font-bold mb-4" style="font-size: 3.875rem;">
          Nettoyage
        </h2>
        <a href="/pages/reservation-buanderie" class="bg-yellow-button text-gray-900 font-medium py-3 px-6 rounded">
          Reserver Maintenant
        </a>
      </div>
    </div>
  </section>
   <!-- Clients Section -->
   <section id="clients" class="clients section" style="background-color: #f8f9fa;">

<div class="container" data-aos="fade-up">

  <div class="row gy-4">

    <div class="col-xl-2 col-md-3 col-6 client-logo">
      <img src="../../assets/img/clients/client-1.png" class="img-fluid" alt="">
    </div><!-- End Client Item -->

    <div class="col-xl-2 col-md-3 col-6 client-logo">
      <img src="../../assets/img/clients/client-2.png" class="img-fluid" alt="">
    </div><!-- End Client Item -->

    <div class="col-xl-2 col-md-3 col-6 client-logo">
      <img src="../../assets/img/clients/client-3.png" class="img-fluid" alt="">
    </div><!-- End Client Item -->

    <div class="col-xl-2 col-md-3 col-6 client-logo">
      <img src="../../assets/img/clients/client-4.png" class="img-fluid" alt="">
    </div><!-- End Client Item -->

    <div class="col-xl-2 col-md-3 col-6 client-logo">
      <img src="../../assets/img/clients/client-5.png" class="img-fluid" alt="">
    </div><!-- End Client Item -->

    <div class="col-xl-2 col-md-3 col-6 client-logo">
      <img src="../../assets/img/clients/client-6.png" class="img-fluid" alt="">
    </div><!-- End Client Item -->

  </div>

</div>

</section><!-- /Clients Section -->
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
                    border-radius: 10px;
                    border: 1px solid rgba(0, 0, 0, 0.09);
                    color: var(--pra);
                    padding: 13px 16px;
                    margin-bottom: 10px;
                  " />
                <input class="cmn--btn" type="submit" value="Decouvrir Nos Offers" style="
                    padding: 12px 28px 15px;
                    color: white;
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
                    border: unset;
                    margin-top: 10px;
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
                    <a href="https://www.4damstheme.com/clenis/about-clenis/">A propos</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/contact-us/">Contact Nous</a>
                  </li>


                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/">Services</a>
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
                    <a href="https://www.4damstheme.com/clenis/our-project/">Menage</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/">buanderie</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/">Menage commercial</a>
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
                Nos coordonnées
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
<style scooped>
a {
  color: var(--accent-color);
  text-decoration: none;
  transition: 0.3s;
}

a:hover {
  color: color-mix(in srgb, var(--accent-color), transparent 25%);
  text-decoration: none;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--heading-color);
  font-family: var(--heading-font);
}

:root {
  --default-font: "Roboto", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", "Liberation Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
  --heading-font: "Nunito", sans-serif;
  --nav-font: "Inter", sans-serif;
}

/* Global Colors */
:root {
  /* Background Color - This color is applied to the background of the entire website as well as individual sections. */
  --background-color: #ffffff;

  /* Default Color - This is the default color used for the majority of the text content. */
  --default-color: #3d4348;

  /* Heading Color - This color is used for titles, headings and secondary elements. */
  --heading-color: #3e5055;

  /* Accent Color - This is the main accent color that represents your brand on the website. It's used for buttons, links, and other elements that need to stand out. */
  --accent-color: linear-gradient(310deg, #2dce89 0%, #2dcecc 100%);

  /* Contrast Color - This is a color used for text when the background color is one of the heading, accent, or default colors. Its purpose is to ensure proper contrast and readability when placed over these more dominant colors. */
  --contrast-color: #ffffff;
}

/* Nav Menu Colors */
:root {
  /* Nav Color - This is the default color of the main navmenu links. */
  --nav-color: #313336;

  /* Nav Hover Color - This color is applied to main navmenu links when they are hovered over. */
  --nav-hover-color: #77b6ca;

  /* Nav Dropdown Background Color - This color is used as the background for dropdown boxes that appear when hovering over primary navigation items. */
  --nav-dropdown-background-color: #ffffff;

  /* Nav Dropdown Color - This color is used for navigation links of the dropdown items in the navigation menu. */
  --nav-dropdown-color: #313336;

  /* Nav Dropdown Hover Color - Similar to --nav-hover-color, this color is applied to dropdown navigation links when they are hovered over. */
  --nav-dropdown-hover-color: #77b6ca;
}

/* Smooth scroll */
:root {
  scroll-behavior: smooth;
}

#preloader {
  position: fixed;
  inset: 0;
  z-index: 9999;
  overflow: hidden;
  background-color: var(--background-color);
  transition: all 0.6s ease-out;
  width: 100%;
  height: 100vh;
}

#preloader:before,
#preloader:after {
  content: "";
  position: absolute;
  border: 4px solid var(--accent-color);
  border-radius: 50%;
  animation: animate-preloader 2s cubic-bezier(0, 0.2, 0.8, 1) infinite;
}

#preloader:after {
  animation-delay: -0.5s;
}

@keyframes animate-preloader {
  0% {
    width: 10px;
    height: 10px;
    top: calc(50% - 5px);
    left: calc(50% - 5px);
    opacity: 1;
  }

  100% {
    width: 72px;
    height: 72px;
    top: calc(50% - 36px);
    left: calc(50% - 36px);
    opacity: 0;
  }
}

/*--------------------------------------------------------------
# Scroll Top Button
--------------------------------------------------------------*/
.scroll-top {
  position: fixed;
  visibility: hidden;
  opacity: 0;
  right: 15px;
  bottom: -15px;
  z-index: 99999;
  background-color: var(--accent-color);
  width: 44px;
  height: 44px;
  border-radius: 50px;
  transition: all 0.4s;
}

.scroll-top i {
  font-size: 24px;
  color: var(--contrast-color);
  line-height: 0;
}

.scroll-top:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
  color: var(--contrast-color);
}

.scroll-top.active {
  visibility: visible;
  opacity: 1;
  bottom: 15px;
}

/*--------------------------------------------------------------
# Disable aos animation delay on mobile devices
--------------------------------------------------------------*/
@media screen and (max-width: 768px) {
  [data-aos-delay] {
    transition-delay: 0 !important;
  }
}

/*--------------------------------------------------------------
# Global Page Titles & Breadcrumbs
--------------------------------------------------------------*/
.page-title {
  --background-color: color-mix(in srgb, var(--default-color), transparent 96%);
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 25px 0;
  position: relative;
}

.page-title h1 {
  font-size: 24px;
  font-weight: 700;
}

.page-title .breadcrumbs ol {
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
  font-size: 14px;
}

.page-title .breadcrumbs ol li+li {
  padding-left: 10px;
}

.page-title .breadcrumbs ol li+li::before {
  content: "/";
  display: inline-block;
  padding-right: 10px;
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

/*--------------------------------------------------------------
# Global Sections
--------------------------------------------------------------*/
section,
.section {
  color: var(--default-color);
  background-color: var(--background-color);
  padding: 60px 0;
  scroll-margin-top: 100px;
  overflow: clip;
}

@media (max-width: 1199px) {

  section,
  .section {
    scroll-margin-top: 66px;
  }
}

/*--------------------------------------------------------------
# Global Section Titles
--------------------------------------------------------------*/
.section-title {
  text-align: center;
  padding-bottom: 60px;
  position: relative;
}

.section-title h2 {
  font-size: 32px;
  font-weight: 700;
  margin-bottom: 20px;
  padding-bottom: 20px;
  position: relative;
}

.section-title h2:after {
  content: "";
  position: absolute;
  display: block;
  width: 50px;
  height: 3px;
  background: var(--accent-color);
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
}

.section-title p {
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Hero Section
--------------------------------------------------------------*/
.hero {
  width: 100%;
  min-height: 70vh;
  position: relative;
  padding: 180px 0 40px 0;
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero .hero-bg img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.hero .hero-bg::before {
  content: "";
  background: color-mix(in srgb, var(--background-color), transparent 15%);
  position: absolute;
  inset: 0;
  z-index: 2;
}

.hero .container {
  position: relative;
  z-index: 3;
}

.hero h1 {
  margin: 0;
  font-size: 48px;
  font-weight: 700;
  line-height: 56px;
}

.hero h1 span {
  color: var(--accent-color);
}

.hero p {
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  margin: 5px 0 30px 0;
  font-size: 20px;
  font-weight: 400;
}

@media (min-width: 768px) {
  .hero .hero-img {
    max-width: 600px;
  }
}

.hero .btn-get-started {
  color: var(--contrast-color);
  background: var(--accent-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 15px;
  letter-spacing: 1px;
  display: inline-block;
  padding: 10px 28px;
  border-radius: 50px;
  transition: 0.5s;
  box-shadow: 0 8px 28px color-mix(in srgb, var(--accent-color), transparent 80%);
}

.hero .btn-get-started:hover {
  color: var(--contrast-color);
  background: color-mix(in srgb, var(--accent-color), transparent 15%);
  box-shadow: 0 8px 28px color-mix(in srgb, var(--accent-color), transparent 55%);
}

.hero .btn-watch-video {
  font-size: 16px;
  transition: 0.5s;
  margin-left: 25px;
  color: var(--default-color);
  font-weight: 600;
}

.hero .btn-watch-video i {
  color: var(--accent-color);
  font-size: 32px;
  transition: 0.3s;
  line-height: 0;
  margin-right: 8px;
}

.hero .btn-watch-video:hover {
  color: var(--accent-color);
}

.hero .btn-watch-video:hover i {
  color: color-mix(in srgb, var(--accent-color), transparent 15%);
}

@media (max-width: 640px) {
  .hero h1 {
    font-size: 28px;
    line-height: 36px;
  }

  .hero p {
    font-size: 18px;
    line-height: 24px;
    margin-bottom: 30px;
  }

  .hero .btn-get-started,
  .hero .btn-watch-video {
    font-size: 13px;
  }
}

/*--------------------------------------------------------------
# Featured Services Section
--------------------------------------------------------------*/
.featured-services {
  --background-color: color-mix(in srgb, var(--accent-color), transparent 94%);
  padding: 40px 0;
}

.featured-services .service-item {
  position: relative;
  padding-top: 20px;
}

.services .service-item.item-cyan .icon {
  color: #0dcaf0;
  border: 1px solid #0dcaf0;
  background: rgba(13, 202, 240, 0.1);
}

.featured-services .service-item .icon {
  background-color: color-mix(in srgb, var(--accent-color), transparent 80%);
  width: 72px;
  height: 72px;
  position: relative;
  margin-right: 15px;
  line-height: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: ease-in-out 0.3s;
}

.featured-services .service-item .icon i {
  color: var(--accent-color);
  font-size: 32px;
  z-index: 2;
  position: relative;
}

.featured-services .service-item .title {
  font-weight: 700;
  margin-bottom: 5px;
  font-size: 18px;
}

.featured-services .service-item .title a {
  color: var(--heading-color);
}

.featured-services .service-item .title a:hover {
  color: var(--accent-color);
}

.featured-services .service-item .description {
  font-size: 14px;
}

.featured-services .service-item:hover .icon {
  background-color: var(--accent-color);
}

.featured-services .service-item:hover .icon i {
  color: var(--contrast-color);
}

/*--------------------------------------------------------------
# About Section
--------------------------------------------------------------*/
.about {
  padding-bottom: 20px;
}

.about .content .who-we-are {
  text-transform: uppercase;
  margin-bottom: 15px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
}

.about .content h3 {
  font-size: 2rem;
  font-weight: 700;
}

.about .content ul {
  list-style: none;
  padding: 0;
}

.about .content ul li {
  padding-bottom: 10px;
}

.about .content ul i {
  font-size: 1.25rem;
  margin-right: 4px;
  color: var(--accent-color);
}

.about .content p:last-child {
  margin-bottom: 0;
}

.about .content .read-more {
  background: var(--accent-color);
  color: var(--contrast-color);
  font-family: var(--heading-font);
  font-weight: 500;
  font-size: 16px;
  letter-spacing: 1px;
  padding: 12px 24px;
  border-radius: 5px;
  transition: 0.3s;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.about .content .read-more i {
  font-size: 18px;
  margin-left: 5px;
  line-height: 0;
  transition: 0.3s;
}

.about .content .read-more:hover {
  background: #30c7b5;
  padding-right: 19px;
}

.about .content .read-more:hover i {
  margin-left: 10px;
}

.about .about-images img {
  border-radius: 10px;
}

/*--------------------------------------------------------------
# Clients Section
--------------------------------------------------------------*/
.clients {
  padding: 20px 0;
}

.clients .client-logo {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

.clients .client-logo img {
  padding: 20px 40px;
  max-width: 90%;
  transition: 0.3s;
  opacity: 0.5;
  filter: grayscale(100);
}

.clients .client-logo img:hover {
  filter: none;
  opacity: 1;
}

@media (max-width: 640px) {
  .clients .client-logo img {
    padding: 20px;
  }
}

.nav-tabs .nav-link.active {
  color: #495057;
  background-color: #30c7b5;
  border-color: #dee2e6 #dee2e6 #fff;
}


/*--------------------------------------------------------------
# Features Section
--------------------------------------------------------------*/
.features .nav-tabs {
  border: 0;
}

.features .nav-item {
  width: 100%;
  margin-bottom: 15px;
  border: 1px solid #20c997;
}

.nav-item:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.features .nav-item:last-child {
  margin-bottom: 0;
}

.features .nav-link {
  color: var(--heading-color);
  border: 0;
  padding: 30px;
  transition: 0.3s;
  border-radius: 10px;
  display: flex;
  cursor: pointer;
}

@media (max-width: 768px) {
  .features .tab-pane img {
    border-radius: 15px;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
}

.features .nav-link .icon {
  background-color: var(--contrast-color);
  color: var(--accent-color);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
  width: 48px;
  height: 48px;
  font-size: 22px;
  flex-shrink: 0;
  border-radius: 50px;
  box-shadow: 0 2px 4px color-mix(in srgb, var(--default-color), transparent 85%);
}

.features .nav-link h4 {
  font-size: 20px;
  font-weight: 600;
  margin: 0 0 10px 0;
  transition: 0.3s;
}

.features .nav-link p {
  font-size: 15px;
  margin: 0;
}

.features .nav-link:hover {
  background: #30c7b5;
}

.features .nav-link.active {
  background: #30c7b5;
}

.features .tab-pane img {
  border-radius: 15px;
}

/*--------------------------------------------------------------
# Features Details Section
--------------------------------------------------------------*/
.features-details .features-item+.features-item {
  margin-top: 60px;
}

.features-details .features-item .content {
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  padding: 30px;
  border-radius: 10px;
}

.features-details .features-item h3 {
  font-weight: 700;
  font-size: 26px;
  margin-bottom: 15px;
}

.features-details .features-item .more-btn {
  background-color: var(--accent-color);
  /* color: var(--contrast-color); */
  padding: 6px 30px;
  border-radius: 6px;
}

.features-details .features-item .more-btn:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 20%);
}

.features-details .features-item ul {
  list-style: none;
  padding: 0;
}

.features-details .features-item ul li {
  padding-bottom: 10px;
  display: flex;
  align-items: center;
}

.features-details .features-item ul li:last-child {
  padding-bottom: 0;
}

.features-details .features-item ul i {
  font-size: 20px;
  margin-right: 10px;
  color: var(--accent-color);
}

.features-details .features-item img {
  border-radius: 15px;
}

/*--------------------------------------------------------------
# Services Section
--------------------------------------------------------------*/
.services {
  --background-color: color-mix(in srgb, var(--accent-color), transparent 97%);
}

.services .service-item {
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 85%);
  height: 100%;
  padding: 30px;
  transition: 0.3s;
  border-radius: 10px;
  display: flex;
}

.services .service-item .icon {
  font-size: 32px;
  border-radius: 10px;
  position: relative;
  margin-right: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 72px;
  height: 72px;
  flex-shrink: 0;
}

.services .service-item h3 {
  color: color-mix(in srgb, var(--heading-color), transparent 25%);
  font-weight: 700;
  font-size: 22px;
  transition: 0.3s;
}

.services .service-item p {
  margin-bottom: 0;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  transition: 0.3s;
}

.services .service-item .read-more {
  display: inline-flex;
  align-items: center;
  margin-top: 10px;
  transition: 0.3s;
  font-size: 14px;
}

.services .service-item .read-more i {
  margin-left: 10px;
}

.services .service-item.item-cyan .icon {
  color: #0dcaf0;
  border: 1px solid #0dcaf0;
  background: rgba(13, 202, 240, 0.1);
}

.services .service-item.item-orange .icon {
  color: #fd7e14;
  border: 1px solid #fd7e14;
  background: rgba(253, 126, 20, 0.1);
}

.services .service-item.item-teal .icon {
  color: #20c997;
  border: 1px solid #20c997;
  background: rgba(32, 201, 151, 0.1);
}

.services .service-item.item-red .icon {
  color: #df1529;
  border: 1px solid #df1529;
  background: rgba(223, 21, 4, 0.1);
}

.services .service-item.item-indigo .icon {
  color: #6610f2;
  border: 1px solid #6610f2;
  background: rgba(102, 16, 242, 0.1);
}

.services .service-item.item-pink .icon {
  color: #f3268c;
  border: 1px solid #f3268c;
  background: rgba(243, 38, 140, 0.1);
}

.services .service-item:hover {
  box-shadow: 0px 2px 25px color-mix(in srgb, var(--default-color), transparent 90%);
}

.services .service-item:hover h3 {
  color: var(--heading-color);
}

.services .service-item:hover p {
  color: color-mix(in srgb, var(--default-color), transparent 10%);
}

/*--------------------------------------------------------------
# More Features Section
--------------------------------------------------------------*/
.more-features .features-image {
  position: relative;
  min-height: 400px;
}

.more-features .features-image img {
  position: absolute;
  inset: 0;
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 1;
}

.more-features h3 {
  font-size: 28px;
  font-weight: 700;
  margin-bottom: 20px;
}

.more-features .icon-box {
  /* margin: 30px 0 20px; */
  margin-top: 30px;
  margin-right: 20px;
  border: 1px solid #20c997;
  border-radius: 15px;
  padding: 10px;
  background-color: #30c7b5;
}

.icon-box:hover {
  transform: scale(1.05);
  background-color: rgba(255, 255, 255, 0.1);
  transition: transform 0.3s ease, background-color 0.3s ease;
}

.more-features .icon-box i {
  color: var(--accent-color);
  margin-right: 15px;
  font-size: 24px;
  line-height: 1.2;
}

.more-features .icon-box h4 {
  font-weight: 600;
  margin-bottom: 10px;
  font-size: 18px;
}

.more-features .icon-box p {
  line-height: 24px;
  font-size: 14px;
  margin-bottom: 0;
}

/*--------------------------------------------------------------
# Pricing Section
--------------------------------------------------------------*/
.pricing .pricing-item {
  padding: 40px 40px;
  height: 100%;
  border-radius: 15px;
  border: 1px solid #20c997;
}

.pricing h3 {
  font-weight: 600;
  margin-bottom: 15px;
  font-size: 20px;
}

.pricing h4 {
  color: var(--accent-color);
  font-size: 48px;
  font-weight: 700;
  font-family: var(--heading-font);
  margin-bottom: 0;
}

.pricing h4 sup {
  font-size: 28px;
}

.pricing h4 span {
  color: color-mix(in srgb, var(--default-color), transparent 50%);
  font-size: 18px;
  font-weight: 500;
}

.pricing .description {
  font-size: 14px;
}

.pricing .cta-btn {
  background-color: var(--default-color);
  color: var(--contrast-color);
  display: block;
  text-align: center;
  padding: 10px 35px;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 500;
  font-family: var(--heading-font);
  transition: 0.3s;
  margin-top: 20px;
  margin-bottom: 6px;
}

.pricing .cta-btn:hover {
  background: var(--accent-color);
  color: var(--contrast-color);
}

.pricing ul {
  padding: 0;
  list-style: none;
  color: color-mix(in srgb, var(--default-color), transparent 30%);
  text-align: left;
  line-height: 20px;
}

.pricing ul li {
  padding: 10px 0;
  display: flex;
  align-items: center;
}

.pricing ul li:last-child {
  padding-bottom: 0;
}

.pricing ul i {
  color: #059652;
  font-size: 24px;
  padding-right: 3px;
}

.pricing ul .na {
  color: color-mix(in srgb, var(--default-color), transparent 60%);
}

.pricing ul .na i {
  color: color-mix(in srgb, var(--default-color), transparent 60%);
}

.pricing ul .na span {
  text-decoration: line-through;
}

.pricing .featured {
  position: relative;
}

.pricing .featured .popular {
  position: absolute;
  top: 15px;
  right: 15px;
  background-color: var(--accent-color);
  color: var(--contrast-color);
  padding: 5px 15px;
  margin: 0;
  border-radius: 5px;
  font-size: 14px;
  font-weight: 400;
}

.pricing .featured .cta-btn {
  background: var(--accent-color);
  color: var(--contrast-color);
}

@media (max-width: 992px) {
  .pricing .box {
    max-width: 60%;
    margin: 0 auto 30px auto;
  }
}

@media (max-width: 767px) {
  .pricing .box {
    max-width: 80%;
    margin: 0 auto 30px auto;
  }
}

@media (max-width: 420px) {
  .pricing .box {
    max-width: 100%;
    margin: 0 auto 30px auto;
  }
}

/*--------------------------------------------------------------
# Faq Section
--------------------------------------------------------------*/
.faq .section-title {
  padding-bottom: 20px;
}

.faq .faq-container .faq-item {
  position: relative;
  padding: 20px;
  margin-bottom: 15px;
  border: 1px solid color-mix(in srgb, var(--default-color), transparent 85%);
  border-radius: 5px;
  overflow: hidden;
}

.faq .faq-container .faq-item:last-child {
  margin-bottom: 0;
}

.faq .faq-container .faq-item h3 {
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  margin: 0 30px 0 0;
  transition: 0.3s;
  cursor: pointer;
  display: flex;
  align-items: center;
}

.faq .faq-container .faq-item h3 .num {
  color: var(--accent-color);
  padding-right: 5px;
}

.faq .faq-container .faq-item h3:hover {
  color: var(--accent-color);
}

.faq .faq-container .faq-item .faq-content {
  display: grid;
  grid-template-rows: 0fr;
  transition: 0.3s ease-in-out;
  visibility: hidden;
  opacity: 0;
}

.faq .faq-container .faq-item .faq-content p {
  margin-bottom: 0;
  overflow: hidden;
}

.faq .faq-container .faq-item .faq-toggle {
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 16px;
  line-height: 0;
  transition: 0.3s;
  cursor: pointer;
}

.faq .faq-container .faq-item .faq-toggle:hover {
  color: var(--accent-color);
}

.faq .faq-container .faq-active {
  background-color: color-mix(in srgb, var(--accent-color), transparent 97%);
  border-color: color-mix(in srgb, var(--accent-color), transparent 80%);
}

.faq .faq-container .faq-active h3 {
  color: var(--accent-color);
}

.faq .faq-container .faq-active .faq-content {
  grid-template-rows: 1fr;
  visibility: visible;
  opacity: 1;
  padding-top: 10px;
}

.faq .faq-container .faq-active .faq-toggle {
  transform: rotate(90deg);
  color: var(--accent-color);
}

/*--------------------------------------------------------------
# Testimonials Section
--------------------------------------------------------------*/
.testimonials {
  --background-color: color-mix(in srgb, var(--accent-color), transparent 97%);
}

.testimonials .testimonial-item {
  background-color: var(--contrast-color);
  box-shadow: 0px 0 20px color-mix(in srgb, var(--default-color), transparent 90%);
  box-sizing: content-box;
  padding: 30px;
  margin: 40px 30px;
  min-height: 320px;
  display: flex;
  flex-direction: column;
  text-align: center;
  transition: 0.3s;
}

.testimonials .testimonial-item .stars {
  margin-bottom: 15px;
}

.testimonials .testimonial-item .stars i {
  color: #ffc107;
  margin: 0 1px;
}

.testimonials .testimonial-item .testimonial-img {
  width: 90px;
  border-radius: 50%;
  border: 4px solid var(--background-color);
  margin: 0 auto;
}

.testimonials .testimonial-item h3 {
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0 5px 0;
}

.testimonials .testimonial-item h4 {
  font-size: 14px;
  color: color-mix(in srgb, var(--default-color), transparent 40%);
  margin: 0;
}

.testimonials .testimonial-item p {
  font-style: italic;
  margin: 0 auto 15px auto;
}

.testimonials .swiper-wrapper {
  height: auto;
}

.testimonials .swiper-pagination {
  margin-top: 20px;
  position: relative;
}

.testimonials .swiper-pagination .swiper-pagination-bullet {
  width: 12px;
  height: 12px;
  background-color: color-mix(in srgb, var(--default-color), transparent 85%);
  opacity: 1;
}

.testimonials .swiper-pagination .swiper-pagination-bullet-active {
  background-color: var(--accent-color);
}

.testimonials .swiper-slide {
  opacity: 0.3;
}

@media (max-width: 1199px) {
  .testimonials .swiper-slide-active {
    opacity: 1;
  }

  .testimonials .swiper-pagination {
    margin-top: 0;
  }

  .testimonials .testimonial-item {
    margin: 40px 20px;
  }
}

@media (min-width: 1200px) {
  .testimonials .swiper-slide-next {
    opacity: 1;
    transform: scale(1.12);
  }
}

/*--------------------------------------------------------------
# Contact Section
--------------------------------------------------------------*/
.contact .info-item {
  padding: 20px 0 30px 0;
  box-shadow: 0 0 4px color-mix(in srgb, var(--default-color), transparent 85%);
}

.contact .info-item i {
  color: var(--accent-color);
  width: 56px;
  height: 56px;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.3s ease-in-out;
  border-radius: 50%;
  box-shadow: 0 2px 3px color-mix(in srgb, var(--default-color), transparent 85%);
}

.contact .info-item h3 {
  font-size: 18px;
  font-weight: 700;
  margin: 10px 0;
}

.contact .info-item p {
  padding: 0;
  margin-bottom: 0;
  font-size: 14px;
}

.contact .php-email-form {
  height: 100%;
  padding: 30px;
  box-shadow: 0 0 4px color-mix(in srgb, var(--default-color), transparent 85%);
}

@media (max-width: 575px) {
  .contact .php-email-form {
    padding: 20px;
  }
}

.contact .php-email-form .error-message {
  display: none;
  background: #df1529;
  color: #ffffff;
  text-align: left;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.contact .php-email-form .sent-message {
  display: none;
  color: #ffffff;
  background: #059652;
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
  font-weight: 600;
}

.contact .php-email-form .loading {
  display: none;
  background: var(--background-color);
  text-align: center;
  padding: 15px;
  margin-bottom: 24px;
}


.contact .php-email-form .loading:before {
  content: "";
  display: inline-block;
  border-radius: 50%;
  width: 24px;
  height: 24px;
  margin: 0 10px -6px 0;
  border: 3px solid var(--accent-color);
  border-top-color: var(--background-color);
  animation: animate-loading 1s linear infinite;
}

.contact .php-email-form input[type=text],
.contact .php-email-form input[type=email],
.contact .php-email-form textarea {
  font-size: 14px;
  padding: 10px 15px;
  box-shadow: none;
  border-radius: 0;
  color: var(--default-color);
  background-color: color-mix(in srgb, var(--background-color), transparent 50%);
  border-color: color-mix(in srgb, var(--default-color), transparent 80%);
}

.contact .php-email-form input[type=text]:focus,
.contact .php-email-form input[type=email]:focus,
.contact .php-email-form textarea:focus {
  border-color: var(--accent-color);
}

.contact .php-email-form input[type=text]::placeholder,
.contact .php-email-form input[type=email]::placeholder,
.contact .php-email-form textarea::placeholder {
  color: color-mix(in srgb, var(--default-color), transparent 70%);
}

.contact .php-email-form button[type=submit] {
  color: var(--contrast-color);
  background: var(--accent-color);
  border: 0;
  padding: 10px 30px;
  transition: 0.4s;
  border-radius: 50px;
}

.contact .php-email-form button[type=submit]:hover {
  background: color-mix(in srgb, var(--accent-color), transparent 20%);
}

@keyframes animate-loading {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}

/*--------------------------------------------------------------
# Service Details Section
--------------------------------------------------------------*/
.service-details .service-box {
  padding: 20px;
  box-shadow: 0px 2px 20px color-mix(in srgb, var(--default-color), transparent 88%);
}

.service-details .service-box+.service-box {
  margin-top: 30px;
}

.service-details .service-box h4 {
  font-size: 20px;
  font-weight: 700;
  border-bottom: 2px solid color-mix(in srgb, var(--default-color), transparent 92%);
  padding-bottom: 15px;
  margin-bottom: 15px;
}

.service-details .services-list a {
  color: color-mix(in srgb, var(--default-color), transparent 20%);
  background-color: color-mix(in srgb, var(--default-color), transparent 96%);
  display: flex;
  align-items: center;
  padding: 12px 15px;
  margin-top: 15px;
  transition: 0.3s;
}

.service-details .services-list a:first-child {
  margin-top: 0;
}

.service-details .services-list a i {
  font-size: 16px;
  margin-right: 8px;
  color: var(--accent-color);
}

.service-details .services-list a.active {
  color: var(--contrast-color);
  background-color: var(--accent-color);
}

.service-details .services-list a.active i {
  color: var(--contrast-color);
}

.service-details .services-list a:hover {
  background-color: color-mix(in srgb, var(--accent-color), transparent 95%);
  color: var(--accent-color);
}

.service-details .download-catalog a {
  color: var(--default-color);
  display: flex;
  align-items: center;
  padding: 10px 0;
  transition: 0.3s;
  border-top: 1px solid color-mix(in srgb, var(--default-color), transparent 90%);
}

.service-details .download-catalog a:first-child {
  border-top: 0;
  padding-top: 0;
}

.service-details .download-catalog a:last-child {
  padding-bottom: 0;
}

.service-details .download-catalog a i {
  font-size: 24px;
  margin-right: 8px;
  color: var(--accent-color);
}

.service-details .download-catalog a:hover {
  color: var(--accent-color);
}

.service-details .help-box {
  background-color: var(--accent-color);
  color: var(--contrast-color);
  margin-top: 30px;
  padding: 30px 15px;
}

.service-details .help-box .help-icon {
  font-size: 48px;
}

.service-details .help-box h4,
.service-details .help-box a {
  color: var(--contrast-color);
}

.service-details .services-img {
  margin-bottom: 20px;
}

.service-details h3 {
  font-size: 26px;
  font-weight: 700;
}

.service-details p {
  font-size: 15px;
}

.service-details ul {
  list-style: none;
  padding: 0;
  font-size: 15px;
}

.service-details ul li {
  padding: 5px 0;
  display: flex;
  align-items: center;
}

.service-details ul i {
  font-size: 20px;
  margin-right: 8px;
  color: var(--accent-color);
}

/* service menage */
.work-wrapper1 {
  position: relative;
  padding-top: 80px;
}

.work-wrapper1::before {
  position: absolute;
  width: 100%;
  height: 360px;
  content: "";
  top: 0;
  left: 0;
  background: #30c7b5;
  z-index: 0;
  border-radius: 60px;
}

.work-wrapper2 {
  position: relative;
  padding-top: 80px;
}

.work-wrapper2::before {
  position: absolute;
  width: 100%;
  height: 490px;
  content: "";
  top: 0;
  left: 0;
  background: #30c7b5;
  z-index: 0;
  border-radius: 60px;
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

@media (max-width: 1399px) {
  .work-wrapper2 {
    padding-top: 60px;
  }

  .work-wrapper2::before {
    height: 290px;
  }
}

@media (max-width: 1199px) {
  .work-wrapper2 {
    padding-top: 20px;
  }

  .work-wrapper2::before {
    height: 490px;
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

/* working process */
.step {
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
  color: #3498db;
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

/* button */
.yellow-btn {
  background-color: #30c7b5;
  /* Yellow color */
  color: white;
  /* Text color */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px;
  /* Adjust this value as needed */
}

.yellow-btn:hover {
  background-color: #30c7b5;
  /* Slightly darker yellow for hover effect */
}

.bg-yellow-button {
  background-color: #30c7b5;
  /* Yellow color */
  color: #333;
  /* Dark text color */
  transition: background-color 0.3s ease, color 0.3s ease;
  /* Smooth transition */
}

/* Hover effect for button */
.bg-yellow-button:hover {
  background-color: #FFF;
  /* White background color */
  color: #FFEA00;
  /* Yellow text color */
}
</style>
