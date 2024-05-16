<script setup>
import { onMounted, onBeforeUnmount} from "vue";
import { useStore } from "vuex";
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
// import PricingCard from "./components/PricingCard.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
import AccordionItem from "./components/AccordionItem.vue";
import setNavPills from "@/assets/js/nav-pills.js";
import ProjectGallerie from "./components/ProjectGallerie.vue";




const store = useStore();


// const slides = [...existingSlides, ...testimonialSlides];
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

</script>

<template>
    <!-- <div class="green-bar" style="background-color: #34C759; height: 5px;"></div> -->

      <div class="container-fluid" style="background-color: #30c7b5;height: 41px;">
        <div class="text-center">
          <h3 style="color: white;">50% OFF</h3>
        </div>
      </div>

  <navbar is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success"
    :dark-mode="true" style="position: absolute;" />


    <div class="page-header position-relative" :style="{
    backgroundImage: 'url(' + require('../../assets/img/hygeco.jpg') + ')',
    backgroundSize: 'cover',
    padding: '100px',
  }">

        <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
            <div class="row">
                <div class="mx-auto text-center col-md-6 mt-4">
                    <h3 class="text-white">Nous Service </h3>
                    <p class="text-white">
                        Hygeco is a Montreal-based company that offers a range of professional cleaning and laundry
                        services
                    </p>
                </div>
            </div>
           
        </div>
    </div>
    <div class="container p-5">
        
        <div class="row">
            <div class="col-md-6">
                <img src="https://radiustheme.com/demo/wordpress/themes/clenix/wp-content/uploads/2019/12/about14.jpg" alt="House cleaning" class="img-fluid">
            </div>
            <div class="col-md-6">
                <h1 class="text-center">Making Your House As Good As New</h1>
                 <p class="lead text-center">Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>                
                 <ul>
                    <li>Experienced Team</li>
                    <li>Keep the same cleaner for every visit</li>
                    <li>One-off, weekly or fortnightly visits</li>
                    <li>All in all service</li>
                </ul>
                <div class="text-center">
                   <button type="button" class="yellow-btn">Book a Service</button>
                </div>
            </div>
           
        </div>
        
    </div>
    <section class="relative bg-cover bg-center py-7 mt-3"
    :style="{ backgroundImage: 'url(https://radiustheme.com/demo/wordpress/themes/clenix/wp-content/uploads/2019/11/section-bg15.jpg)' }">
    <div class="absolute inset-0  "></div>
    <div class="container mx-auto relative flex justify-center items-center text-center">
      <div class="max-w-lg">
        <h2 class="text-white text-3xl md:text-4xl font-bold mb-4">Get started with your free estimate</h2>
        <a href="#" class="bg-yellow-button text-gray-900 font-medium py-3 px-6 rounded">
          Get an Estimate
        </a>
      </div>
    </div>
  </section>
    <div class="container">
    <div class="work-wrapper1 mt-7">
      <img decoding="async"
        src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/flower.png"
        alt="How It Works" class="follower-section" />
      <div class="row justify-content-lg-between justify-content-center">
        <div class="col-lg-7">
          <div class="work-thumb">
            <img decoding="async" src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/work.png"
              alt="How It Works" />
          </div>
        </div>
        <div class="col-lg-5 col-md-7">
          <div class="howwork-content">
            <div class="cmn-section-title" style="margin-bottom: -60px;" >
              <div class="cmn--btn cmn-alt1 wow fadeInDown" data-wow-delay="0.4"
                style="visibility: visible; animation-name: fadeInDown;">
                <!-- <span> Working Process </span> -->
              </div>
              <h2 class="white mt-xxl-4 mt-2 wow fadeInUp" data-wow-delay="0.5"
                style="visibility: visible; animation-name: fadeInUp;color:#032b52 ;">
                Nos Service
              </h2>
              <!-- <p class="text-white wow fadeInDown" data-wow-delay="0.6"
                style="visibility: visible; animation-name: fadeInDown">
                We love help you get your clothes fresh and clean so we here for
                you 24/7 for any question, concern or suggestion.
              </p> -->
            </div>
            <div class="howit-work-info">
              <div class="howit-item wow fadeInUp" data-wow-delay="0.7" style="visibility: visible; animation-name: fadeInUp;padding: 35px;
    padding-left: 0px;padding: 62px;">
                <h3 class="title d-flex align-items-center gap-2">
                  MENAGE
                </h3>
                <p class="pra">
                  The first step involves understanding the client's needs and
                  expectations. This may include a consultation where the client
                  outlines.
                </p>
                <div class="row">
      <div class="mx-auto col-md-10">
        <div id="accordionRental" class="accordion">
          <accordion-item
            accordion-id="headingOne"
            collapse-id="collapseOne"
          >
            <template #question>Menage Regulier</template>
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
            <template #question>Menage En Profondeur</template>
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
              >Menage de Printemps</template
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
            <template #question>Menage Apres Construction</template>
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
            <template #question>Nettoyage Des Vitres</template>
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

            </div>
          </div>
        </div>


      </div>
      <img decoding="async"
        src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/working-ball.png"
        alt="How It Works" class="working-bable" />
    </div>
  </div>
  <section class="working-process" style="text-align: center;
  padding: 40px 20px;
  background-color: #f9f9f9;">
    <div class="container" style=" max-width: 1200px;
  margin: 0 auto;
  padding: 0 15px;">
      <div class="title-section" style="margin-bottom: 40px;">
        <h2 style="font-size: 2em;
  margin-bottom: 10px;">Our Working Process</h2>
        <p style=" font-size: 1em;
  color: #666;">Perspiciatis unde omnis iste natus error sit voluptatem accusantium dol oremque laudantium, totam
          remeaque ipsa.</p>
      </div>
      <div class="process-steps" style="display: flex;
  flex-wrap: wrap;
  justify-content: space-between;">
        <div class="step">
          <div class="icon">
            <i class="fa fa-calendar-check-o"></i>
          </div>
          <h3><a href="#">Book Online Form</a></h3>
          <p>Ahen an unknown printer took a galley type and scrambled nknown printer.</p>
        </div>
        <div class="step">
          <div class="icon">
            <i class="fa fa-envelope-o"></i>
          </div>
          <h3><a href="#">Get Confirmation</a></h3>
          <p>Ahen an unknown printer took a galley type and scrambled nknown printer.</p>
        </div>
        <div class="step">
          <div class="icon">
            <i class="fa fa-smile-o"></i>
          </div>
          <h3><a href="#">Let’s Enjoy</a></h3>
          <p>Ahen an unknown printer took a galley type and scrambled nknown printer.</p>
        </div>
      </div>
    </div>
  </section>
  <ProjectGallerie />
 <div class="container">

