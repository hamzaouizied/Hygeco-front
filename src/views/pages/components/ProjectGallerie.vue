<template>
  <div class="Main">
    <div class="text-center" style="margin-bottom: 40px;">
      <h2 style="font-size: 2em; margin-bottom: 10px;">Our Recent Work</h2>
      <p style="font-size: 1em; color: #666;">
        Perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam remeaque ipsa.
      </p>
    </div>

    <section class="Carousel" ref="carousel" tabindex="-1">
      <h2 class="Hidden">Gallery</h2>
      <article v-for="(card, index) in cards" :key="index" :class="['Card', 'Card--overlay', card.type]" :id="card.id"
        @click="navigateToCard(card.id)">
        <div class="Card__media">
          <img class="Card__image" :src="card.imageUrl" :alt="card.imageAlt" :width="card.imageWidth"
            :height="card.imageHeight" loading="lazy" />
        </div>
        <div class="Card__main">
          <h2 class="Card__heading">
            <a :href="card.linkUrl" class="Card__link">{{ card.title }}</a>
          </h2>
          <p>{{ card.description }}</p>
        </div>
      </article>
    </section>

    <nav class="Pagination">
      <h2 class="Hidden">Carousel Navigation</h2>
      <button class="Arrow" type="button" aria-controls="carousel" @click="previousCard" :disabled="isFirstCard">
        <svg width="16" height="16" viewBox="0 0 16 16" role="presentation">
          <path fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-4.5-.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z" />
        </svg>
        <span class="Hidden">Previous slide</span>
      </button>
      <button class="Arrow" type="button" aria-controls="carousel" @click="nextCard" :disabled="isLastCard">
        <svg width="16" height="16" viewBox="0 0 16 16" role="presentation">
          <path fill-rule="evenodd"
            d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM4.5 7.5a.5.5 0 0 0 0 1h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5z" />
        </svg>
        <span class="Hidden">Next slide</span>
      </button>
      <div class="Dots">
        <a v-for="(card, index) in cards" :key="index" :href="`#${card.id}`" class="Dot" tabindex="-1">
          <span class="Hidden">Slide {{ index + 1 }}</span>
        </a>
      </div>
    </nav>
  </div>
</template>

<script>
// import { ref, computed } from 'vue';

export default {
  data() {
    return {
      cards: [
        {
          id: 'card-1',
          type: 'Card--square',
          imageUrl: 'https://radiustheme.com/demo/wordpress/themes/clenix/wp-content/uploads/2019/07/window-620x672.jpg',
          imageAlt: 'Card image description',
          imageWidth: '480',
          imageHeight: '480',
          title: 'Prefer 1/1 aspect ratio',
          linkUrl: '#',
          description: 'This is a demo card with 1/1 aspect ratio.',
        },
        {
          id: 'card-2',
          type: 'Card--wide',
          imageUrl: 'https://radiustheme.com/demo/wordpress/themes/clenix/wp-content/uploads/2019/07/house5-620x672.jpg',
          imageAlt: 'Card image description',
          imageWidth: '960',
          imageHeight: '480',
          title: 'Wide aspect ratio',
          linkUrl: '#',
          description: 'This is a demo card with a wide aspect ratio.',
        },
        {
          id: 'card-3',
          type: 'Card--tall',
          imageUrl: 'https://radiustheme.com/demo/wordpress/themes/clenix/wp-content/uploads/2019/10/bedroom-620x672.jpg',
          imageAlt: 'Card image description',
          imageWidth: '400',
          imageHeight: '800',
          title: 'Tall aspect ratio',
          linkUrl: '#',
          description: 'This is a demo card with a tall aspect ratio.',
        },
        {
          id: 'card-4',
          type: 'Card--tall',
          imageUrl: 'https://images.unsplash.com/photo-1621160471147-c5be030e199b?crop=entropy&cs=srgb&fm=jpg&ixid=MnwxNDU4OXwwfDF8cmFuZG9tfHx8fHx8fHx8MTYyMzMxMTEzMw&ixlib=rb-1.2.1&q=85&height=480',
          imageAlt: 'Card image description',
          imageWidth: '400',
          imageHeight: '800',
          title: 'Tall aspect ratio',
          linkUrl: '#',
          description: 'This is a demo card with a tall aspect ratio.',
        },
      ],
    };
  },
  computed: {
    isFirstCard() {
      return this.$refs.carousel?.scrollLeft === 0;
    },
    isLastCard() {
      const carousel = this.$refs.carousel;
      if (carousel) {
        return carousel.scrollLeft + carousel.clientWidth >= carousel.scrollWidth;
      }
      return false;
    },
  },
  methods: {
    previousCard() {
      const carousel = this.$refs.carousel;
      if (carousel) {
        carousel.scrollTo({
          left: carousel.scrollLeft - carousel.clientWidth,
          behavior: 'smooth',
        });
      }
    },
    nextCard() {
      const carousel = this.$refs.carousel;
      if (carousel) {
        carousel.scrollTo({
          left: carousel.scrollLeft + carousel.clientWidth,
          behavior: 'smooth',
        });
      }
    },
    navigateToCard(id)
 {
      const card = document.getElementById(id)
;
      if (card) {
        card.scrollIntoView({
          behavior: 'smooth',
          block: 'center',
          inline: 'nearest',
        });
      }
    },
  },
};
</script>

