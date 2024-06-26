<script setup>
import { onBeforeMount, onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";

import Sidenav from "@/examples/Sidenav";
import AppFooter from "@/examples/Footer.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import CalendarCard from "./components/CalendarCard.vue";
import EmailCard from "./components/EmailCard.vue";
import TodoCard from "./components/TodoCard.vue";
import MiniPlayerCard from "@/examples/Cards/MiniPlayerCard.vue";
import MessageCard from "./components/MessageCard.vue";
import setTooltip from "@/assets/js/tooltip.js";

import image1 from "@/assets/img/team-1.jpg";
import image2 from "@/assets/img/team-2.jpg";
import image3 from "@/assets/img/team-3.jpg";
import image4 from "@/assets/img/team-4.jpg";

const body = document.getElementsByTagName("body")[0];

const store = useStore();

const toggleDefaultLayout = () => store.commit("toggleDefaultLayout");

onBeforeMount(() => {
  store.state.layout = "vr";
  toggleDefaultLayout();
  body.classList.add("virtual-reality");
});

onMounted(() => {
  setTooltip(store.state.bootstrap);
});
onBeforeUnmount(() => {
  store.state.layout = "default";
  toggleDefaultLayout();
  body.classList.remove("virtual-reality");

  if (store.state.isPinned === false) {
    const sidenav_show = document.querySelector(".g-sidenav-show");
    sidenav_show.classList.remove("g-sidenav-hidden");
    sidenav_show.classList.add("g-sidenav-pinned");
    store.state.isPinned = true;
  }
});
</script>
<template>
  <div class="mt-4">
    <navbar class="bg-success" />
  </div>
  <div
    class="mx-3 mt-3 border-radius-xl position-relative"
    :style="{
      backgroundImage: 'url(' + require('../../../assets/img/vr-bg.jpg') + ')',
      backgroundSize: 'cover',
    }"
  >
    <sidenav />

    <main class="mt-1 main-content border-radius-lg">
      <div
        class="section min-vh-85 position-relative transform-scale-0 transform-scale-md-7"
      >
        <div class="container-fluid">
          <div class="pt-10 row">
            <div class="pt-5 text-center col-lg-1 col-md-1 pt-lg-0 ms-lg-5">
              <a
                href="javascript:;"
                class="border-0 avatar avatar-md d-block"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="My Profile"
              >
                <img
                  class="border-radius-lg"
                  alt="Image placeholder"
                  src="../../../assets/img/team-1.jpg"
                />
              </a>
              <button
                class="p-2 mt-2 btn btn-white border-radius-lg d-block"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Home"
              >
                <i class="p-2 fas fa-home"></i>
              </button>
              <button
                class="p-2 btn btn-white border-radius-lg d-block"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Search"
              >
                <i class="p-2 fas fa-search"></i>
              </button>
              <button
                class="p-2 btn btn-white border-radius-lg d-block"
                type="button"
                data-bs-toggle="tooltip"
                data-bs-placement="right"
                title="Minimize"
              >
                <i class="p-2 fas fa-ellipsis-h"></i>
              </button>
            </div>
            <div class="col-lg-8 col-md-11">
              <div class="d-flex">
                <div class="me-auto">
                  <h1 class="mb-0 display-1 font-weight-bold mt-n4">128°C</h1>
                  <h6 class="mb-0 text-uppercase ms-1">Cloudy</h6>
                </div>
                <div class="ms-auto">
                  <img
                    class="w-50 float-end mt-lg-n4"
                    src="../../../assets/img/small-logos/icon-sun-cloud.png"
                    alt="image sun"
                  />
                </div>
              </div>
              <div class="mt-4 row">
                <div class="col-lg-4 col-md-4">
                  <calendar-card
                    :items="[
                      {
                        time: '08:00',
                        description: `Synk up with Mark<small class='text-secondary font-weight-normal'>Hangouts</small>`,
                      },
                      {
                        time: '09:30',
                        description: `Gym<br /><small class='text-secondary font-weight-normal'>World Class</small>`,
                      },
                      {
                        time: '11:00',
                        description: `Design Review<br /><small class='text-secondary font-weight-normal'>Zoom</small>`,
                      },
                    ]"
                  />
                </div>
                <div class="mt-4 col-lg-4 col-md-4 mt-sm-0">
                  <todo-card :todos="['Shopping', 'Meeting']" />
                  <email-card />
                </div>
                <div class="mt-4 col-lg-4 col-md-4 mt-sm-0">
                  <mini-player-card />
                  <message-card
                    :messages="[
                      {
                        route: '/',
                        tooltip: '2 New Messages',
                        image: { url: image1, alt: 'Image Placeholder' },
                      },
                      {
                        route: '/',
                        tooltip: '1 New Messages',
                        image: { url: image2, alt: 'Image Placeholder' },
                      },
                      {
                        route: '/',
                        tooltip: '13 New Messages',
                        image: { url: image3, alt: 'Image Placeholder' },
                      },
                      {
                        route: '/',
                        tooltip: '7 New Messages',
                        image: { url: image4, alt: 'Image Placeholder' },
                      },
                    ]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
  <app-footer class="py-3 bg-white border-radius-lg" />
</template>