<img decoding="async"
  src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/flower.png"
  alt="How It Works" class="follower-section" style="position: relative;
left: 30px;
top: 5px;" />
<div class="row justify-content-lg-between justify-content-center">
  <div class="col-lg-5 col-md-7">
    <div class="howwork-content">
      <div class="cmn-section-title">
        <div class="cmn--btn cmn-alt1 wow fadeInDown" data-wow-delay="0.4"
          style="visibility: visible; animation-name: fadeInDown">
          <!-- <span> Working Process </span> -->
        </div>
        <h2 class="white mt-xxl-4 mt-2 wow fadeInUp" data-wow-delay="0.5"
          style="visibility: visible; animation-name: fadeInUp;color:#30c7b5 ;margin-bottom: -62px;">
          Buandrie
        </h2>
        <!-- <p class="text-white wow fadeInDown" data-wow-delay="0.6"
            style="visibility: visible; animation-name: fadeInDown">
            We love help you get your clothes fresh and clean so we here for
            you 24/7 for any question, concern or suggestion.
          </p> -->
      </div>
      <div class="howit-work-info">
        <div class="howit-item wow fadeInUp" data-wow-delay="0.7" style="visibility: visible; animation-name: fadeInUp;padding: 35px;
padding-left: 0px;">

          <p class="pra">
            The first step involves understanding the client's needs and
            expectations. This may include a consultation where the client
            outlines.
          </p>
          <div class="row">
      <div class="mx-auto col-md-10">
        <div id="accordionRental" class="accordion">
          <accordion-item
            accordion-id="headingOne"
            collapse-id="collapseOne"
            
          >
            <template #question>Lavage</template>
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
            <template #question>Pilage</template>
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
              >Ramassage</template
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
            <template #question>Livraison</template>
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
            <template #question>Self Service</template>
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

      </div>
    </div>
  </div>
  <div class="col-lg-7">
    <div class="work-thumb">
      <img decoding="async" src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/work.png"
        alt="How It Works" style="width: 90%;
