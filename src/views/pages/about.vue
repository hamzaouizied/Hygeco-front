<script setup>
import { onMounted, onBeforeUnmount } from "vue";
import { useStore } from "vuex";
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
// import PricingCard from "./components/PricingCard.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import AccordionItem from "./components/AccordionItem.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import ComplexBackgroundCard from "@/views/ecommerce/components/ComplexBackgroundCard.vue";

const store = useStore();
// const existingSlides = [
//   {
//     imageUrl: require('../../assets/img/hygeco.jpg'),
//     text: "Let the green clean begin. Linen's bright, cleaning's right, Hygeco's here day or night!"
//   },
//   {
//     imageUrl: require('../../assets/img/hygecoo.jpg'),
//     text: "Another text for the second slide."
//   },
//   {
//     imageUrl: require('../../assets/img/laundry-machine.jpg'),
//     text: "Text for the third slide."
//   }
// ];

// const slides = [...existingSlides, ...testimonialSlides];
// const currentIndexHead = ref(0);
// const currentIndex = ref(0);

onMounted(() => {
  store.state.showSidenav = false;
  store.state.showNavbar = false;
  store.state.showFooter = false;
  setNavPills();
});
onBeforeUnmount(() => {
  store.state.showSidenav = false;
  store.state.showNavbar = false;
  store.state.showFooter = true;
  if (store.state.isPinned === false) {
    const sidenav_show = document.querySelector(".g-sidenav-show");
    sidenav_show.classList.remove("g-sidenav-hidden");
    sidenav_show.classList.add("g-sidenav-pinned");
    store.state.isPinned = true;
  }
});

// function startSlideshow() {
//   intervalId = setInterval(() => {
//     currentIndexHead.value = (currentIndexHead.value + 1) % existingSlides.length;
//   }, 5000); // Change image every 5 seconds (adjust as needed)
// }
// function startSlideshowTestimonial() {
//   intervalId = setInterval(() => {
//     currentIndex.value = (currentIndex.value + 1) % testimonialSlides.length;
//   }, 5000); // Change image every 5 seconds (adjust as needed)
// }
// function stopSlideshow() {
//   clearInterval(intervalId);
// }

</script>
<template>
    <navbar is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success"
        :dark-mode="true" />
    <div class="page-header position-relative" :style="{
    backgroundImage: 'url(' + require('../../assets/img/banner.png') + ')',

    backgroundSize: 'cover',
    padding: '100px',
  }">
        <span class="mask bg-gradient-dark opacity-6"></span>

        <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
            <div class="row">
                <div class="mx-auto text-center col-md-6 mt-4">
                    <h3 class="text-white">A propos de Nous</h3>
                    <p class="text-white">
                        Hygeco is a Montreal-based company that offers a range of professional cleaning and laundry
                        services
                    </p>
                </div>
            </div>
            <div class="row">
                <div class="mx-auto text-center col-lg-4 col-md-6 col-7">

                </div>
            </div>
        </div>
    </div>
    <div class="mt-n8">
        <div class="container">
            <div class="tab-content tab-space">
                <div id="monthly" class="tab-pane active">
                    <div class="row">
                        <div class="mb-4 col-lg-4 mb-lg-0">
                            <div class="card-container mt-4 mt-lg-0">
                                <complex-background-card class="h-100 w-100"
                                    image="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/office-dark.jpg"
                                    description="We love to help you to get your clothes fresh and clean so we are here for you 24/7 for any question, concern or suggestion. The account manager and the ease of a state-of-the-art app that makes it possible."
                                    :action="{ route: 'javascript:;', label: 'Contact With Us' }" />
                            </div>
                        </div>
                        <div class="mb-4 col-lg-4 mb-lg-0">
                            <div class="card-container mt-4 mt-lg-0">
                                <complex-background-card class="h-100 w-100"
                                    image="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/office-dark.jpg"
                                    description="We love to help you to get your clothes fresh and clean so we are here for you 24/7 for any question, concern or suggestion. The account manager and the ease of a state-of-the-art app that makes it possible."
                                    :action="{ route: 'javascript:;', label: 'View Our Offers' }" />
                            </div>
                        </div>
                        <div class="mb-4 col-lg-4 mb-lg-0">
                            <div class="card-container mt-4 mt-lg-0">
                                <complex-background-card class="h-100 w-100"
                                    image="https://demos.creative-tim.com/soft-ui-dashboard-pro/assets/img/office-dark.jpg"
                                    description="We love to help you to get your clothes fresh and clean so we are here for you 24/7 for any question, concern or suggestion. The account manager and the ease of a state-of-the-art app that makes it possible."
                                    :action="{ route: 'javascript:;', label: 'Meet With Our Staff' }" />
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    </div>
 
    <div class="responsive-container-block bigContainer p-5">
    <div class="responsive-container-block Container bottomContainer">
        <div class="ultimateImg">
            <div class="backImg">
                    <img class="bgImg" src="../../assets/img/about.png">
                </div>
            <img class="mainImg" src="../../assets/img/choose-thumb.png">
        </div>
        <div class="allText bottomText">
            <p class="text-blk headingText">
                About Our Company
            </p>
            <p class="text-blk subHeadingText">
                Cleaning Today For Making Your Future Excellent            </p>
            <p class="text-blk description">
                About Our Company
