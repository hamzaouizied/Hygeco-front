<script setup>
defineProps({
  badge: {
    type: String,
    required: true,
  },
  price: {
    type: Object,
    required: true,
    currency: String,
    value: String,
  },
  specifications: {
    type: Array,
    required: true,
    label: String,
    includes: Boolean,
  },
  action: {
    type: Object,
    route: String,
    label: String,
    color: String,
    default: () => ({
      route: "/",
      label: "Join",
      color: "dark",
    }),
  },
  act: {
    type: Object,
    route: String,
    label: String,
    color: String,
    default: () => ({
      route: "/",
      label: "Join",
      color: "dark",
    }),
  },
});
</script>
<template>
  <div class="card">
    <div class="pt-4 pb-3 text-center card-header" style="background-color: #30c7b5;">
      <span class="text-uppercase " style="font-size: 1.5rem;color: #fff;">{{ badge }}</span>
      <h1 class="mt-2 " style=" font-weight:600;font-size: 2.4rem;" >
        <small>{{ price.currency }}</small>{{ price.value }}
      </h1>
    </div>
    <div class="pt-0 text-center card-body text-lg-start" >

      <div v-for="({ label, includes }, index) of specifications" :key="index"
        class="p-2 d-flex justify-content-lg-start ">
        <div class="text-center shadow icon icon-shape icon-xs rounded-circle"
          :class="includes ? 'bg-gradient-success' : 'bg-gradient-secondary'">
          <!-- <i
            :class="`fas ${includes ? 'fa-check' : 'fa-minus'} opacity-10`"
          ></i> -->
        </div>
        <div>
          <span class="ps-3" >{{ label }}</span>

        </div>
      </div>
      <a :href="action.route" class="mt-3 mb-0 btn btn-icon d-lg-block" :class="`bg-gradient-${action.color}`">
        {{ action.label }}
        <!-- <i class="fas fa-arrow-right ms-1"></i> -->
      </a>

    </div>
  </div>
</template>