border-radius: 60px;" />
    </div>
  </div>

</div>
<img decoding="async"
  src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/working-ball.png"
  alt="How It Works" class="working-bable" />
  

</div>
<section class="working-process" style="text-align: center;
padding: 40px 20px;
background-color: #f9f9f9;">
<div class="container" style=" max-width: 1200px;
margin: 0 auto;
padding: 0 15px;">
  <div class="title-section" style="margin-bottom: 40px;">
    <h2 style="font-size: 2em;
margin-bottom: 10px;">Our Working Process</h2>
    <p style=" font-size: 1em;
color: #666;">Perspiciatis unde omnis iste natus error sit voluptatem accusantium dol oremque laudantium, totam
      remeaque ipsa.</p>
  </div>
  <div class="process-steps" style="display: flex;
flex-wrap: wrap;
justify-content: space-between;">
    <div class="step">
      <div class="icon">
        <i class="fa fa-calendar-check-o"></i>
      </div>
      <h3><a href="#">Book Online Form</a></h3>
      <p>Ahen an unknown printer took a galley type and scrambled nknown printer.</p>
    </div>
    <div class="step">
      <div class="icon">
        <i class="fa fa-envelope-o"></i>
      </div>
      <h3><a href="#">Get Confirmation</a></h3>
      <p>Ahen an unknown printer took a galley type and scrambled nknown printer.</p>
    </div>
    <div class="step">
      <div class="icon">
        <i class="fa fa-smile-o"></i>
      </div>
      <h3><a href="#">Let’s Enjoy</a></h3>
      <p>Ahen an unknown printer took a galley type and scrambled nknown printer.</p>
    </div>
  </div>
