<!--
=========================================================
* Vue Argon Dashboard 2 PRO - v4.0.0
=========================================================

* Product Page: https://creative-tim.com/product/vue-argon-dashboard-pro
* Copyright 2024 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
-->
<script>
import { mapState } from "vuex";
import Sidenav from "./examples/SidenavHygeco";
import Configurator from "@/examples/Configurator.vue";
import Navbar from "@/examples/Navbars/Navbar.vue";
import AppFooter from "@/examples/Footer.vue";

export default {
  components: {
    Sidenav,
    Configurator,
    Navbar,
    AppFooter,
  },
  computed: {
    ...mapState({
      layout: state => state.layout,
      showSidenav: state => state.showSidenav,
      showNavbar: state => state.showNavbar,
      showFooter: state => state.showFooter,
      showConfig: state => state.showConfig,
      hideConfigButton: state => state.hideConfigButton,
    }),
  },
};
</script>

<template>
  <div
    v-show="layout === 'landing'"
    class="landing-bg h-100 bg-gradient-primary position-fixed w-100"
  ></div>
  <sidenav v-if="showSidenav" />
  <main class="main-content position-relative max-height-vh-100 h-100">
    <navbar v-if="showNavbar" />
    <router-view />
    <app-footer v-show="showFooter" />
    <configurator
      :class="[showConfig ? 'show' : '', hideConfigButton ? 'd-none' : '']"
    />
  </main>
</template>
