<script setup>

import { computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

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
const router = useRouter();
const store = useStore();
const isAuthenticated = computed(() => store.state.authenticated);

function logout() {
  store.commit("setAuthenticated", false);
  localStorage.removeItem("token");
  console.log("log out succefully");
  // Redirect to the login page
  router.push({ name: "Landing Page" });
}
</script>
<template>
  <!-- Navbar -->
  <nav
    class="navbar navbar-expand-lg top-0 z-index-3"
    :class="isBlur ? isBlur : 'shadow-none my-2 navbar-transparent w-100'"
    style="margin-top: 3.5rem !important;"
  >
    <div class="container ps-2 pe-0">
      <router-link
        class="navbar-brand font-weight-bolder ms-lg-0 ms-3"
        :class="darkMode ? 'text-black' : 'text-white'"
        to="/"
      >
        <img src="../../assets/img/H-Logo.png" alt="Hygeco Logo" />
      </router-link>
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
      <div id="navigation" class="pt-3 pb-2 collapse navbar-collapse w-100 py-lg-0">
        <ul class="mx-auto navbar-nav navbar-nav-hover">
          <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Landing Page' }" class="nav-link"  active-class="active" :style="{ color: activeNavItemColor }">Accueil</router-link>
          </li>
          <li class="mx-2 nav-item">
            <router-link :to="{ name: 'about' }" class="nav-link"  active-class="active" :style="{ color: activeNavItemColor }">À propos</router-link>
          </li>
          <li class="mx-2 nav-item">
            <router-link :to="{ name: 'menage' }" class="nav-link" active-class="active"  :style="{ color: activeNavItemColor }">Services Résidentiels</router-link>
          </li>
          <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Pricing Hygeco' }" class="nav-link"  active-class="active" :style="{ color: activeNavItemColor }">Bon Plans</router-link>
          </li>
          <li class="nav-item dropdown mx-2">
            <a
              class="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Reservation
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown"  >
              <router-link class="dropdown-item" :to="{ name: 'reservation' }"  active-class="active" :style="{ color: activeNavItemColor }">Ménage</router-link>
              <router-link class="dropdown-item" :to="{ name: 'reservation buandrie' }"  active-class="active" :style="{ color: activeNavItemColor }">Buanderie</router-link>
            </div>
          </li>
          <li class="mx-2 nav-item">
            <router-link :to="{ name: 'menage commercial' }" class="nav-link"  active-class="active"  :style="{ color: activeNavItemColor }"> Services Commerciaux</router-link>
          </li>
          <li class="mx-2 nav-item">
            <router-link :to="{ name: 'contact' }" class="nav-link"  active-class="active"  :style="{ color: activeNavItemColor }">Contactez-Nous</router-link>
          </li>
        </ul>
        <router-link
      v-if="!isAuthenticated"
      :to="{ name: 'Signin Illustration' }"
      class="mb-0 btn btn-sm me-1"
      :class="btnBackground? btnBackground : 'bg-white text-dark'"
    >
      Se connecter
    </router-link>
    <button
      v-else
      @click="logout"
      class="mb-0 btn btn-sm me-1"
      :class="btnBackground? btnBackground : 'bg-white text-dark'"
    >
      Se Déconnecter 
    </button>
      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>

<style scoped>
@media (max-width: 767.98px) {
  .navbar-collapse .navbar-nav .nav-item.dropdown .dropdown-menu {
    left: 0;
    right: 0;
    width: 70%;
    height: 50%;
  }
}
.active {
  
  border-bottom: 2px solid aquamarine; /* add your border color here */
}
</style>