</div>
</section>
<!-- <div class="container-fluid">
        <div class="text-center" >
                <h2 style="font-size: 2em;
            margin-bottom: 10px;">Our Recent Project</h2>
                <p style=" font-size: 1em;
            color: #666;">Perspiciatis unde omnis iste natus error sit voluptatem accusantium dol oremque laudantium, totam
                remeaque ipsa.</p>
            </div>
        <div class="row">
            <div class="col-12">
                <card-slider />   
            </div>
        </div>
    </div> -->
    <div class="container">
    <div class="work-wrapper2 mt-7"  >
      <img decoding="async"
        src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/flower.png"
        alt="How It Works" class="follower-section" />
      <div class="row justify-content-lg-between justify-content-center">
        <div class="col-lg-7">
          <div class="work-thumb">
            <img decoding="async" src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/ask-wman.png"
              alt="How It Works" style="margin-top: -123px;width: 67%;margin-bottom: 68px;" />
          </div>
        </div>
        <div class="col-lg-5 col-md-7">
          <div class="howwork-content">
            <div class="cmn-section-title" style="margin-bottom: -34px;margin-top: -66px;" >
              <div class="cmn--btn cmn-alt1 wow fadeInDown" data-wow-delay="0.4"
                style="visibility: visible; animation-name: fadeInDown">
                <!-- <span> Working Process </span> -->
              </div>
              <h2 class="white mt-xxl-4 mt-2 wow fadeInUp" data-wow-delay="0.5"
                style="visibility: visible; animation-name: fadeInUp;color:#032b52 ;">
                Nos Service
              </h2>
              <!-- <p class="text-white wow fadeInDown" data-wow-delay="0.6"
                style="visibility: visible; animation-name: fadeInDown">
                We love help you get your clothes fresh and clean so we here for
                you 24/7 for any question, concern or suggestion.
              </p> -->
            </div>
            <div class="howit-work-info">
              <div class="howit-item wow fadeInUp" data-wow-delay="0.7" style="visibility: visible; animation-name: fadeInUp;padding: 35px;
    padding-left: 0px;">
                <h3 class="title d-flex align-items-center gap-2">
                  MENAGE
                </h3>
                <p class="pra">
                  The first step involves understanding the client's needs and
                  expectations. This may include a consultation where the client
                  outlines.
                </p>
                <button class="yellow-btn">Learn More</button>
              </div>

            </div>
          </div>
        </div>


      </div>
      <img decoding="async"
        src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/working-ball.png"
        alt="How It Works" class="working-bable" />
    </div>
  </div>

    
  
  <footer class="footer__section position-relative"> 
    <div class="container">
      <div class="newsletter-section" style="padding-top: 130px;padding-bottom: 65px;text-align: center;">
        <div id="block-15" class="footer-top-widget widget_block">
          <h3 class="title subcribe-title wow fadeInDown" data-wow-delay="0.4s" style="
              visibility: visible;
              animation-delay: 0.4s;
              animation-name: fadeInDown;
              font-size: 24px;
              line-height: 120%;
              font-weight: 700;
            ">
            Subscribe to Our Newsletter
          </h3>
          <div class="wp-widget-group__inner-blocks">
            <p>
              <!-- <script>
                (function () {
                  window.mc4wp = window.mc4wp || {
                    listeners: [],
                    forms: {
                      on: function (evt, cb) {
                        window.mc4wp.listeners.push({
                          event: evt,
                          callback: cb,
                        });
                      },
                    },
                  };
                })();
              </script> -->
              <!-- Mailchimp for WordPress v4.9.12 - https://wordpress.org/plugins/mailchimp-for-wp/ -->
            </p>
            <form id="mc4wp-form-1" class="mc4wp-form mc4wp-form-227" method="post" data-id="227"
              data-name="subscription">
              <div class="mc4wp-form-fields">
                <label class="fz-16 title fw-700 prafont">Enter your email</label>
                <input type="email" name="EMAIL" required="" style="width: 100%;
                  max-width: 500px;
                  border-radius: 10px;
                  border: 1px solid rgba(0, 0, 0, 0.09);
                  color: var(--pra);
                  padding: 13px 16px;
                  margin-bottom: 10px;" />
                <input class="cmn--btn" type="submit" value="Explore Our Offers" style="padding: 12px 28px 15px;
                  color: white;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 500;
                  line-height: 28px;
                  display: inline-block;
                  position: relative;
                  background: #30c7b5;
                  overflow: hidden;
                  border-radius: 100px;
                  transition: all 0.5s;
                  border: unset;
                  margin-top: 10px;" />
              </div>
              <label style="display: none !important">Leave this field empty if you're human:
                <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1" autocomplete="off" /></label><input
                type="hidden" name="_mc4wp_timestamp" value="1715706989" /><input type="hidden" name="_mc4wp_form_id"
                value="227" /><input type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
              <div class="mc4wp-response"></div>
            </form>
            <!-- / Mailchimp for WordPress Plugin -->
            <p></p>
          </div>
        </div>
      </div>
      <div class="footer__top pb-120" style="border-top: 1px solid rgba(0, 0, 0, 0.09);
    padding-top: 60px;">
        <div class="row g-4" style="margin-bottom: 30px;">
          <div class="col-xl-4 col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-duration="2.1s" style="
              visibility: visible;
              animation-duration: 2.1s;
              animation-name: fadeInUp;
            ">
            <div class="footer__item" style="margin-bottom: 24px;
            display: block;">
              <a href="https://www.4damstheme.com/clenis/" class="footer-logo" style="margin-bottom: 24px;
            display: block;">
                <img src="../../assets/img/H-Logo.png" alt="Clenis" />
              </a>
              <div class="footer prag" style="color: #748AA0;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 28px;
                  margin-bottom: 50px;
                  max-width: 325px;
                  margin-top: 40px;">
                With a rich history spanning decades, our club has become a
                symbol of excellence in the golfing community. offers a
                challenging yet rewarding game play.
              </div>
              <ul class="footer-social d-flex align-items-center" style="gap: 24px;">
                <li style="list-style: none;">
                  <a href="" style="text-decoration: none;
                    text-transform: capitalize;
                    margin: 0;
                    color: #30c7b5;
                    transition: all 0.3s;">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"></path>
                    </svg>
                  </a>
                </li>
                <li style="list-style: none;">
                  <a href="" style="text-decoration: none;
                    text-transform: capitalize;
                    margin: 0;
                    color: #30c7b5;
                    transition: all 0.3s;">
                    <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M18.8571 0H6.85714C3.49714 0 0.857143 2.64 0.857143 6V18C0.857143 21.36 3.49714 24 6.85714 24H18.8571C22.2171 24 24.8571 21.36 24.8571 18V6C24.8571 2.64 22.2171 0 18.8571 0ZM22.4571 18C22.4571 20.04 20.8971 21.6 18.8571 21.6H6.85714C4.81714 21.6 3.25714 20.04 3.25714 18V6C3.25714 3.96 4.81714 2.4 6.85714 2.4H18.8571C20.8971 2.4 22.4571 3.96 22.4571 6V18Z"
                        fill="#30c7b5"></path>
                      <path
                        d="M12.8571 6C9.49714 6 6.85714 8.64 6.85714 12C6.85714 15.36 9.49714 18 12.8571 18C16.2171 18 18.8571 15.36 18.8571 12C18.8571 8.64 16.2171 6 12.8571 6ZM12.8571 15.6C10.8171 15.6 9.25714 14.04 9.25714 12C9.25714 9.96 10.8171 8.4 12.8571 8.4C14.8971 8.4 16.4571 9.96 16.4571 12C16.4571 14.04 14.8971 15.6 12.8571 15.6Z"
                        fill="#30c7b5"></path>
                      <path
                        d="M18.8566 7.1998C19.5194 7.1998 20.0566 6.66255 20.0566 5.9998C20.0566 5.33706 19.5194 4.7998 18.8566 4.7998C18.1939 4.7998 17.6566 5.33706 17.6566 5.9998C17.6566 6.66255 18.1939 7.1998 18.8566 7.1998Z"
                        fill="#30c7b5"></path>
                    </svg>
                  </a>
                </li>
                <li style="list-style: none;">
                  <a href="" style="text-decoration: none;
                    text-transform: capitalize;
                    margin: 0;
                    color: #30c7b5;
                    transition: all 0.3s;">
                    <svg width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M17.9178 0.25H21.2258L13.9988 8.51L22.5008 19.75H15.8438L10.6298 12.933L4.66383 19.75H1.35383L9.08383 10.915L0.927826 0.25H7.75383L12.4668 6.481L17.9178 0.25ZM16.7568 17.77H18.5898L6.75783 2.126H4.79083L16.7568 17.77Z"
                        fill="#30c7b5"></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="2.3s" style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            ">
            <div id="block-16" class="widget-footer widget_block footer__item">
              <h4 class="footer__title" style="font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;">Quick links</h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0;
                    margin: 0;
                    list-style: none;">
                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/">About Us</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/contact-us/">Contact Us</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/team-member/">Our Members</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/">Services</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/faqs-page/">FAQ'S</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="2.3s" style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            ">
            <div id="block-17" class="widget-footer widget_block footer__item">
              <h4 class="footer__title" style="font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;">Services</h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0;
                        margin: 0;
                        list-style: none;">
                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-project/">Home Cleaning</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/">Office Cleaning</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/">Kitchen Cleaning</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-project/">Floor Cleaning</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/">Car Cleaning</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="2.3s" style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            ">
            <div id="block-18" class="widget-footer widget_block footer__item">
              <h4 class="footer__title" style="font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;">Company</h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0;
                      margin: 0;
                      list-style: none;">
                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/">Terms &amp; Condition</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/faqs-page/">Our History</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/">Our Gallery</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/">Privacy Policy</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/">Testimonial</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp" data-wow-duration="2.3s" style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            ">
            <div id="block-19" class="widget-footer widget_block footer__item">
              <h4 class="footer__title" style="font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;">Our Contact</h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0;
                    margin: 0;
                    list-style: none;">
                  <li style="margin-bottom: 24px;">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M3.84091 12.25L0.5 14.875V1C0.5 0.58579 0.83579 0.25 1.25 0.25H14.75C15.1642 0.25 15.5 0.58579 15.5 1V11.5C15.5 11.9142 15.1642 12.25 14.75 12.25H3.84091ZM3.32211 10.75H14V1.75H2V11.7888L3.32211 10.75ZM7.25 5.5H8.75V7H7.25V5.5ZM4.25 5.5H5.75V7H4.25V5.5ZM10.25 5.5H11.75V7H10.25V5.5Z"
                        fill="#2295FF"></path>
                    </svg>
                    <a href="mailto:helloclenis@gmail.com" style="transition: all 0.4s;
                          font-size: 16px;
                          font-weight: 400;
                          color: #748aa0;">
                      helloclenis@gmail.com
                    </a>
                  </li>
                  <li style="margin-bottom: 24px;">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.02417 6.01158C5.7265 7.2466 6.7534 8.2735 7.98842 8.9758L8.6518 8.04708C8.87238 7.73838 9.2887 7.64297 9.6217 7.82485C10.6768 8.40123 11.8428 8.75148 13.0592 8.84778C13.4492 8.87868 13.75 9.20417 13.75 9.59545V12.9426C13.75 13.3271 13.4591 13.6493 13.0766 13.6886C12.6792 13.7295 12.2783 13.75 11.875 13.75C5.45469 13.75 0.25 8.5453 0.25 2.125C0.25 1.7217 0.270565 1.32078 0.311418 0.92332C0.350725 0.540812 0.672955 0.25 1.05749 0.25H4.40456C4.79583 0.25 5.12135 0.55078 5.15222 0.940817C5.2485 2.15716 5.59877 3.32323 6.17515 4.37833C6.35703 4.7113 6.26162 5.12766 5.95292 5.34818L5.02417 6.01158ZM3.13319 5.5189L4.55815 4.50107C4.1541 3.62885 3.87721 2.70387 3.73545 1.75H1.7568C1.75227 1.87474 1.75 1.99975 1.75 2.125C1.75 7.71685 6.28315 12.25 11.875 12.25C12.0002 12.25 12.1253 12.2478 12.25 12.2432V10.2645C11.2962 10.1228 10.3712 9.84587 9.49892 9.44185L8.4811 10.8668C8.06935 10.7069 7.6717 10.5186 7.29055 10.3046L7.24697 10.2797C5.77728 9.44402 4.55601 8.22272 3.72025 6.75303L3.69545 6.70945C3.48137 6.3283 3.29316 5.93065 3.13319 5.5189Z"
                        fill="#2295FF"></path>
                    </svg>
                    <span style="color:#748aa0;
                                      font-size: 16px;
                                      font-style: normal;
                                      font-weight: 400;
                                      line-height: 140%;">
                      +48 74326 02396 </span>
                  </li>
                  <li style="margin-bottom: 24px;">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.02417 6.01158C5.7265 7.2466 6.7534 8.2735 7.98842 8.9758L8.6518 8.04708C8.87238 7.73838 9.2887 7.64297 9.6217 7.82485C10.6768 8.40123 11.8428 8.75148 13.0592 8.84778C13.4492 8.87868 13.75 9.20417 13.75 9.59545V12.9426C13.75 13.3271 13.4591 13.6493 13.0766 13.6886C12.6792 13.7295 12.2783 13.75 11.875 13.75C5.45469 13.75 0.25 8.5453 0.25 2.125C0.25 1.7217 0.270565 1.32078 0.311418 0.92332C0.350725 0.540812 0.672955 0.25 1.05749 0.25H4.40456C4.79583 0.25 5.12135 0.55078 5.15222 0.940817C5.2485 2.15716 5.59877 3.32323 6.17515 4.37833C6.35703 4.7113 6.26162 5.12766 5.95292 5.34818L5.02417 6.01158ZM3.13319 5.5189L4.55815 4.50107C4.1541 3.62885 3.87721 2.70387 3.73545 1.75H1.7568C1.75227 1.87474 1.75 1.99975 1.75 2.125C1.75 7.71685 6.28315 12.25 11.875 12.25C12.0002 12.25 12.1253 12.2478 12.25 12.2432V10.2645C11.2962 10.1228 10.3712 9.84587 9.49892 9.44185L8.4811 10.8668C8.06935 10.7069 7.6717 10.5186 7.29055 10.3046L7.24697 10.2797C5.77728 9.44402 4.55601 8.22272 3.72025 6.75303L3.69545 6.70945C3.48137 6.3283 3.29316 5.93065 3.13319 5.5189Z"
                        fill="#2295FF"></path>
                    </svg>
                    <span style="color:#748aa0;
                                      font-size: 16px;
                                      font-style: normal;
                                      font-weight: 400;
                                      line-height: 140%;"> +48 64453 96533 </span>
                  </li>
                  <li style="margin-bottom: 24px;">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M5.75 0.75V2.25H10.25V0.75H11.75V2.25H14.75C15.1642 2.25 15.5 2.58579 15.5 3V15C15.5 15.4142 15.1642 15.75 14.75 15.75H1.25C0.83579 15.75 0.5 15.4142 0.5 15V3C0.5 2.58579 0.83579 2.25 1.25 2.25H4.25V0.75H5.75ZM14 8.25H2V14.25H14V8.25ZM4.25 3.75H2V6.75H14V3.75H11.75V5.25H10.25V3.75H5.75V5.25H4.25V3.75Z"
                        fill="#2295FF"></path>
                    </svg>
                    <span style="color:#748aa0;
                                      font-size: 16px;
                                      font-style: normal;
                                      font-weight: 400;
                                      line-height: 140%;"> Mon - Fri 12:00 - 18:00 </span>
                  </li>
                  <li style="display: flex;
    align-items: center;
    gap: 9px;">
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 14.6746L10.7123 10.9623C12.7625 8.91208 12.7625 5.58794 10.7123 3.53769C8.66208 1.48744 5.33794 1.48744 3.28769 3.53769C1.23744 5.58794 1.23744 8.91208 3.28769 10.9623L7 14.6746ZM7 16.7959L2.22703 12.023C-0.40901 9.3869 -0.40901 5.11307 2.22703 2.47703C4.86307 -0.15901 9.1369 -0.15901 11.773 2.47703C14.409 5.11307 14.409 9.3869 11.773 12.023L7 16.7959ZM7 8.75C7.82845 8.75 8.5 8.07845 8.5 7.25C8.5 6.42157 7.82845 5.75 7 5.75C6.17155 5.75 5.5 6.42157 5.5 7.25C5.5 8.07845 6.17155 8.75 7 8.75ZM7 10.25C5.34314 10.25 4 8.90683 4 7.25C4 5.59314 5.34314 4.25 7 4.25C8.65683 4.25 10 5.59314 10 7.25C10 8.90683 8.65683 10.25 7 10.25Z"
                        fill="#2295FF"></path>
                    </svg>
                    <span style="color:#748aa0;
                                      font-size: 16px;
                                      font-style: normal;
                                      font-weight: 400;
                                      line-height: 140%;"> Hilton, TY56/90 NY, USA </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer__bottom" style="background: #30c7b5;">
      <p style="padding: 25px 5px;
    color: #748aa0;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 30px;
    text-transform: capitalize;
    margin: 0;">© Clenis All Rights Reserved Developed By 4damsthemes</p>
    </div>
    <img src="https://www.4damstheme.com/clenis/wp-content/themes/clenis/assets/images/footer/footer-spra.png"
      alt="Footer backgound image" class="footer-spara" style="position: absolute;
    right: 60px;
    bottom: 220px;" />
    <img src="https://www.4damstheme.com/clenis/wp-content/themes/clenis/assets/images/icon/working-ball.png"
      alt="Footer backgound image" class="footer-working" style="position: absolute;
    bottom: 420px;
    left: 60px;
    animation: updown 2s linear infinite;" />
  </footer>
  <!-- <app-footer /> -->