Cleaning Today For Making Your Future Excellent
We love help you get your clothes fresh and clean so we here for you 24/7 for any question, concern or suggestion.            </p>
            <div class="col-span-3">
                <div class="service-box">
                    <span class="text-blk">
                        <img src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/aicon1.png" alt="Expert Cleaner">  Highly Rated Cleaning
                    </span>
                    <p>This service focuses on cleaning and maintaining homes. It typically includes tasks.</p>
                    <span class="text-blk">
                        <img src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/ad2.png" alt="Expert Cleaner">  House & Toilet Cleaning
                    </span>
                    <p>With Shine Bright Cleaning Services, you can trust us to make your space shine like .</p>
                    <span class="text-blk">
                        <img src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/ad2.png" alt="Expert Cleaner">  House & Toilet Cleaning
                    </span>
                    <p>With Shine Bright Cleaning Services, you can trust us to make your space shine like .</p>
                    <span class="text-blk">
                        <img src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/ad2.png" alt="Expert Cleaner">  House & Toilet Cleaning
                    </span>
                    <p>With Shine Bright Cleaning Services, you can trust us to make your space shine like .</p>
                </div>
            </div>
            <router-link :to="{ name: 'Signin Basic' }" class="mb-0 btn btn-sm me-1">
                Book Now
            </router-link>
        </div>
        
    </div>
