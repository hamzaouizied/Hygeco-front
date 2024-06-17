<script setup>
import { computed, ref, onBeforeUpdate, onMounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";
import Breadcrumbs from "../Breadcrumbs.vue";
import axios from "axios";
import NotificationModal from "./Notifications.vue";

const showMenu = ref(false);
const store = useStore();
const isRTL = computed(() => store.state.isRTL);
const isNavFixed = computed(() => store.state.isNavFixed);
const darkMode = computed(() => store.state.darkMode);

const route = useRoute();
const token = localStorage.getItem("token");
const notifications = ref([]);
const showModal = ref(false);
const selectedNotification = ref(null);

const notificationLimit = ref(4);

onMounted(async () => {
  try {
    const response = await axios.get("https://hygeco-back.test/api/auth/notifications/contact-created", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    notifications.value = response.data;
    console.log("your notification", notifications);
  } catch (error) {
    console.error(error);
  }
});

const formatTime = (timestamp) => {
  const now = new Date();
  const createdAt = new Date(timestamp);
  const diff = Math.floor((now - createdAt) / (1000 * 60)); // diff in minutes
  if (diff < 60) {
    return `${diff} minutes ago`;
  } else if (diff < 1440) {
    return `${Math.floor(diff / 60)} hours ago`;
  } else {
    return `${Math.floor(diff / 1440)} days ago`;
  }
};

const currentRouteName = computed(() => {
  return route.name;
});

const currentDirectory = computed(() => {
  let dir = route.path.split("/")[1];
  return dir.charAt(0).toUpperCase() + dir.slice(1);
});

const navbarMinimize = () => store.commit("navbarMinimize");
const toggleConfigurator = () => store.commit("toggleConfigurator");

const toggleNavigationOnMobile = () => {
  if (window.innerWidth < 1200) {
    navbarMinimize();
  }
};
const closeMenu = () => {
  setTimeout(() => {
    showMenu.value = false;
  }, 100);
};
const openModal = (notification) => {
  selectedNotification.value = notification;
  showModal.value = true;
};

const closeModal = () => {
  showModal.value = false;
  selectedNotification.value = null;
};
onBeforeUpdate(() => {
  toggleNavigationOnMobile();
});

const loadMoreNotifications = () => {
  notificationLimit.value += 4;
};
</script>

<template>
  <nav
    id="navbarBlur"
    :class="`${
      !isNavFixed
        ? 'navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none'
        : `navbar navbar-main navbar-expand-lg px-0 mx-4 border-radius-xl shadow-none position-sticky ${
            darkMode ? 'bg-default' : 'bg-white'
          } left-auto top-2 z-index-sticky`
    } ${isRTL ? 'top-0 position-sticky z-index-sticky' : ''}`"
    v-bind="$attrs"
    data-scroll="true"
  >
    <div class="px-3 py-1 container-fluid">
      <breadcrumbs
        :current-page="currentRouteName"
        :current-directory="currentDirectory"
      />
      <div
        class="sidenav-toggler sidenav-toggler-inner d-xl-block d-none"
        :class="isRTL ? 'me-3' : ''"
      >
        <a
          href="#"
          class="p-0 nav-link text-body"
          @click.prevent="navbarMinimize"
        >
          <div class="sidenav-toggler-inner">
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
            <i
              class="sidenav-toggler-line"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
              "
            ></i>
          </div>
        </a>
      </div>
      <div
        id="navbar"
        class="mt-2 collapse navbar-collapse mt-sm-0 me-md-0 me-sm-4"
        :class="isRTL ? 'px-0' : 'me-sm-4'"
      >
        <div
          class="pe-md-3 d-flex align-items-center"
          :class="isRTL ? 'me-md-auto' : 'ms-md-auto'"
        >
          <div class="input-group">
            <span class="input-group-text text-body">
              <i class="fas fa-search" aria-hidden="true"></i>
            </span>
            <input
              type="text"
              class="form-control"
              :placeholder="isRTL ? 'أكتب هنا...' : 'Type here...'"
            />
          </div>
        </div>
        <ul class="navbar-nav justify-content-end">
          <li class="nav-item d-flex align-items-center">
            <router-link
              :to="{ name: 'Signin Illustration' }"
              class="px-0 nav-link font-weight-bold"
              :class="
                isNavFixed && !darkMode ? ' opacity-8 text-dark' : 'text-white'
              "
              target="_blank"
            >
              <i class="fa fa-user" :class="isRTL ? 'ms-sm-2' : 'me-sm-1'"></i>
              <span v-if="isRTL" class="d-sm-inline d-none">يسجل دخول</span>
              <span v-else class="d-sm-inline d-none">Sign In</span>
            </router-link>
          </li>
          <li class="nav-item d-xl-none ps-3 d-flex align-items-center">
            <a
              id="iconNavbarSidenav"
              href="#"
              class="p-0 nav-link text-white"
              @click.prevent="navbarMinimize"
            >
              <div class="sidenav-toggler-inner">
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
                <i
                  :class="`sidenav-toggler-line ${
                    isNavFixed && !darkMode ? ' opacity-8 bg-dark' : 'bg-white'
                  }`"
                ></i>
              </div>
            </a>
          </li>
          <li class="px-3 nav-item d-flex align-items-center">
            <a class="p-0 nav-link" @click="toggleConfigurator">
              <i
                :class="`cursor-pointer fa fa-cog fixed-plugin-button-nav ${
                  !isNavFixed || darkMode ? 'text-white' : 'opacity-8 text-dark'
                }`"
              ></i>
            </a>
          </li>
          <li
            class="nav-item dropdown d-flex align-items-center"
            :class="isRTL ? 'ps-2' : 'pe-2'"
          >
            <a
              id="dropdownMenuButton"
              href="#"
              :class="`p-0 nav-link ${
                isNavFixed && !darkMode ? ' opacity-8 text-dark' : 'text-white'
              } ${showMenu && 'show'}`"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              @click="showMenu = !showMenu"
              @blur="closeMenu"
            >
              <i class="cursor-pointer fa fa-bell"></i>
            </a>
            <ul class="dropdown-menu dropdown-menu-end" :class="{ 'show': showMenu }" aria-labelledby="dropdownMenuButton">
              <li v-for="notification in notifications.slice(0, notificationLimit)" :key="notification.id" class="mb-2">
                <div class="dropdown-item border-radius-md"  @click="openModal(notification)">
                  <div class="py-1 d-flex">
                    <div class="my-auto">
                      <img
                        src="../../assets/img/team-2.jpg"
                        class="avatar avatar-sm me-3"
                        alt="user image"
                      />
                    </div>
                    <div class="d-flex flex-column justify-content-center">
                      <h6 class="mb-1 text-sm font-weight-normal">
                        <span class="font-weight-bold">{{ JSON.parse(notification.data).email }}</span>
                        <span class="font-weight-bold" style="color: red">{{ JSON.parse(notification.data).message }}</span>
                      </h6>
                      <p class="mb-0 text-xs text-secondary">
                        <i class="fa fa-clock me-1"></i>
                        {{ formatTime(notification.created_at) }}
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li v-if="notifications.length > notificationLimit" class="text-center">
                <a class="dropdown-item text-primary" href="#" @click.prevent="loadMoreNotifications">Voir Plus</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <NotificationModal :show="showModal" :notification="selectedNotification" @close="closeModal" />
</template>