</template>
<style scooped>
/* service menage */
.work-wrapper1 {
  position: relative;
  padding-top: 80px;
}

.work-wrapper1::before {
  position: absolute;
  width: 100%;
  height: 360px;
  content: "";
  top: 0;
  left: 0;
  background: #30c7b5;
  z-index: 0;
  border-radius: 60px;
}
.work-wrapper2 {
  position: relative;
  padding-top: 80px;
}

.work-wrapper2::before {
  position: absolute;
  width: 100%;
  height: 490px;
  content: "";
  top: 0;
  left: 0;
  background: #30c7b5;
  z-index: 0;
  border-radius: 60px;
}
.howit-worksection {
  position: relative;
  overflow: hidden;
}

.howit-worksection::before {
  position: absolute;
  top: 0;
  left: 0;
  content: "";
  border-radius: 484px;
  background: #30c7b5;
  filter: blur(350px);
  width: 490px;
  height: 490px;
}
.howwork-content {
  position: relative;
}

.howwork-content .cmn-section-title {
  margin-bottom: 90px;
}

.howwork-content .cmn-section-title p {
  color: rgba(255, 255, 255, 0.75) !important;
}

.howwork-content .howit-work-info .howit-item h3 {
  margin-bottom: 12px;
}

.howwork-content .howit-work-info .howit-item:not(:last-child) {
  margin-bottom: 40px;
}

