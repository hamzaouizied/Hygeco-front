<script setup>
// const name = "Cardi";


defineProps({
  badge: {
    type: String,
    required: true,
  },
  
  
});
</script>

<template>
    <div class="card">
      <div class="pt-4  text-center card-header" style="background-color: #30c7b5;padding-bottom: 5rem;">
        <span class="text-uppercase" style="font-size: 1.5rem;color: #fff;">{{ badge }}</span>
      </div>
      <div class="pt-0 text-center card-body text-lg-start" >
        <img src="../../../assets/img/o1.png" alt="Service Image" class="img-fluid w-100 h-100" />      </div>
    </div>
  </template>