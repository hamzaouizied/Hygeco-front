<script setup>
import downArrWhite from "@/assets/img/down-arrow-white.svg";
import downArrBlack from "@/assets/img/down-arrow-dark.svg";
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
            <router-link :to="{ name: 'Landing Page' }" class="nav-link">Accueil</router-link>
            </li>
            <li class="mx-2 nav-item dropdown dropdown-hover">
            <a
              id="dropdownMenuDocs"
              role="button"
              class="cursor-pointer nav-link ps-2 d-flex justify-content-between align-items-center"
              :class="darkMode && 'text-dark'"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Services
              <img
                :src="downArrWhite"
                alt="down-arrow"
                class="arrow ms-1"
                :class="darkMode ? 'd-none' : 'd-lg-block d-none'"
              />
              <img
                :src="downArrBlack"
                alt="down-arrow"
                class="arrow ms-1 d-block"
                :class="darkMode ? 'd-lg-block' : 'd-lg-none'"
              />
            </a>
            <div
              class="p-3 mt-0 dropdown-menu dropdown-menu-animation dropdown-lg mt-lg-3 border-radius-lg  "
              aria-labelledby="dropdownMenuDocs"
            >
              <div class="d-none d-lg-block">
                <ul class="list-group">
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/overview/argon-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-planet text-success"></i>
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Ménage
                          </h6>
                          
                        </div>
                      </div>
                    </a>
                  </li>
                  <li class="p-0 border-0 nav-item list-group-item">
                    <a
                      class="py-2 dropdown-item ps-3 border-radius-md"
                      href="https://www.creative-tim.com/learning-lab/vue/colors/argon-dashboard/"
                    >
                      <div class="d-flex">
                        <div class="h-10 mt-1 icon me-3 d-flex">
                          <i class="ni ni-single-copy-04 text-success"></i>
                        </div>
                        <div>
                          <h6
                            class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                          >
                            Buandrie
                          </h6>
                          
                        </div>
                      </div>
                    </a>
                  </li>
                 
                </ul>
              </div>
              <div class="row d-lg-none"  >
                <div class="col-md-6 g-0">
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-planet text-success"></i>
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                        Ménage
                        </h6>
                        
                      </div>
                    </div>
                  </a>
                  <a
                    class="py-2 dropdown-item ps-3 border-radius-md"
                    href="../../pages/about-us.html"
                  >
                    <div class="d-flex">
                      <div class="h-10 mt-1 icon me-3 d-flex">
                        <i class="ni ni-single-copy-04 text-success"></i>
                      </div>
                      <div>
                        <h6
                          class="p-0 dropdown-header text-dark font-weight-bolder d-flex align-items-center"
                        >
                        Buandrie
                        </h6>
                        
                      </div>
                    </div>
                  </a>
                
                </div>
              </div>
            </div>
          </li>
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Pricing Hygeco' }" class="nav-link">Reservation</router-link>
            </li>
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Landing Page' }" class="nav-link">Tarifs</router-link>
            </li>
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Landing Page' }" class="nav-link">À propos</router-link>
            </li>
            <li class="mx-2 nav-item">
            <router-link :to="{ name: 'Landing Page' }" class="nav-link">Contactez-Nous </router-link>
            </li>

        </ul>
        <router-link
            :to="{ name: 'Signin Basic' }"
            class="mb-0 btn btn-sm me-1"
            :class="btnBackground ? btnBackground : 'bg-white text-dark'"
            >
            Sign In
            </router-link>

      </div>
    </div>
  </nav>
  <!-- End Navbar -->
</template>
<style scoped>
 @media (max-width: 767.98px) {
    .navbar-collapse .navbar-nav .nav-item.dropdown .dropdown-menu {
        /* display: none; */
        left: 0;
        right: 0;
        width: 70%;
        height: 50%;
    }
}
</style>