@media (max-width: 1399px) {
  .howwork-content .cmn-section-title {
    margin-bottom: 60px;
  }

  .howwork-content .cmn-section-title h2 {
    margin-bottom: 14px;
  }

  .howwork-content .howit-work-info .howit-item:not(:last-child) {
    margin-bottom: 30px;
  }
}

@media (max-width: 1199px) {
  .howwork-content .cmn-section-title {
    margin-bottom: 50px;
  }

  .howwork-content .cmn-section-title h2 {
    margin-bottom: 14px;
  }

  .howwork-content .howit-work-info .howit-item:not(:last-child) {
    margin-bottom: 16px;
  }
}

@media (max-width: 991px) {
  .howwork-content {
    text-align: center;
    margin: 0 auto;
  }

  .howwork-content .howit-work-info {
    text-align: center;
    margin: 0 auto;
  }

  .howwork-content .howit-work-info .howit-item:not(:last-child) {
    margin-bottom: 22px;
  }

  .howwork-content .howit-work-info .howit-item h3 {
    justify-content: center;
    display: grid !important;
  }

  .howwork-content .cmn-section-title {
    text-align: center;
    margin: 0 auto;
    margin-top: 30px;
    margin-bottom: 40px;
  }

  .howwork-content .cmn-section-title .cmn-alt1 {
    background: var(--subtitle);
  }

  .howwork-content .cmn-section-title .cmn-alt1 span {
    color: #000;
  }

  .howwork-content .cmn-section-title h2 {
    margin-bottom: 14px;
    color: var(--title) !important;
  }

  .howwork-content .cmn-section-title p {
    color: var(--pra) !important;
  }
}

