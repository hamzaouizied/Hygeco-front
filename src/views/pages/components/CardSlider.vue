<template>
    <div class="container">
      <div
        ref="slider"
        class="card-slider"
        @mousedown="startDragging"
        @mousemove="onDragging"
        @mouseup="stopDragging"
        @mouseleave="stopDragging"
      >
        <div v-for="card in cards" :key="card.id" class="card">
          <img :src="card.image" alt="Card Image" style="width: 100%;">
          <div class="card-content">
            <h4>{{ card.title }}</h4>
            <p>{{ card.description }}</p>
          </div>
        </div>
      </div>
      <div class="arrows">
        <button @click="scrollLeft" class="arrow-left">
          <i class="fas fa-chevron-left"></i>
        </button>
        <button @click="scrollRight" class="arrow-right">
          <i class="fas fa-chevron-right"></i>
        </button>
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  
  const slider = ref(null);
  const isDragging = ref(false);
  const startX = ref(0);
  const scrollLeftValue = ref(0);
  
  const cards = [
    {
      id: 1,
      image: 'https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/ct2.png',
      title: 'Card 1',
      description: 'This is the description for card 1.',
    },
    {
      id: 2,
      image: 'https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/ct2.png',
      title: 'Card 2',
      description: 'This is the description for card 2.',
    },
    {
      id: 3,
      image: 'https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/ct2.png',
      title: 'Card 3',
      description: 'This is the description for card 3.',
    },
  ];
  
  const scrollLeft = () => {
    slider.value.scrollBy({ left: -300, behavior: 'smooth' });
  };
  
  const scrollRight = () => {
    slider.value.scrollBy({ left: 300, behavior: 'smooth' });
  };
  
  const startDragging = (e) => {
    isDragging.value = true;
    startX.value = e.pageX - slider.value.offsetLeft;
    scrollLeftValue.value = slider.value.scrollLeft;
  };
  
  const onDragging = (e) => {
    if (!isDragging.value) return;
    e.preventDefault();
    const x = e.pageX - slider.value.offsetLeft;
    const walk = (x - startX.value) * 2; // Adjust scroll speed if needed
    slider.value.scrollLeft = scrollLeftValue.value - walk;
  };
  
  const stopDragging = () => {
    isDragging.value = false;
  };
  </script>
  
  <style scoped>
  .container {
    width: 80%;
    margin: 0 auto;
    position: relative;
  }
  
  .card {
    display: inline-block;
    background: #f2f2f2;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .card-slider {
    white-space: nowrap;
    overflow-x: auto;
    scroll-behavior: smooth;
    -webkit-overflow-scrolling: touch;
    scrollbar-width: none; /* Firefox */
    cursor: grab;
  }
  
  .card-slider:active {
    cursor: grabbing;
  }
  
  .card-slider::-webkit-scrollbar {
    display: none; /* Chrome */
  }
  
  .card-slider .card {
    margin-right: 20px;
    white-space: normal;
    display: inline-block;
    vertical-align: top;
  }
  
  .arrows {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .arrow-left,
  .arrow-right {
    background: none;
    border: none;
    font-size: 24px;
    cursor: pointer;
    padding: 10px;
    margin: 0 10px;
    transition: transform 0.3s;
  }
  
  .arrow-left:hover,
  .arrow-right:hover {
    transform: scale(1.2);
  }
  </style>
  