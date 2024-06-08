<script setup>
import { useStore } from "vuex";

import SidenavItem from "./SidenavItem.vue";
import SidenavCollapseItem from "./SidenavCollapseItem.vue";

const store = useStore();
</script>

<template>
  <div
    id="sidenav-collapse-main"
    class="collapse navbar-collapse w-auto h-auto h-100"
  >
    <ul class="navbar-nav">
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Gestions
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse-item refer="usersExample" mini-icon="U" text="Utilisateurs">
          <template #nav-child-item>
            <sidenav-item :to="{ name: 'Data Hygeco' }" mini-icon="E" text="Employees" />
            <sidenav-item :to="{ name: 'Clients Hygeco' }" mini-icon="C" text="Clients" />
            <sidenav-item :to="{ name: 'Commercial Hygeco' }" mini-icon="CC" text="Commercial Clients" />
            <sidenav-item :to="{ name: 'New User' }" mini-icon="N" text="New User" />
          </template>
        </sidenav-collapse-item>

        <sidenav-collapse-item refer="usersExample" mini-icon="R" text="Reservations">
          <template #nav-child-item>
            <sidenav-item :to="{ name: 'Reservation Hygeco' }" mini-icon="R" text="Nos Reservations" />
            <sidenav-item :to="{ name: 'Clients Hygeco' }" mini-icon="C" text="Clients" />
            <sidenav-item :to="{ name: 'Commercial Hygeco' }" mini-icon="CC" text="Commercial Clients" />
            <sidenav-item :to="{ name: 'New User' }" mini-icon="N" text="New User" />
          </template>
        </sidenav-collapse-item>

        <sidenav-collapse-item refer="usersExample" mini-icon="S" text="Services">
          <template #nav-child-item>
            <sidenav-item :to="{ name: 'Data Hygeco' }" mini-icon="R" text="Employees" />
            <sidenav-item :to="{ name: 'Clients Hygeco' }" mini-icon="C" text="Clients" />
            <sidenav-item :to="{ name: 'Commercial Hygeco' }" mini-icon="CC" text="Commercial Clients" />
            <sidenav-item :to="{ name: 'New User' }" mini-icon="N" text="New User" />
          </template>
        </sidenav-collapse-item>

        <sidenav-collapse-item refer="usersExample" mini-icon="C" text="Contacts">
          <template #nav-child-item>
            <sidenav-item :to="{ name: 'Contact Client' }" mini-icon="R" text="Contact Client" />
            <sidenav-item :to="{ name: 'Contact Commercial' }" mini-icon="C" text="Contact Commercial" />
          </template>
        </sidenav-collapse-item>
      </li>
    </ul>
  </div>
</template>

<style>
#sidenav-collapse-main {
  height: 100vh; /* Full height of the viewport */
  overflow: hidden; /* Hide any overflow content */
}

.navbar-nav {
  max-height: 100%; /* Prevent navbar from overflowing its parent */
  overflow: hidden; /* Only if you want to enable scrolling for the navbar items */
}
</style>