@media (max-width: 1399px) {
  .work-wrapper1 {
    padding-top: 60px;
  }

  .work-wrapper1::before {
    height: 290px;
  }
}

@media (max-width: 1199px) {
  .work-wrapper1 {
    padding-top: 20px;
  }

  .work-wrapper1::before {
    height: 230px;
  }
}
@media (max-width: 1399px) {
  .work-wrapper2 {
    padding-top: 60px;
  }

  .work-wrapper2::before {
    height: 290px;
  }
}

@media (max-width: 1199px) {
  .work-wrapper2 {
    padding-top: 20px;
  }

  .work-wrapper2::before {
    height: 490px;
  }
}

.work-thumb {
  position: relative;
  width: 100%;
  max-width: 613px;
  margin: 0 auto;
}

.work-thumb img {
  width: 100%;
  border-radius: 60px;
}

@media (max-width: 1199px) {
  .work-thumb {
    padding-left: 20px;
  }
}

@media (max-width: 991px) {
  .work-thumb {
    padding-right: 20px;
  }
}
/* working process */
.step {
  flex: 1 1 calc(33.333% - 20px);
  box-sizing: border-box;
  margin-bottom: 40px;
  padding: 20px;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.step:hover {
  transform: translateY(-10px);
}

.icon {
  font-size: 48px;
  color: #3498db;
  margin-bottom: 20px;
}

.step h3 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.step p {
  font-size: 1em;
  color: #666;
}

@media (max-width: 768px) {
  .process-steps {
    flex-direction: column;
  }

  .step {
    flex: 1 1 100%;
    margin-bottom: 20px;
  }
}
/* button */
.yellow-btn {
  background-color: #FFD700; /* Yellow color */
  color: #032b52; /* Text color */
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top: 20px; /* Adjust this value as needed */
}

.yellow-btn:hover {
  background-color: #FFC107; /* Slightly darker yellow for hover effect */
}
.bg-yellow-button {
  background-color: #FFEA00;
  /* Yellow color */
  color: #333;
  /* Dark text color */
  transition: background-color 0.3s ease, color 0.3s ease;
  /* Smooth transition */
}

/* Hover effect for button */
.bg-yellow-button:hover {
  background-color: #FFF;
  /* White background color */
  color: #FFEA00;
  /* Yellow text color */
}
</style>