<style scoped>
:root {
  --theme-blue: 200, 80%, 38%;
  --theme-red: 350, 63%, 52%;
  --theme-pink: 350, 100%, 69%;
  --theme-black: 0, 7%, 9%;
  --theme-white: 0, 0%, 100%;
  --theme-light: 40, 100%, 97%;
  --theme-dark: 0, 7%, 29%;
  color: hsl(var(--theme-dark));
  background: hsl(var(--theme-light));
}

*,
*::after,
*::before {
  box-sizing: border-box;
}

a {
  color: hsl(var(--theme-blue));
  transition: color 150ms, text-decoration-color 150ms;
}

a:active,
a:visited {
  color: hsl(var(--theme-blue));
}

a:hover {
  color: hsl(var(--theme-red));
}

a:focus,
a:hover {
  text-decoration-color: transparent;
}

a,
[tabindex='-1']:focus {
  outline: 0.125rem solid hsl(var(--theme-pink));
}

button {
  background: transparent;
  border: none;
  cursor: pointer;
}

button[disabled] {
  cursor: not-allowed;
}

button:focus-visible,
button:hover {
  color: hsl(var(--theme-red));
}

.Hidden {
  border: 0;
  clip: rect(0, 0, 0, 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
}

.Main {
  max-width: 80rem;
  margin: 0 auto;
  padding: 2rem;
}

.Carousel {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: 80%;
  grid-gap: 0.75rem;
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-padding: 0 0.5rem;
  padding: 0 0.5rem;
  padding-bottom: 2.5rem;
}

.Card {
  display: grid;
  grid-template-rows: minmax(0, 1fr) auto;
  scroll-snap-align: center;
  background: hsl(var(--theme-white));
  border-radius: 0.75rem;
  overflow: hidden;
  position: relative;
  outline: none;
}

.Card__media {
  margin: 0;
  padding-top: 100%;
  position: relative;
}

.Card__image {
  height: 100%;
  left: 0;
  object-fit: cover;
  object-position: center;
  position: absolute;
  top: 0;
  width: 100%;
}

.Card__main {
  padding: 0.75rem;
}

.Card__heading {
  font-size: 1.5rem;
  line-height: 1;
}

.Card__link {
  text-decoration: none;
}

.Card__link:focus,
.Card__link:hover {
  text-decoration: underline;
  text-decoration-color: hsl(var(--theme-blue));
}

.Card__link:focus-visible,
.Card__link:hover {
  text-decoration-color: hsl(var(--theme-red));
}

.Card--overlay::before {
  content: '';
  position: absolute;
  inset: 0;
  z-index: 1;
  background: linear-gradient(to top,
      hsla(var(--theme-black), 0.75) 0%,
      hsla(var(--theme-black), 0) 50%);
}

.Card--overlay * {
  color: hsl(var(--theme-white));
  position: relative;
  z-index: 1;
}

.Card--overlay .Card__media {
  margin-top: auto;
}

.Pagination {
  display: grid;
  grid-auto-flow: column;
  grid-auto-columns: min-content;
  gap: 0.25rem;
  justify-content: center;
  margin-top: -2rem;
  padding-bottom: 2rem;
}

.Arrow {
  background: hsl(var(--theme-light));
  border-radius: 50%;
  display: grid;
  padding: 0.25rem;
}

.Dots {
  display: grid;
  grid-auto-flow: column;
  gap: 0.25rem;
}

.Dot {
  background: hsla(var(--theme-dark), 0.1);
  border-radius: 50%;
  display: block;
  height: 0.75rem;
  width: 0.75rem;
}

.Dot:focus,
.Dot:hover {
  background: hsla(var(--theme-dark), 0.25);
}

.Dot:focus-visible,
.Dot:hover {
  background: hsl(var(--theme-pink));
}
</style>