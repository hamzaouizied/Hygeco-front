<script setup>
import { onMounted } from "vue";
import ArgonButton from "@/components/ArgonButton.vue";
import Dropzone from "dropzone";
const emit = defineEmits(["nextStep", "prevStep"]);

onMounted(() => {
  Dropzone.autoDiscover = false;
  var drop = document.getElementById("dropzone");
  new Dropzone(drop, {
    url: "/file/post",
    addRemoveLinks: true,
  });
});
</script>
<template>
  <div
    class="p-3 bg-white card multisteps-form__panel border-radius-xl"
    data-animation="FadeIn"
  >
    <h5 class="font-weight-bolder">Media</h5>
    <div class="multisteps-form__content">
      <div class="mt-3 row">
        <div class="col-12">
          <label>Product images</label>
          <form
            id="dropzone"
            action="/file-upload"
            class="form-control dropzone"
          >
            <div class="fallback">
              <input name="file" type="file" multiple />
            </div>
          </form>
        </div>
      </div>
      <div class="mt-4 button-row d-flex col-12">
        <argon-button
          color="secondary"
          variant="gradient"
          class="mb-0 js-btn-prev"
          title="Prev"
          @click="emit('prevStep')"
          >Prev</argon-button
        >
        <argon-button
          type="button"
          color="dark"
          variant="gradient"
          class="mb-0 ms-auto js-btn-next"
          title="Next"
          @click="emit('nextStep')"
          >Next</argon-button
        >
      </div>
    </div>
  </div>
</template>
