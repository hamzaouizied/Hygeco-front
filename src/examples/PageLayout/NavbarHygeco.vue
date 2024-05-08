<script setup>


defineProps({
  btnBackground: {
    type: String,
    default: "",
  },
  isBlur: {
    type: String,
    default: "",
  },
  darkMode: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg top-0 z-index-3 position-absolute mt-4"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
  >
    <div class="container ps-2 pe-0">
      <router-link
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        :class="darkMode ? 'text-black' : 'text-white'"
        to="/"
        > <img  src="../../assets/img/H-Logo.png" alt="Hygeco Logo" /></router-link
      >
      <button
        class="shadow-none navbar-toggler ms-2"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navigation"
        aria-controls="navigation"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="mt-2 navbar-toggler-icon">
          <span class="navbar-toggler-bar bar1"></span>
          <span class="navbar-toggler-bar bar2"></span>
          <span class="navbar-toggler-bar bar3"></span>
        </span>
      </button>
      <div
        id="navigation"
        class="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0"
      >
        <ul class="mx-auto navbar-nav navbar-nav-hover">
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Landing Page' }" class="nav-link">Home</router-link>
            </li>
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Landing Page' }" class="nav-link">Booking</router-link>
            </li>
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Pricing Hygeco' }" class="nav-link">Pricing</router-link>
            </li>
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Landing Page' }" class="nav-link">Services</router-link>
            </li>
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Landing Page' }" class="nav-link">Contact Us</router-link>
            </li>
          
        </ul>
        <ul class="navbar-nav d-lg-block d-none">
          <li class="nav-item">
            <router-link
            :to="{ name: 'Signin Basic' }"
            class="mb-0 btn btn-sm me-1"
            :class="btnBackground ? btnBackground : 'bg-white text-dark'"
            >
            Sign In
            </router-link>
          
          </li>
        </ul>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