</div>
<div class="container my-6">
   
   <div class="mt-8 row">
     <div class="mx-auto text-center col-md-6">
       <h2>Frequently Asked Questions</h2>
       <p>
         A lot of people don&#39;t appreciate the moment until it’s passed.
         I&#39;m not trying my hardest, and I&#39;m not trying to do
       </p>
     </div>
   </div>
   <div class="row">
     <div class="mx-auto col-md-10">
       <div id="accordionRental" class="accordion">
         <accordion-item
           accordion-id="headingOne"
           collapse-id="collapseOne"
           active
         >
           <template #question>How do I order?</template>
           <template #answer>
             We’re not always in the position that we want to be at. We’re
             constantly growing. We’re constantly making mistakes. We’re
             constantly trying to express ourselves and actualize our dreams.
             If you have the opportunity to play this game of life you need to
             appreciate every moment. A lot of people don’t appreciate the
             moment until it’s passed.
           </template>
         </accordion-item>
         <accordion-item accordion-id="headingTwo" collapse-id="collapseTwo">
           <template #question>How can i make the payment?</template>
           <template #answer>
             It really matters and then like it really doesn’t matter. What
             matters is the people who are sparked by it. And the people who
             are like offended by it, it doesn’t matter. Because it&#39;s
             motivating the doers. Because I’m here to follow my dreams and and
             inspire other people to follow their dreams, too.
             <br />We’re not always in the position that we want to be at.
             We’re constantly growing. We’re constantly making mistakes. We’re
             constantly trying to express ourselves and actualize our dreams.
             If you have the opportunity to play this game of life you need to
             appreciate every moment. A lot of people don’t appreciate the
             moment until it’s passed.
           </template>
         </accordion-item>

         <accordion-item
           accordion-id="headingThree"
           collapse-id="collapseThree"
         >
           <template #question
             >How much time does it take to receive the order?</template
           >
           <template #answer>
             The time is now for it to be okay to be great. People in this
             world shun people for being great. For being a bright color. For
             standing out. But the time is now to be okay to be the greatest
             you. Would you believe in what you believe in, if you were the
             only one who believed it? If everything I did failed - which it
             doesn&#39;t, it actually succeeds - just the fact that I&#39;m
             willing to fail is an inspiration. People are so scared to lose
             that they don&#39;t even try. Like, one thing people can&#39;t say
             is that I&#39;m not trying, and I&#39;m not trying my hardest, and
             I&#39;m not trying to do the best way I know how.
           </template>
         </accordion-item>

         <accordion-item accordion-id="headingFour" collapse-id="collapseFour">
           <template #question>Can I resell the products?</template>
           <template #answer>
             I always felt like I could do anything. That’s the main thing
             people are controlled by! Thoughts- their perception of
             themselves! They&#39;re slowed down by their perception of
             themselves. If you&#39;re taught you can’t do anything, you won’t
             do anything. I was taught I could do everything.
             <br />
             <br />If everything I did failed - which it doesn&#39;t, it
             actually succeeds - just the fact that I&#39;m willing to fail is
             an inspiration. People are so scared to lose that they don&#39;t
             even even try. Like, one thing people can&#39;t say is that
             I&#39;m not trying, and I&#39;m not trying my hardest, and I&#39;m
             not trying trying to do the best way I know how.
           </template>
         </accordion-item>

         <accordion-item
           accordion-id="headingFifth"
           collapse-id="collapseFifth"
         >
           <template #question>Where do I find the shipping details?</template>
           <template #answer>
             There’s nothing I really wanted to do in life that I wasn’t able
             to get good at. That’s my skill. I’m not really specifically
             talented at anything except for the ability to learn. That’s what
             I do. That’s what I’m here for. Don’t be afraid to be wrong
             because you can’t learn anything from a compliment. I always felt
             like I could do anything. That’s the main thing people are
             controlled by! Thoughts- their perception of themselves!
             They&#39;re slowed down by their perception of themselves. If
             you&#39;re taught you can’t do anything, you won’t do anything. I
             was taught I could do everything.
           </template>
         </accordion-item>
       </div>
     </div>
   </div>
 </div>
 
    
 
    <div class="responsive-container-block bigContainer p-5">
        <div class="responsive-container-block Container bottomContainer">
            <div class="ultimateImg">
                <div class="backImg">
                    <img class="bgImg" src="../../assets/img/choose-thumb.png">
                </div>
                <img class="mainImg" src="../../assets/img/choose-thumb1.png">
                <div class="purpleBox">
                    <div class="success-circle">85%</div>

                    <p class="text-blk subHeadingText">Success Project</p>

                    <p class="purpleText">

                        We completed 85% success project in business. </p>

                </div>
            </div>
            <div class="allText bottomText">
                <p class="text-blk headingText">
                    About Me
                </p>
                <p class="text-blk subHeadingText">
                    This Service Focus On Clean & Maintaining Homes</p>
                <p class="text-blk description">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fermentum pulvinar ullamcorper suspendisse
                    ac eget. Pellentesque tempus leo in ullamcorper quis vestibulum ligula elementum ut.
                </p>
                <div class="col-span-3">
                <div class="service-box">
                    <span class="text-blk"><img src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/aicon1.png" alt="Expert Cleaner">  Highly Rated Cleaning</span>
                    <p>This service focuses on cleaning and maintaining homes. It typically includes tasks.</p>
                    <span class="text-blk"><img src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/ad2.png" alt="Expert Cleaner">  House & Toilet Cleaning</span>
                    <p>With Shine Bright Cleaning Services, you can trust us to make your space shine like .</p>
                   
                    
                </div>
            </div>
                <router-link :to="{ name: 'Signin Basic' }" class="mb-0 btn btn-sm me-1">
                    Book Now
                </router-link>
            </div>
        </div>
    </div>
    

    <div id="colorlib-counter" class="colorlib-counters" :style="{
    backgroundImage: 'url(' + require('../../assets/img/banner.png') + ')',

    backgroundSize: 'cover',
    padding: '100px',
  }" data-stellar-background-ratio="0.5">
				<div class="overlay"></div>
				<div class="colorlib-narrow-content">
					<div class="row">
					</div>
					<div class="row">
						<div class="col-md-3 text-center animate-box">
							<span class="icon"><i class="flaticon-skyline"></i></span>
							<span class="colorlib-counter js-counter" data-from="0" data-to="1539" data-speed="5000" data-refresh-interval="50"></span>
							<span class="colorlib-counter-label">Projects</span>
						</div>
						<div class="col-md-3 text-center animate-box">
							<span class="icon"><i class="flaticon-engineer"></i></span>
							<span class="colorlib-counter js-counter" data-from="0" data-to="3653" data-speed="5000" data-refresh-interval="50"></span>
							<span class="colorlib-counter-label">Employees</span>
						</div>
						<div class="col-md-3 text-center animate-box">
							<span class="icon"><i class="flaticon-architect-with-helmet"></i></span>
							<span class="colorlib-counter js-counter" data-from="0" data-to="5987" data-speed="5000" data-refresh-interval="50"></span>
							<span class="colorlib-counter-label">Constructor</span>
						</div>
						<div class="col-md-3 text-center animate-box">
							<span class="icon"><i class="flaticon-worker"></i></span>
							<span class="colorlib-counter js-counter" data-from="0" data-to="3999" data-speed="5000" data-refresh-interval="50"></span>
							<span class="colorlib-counter-label">Partners</span>
						</div>
					</div>
				</div>
			</div>
            <div class="mx-auto text-center col-md-6">
       <h2>Our Work</h2>
       <p>
         A lot of people don&#39;t appreciate the moment until it’s passed.
         I&#39;m not trying my hardest, and I&#39;m not trying to do
       </p>
     </div>
     <div class="container">
    <div class="wrapper">
        
        <div id="container">
      
            <input type="radio" name="slide" id="c1" checked>
            <label for="c1" class="card">
                <div class="row">
                    <div class="icon">1</div>
                    <div class="description">
                        <h4>Winter</h4>
                        <p>Winter has so much to offer -
                         creative activities</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c2" >
            <label for="c2" class="card">
                <div class="row">
                    <div class="icon">2</div>
                    <div class="description">
                        <h4>Digital Technology</h4>
                        <p>Gets better every day -
                         stay tuned</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c3" >
            <label for="c3" class="card">
                <div class="row">
                    <div class="icon">3</div>
                    <div class="description">
                        <h4>Globalization</h4>
                        <p>Help people all over the world</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c4" >
            <label for="c4" class="card">
                <div class="row">
                    <div class="icon">4</div>
                    <div class="description">
                        <h4>New technologies</h4>
                        <p>Space engineering becomes
                         more and more advanced</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c4" >
            <label for="c4" class="card">
                <div class="row">
                    <div class="icon">4</div>
                    <div class="description">
                        <h4>New technologies</h4>
                        <p>Space engineering becomes
                         more and more advanced</p>
                    </div>
                </div>
            </label>
            <input type="radio" name="slide" id="c4" >
            <label for="c4" class="card">
                <div class="row">
                    <div class="icon">4</div>
                    <div class="description">
                        <h4>New technologies</h4>
                        <p>Space engineering becomes
                         more and more advanced</p>
                    </div>
                </div>
            </label>
        </div>
    </div>
