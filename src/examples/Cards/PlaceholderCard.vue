<script setup>
defineProps({
  title: {
    type: Object,
    default: () => {},
    variant: {
      validator(value) {
        return ["h1", "h2", "h3", "h4", "h5", "h6"].includes(value);
      },
    },
    text: String,
  },
  icon: {
    type: String,
    default: "plus",
  },
  hasBorder: {
    type: Boolean,
    default: false,
  },
});
</script>
<template>
  <div :class="`card h-100 ${hasBorder ? 'border' : ''}`">
    <div
      class="text-center card-body d-flex flex-column justify-content-center"
    >
      <a href="javascript:;">
        <i
          class="mb-1 text-sm text-secondary"
          :class="`fa fa-${icon}`"
          aria-hidden="true"
        ></i>
        <component :is="title.variant" class="text-secondary">{{
          title.text
        }}</component>
      </a>
    </div>
  </div>
</template>
