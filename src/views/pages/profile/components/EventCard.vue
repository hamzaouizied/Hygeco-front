<script setup>
defineProps({
  id: {
    type: String,
    default: "",
  },
  img: {
    type: String,
    default: "",
  },
  title: {
    type: String,
    default: "",
  },
  dateTime: {
    type: String,
    default: "",
  },
  description: {
    type: String,
    default: "",
  },
  action: {
    type: Object,
    route: String,
    color: String,
    label: String,
    default: () => {},
  },
  members: {
    type: Array,
    img: String,
    name: String,
    default: () => [],
  },
});
</script>
<template>
  <div class="mt-4 card">
    <div class="p-3 card-body">
      <div class="d-flex">
        <div class="avatar avatar-lg">
          <img alt="Image placeholder" :src="img" />
        </div>
        <div class="my-auto ms-2">
          <h6 class="mb-0">{{ title }}</h6>
          <p class="mb-0 text-xs">{{ dateTime }}</p>
        </div>
      </div>
      <!-- eslint-disable-next-line vue/no-v-html -->
      <p class="mt-3" v-html="description" />
      <p class="mb-0"><b>Meeting ID:</b> {{ id }}</p>
      <hr class="horizontal dark" />
      <div class="d-flex">
        <button
          type="button"
          class="mb-0 btn btn-sm"
          :class="`bg-gradient-${action.color}`"
        >
          {{ action.label }}
        </button>
        <div class="avatar-group ms-auto">
          <a
            v-for="({ img: memberImage, name }, index) of members"
            :key="index"
            href="javascript:;"
            class="avatar avatar-lg avatar-xs rounded-circle"
            data-bs-toggle="tooltip"
            data-bs-placement="bottom"
            :title="name"
          >
            <img alt="Image placeholder" :src="memberImage" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