</div>


    <app-footer />
</template>
<style scoped>
.carousel-control-prev-icon,
.carousel-control-next-icon {
    background-color: black;
    /* display: none; */
    /* Change arrow color to black */
}
#colorlib-counter {
  position: relative;
  clear: both;
  margin-bottom: 5em; }

.colorlib-counters {
  padding: 3em 0;
  background-size: cover;
  background-attachment: fixed;
  background-position: center center; }
  .colorlib-counters .overlay {
    z-index: 0;
    position: absolute;
    bottom: 0;
    top: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.4); }
  .colorlib-counters .icon {
    width: 100px;
    height: 100px;
    display: table;
    margin: 0 auto;
    margin-bottom: 20px; }
    .colorlib-counters .icon i {
      display: table-cell;
      vertical-align: middle;
      width: 100px;
      height: 100px;
      font-size: 50px;
      color: #FFC300;
      background: #fff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%; }
  .colorlib-counters .counter-wrap {
    border: 1px solid red !important; }
  .colorlib-counters .colorlib-counter {
    font-size: 40px;
    display: block;
    color: white;
    font-family: "Quicksand", Arial, sans-serif;
    width: 100%;
    font-weight: 700;
    margin-bottom: .3em; }
  .colorlib-counters .colorlib-counter-label {
    color: rgba(255, 255, 255, 0.7);
    text-transform: uppercase;
    font-size: 14px;
    letter-spacing: 5px;
    margin-bottom: 2em;
    display: block; }

.colorlib-lead {
  font-size: 18px;
  line-height: 1.5; }
.carousel-control-prev,
.carousel-control-next {
    filter: invert(1);
    /* Invert arrow color */
}

.about-indetails .indetails-item {
    width: 50%;
}

.carousel {
    position: relative;
    background: #30c7b5;
}

.service-box {
    background-color: #f0f8ff;
    border: 1px solid #ccc;
    border-radius: 8px;
    text-align: start;
    padding: 20px;
    margin: 10px;
}
.colorlib-blog,
.colorlib-work,
.colorlib-about,
.colorlib-services,
.colorlib-contact {
  padding-top: 4em;
  padding-bottom: 9em;
  clear: both;
  width: 100%;
  display: block; }
.colorlib-narrow-content {
  padding: 0 2.5em; }

.service-box img {
    width: 20px;
    height: auto;
}
.about-img,
.about-img-2,
.services-img{
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	position: relative;
}
.steps {
  display: block;
  position: relative; }
  .steps h3 {
    font-weight: 400;
    margin-bottom: 20px;
    color: rgba(0, 0, 0, 0.7);
    font-size: 14px;
    letter-spacing: 3px;
    line-height: 1.5;
    text-transform: uppercase; }
  .steps:before {
    position: absolute;
    top: 20px;
    left: 0;
    right: 0;
    content: '';
    width: 100%;
    height: 1px;
    background: #e6e6e6;
    z-index: -1; }
  .steps .icon {
    display: block;
    margin-bottom: 20px;
    position: relative;
    z-index: 0; }
    .steps .icon span {
      display: table;
      width: 40px;
      height: 40px;
      border: 1px solid #e6e6e6;
      text-align: center;
      background: #fff;
      -webkit-border-radius: 50%;
      -moz-border-radius: 50%;
      -ms-border-radius: 50%;
      border-radius: 50%;
      z-index: 1; }
      .steps .icon span i {
        display: table-cell;
        vertical-align: middle;
        color: #000; }
  



.service-box .text-blk {
    font-size: large;
    font-weight: bold;
    display: block;
    margin-top: 10px;
}


.success-circle {
    width: 60px;
    height: 60px;
    background-color: #3b82f6;
    color: white;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5em;
    margin-bottom: 10px;
}

.carousel-indicators button {
    background-color: #30c7b5;
    /* Change carousel indicators color */
    border-color: #30c7b5;
    /* Change carousel indicators border color */
}

.carousel-indicators .active {
    background-color: #30c7b5;
    /* Change active carousel indicator color */
    border-color: #30c7b5;
    /* Change active carousel indicator border color */
}

.company-about-section {
    position: relative;
    z-index: 1;
}

.about-ourcompany {
    position: relative;
    z-index: 6;
    padding: 80px 80px;
}

.about-indetails {
    display: flex;
    flex-wrap: wrap;
    padding-top: 90px;
    margin-bottom: 10px;
}


#contactForm {
    width: 100%;
}

#contactForm .form-control {
    width: 100%;
}

