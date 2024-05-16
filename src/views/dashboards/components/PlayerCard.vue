<script setup>
import { onMounted, ref } from "vue";

import "leaflet/dist/leaflet.css";
import L from "leaflet";

const map = ref(null);
const tiles = ref([]);

onMounted(() => {
  // Initialize the map and assign it to a variable for later use
  // there's a few ways to declare a VARIABLE in javascript.
  // you might also see people declaring variables using `const` and `let`
  map.value = L.map("mapid", {
    // Set latitude and longitude of the map center (required)
    center: [38.89, -77.03],
    // Set the initial zoom level, values 0-18, where 0 is most zoomed-out (required)
    zoom: 11,
  });

  // Create a Tile Layer and add it to the map
  tiles.value = new L.tileLayer(
    "https://{s}.basemaps.cartocdn.com/rastertiles/light_all/{z}/{x}/{y}.png",
    {
      attribution:'',
        // '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
      subdomains: "abcd",
      maxZoom: "19",
    }
  ).addTo(map.value);

  // Init slider
  // var slider = document.getElementById("sliderRegular");
  // noUiSlider.create(slider, {
  //   start: 40,
  //   connect: [true, false],
  //   range: {
  //     min: 0,
  //     max: 100
  //   }
  // });
});
</script>
<template>
  <div class="card shadow-lg">
    <div class="card-header " style="background-color: #30c7b5;padding: 0.5rem;">
      
    </div>
    <div class="card-body px-0 py-0">
      <div id="mapid" class="leaflet"></div>
    </div>
    <div class="card-footer" style="background-color: #30c7b5;padding: 0.5rem;">
      
      </div>
  </div>
</template>
