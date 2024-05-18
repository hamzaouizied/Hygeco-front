<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import { ref } from "vue";

import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
import UserInfo from "./Users/components/UserInfo.vue";
import UserAddress from "./Users/components/UserAddress.vue";
// import UserSocials from "./Users/components/UserSocials.vue";
import UserProfile from "./Users/components/UserProfile.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import Account from "@/views/applications/wizard/components/Account.vue";



const activeClass = "js-active position-relative";
const activeStep = ref(0);
const formSteps = 3;
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
const nextStep = () => {
  if (activeStep.value < formSteps) {
    activeStep.value += 1;
  }
};
const prevStep = () => {
  if (activeStep.value > 0) {
    activeStep.value -= 1;
  }
};
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
    backgroundImage: 'url(' + require('../../assets/img/header1.png') + ')',
    backgroundSize: 'cover',
    padding: '100px',
  }">

        <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
            <div class="row">
                <div class="mx-auto text-center col-md-6 mt-4">
                    <h3 class="text-white">Nous Service </h3>
                    <p class="text-white">
                        Hygeco is a Montreal-based company that offers a range of professional cleaning and laundry
                        services
                    </p>
                </div>
            </div>
           
        </div>
    </div>
    <div class="container-fluid py-5">
      <div class="row">
        <div class="col-12">
          <div class="multisteps-form">
            <div class="row">
              <div class="col-12 col-lg-8 mx-auto mb-4">
                <div class="card">
                  <div class="card-body">
                    <!-- <div class="multisteps-form__progress">
                      <button
                        class="multisteps-form__progress-btn js-active"
                        type="button"
                        title="User Info"
                        :class="activeStep >= 0 ? activeClass : ''"
                        @click="activeStep = 0"
                      >
                        <span>User Info</span>
                      </button>
                      <button
                        class="multisteps-form__progress-btn"
                        type="button"
                        title="Address"
                        :class="activeStep >= 1 ? activeClass : ''"
                        @click="activeStep = 1"
                      >
                        Address
                      </button>
                      <button
                        class="multisteps-form__progress-btn"
                        type="button"
                        title="Socials"
                        :class="activeStep >= 2 ? activeClass : ''"
                        @click="activeStep = 2"
                      >
                        Socials
                      </button>
                      <button
                        class="multisteps-form__progress-btn"
                        type="button"
                        title="Profile"
                        :class="activeStep >= 3 ? activeClass : ''"
                        @click="activeStep = 3"
                      >
                        Profile
                      </button>
                    </div> -->
                  </div>
                </div>
              </div>
            </div>
            <!--form panels-->
            <div class="row">
              <div class="col-12 col-lg-8 m-auto">
                <form class="multisteps-form__form">
                  <!--single form panel-->
                  <user-info
                    :class="activeStep === 0 ? activeClass : ''"
                    @next-step="nextStep"
                  />
                  <!--single form panel-->
                  <user-address
                    :class="activeStep === 1 ? activeClass : ''"
                    @next-step="nextStep"
                    @prev-step="prevStep"
                  />
                  <!--single form panel-->
                  <account
                  :class="activeStep === 2 ? activeClass : ''"
                  @next-step="nextStep"
                  @prev-step="prevStep"
                />
                  <!--single form panel-->
                  <user-profile
                    :class="activeStep === 3 ? activeClass : ''"
                    @prev-step="prevStep"
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
