<script setup>
import NavPill from "./components/NavPill.vue";
import SideNav from "./components/SideNav.vue";
import SideNavItem from "./components/SideNavItem.vue";
</script>
<template>
  <div class="container-fluid mt-6">
    <div class="row align-items-center">
      <div class="col-lg-4 col-sm-8">
        <nav-pill />
      </div>
    </div>
    <div class="row mb-5 mt-5">
      <div class="col-lg-3">
        <side-nav />
      </div>
      <div class="col-lg-9 mt-lg-0 mt-4">
        <side-nav-item />
      </div>
    </div>
  </div>
</template>
