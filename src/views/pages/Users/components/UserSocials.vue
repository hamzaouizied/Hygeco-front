<script setup>
import ArgonButton from "@/components/ArgonButton.vue";
const emit = defineEmits(["nextStep", "prevStep"]);
</script>
<template>
  <div
    class="card multisteps-form__panel p-3 border-radius-xl bg-white"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Socials</h5>
    <div class="multisteps-form__content">
      <div class="row mt-3">
        <div class="col-12">
          <label>Twitter Handle</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="@argon"
          />
        </div>
        <div class="col-12 mt-3">
          <label>Facebook Account</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="https://..."
          />
        </div>
        <div class="col-12 mt-3">
          <label>Instagram Account</label>
          <input
            class="multisteps-form__input form-control"
            type="text"
            placeholder="https://..."
          />
        </div>
      </div>
      <div class="button-row d-flex mt-4">
        <argon-button
          type="button"
          color="light"
          variant="gradient"
          class="js-btn-prev"
          @click="emit('prevStep')"
          >Prev</argon-button
        >
        <argon-button
          type="button"
          color="dark"
          variant="gradient"
          class="ms-auto js-btn-next"
          @click="emit('nextStep')"
          >Next</argon-button
        >
      </div>
    </div>
  </div>
</template>
