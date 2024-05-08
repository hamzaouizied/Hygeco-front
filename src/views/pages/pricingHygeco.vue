<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
import PricingCard from "./components/PricingCard.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import PlayerCard from "@/views/dashboards/components/PlayerCard.vue";


const store = useStore();

onMounted(() => {
  store.state.showSidenav = false;
  store.state.showNavbar = false;
  store.state.showFooter = false;
  setNavPills();
});
onBeforeUnmount(() => {
  store.state.showSidenav = true;
  store.state.showNavbar = true;
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
  <navbar />
  <div
    class="page-header position-relative"
    :style="{
      backgroundImage:
        'url(' + require('../../assets/img/pricing-header-bg.jpg') + ')',
      backgroundSize: 'cover',
      padding : '100px',
    }"
  >
    <span class="mask bg-gradient-success opacity-6"></span>
    <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
      <div class="row">
        <div class="mx-auto text-center col-md-6 mt-4">
          <h3 class="text-white">See our pricing</h3>
          
        </div>
      </div>
      
    </div>
  </div>
  <div class="mt-n8">
    <div class="container">
      <div class="tab-content tab-space">
        <div id="monthly" class="tab-pane active">
          <div class="row">
            <div class="mb-4 col-md-4 ">
              <pricing-card
                badge="Laundry Self Service"
                :price="{ currency: '$', value: '59' }"
                :specifications="[
                  { label: 'Wash (2 loads machine)', price: '$59',  includes: true },
                  { label: 'Wash (3 loads machine)', price: '$59',  includes: true },
                  { label: 'Wash (4 loads machine)', price: '$59',  includes: false },
                  { label: 'Wash (5 loads machine)',  price: '$59', includes: false },
                  { label: 'Dry 10min', price: '$59',  includes: false },
                  { label: 'Detergent (per load)', price: '$59',  includes: false },
                  { label: 'Softener (per load )', price: '$59',  includes: false },
                  { label: 'Bleach (per load)', price: '$59',  includes: false },
                  { label: 'Plastic Bag (PCS)', price: '$59',  includes: false },
                  { label: 'Dryer sheeets (PCS)', price: '$59',  includes: false },
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Book Now',
                }"
              />
            </div>
            <div class="mb-4 col-md-4 mb-lg-0">
              <pricing-card
                badge="PickUp & Delivery Service"
                :price="{ currency: '$', value: '59' }"
                :specifications="[
                  { label: 'Pick-up&Delivery (48h + delivery fee)', includes: true },
                  { label: 'Pick-up&Delivery (24h + delivery fee)', includes: true },
                  { label: 'Pick-up&Delivery (Same Day + delivery fee)', includes: false },
                 
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Book Now',
                }"
              />
            </div>
            <div class="mb-4 col-md-4 mb-lg-0">
              <pricing-card
                badge="Full Service"
                :price="{ currency: '$', value: '89' }"
                :specifications="[
                  { label: 'Wash&Fold + delivery fee', includes: true },
                  { label: 'Dry Only + delivery fee', includes: true },
                  { label: 'Fold Only + delivery fee', includes: true },
                  { label: 'Twin & Full Comforters	', includes: true },
                  { label: 'Queen Comforters', includes: false },
                  { label: 'King Comforters	', includes: false },
                  { label: 'Pillows	', includes: false },

                ]"
                :action="{
                  color: 'success',
                  route: 'javascript:;',
                  label: 'Book Now',
                }"
              />
            </div>
            <div class="mb-4 col-md-4 mb-lg-0">
              <pricing-card
                badge="Cleaning Services"
                :price="{ currency: '$', value: '99' }"
                :specifications="[
                  { label: 'Regular Cleaning (1 cleaner)', includes: true },
                  { label: 'Deep Cleaning (2 cleaner)', includes: true },
                  { label: 'Post Construction Cleaning (2 cleaner)', includes: true },
                  { label: 'Window Cleaning (1 cleaner)', includes: true },
                  
                ]"
                :action="{
                  color: 'dark',
                  route: 'javascript:;',
                  label: 'Book Now',
                }"
              />
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </div>
  <div class="row">
      <div class="col-12">
        <player-card />
      </div>
    </div>
  <app-footer />
</template>
