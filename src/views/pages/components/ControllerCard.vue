<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
import ArgonSwitch from "@/components/ArgonSwitch.vue";
const store = useStore();
const isRTL = computed(() => store.state.isRTL);
defineProps({
  id: {
    type: String,
    default: "",
  },
  image: {
    type: Object,
    url: String,
    alt: String,
    label: String,
    default: () => {},
  },
  controllerIs: {
    type: String,
    default: "On",
  },
});
</script>
<template>
  <div class="card blur shadow-blur">
    <div class="card-body">
      <div class="d-flex">
        <p class="mb-0" :class="isRTL ? 'ms-5' : 'me-5'">
          {{ controllerIs }}
        </p>
        <argon-switch :id="id" :name="image.label" checked />
      </div>
      <img class="img-fluid pt-3 pb-2" :src="image.url" :alt="image.alt" />
      <p class="mb-0">{{ image.label }}</p>
    </div>
  </div>
</template>
