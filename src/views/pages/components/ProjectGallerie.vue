<template>
  <div class="Main">
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
import img1 from '@/assets/img/pr1.jpeg';
import img2 from '@/assets/img/pr2.jpeg';
import img3 from '@/assets/img/pr3.jpeg';
import img4 from '@/assets/img/pr4.jpeg';
import img5 from '@/assets/img/pr5.jpeg';
import img6 from '@/assets/img/pr6.jpeg';

export default {
  data() {
    return {
      cards: [
        {
          id: 'card-1',
          type: 'Card--square',
          imageUrl: img1,
          imageAlt: 'Card image description',
          imageWidth: '480',
          imageHeight: '480',
          title: 'Services Résidentiels',
          linkUrl: '#',
          description: 'Before/After',
        },
        {
          id: 'card-2',
          type: 'Card--wide',
          imageUrl:img2,
          imageAlt: 'Card image description',
          imageWidth: '960',
          imageHeight: '480',
          title: 'Services Résidentiels',
          linkUrl: '#',
          description: 'Before/After',
        },
        {
          id: 'card-3',
          type: 'Card--tall',
          imageUrl: img3,
          imageAlt: 'Card image description',
          imageWidth: '400',
          imageHeight: '800',
          title: 'Services Résidentiels',
          linkUrl: '#',
          description: 'Before/After',
        },
        {
          id: 'card-4',
          type: 'Card--tall',
          imageUrl: img4,
          imageAlt: 'Card image description',
          imageWidth: '400',
          imageHeight: '800',
          title: 'Services Résidentiels',
          linkUrl: '#',
          description: 'Before/After',
        },
        {
          id: 'card-5',
          type: 'Card--wide',
          imageUrl:img5,
          imageAlt: 'Card image description',
          imageWidth: '960',
          imageHeight: '480',
          title: 'Services Résidentiels',
          linkUrl: '#',
          description: 'Before/After',
        },
        {
          id: 'card-6',
          type: 'Card--tall',
          imageUrl: img6,
          imageAlt: 'Card image description',
          imageWidth: '400',
          imageHeight: '800',
          title: 'Services Résidentiels',
          linkUrl: '#',
          description: 'Before/After',
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
    navigateToCard(id) {
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

  &:active,
  &:visited {
    color: hsl(var(--theme-blue));
  }

  &:hover {
    color: hsl(var(--theme-red));
  }

  &:focus,
  &:hover {
    text-decoration-color: transparent;
  }
}

a,
[tabindex='-1'] {
  &:focus {
    outline: 0.125rem solid hsl(var(--theme-pink));

    &:not(:focus-visible) {
      outline: none;
    }
  }
}

.Carousel {
  --carousel-gap: 1rem;
  border-radius: 1rem;
  display: flex;
  gap: var(--carousel-gap);
  overflow-y: hidden;
  overflow-x: auto;
  position: relative;
  scroll-behavior: auto;
  scroll-snap-type: x mandatory;
  scrollbar-width: none;
  -webkit-overflow-scrolling: touch;
  height: 50vw;
  outline: none !important;
  min-height: 20rem;
  max-height: 30rem;

  &::-webkit-scrollbar {
    display: none;
  }

  .Card {
    aspect-ratio: var(--card-ratio);
    flex: 1 0 auto;
    min-height: 100%;
    scroll-snap-align: start;
  }

  .Card__media {
    aspect-ratio: auto;
  }

  &>div:empty {
    position: relative;

    &:first-child {
      inset-inline-start: 10%;
      margin-inline-end: calc(-1 * var(--carousel-gap));
    }

    &:last-child {
      inset-inline-end: 10%;
      margin-inline-start: calc(-1 * var(--carousel-gap));
    }
  }
}

.Carousel--single {
  .Card {
    --card-ratio: auto;
    flex: 1 0 100%;
  }
}

@media (prefers-reduced-motion: reduce) {
  .Carousel {
    scroll-behavior: auto;
  }
}

@supports not (aspect-ratio: 1/1) {
  .Carousel {
    .Card__media {
      padding-block-end: 0 !important;
    }

    .Card__image {
      position: relative !important;
    }
  }
}

.Dots {
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.Dot {
  border-radius: 100%;
  display: block;
  height: 1.5rem;
  width: 1.5rem;
  position: relative;

  &::after {
    background: currentColor;
    border-radius: 100%;
    content: '';
    display: block;
    height: 0.375rem;
    width: 0.375rem;
    left: 50%;
    position: absolute;
    top: 50%;
    transform: translateX(-50%) translateY(-50%);
  }
}

.Dot--active {
  color: hsl(var(--theme-pink)) !important;
}

.Pagination {
  align-items: center;
  display: flex;
  justify-content: center;
  margin: 1rem -0.5rem;

  .Arrow {
    flex: 0 0 auto;

    &:first-of-type {
      margin-inline-end: auto;
      order: -1;
    }

    &:last-of-type {
      margin-inline-start: auto;
      order: 1;
    }
  }
}

.Arrow {
  align-items: center;
  appearance: none;
  background: transparent;
  border: none;
  border-radius: 0.125rem;
  cursor: pointer;
  color: hsl(var(--theme-blue));
  display: flex;
  height: 3rem;
  justify-content: center;
  opacity: 1;
  padding: 0.5rem;
  transition: opacity 150ms, color 150ms;
  width: 3rem;

  &:hover {
    color: hsl(var(--theme-red));
  }

  &:focus {
    color: hsl(var(--theme-pink));
    outline: none;

    svg {
      box-shadow: 0 0 0 0.125rem hsla(var(--theme-white), 1),
        0 0 0 0.25rem currentColor;
    }

    &:not(:focus-visible) {
      color: hsl(var(--theme-red));

      svg {
        box-shadow: none;
      }
    }
  }

  &[disabled] {
    color: hsl(var(--theme-dark));
    opacity: 0.4;
    pointer-events: none;
  }

  svg {
    border-radius: 100%;
    fill: currentColor;
    height: 100%;
    width: 100%;
    transition: box-shadow 150ms;

    [dir='rtl'] & {
      transform: scaleX(-1);
    }
  }
}

.Hidden {
  border: 0 !important;
  clip: rect(0 0 0 0) !important;
  clip-path: inset(50%) !important;
  height: 1px !important;
  margin: -1px !important;
  overflow: hidden !important;
  padding: 0 !important;
  position: absolute !important;
  width: 1px !important;
  white-space: nowrap !important;
}


:root {
  --card-link-color: var(--theme-blue);
  --card-hover-color: var(--theme-red);
  --card-focus-color: var(--theme-pink);
  --card-inner-focus-color: var(--theme-white);
  --card-shadow-color: var(--theme-black);
  --card-foreground-color: var(--theme-dark);
  --card-background-color: var(--theme-dark);
}

.Card {
  --card-ratio: auto 1/1;
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: [media-start] auto [media-end main-start] auto [main-end];
  max-width: 100%;
  position: relative;
}

.Card__media {
  aspect-ratio: var(--card-ratio);
  background: hsla(var(--card-background-color), 0.5);
  border-radius: 1rem;
  grid-column: 1 / -1;
  grid-row: media-start / media-end;
  max-width: 100%;
  overflow: hidden;
  position: relative;
  z-index: 1;

  &>* {
    border-radius: inherit;
    height: 100%;
    object-fit: cover;
    position: absolute;
    width: 100%;
  }
}

.Card__main {
  align-self: end;
  color: hsl(var(--card-foreground-color));
  grid-column: 1 / -1;

  [href]:not(.Card__link) {
    position: relative;
    z-index: 2;
  }

  &>* {
    margin: 0;
  }
}

.Card__link {
  color: hsl(var(--card-link-color));
  font-weight: 600;
  text-decoration-line: underline;
  text-decoration-color: hsla(var(--card-link-color), 0.2);
  text-decoration-thickness: 0.125rem;
  text-decoration-skip: ink;
  text-decoration-skip-ink: all;
  text-decoration-offset: 100%;

  &::after {
    border: 0.125rem solid hsl(var(--card-focus-color));
    box-shadow: inset 0 0 0 0.125rem hsla(var(--card-inner-focus-color), 1);
    border-radius: 1rem;
    bottom: 0;
    content: '';
    display: block;
    left: 0;
    opacity: 0;
    position: absolute;
    right: 0;
    top: 0;
    transition: border-color 150ms, opacity 150ms;
    z-index: 1;
  }

  &:hover,
  &:focus {
    text-decoration-color: hsla(var(--card-hover-color), 1);

    &::after {
      opacity: 1;
    }
  }

  &:focus {
    outline: none;
    text-decoration-color: currentColor;
  }
}

.Card__heading {
  line-height: 1.25;
  margin-block-end: 0.5rem;
}

.Card--border {
  .Card__link {
    &::after {
      opacity: 1;
    }

    &:not(:focus):not(:hover) {
      &::after {
        border-color: hsla(var(--card-foreground-color), 0.5);
      }
    }
  }
}

.Card--overlay {
  --card-shadow-color: var(--theme-black);
  --card-foreground-color: var(--theme-white);
  --card-background-color: var(--theme-dark);
  --card-link-color: var(--theme-white);
  --card-hover-color: var(--theme-white);

  grid-template-rows:
    [media-start] 1fr [overlay-start] 1rem [main-start] auto [main-end overlay-end media-end];

  &::before {
    background: linear-gradient(to top,
        hsla(var(--card-shadow-color), 0.8) 20%,
        hsla(var(--card-shadow-color), 0.3) 60%,
        transparent);
    border-bottom-left-radius: 1rem;
    border-bottom-right-radius: 1rem;
    content: '';
    display: block;
    grid-column: 1 / -1;
    grid-row: overlay-start / overlay-end;
    overflow: hidden;
  }

  .Card__main {
    p {
      text-shadow: 0 0.0625rem 0.0625rem hsl(var(--card-shadow-color));
    }

    a {
      color: hsl(var(--card-link-color));

      &:active,
      &:visited {
        color: hsl(var(--card-link-color));
      }

      &:hover,
      &:focus {
        color: hsl(var(--card-hover-color));
      }
    }
  }
}

.Card--square {
  --card-ratio: auto 1/1;
}

.Card--photo {
  --card-ratio: auto 4/3;
}

.Card--portrait {
  --card-ratio: auto 3/4;
}

.Card--wide {
  --card-ratio: auto 16/9;
}

@supports not (aspect-ratio: 1/1) {
  .Card__media {
    height: 100%;
    padding-block-end: calc(100% * (1 / 1));
  }

  .Card--square {
    .Card__media {
      padding-block-end: calc(100% * (1 / 1));
    }
  }

  .Card--photo {
    .Card__media {
      padding-block-end: calc(100% * (3 / 4));
    }
  }

  .Card--portrait {
    .Card__media {
      padding-block-end: calc(100% * (4 / 3));
    }
  }

  .Card--wide {
    .Card__media {
      padding-block-end: calc(100% * (9 / 16));
    }
  }
}


@font-face {
  font-family: 'Raleway';
  src: url('https://assets.codepen.io/85421/Raleway-VariableFont.woff2') format('woff2');
  font-display: swap;
  font-weight: 1 900;
  font-style: normal;
  unicode-range: U+0020-007F, U+00A0-00FF, U+0100-017F, U+2000-206F;
}

@font-face {
  font-family: 'Fallback';
  size-adjust: 104%;
  ascent-override: 96%;
  src: local('Arial');
}

html {
  line-height: 1.5;
  font-family: Raleway, Fallback, sans-serif;
}

body {
  margin: 0;
}

img {
  display: block;
  height: auto;
  max-width: 100%;
}

.Main {
  margin: 0 auto;
  max-width: calc(90rem + 10vw);
  padding: 1.5rem 5vw;
  width: 100%;

  &>*:first-child {
    margin-block-start: 0;
  }

  &>h1 {
    font-weight: 800;
  }

  &>h1,
  &>h2,
  &>h3 {
    line-height: 1.25;
    margin-block: 1.5rem 1rem;
  }

  &>ul {
    margin-block: 1.5rem;
    padding-inline: 2rem 0;

    li {
      margin-block: 0.5rem;
    }
  }

  &>p {
    margin-block: 1rem;
  }

  a:not([class]) {
    font-weight: 500;
  }
}
</style>