* {
    font-family: Nunito, sans-serif;
}

.responsive-container-block {
    min-height: 75px;
    height: fit-content;
    width: 100%;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    display: flex;
    flex-wrap: wrap;
    margin-top: 0px;
    margin-right: auto;
    margin-bottom: 0px;
    margin-left: auto;
    justify-content: flex-start;
}

a {
    text-decoration-line: none;
    text-decoration-thickness: initial;
    text-decoration-style: initial;
    text-decoration-color: initial;
}

.text-blk {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    line-height: 25px;
}

.responsive-container-block.bigContainer {
    padding-top: 10px;
    padding-right: 30px;
    padding-bottom: 10px;
    padding-left: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 10px 50px 10px 50px;
}

.mainImg {
    color: black;
    width: 78%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 2;
}
.mainImg1 {
    color: black;
    width: 78%;
    height: auto;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    z-index: 2;
}

.text-blk.headingText {
    font-size: 22px;
    font-weight: 700;
    line-height: 30px;
    color: black;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 0px;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 5px;
    margin-left: 0px;
}

.allText {
    padding-top: 0px;
    padding-right: 0px;
    padding-bottom: 0px;
    padding-left: 0px;
    width: 40%;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
}

.text-blk.subHeadingText {
    color: rgb(102, 102, 102);
    font-size: 26px;
    line-height: 32px;
    font-weight: 700;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 15px;
    margin-left: 0px;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 0px;
}

