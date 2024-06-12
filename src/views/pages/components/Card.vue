<script setup>
// const name = "Cardi";


defineProps({
  badge: {
    type: String,
    required: true,
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
  
  
});
</script>

<template>
    <div class="card" style="height: 84%;">
      <div class="pt-4  text-center card-header d-flex justify-content-center align-items-center" style="background-color: #30c7b5;padding-bottom: 3.40rem;">
        <span class="text-uppercase" style="font-size: 1.5rem;color: #fff;">{{ badge }}</span>
      </div>
      <div class="pt-0 text-center card-body text-lg-start" style="padding: 0px;" >
        <img src="../../../assets/img/600.png" alt="Service Image" class="img-fluid w-100" style="height:66%;object-fit:cover;" /> 
        <a :href="action.route" class="mt-3 mb-0 btn btn-icon d-lg-block" :class="`bg-gradient-${action.color}`">
        {{ action.label }}
        <!-- <i class="fas fa-arrow-right ms-1"></i> -->
      </a>     </div>
    </div>
    
  </template>