.text-blk.description {
    font-size: 18px;
    line-height: 26px;
    color: rgb(102, 102, 102);
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 50px;
    margin-left: 0px;
    font-weight: 400;
    padding-top: 0px;
    padding-right: 10px;
    padding-bottom: 0px;
    padding-left: 0px;
}

.explore {
    font-size: 16px;
    line-height: 28px;
    color: rgb(102, 102, 102);
    border-top-width: 2px;
    border-right-width: 2px;
    border-bottom-width: 2px;
    border-left-width: 2px;
    border-top-style: solid;
    border-right-style: solid;
    border-bottom-style: solid;
    border-left-style: solid;
    border-top-color: rgb(102, 102, 102);
    border-right-color: rgb(102, 102, 102);
    border-bottom-color: rgb(102, 102, 102);
    border-left-color: rgb(102, 102, 102);
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
    cursor: pointer;
    background-color: white;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 0px;
    padding-top: 8px;
    padding-right: 40px;
    padding-bottom: 8px;
    padding-left: 40px;
}

.explore:hover {
    background-image: initial;
    background-position-x: initial;
    background-position-y: initial;
    background-size: initial;
    background-repeat-x: initial;
    background-repeat-y: initial;
    background-attachment: initial;
    background-origin: initial;
    background-clip: initial;
    background-color: #0d6efd;
    color: white;
    border-top-width: initial;
    border-right-width: initial;
    border-bottom-width: initial;
    border-left-width: initial;
    border-top-style: none;
    border-right-style: none;
    border-bottom-style: none;
    border-left-style: none;
    border-top-color: initial;
    border-right-color: initial;
    border-bottom-color: initial;
    border-left-color: initial;
    border-image-source: initial;
    border-image-slice: initial;
    border-image-width: initial;
    border-image-outset: initial;
    border-image-repeat: initial;
}

.responsive-container-block.Container {
    margin-top: 80px;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
    justify-content: center;
    align-items: center;
    max-width: 1320px;
    padding-top: 10px;
    padding-right: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
}

.responsive-container-block.Container.bottomContainer {
    flex-direction: row-reverse;
    margin-top: 80px;
    margin-right: auto;
    margin-bottom: 50px;
    margin-left: auto;
    position: static;
}

.allText.aboveText {
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 0px;
    margin-left: 40px;
}

.allText.bottomText {
    margin-top: 0px;
    margin-right: 40px;
    margin-bottom: 0px;
    margin-left: 0px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding-top: 0px;
    padding-right: 15px;
    padding-bottom: 0px;
    padding-left: 0px;
}

.purpleBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    max-width: 430px;
    background-color: white;
    padding-top: 20px;
    padding-right: 20px;
    padding-bottom: 20px;
    padding-left: 20px;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    position: absolute;
    bottom: -35px;
    left: -8%;
    z-index: 3;
}

.purpleText {
    font-size: 18px;
    line-height: 26px;
    color: #666666;
    margin-top: 0px;
    margin-right: 0px;
    margin-bottom: 10px;
    margin-left: 0px;
}

.ultimateImg {
    width: 50%;
    position: relative;
}

.backImg {
    position: absolute;
    top: -75px;
    left: 196px;
    z-index: -1;
}

.bgImg {
    width: 125%;
    height: auto;
    border-radius: 10px;
}

@media (max-width: 1024px) {
    .responsive-container-block.Container {
        max-width: 850px;
    }

    .mainImg,
    .bgImg {
        width: 55%;
        height: auto;
    }

    .bgImg {
        width: 55%;
        height: auto;
        border-radius: 10px;
    }

    .allText {
        width: 40%;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 20px;
    }

    .responsive-container-block.bigContainer {
        padding-top: 10px;
        padding-right: 10px;
        padding-bottom: 10px;
        padding-left: 10px;
    }

    .responsive-container-block.Container.bottomContainer {
        margin-top: 80px;
        margin-right: auto;
        margin-bottom: 50px;
        margin-left: auto;
    }

    .responsive-container-block.Container {
        max-width: 830px;
    }

    .allText.aboveText {
        margin-top: 30px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 40px;
    }

    .allText.bottomText {
        margin-top: 30px;
        margin-right: 40px;
        margin-bottom: 0px;
        margin-left: 0px;
        text-align: left;
    }

    .text-blk.headingText {
        text-align: center;
    }

    .allText.aboveText {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 30px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
    }

    .text-blk.subHeadingText {
        text-align: left;
        font-size: 26px;
        line-height: 32px;
    }

    .text-blk.description {
        text-align: left;
        line-height: 24px;
    }

    .explore {
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
    }

    .responsive-container-block.bigContainer {
        padding-top: 10px;
        padding-right: 30px;
        padding-bottom: 10px;
        padding-left: 30px;
    }

    .responsive-container-block.Container {
        justify-content: space-evenly;
    }

    .purpleBox {
        bottom: 10%;
    }

    .responsive-container-block.Container.bottomContainer {
        padding-top: 10px;
        padding-right: 0px;
        padding-bottom: 10px;
        padding-left: 0px;
        max-width: 930px;
    }

    .allText.bottomText {
        width: 40%;
    }

    .purpleBox {
        bottom: auto;
        left: -10%;
        top: 70%;
    }

    .mainImg {
        width: 100%;
    }

    .text-blk.headingText {
        text-align: left;
    }
}

@media (max-width: 768px) {
    .allText {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
    }

    .responsive-container-block.Container {
        flex-direction: column;
        height: auto;
    }

    .text-blk.headingText {
        text-align: center;
    }

    .text-blk.subHeadingText {
        text-align: center;
        font-size: 24px;
    }

    .text-blk.description {
        text-align: center;
        font-size: 18px;
    }

    .allText {
        margin-top: 40px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
    }

    .allText.aboveText {
        margin-top: 40px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
    }

    .responsive-container-block.Container {
        margin-top: 80px;
        margin-right: auto;
        margin-bottom: 50px;
        margin-left: auto;
    }

    .responsive-container-block.Container.bottomContainer {
        margin-top: 50px;
        margin-right: auto;
        margin-bottom: 50px;
        margin-left: auto;
    }

    .allText.bottomText {
        margin-top: 40px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
    }

    .mainImg,
    .bgImg {
        width: 100%;
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: -70px;
        margin-left: 0px;
    }

    .responsive-container-block.Container.bottomContainer {
        flex-direction: column;
    }

    .ultimateImg {
        width: 100%;
    }

    .purpleBox {
        position: static;
    }

    .allText.bottomText {
        width: 100%;
        align-items: flex-start;
    }

    .text-blk.headingText {
        text-align: left;
    }

    .text-blk.subHeadingText {
        text-align: left;
    }

    .text-blk.description {
        text-align: left;
    }

    .ultimateImg {
        position: static;
    }

    .mainImg {
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
    }

    .ultimateImg {
        position: relative;
    }

    .purpleBox {
        margin-top: 0px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        position: absolute;
        left: 0px;
        top: 80%;
    }

    .allText.bottomText {
        margin-top: 100px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
    }
}

@media (max-width: 500px) {
    .responsive-container-block.Container {
        padding-top: 10px;
        padding-right: 0px;
        padding-bottom: 10px;
        padding-left: 0px;
        width: 100%;
        max-width: 100%;
    }

    .mainImg,
    .bgImg {
        width: 100%;
    }

    .bgImg {
        width: 100%;
        height: auto;
        border-radius: 10px;
    }

    .responsive-container-block.bigContainer {
        padding-top: 10px;
        padding-right: 25px;
        padding-bottom: 10px;
        padding-left: 25px;
    }

    .text-blk.subHeadingText {
        font-size: 24px;
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        line-height: 28px;
    }

    .text-blk.description {
        font-size: 16px;
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        line-height: 22px;
    }

    .allText {
        padding-top: 0px;
        padding-right: 0px;
        padding-bottom: 0px;
        padding-left: 0px;
        width: 100%;
    }

    .allText.bottomText {
        margin-top: 50px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
        padding: 0 0 0 0;
        margin: 30px 0 0 0;
    }

    .ultimateImg {
        position: static;
    }

    .purpleBox {
        position: static;
    }

    .stars {
        width: 55%;
    }

    .allText.bottomText {
        margin-top: 75px;
        margin-right: 0px;
        margin-bottom: 0px;
        margin-left: 0px;
    }

    .responsive-container-block.bigContainer {
        padding-top: 10px;
        padding-right: 20px;
        padding-bottom: 10px;
        padding-left: 20px;
    }

    .purpleText {
        font-size: 16px;
        line-height: 22px;
    }

    .explore {
        padding: 6px 35px 6px 35px;
        font-size: 15px;
    }
}
@keyframes slideInRight {
    0% {
        transform: translateX(100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

@keyframes slideInLeft {
    0% {
        transform: translateX(-100%);
        opacity: 0;
    }
    100% {
        transform: translateX(0);
        opacity: 1;
    }
}

.ultimateImg {
    animation: slideInRight 1s ease-in-out;
}

.allText {
    animation: slideInLeft 1s ease-in-out;
}

.responsive-container-block {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.allText, .ultimateImg {
    flex: 1;
}
.wrapper {
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

#container {
    height: 400px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: start;
}

.card {
    width: 80px;
    border-radius: .75rem;
    background-size: cover;
    cursor: pointer;
    overflow: hidden;
    border-radius: 2rem;
    margin: 0 10px;
    display: flex;
    align-items: flex-end;
    transition: .6s cubic-bezier(.28,-0.03,0,.99);
    box-shadow: 0px 10px 30px -5px rgba(0,0,0,0.8);
}

.card > .row {
    color: white;
    display: flex;
    flex-wrap: nowrap;
}

.card > .row > .icon {
    background: #223;
    color: white;
    border-radius: 50%;
    width: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 15px;
}

.card > .row > .description {
    display: flex;
    justify-content: center;
    flex-direction: column;
    overflow: hidden;
    height: 80px;
    width: 520px;
    opacity: 0;
    transform: translateY(30px);
    transition-delay: .3s;
    transition: all .3s ease;
}

.description p {
    color: #b0b0ba;
    padding-top: 5px;
}

.description h4 {
    text-transform: uppercase;
}

input {
    display: none;
}

input:checked + label {
    width: 600px;
}

input:checked + label .description {
    opacity: 1 !important;
    transform: translateY(0) !important;
}

.card[for="c1"] {
    background-image: url('../../assets/img/banner.png');
}
.card[for="c2"] {
    background-image: url('../../assets/img/banner.png');
}
.card[for="c3"] {
    background-image: url('../../assets/img/banner.png');
}
.card[for="c4"] {
    background-image: url('../../assets/img/banner.png');
}

</style>