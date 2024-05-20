<script>
// import { ref } from 'vue';
import { useStore } from 'vuex';
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
// import PricingCard from "./components/PricingCard.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
// import AccordionItem from "./components/AccordionItem.vue";
import setNavPills from "@/assets/js/nav-pills.js";
// import ProjectGallerie from "./components/ProjectGallerie.vue";
// import TeamCard from "./components/TeamCard.vue";

// import ComplexBackgroundCard from "@/views/ecommerce/components/ComplexBackgroundCard.vue";

export default {
  components: {
    Navbar,
    // ProjectGallerie,
    // TeamCard
    // PricingCard,
    // AppFooter,
    // AccordionItem,
    // ComplexBackgroundCard,
  },
  data() {
    return {
      store: useStore(),
      currentIndexHead: 0,
      existingSlides: [
        {
          imageUrl: require("../../assets/img/header1.png"),
          text: "Let the green clean begin. Linen's bright, cleaning's right, Hygeco's here day or night!",
        },
        {
          imageUrl: require("../../assets/img/header2.png"),
          text: "Let the green clean begin. Linen's bright, cleaning's right, Hygeco's here day or night!",
        },
      ],
      intervalId: null,
    };
  },
  mounted() {
    this.store.state.showSidenav = false;
    this.store.state.showNavbar = false;
    this.store.state.showFooter = false;
    setNavPills();
  },
  beforeUnmount() {
    this.store.state.showSidenav = false;
    this.store.state.showNavbar = false;
    this.store.state.showFooter = true;
    if (this.store.state.isPinned === false) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      sidenav_show.classList.remove("g-sidenav-hidden");
      sidenav_show.classList.add("g-sidenav-pinned");
      this.store.state.isPinned = true;
    }
  },
  
};
</script>
<template>
    <div class="container-fluid" style="background-color: #30c7b5;height: 41px;">
        <div class="text-center">
            <h3 style="color: white;">50% OFF</h3>
        </div>
    </div>

    <navbar is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success"
        :dark-mode="true" style="position: absolute;" />


    <div class="page-header position-relative" :style="{
    backgroundImage: 'url(' + require('../../assets/img/header2.png') + ')',
    backgroundSize: 'cover',
    padding: '100px',
  }">

        <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
            <div class="row">
                <div class="mx-auto text-center col-md-6 mt-4">
                    <h3 class="text-white">About-Us </h3>
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
    <div class="container p-5">
        <div class="row g-lg-4 g-4  align-items-center mb-60">
            <div class="col-xl-4 col-lg-4 col-md-5 col-sm-5">
                <div class="thumb-about2">
                    <img style="width: 100%;border-radius: 60px;" decoding="async"
                        src="https://www.4damstheme.com/clenis/wp-content/uploads/2024/04/about-cate.png"
                        alt="Cleaning Today for Making Your Future Excellent">
                </div>

            </div>
            <div class="col-xl-5 col-lg-5 col-md-6 col-sm-7" >
                <div class="about-content-head2" style="margin-left: 25px;" >
                    <div class="cmn-section-title apointment-content">
                           <div class="cmn--btn cmn-alt2 wow fadeInUp" data-wow-delay="1.5" style="visibility: visible; animation-name: fadeInUp;"> 
                              <span>
                                 About Our Company                               </span>
                           </div>
                           <h2 
    class="title mt-xxl-4 mt-2 mb-0 wow fadeInDown" 
    data-wow-delay="1.5" 
    style="visibility: visible; animation-name: fadeInDown; font-size: 50px; line-height: 120%; font-weight: 500; text-transform: capitalize; font-family: 'Geologica', sans-serif;">
                              Cleaning Today for Making Your Future Excellent                           </h2>
                        </div>
                </div>
            </div>
            <div class="col-xl-2 col-lg-3 col-md-3">
                   
                   <div class="about-textcircle">
                      <a href="" target="_self" class="text-circles video-btn">
                         <div class="text-ani">
                            <img style="height: auto;
    max-width: 100%;
    border: none;
    border-radius: 0;
    box-shadow: none;" decoding="async" src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/about/text-circle.png" alt="Cleaning Today for Making Your Future Excellent">
                         </div>
                         <span class="icon">
                            <i class="bi bi-play"></i>
                         </span>
                      </a>
                   </div>
            </div>
            <div class="row g-4 justify-content-center position-relative">
                                 <div class="col-lg-4 col-md-6">
                     <div class="bn-category-item">
                        <div class="bn-cate-head">
                           <div class="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24"><path d="m8.5,9.5c0,.551.128,1.073.356,1.537-.49.628-.795,1.407-.836,2.256-.941-.988-1.52-2.324-1.52-3.792,0-3.411,3.122-6.107,6.659-5.381,2.082.428,3.769,2.105,4.213,4.184.134.628.159,1.243.091,1.831-.058.498-.495.866-.997.866h-.045c-.592,0-1.008-.527-.943-1.115.044-.395.021-.81-.08-1.233-.298-1.253-1.32-2.268-2.575-2.557-2.286-.525-4.324,1.207-4.324,3.405Zm-3.89-1.295c.274-1.593,1.053-3.045,2.261-4.178,1.529-1.433,3.531-2.141,5.63-2.011,3.953.256,7.044,3.719,6.998,7.865-.019,1.736-1.473,3.118-3.208,3.118h-2.406c-.244-.829-1.002-1.439-1.91-1.439-1.105,0-2,.895-2,2s.895,2,2,2c.538,0,1.025-.215,1.384-.561h2.932c2.819,0,5.168-2.245,5.208-5.063C21.573,4.715,17.651.345,12.63.021c-2.664-.173-5.191.732-7.126,2.548-1.499,1.405-2.496,3.265-2.855,5.266-.109.608.372,1.166.989,1.166.472,0,.893-.329.972-.795Zm7.39,8.795c-3.695,0-6.892,2.292-7.955,5.702-.165.527.13,1.088.657,1.253.526.159,1.087-.131,1.252-.657.789-2.53,3.274-4.298,6.045-4.298s5.257,1.768,6.045,4.298c.134.428.528.702.955.702.099,0,.198-.015.298-.045.527-.165.821-.726.657-1.253-1.063-3.41-4.26-5.702-7.955-5.702Z"></path></svg>                    
                           </div>
                           <div class="cont">
                              <span class="clam">
                                 Claim Support                              </span>
                              <h3 class="title" style="font-size: 24px;line-height: 120%;font-weight: 700; text-transform: capitalize;font-family: 'Geologica', sans-serif; ">
                                 24/7 Supports                               </h3>
                           </div>
                        </div>
                        <p>
                           We love to help you to get your clothes fresh and clean so we are here for you 24/7 for any question, concern or suggestion. The account manager and the ease of a state-of-the-art app that makes it possible.                        </p>
                        <a href="https://www.4damstheme.com/clenis/contact-us/" target="_self" class="d-flex cate-btn align-items-center gap-xl-3 gap-2">
                           Contact With Us                           <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="#032B52"></path>
                           </svg>                     
                        </a>
                     </div>
                  </div>
                                 <div class="col-lg-4 col-md-6">
                     <div class="bn-category-item">
                        <div class="bn-cate-head">
                           <div class="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 24 24" width="512" height="512"><path d="M12,24c-1.626,0-3.16-.714-4.208-1.959-1.54,.177-3.127-.406-4.277-1.555-1.149-1.15-1.729-2.74-1.59-4.362-1.211-.964-1.925-2.498-1.925-4.124s.714-3.16,1.96-4.208c-.175-1.537,.405-3.127,1.555-4.277,1.15-1.151,2.737-1.73,4.361-1.59,.964-1.21,2.498-1.925,4.124-1.925s3.16,.714,4.208,1.959c1.542-.176,3.127,.406,4.277,1.555,1.149,1.15,1.729,2.74,1.59,4.362,1.211,.964,1.925,2.498,1.925,4.124s-.714,3.16-1.96,4.208c.175,1.537-.405,3.127-1.555,4.277-1.151,1.15-2.741,1.729-4.361,1.59-.964,1.21-2.498,1.925-4.124,1.925Zm-4.127-3.924c.561,0,1.081,.241,1.448,.676,.668,.793,1.644,1.248,2.679,1.248s2.011-.455,2.679-1.248c.403-.479,.99-.721,1.616-.67,1.034,.087,2.044-.28,2.776-1.012,.731-.731,1.1-1.743,1.012-2.776-.054-.624,.19-1.213,.67-1.617,.792-.667,1.247-1.644,1.247-2.678s-.455-2.011-1.247-2.678c-.479-.403-.724-.993-.67-1.617,.088-1.033-.28-2.045-1.012-2.776s-1.748-1.096-2.775-1.012c-.626,.057-1.214-.191-1.617-.669-.668-.793-1.644-1.248-2.679-1.248s-2.011,.455-2.679,1.248c-.404,.479-.993,.719-1.616,.67-1.039-.09-2.044,.28-2.776,1.012-.731,.731-1.1,1.743-1.012,2.776,.054,.624-.19,1.213-.67,1.617-.792,.667-1.247,1.644-1.247,2.678s.455,2.011,1.247,2.678c.479,.403,.724,.993,.67,1.617-.088,1.033,.28,2.045,1.012,2.776,.732,.732,1.753,1.098,2.775,1.012,.057-.005,.113-.007,.169-.007Zm1.127-12.076c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm6,6c-.552,0-1,.448-1,1s.448,1,1,1,1-.448,1-1-.448-1-1-1Zm-4.168,1.555l4-6c.307-.459,.183-1.081-.277-1.387-.461-.308-1.081-.182-1.387,.277l-4,6c-.307,.459-.183,1.081,.277,1.387,.171,.114,.363,.168,.554,.168,.323,0,.641-.156,.833-.445Z"></path></svg>                    
                           </div>
                           <div class="cont">
                              <span class="clam">
                                 100% Reliable                               </span>
                              <h3 class="title">
                                 Offers &amp; cares                              </h3>
                           </div>
                        </div>
                        <p>
                           We love to help you to get your clothes fresh and clean so we are here for you 24/7 for any question, concern or suggestion. The account manager and the ease of a state-of-the-art app that makes it possible.                        </p>
                        <a href="https://www.4damstheme.com/clenis/about-clenis/" target="_self" class="d-flex cate-btn align-items-center gap-xl-3 gap-2">
                           View Our Offers                           <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="#032B52"></path>
                           </svg>                     
                        </a>
                     </div>
                  </div>
                                 <div class="col-lg-4 col-md-6">
                     <div class="bn-category-item">
                        <div class="bn-cate-head">
                           <div class="icon">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="512" height="512"><g id="_01_align_center" data-name="01 align center"><path d="M18.965,8.464l5.029-5.029L22.565,2.006,17.519,7.051,15.313,4.895a2.011,2.011,0,0,0-2.724-.073A19.71,19.71,0,0,1,6.226,8.687L-.006,10.514v.756A12.892,12.892,0,0,0,13.006,24.006h1.241l.261-.182a14.98,14.98,0,0,0,6.886-12.081,2.013,2.013,0,0,0-.611-1.5ZM13.9,6.34l5.477,5.341a12.652,12.652,0,0,1-.456,3.015L11.941,7.9A24.691,24.691,0,0,0,13.9,6.34Zm-.294,15.645h-.6a11.153,11.153,0,0,1-4.293-.859,11.55,11.55,0,0,0,4.348-3.8l.518-.76L11.91,15.43l-.518.761A9.539,9.539,0,0,1,7.8,19.324l-1.229.618a10.9,10.9,0,0,1-2.585-2.563,11.632,11.632,0,0,0,4.357-2.657L6.932,13.277a9.611,9.611,0,0,1-3.974,2.317,10.4,10.4,0,0,1-.921-3.575l4.755-1.394a15.234,15.234,0,0,0,3.423-1.59l7.911,7.7A14.1,14.1,0,0,1,13.608,21.985Z"></path></g></svg>                    
                           </div>
                           <div class="cont">
                              <span class="clam">
                                 Member                               </span>
                              <h3 class="title">
                                 Expert cleaner                               </h3>
                           </div>
                        </div>
                        <p>
                           We love to help you to get your clothes fresh and clean so we are here for you 24/7 for any question, concern or suggestion. The account manager and the ease of a state-of-the-art app that makes it possible.                        </p>
                        <a href="https://www.4damstheme.com/clenis/about-clenis/" target="_self" class="d-flex cate-btn align-items-center gap-xl-3 gap-2">
                           Meet With Our Staff                           <svg width="32" height="8" viewBox="0 0 32 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M31.3536 4.35355C31.5488 4.15829 31.5488 3.84171 31.3536 3.64645L28.1716 0.464466C27.9763 0.269204 27.6597 0.269204 27.4645 0.464466C27.2692 0.659728 27.2692 0.976311 27.4645 1.17157L30.2929 4L27.4645 6.82843C27.2692 7.02369 27.2692 7.34027 27.4645 7.53553C27.6597 7.7308 27.9763 7.7308 28.1716 7.53553L31.3536 4.35355ZM0 4.5H31V3.5H0V4.5Z" fill="#032B52"></path>
                           </svg>                     
                        </a>
                     </div>
                  </div>
               
               </div>
        </div>
    </div>

    <footer class="footer__section position-relative">
        <div class="container">
            <div class="newsletter-section" style="padding-top: 130px; padding-bottom: 65px; text-align: center">
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
                                <label class="fz-16 title fw-700 prafont" style="padding-right: 10px;">Enter your
                                    email</label>
                                <input type="email" name="EMAIL" required="" style="
                    width: 100%;
                    max-width: 500px;
                    border-radius: 10px;
                    border: 1px solid rgba(0, 0, 0, 0.09);
                    color: var(--pra);
                    padding: 13px 16px;
                    margin-bottom: 10px;
                  " />
                                <input class="cmn--btn" type="submit" value="Explore Our Offers" style="
                    padding: 12px 28px 15px;
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
                    margin-top: 10px;
                  " />
                            </div>
                            <label style="display: none !important">Leave this field empty if you're human:
                                <input type="text" name="_mc4wp_honeypot" value="" tabindex="-1"
                                    autocomplete="off" /></label><input type="hidden" name="_mc4wp_timestamp"
                                value="1715706989" /><input type="hidden" name="_mc4wp_form_id" value="227" /><input
                                type="hidden" name="_mc4wp_form_element_id" value="mc4wp-form-1" />
                            <div class="mc4wp-response"></div>
                        </form>
                        <!-- / Mailchimp for WordPress Plugin -->
                        <p></p>
                    </div>
                </div>
            </div>
            <div class="footer__top pb-120" style="border-top: 1px solid rgba(0, 0, 0, 0.09); padding-top: 60px">
                <div class="row g-4" style="margin-bottom: 30px">
                    <div class="col-xl-4 col-lg-3 col-md-5 col-sm-6 wow fadeInUp" data-wow-duration="2.1s" style="
              visibility: visible;
              animation-duration: 2.1s;
              animation-name: fadeInUp;
            ">
                        <div class="footer__item" style="margin-bottom: 24px; display: block">
                            <a href="https://www.4damstheme.com/clenis/" class="footer-logo"
                                style="margin-bottom: 24px; display: block">
                                <img src="../../assets/img/H-Logo.png" alt="Clenis" />
                            </a>
                            <div class="footer prag" style="
                  color: #748aa0;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 28px;
                  margin-bottom: 50px;
                  max-width: 325px;
                  margin-top: 40px;
                ">
                                With a rich history spanning decades, our club has become a
                                symbol of excellence in the golfing community. offers a
                                challenging yet rewarding game play.
                            </div>
                            <ul class="footer-social d-flex align-items-center" style="gap: 24px">
                                <li style="list-style: none">
                                    <a href="" style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    ">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                                                fill="#30c7b5"></path>
                                        </svg>
                                    </a>
                                </li>
                                <li style="list-style: none">
                                    <a href="" style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    ">
                                        <svg width="25" height="24" viewBox="0 0 25 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
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
                                <li style="list-style: none">
                                    <a href="" style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    ">
                                        <svg width="23" height="20" viewBox="0 0 23 20" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
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
                            <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                                Quick links
                            </h4>
                            <div class="wp-widget-group__inner-blocks">
                                <ul style="padding: 0; margin: 0; list-style: none">
                                    <li>
                                        <a href="https://www.4damstheme.com/clenis/about-clenis/">About Us</a>
                                    </li>

                                    <li>
                                        <a href="https://www.4damstheme.com/clenis/contact-us/">Contact Us</a>
                                    </li>


                                    <li>
                                        <a href="https://www.4damstheme.com/clenis/our-services/">Services</a>
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
                            <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                                Services
                            </h4>
                            <div class="wp-widget-group__inner-blocks">
                                <ul style="padding: 0; margin: 0; list-style: none">
                                    <li>
                                        <a href="https://www.4damstheme.com/clenis/our-project/">Menage</a>
                                    </li>

                                    <li>
                                        <a href="https://www.4damstheme.com/clenis/our-services/">Buandrie</a>
                                    </li>

                                    <li>
                                        <a href="https://www.4damstheme.com/clenis/our-services/">Menage commercial</a>
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
                            <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                                Policy
                            </h4>
                            <div class="wp-widget-group__inner-blocks">
                                <ul style="padding: 0; margin: 0; list-style: none">
                                    <li>
                                        <a href="https://www.4damstheme.com/clenis/about-clenis/">Ban plans</a>
                                    </li>

                                    <li>
                                        <a href="https://www.4damstheme.com/clenis/faqs-page/">Reservtion</a>
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
                            <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                                Our Contact
                            </h4>
                            <div class="wp-widget-group__inner-blocks">
                                <ul style="padding: 0; margin: 0; list-style: none">
                                    <li style="margin-bottom: 24px">
                                        <svg width="16" height="15" viewBox="0 0 16 15" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M3.84091 12.25L0.5 14.875V1C0.5 0.58579 0.83579 0.25 1.25 0.25H14.75C15.1642 0.25 15.5 0.58579 15.5 1V11.5C15.5 11.9142 15.1642 12.25 14.75 12.25H3.84091ZM3.32211 10.75H14V1.75H2V11.7888L3.32211 10.75ZM7.25 5.5H8.75V7H7.25V5.5ZM4.25 5.5H5.75V7H4.25V5.5ZM10.25 5.5H11.75V7H10.25V5.5Z"
                                                fill="#30c7b5"></path>
                                        </svg>
                                        <a href="mailto:info@hygeco.ca" style="
                        transition: all 0.4s;
                        font-size: 16px;
                        font-weight: 400;
                        color: #748aa0;
                      ">
                                            info@hygeco.ca
                                        </a>
                                    </li>
                                    <li style="margin-bottom: 24px">
                                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.02417 6.01158C5.7265 7.2466 6.7534 8.2735 7.98842 8.9758L8.6518 8.04708C8.87238 7.73838 9.2887 7.64297 9.6217 7.82485C10.6768 8.40123 11.8428 8.75148 13.0592 8.84778C13.4492 8.87868 13.75 9.20417 13.75 9.59545V12.9426C13.75 13.3271 13.4591 13.6493 13.0766 13.6886C12.6792 13.7295 12.2783 13.75 11.875 13.75C5.45469 13.75 0.25 8.5453 0.25 2.125C0.25 1.7217 0.270565 1.32078 0.311418 0.92332C0.350725 0.540812 0.672955 0.25 1.05749 0.25H4.40456C4.79583 0.25 5.12135 0.55078 5.15222 0.940817C5.2485 2.15716 5.59877 3.32323 6.17515 4.37833C6.35703 4.7113 6.26162 5.12766 5.95292 5.34818L5.02417 6.01158ZM3.13319 5.5189L4.55815 4.50107C4.1541 3.62885 3.87721 2.70387 3.73545 1.75H1.7568C1.75227 1.87474 1.75 1.99975 1.75 2.125C1.75 7.71685 6.28315 12.25 11.875 12.25C12.0002 12.25 12.1253 12.2478 12.25 12.2432V10.2645C11.2962 10.1228 10.3712 9.84587 9.49892 9.44185L8.4811 10.8668C8.06935 10.7069 7.6717 10.5186 7.29055 10.3046L7.24697 10.2797C5.77728 9.44402 4.55601 8.22272 3.72025 6.75303L3.69545 6.70945C3.48137 6.3283 3.29316 5.93065 3.13319 5.5189Z"
                                                fill="#30c7b5"></path>
                                        </svg>
                                        <span style="
                        color: #748aa0;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      ">
                                            +1 514-939-2020
                                        </span>
                                    </li>

                                    <li style="margin-bottom: 24px">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M5.75 0.75V2.25H10.25V0.75H11.75V2.25H14.75C15.1642 2.25 15.5 2.58579 15.5 3V15C15.5 15.4142 15.1642 15.75 14.75 15.75H1.25C0.83579 15.75 0.5 15.4142 0.5 15V3C0.5 2.58579 0.83579 2.25 1.25 2.25H4.25V0.75H5.75ZM14 8.25H2V14.25H14V8.25ZM4.25 3.75H2V6.75H14V3.75H11.75V5.25H10.25V3.75H5.75V5.25H4.25V3.75Z"
                                                fill="#30c7b5"></path>
                                        </svg>
                                        <span style="
                        color: #748aa0;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      ">
                                            Mon - Fri 12:00 - 18:00
                                        </span>
                                    </li>
                                    <li style="display: flex; align-items: center; gap: 9px">
                                        <svg width="14" height="17" viewBox="0 0 14 17" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M7 14.6746L10.7123 10.9623C12.7625 8.91208 12.7625 5.58794 10.7123 3.53769C8.66208 1.48744 5.33794 1.48744 3.28769 3.53769C1.23744 5.58794 1.23744 8.91208 3.28769 10.9623L7 14.6746ZM7 16.7959L2.22703 12.023C-0.40901 9.3869 -0.40901 5.11307 2.22703 2.47703C4.86307 -0.15901 9.1369 -0.15901 11.773 2.47703C14.409 5.11307 14.409 9.3869 11.773 12.023L7 16.7959ZM7 8.75C7.82845 8.75 8.5 8.07845 8.5 7.25C8.5 6.42157 7.82845 5.75 7 5.75C6.17155 5.75 5.5 6.42157 5.5 7.25C5.5 8.07845 6.17155 8.75 7 8.75ZM7 10.25C5.34314 10.25 4 8.90683 4 7.25C4 5.59314 5.34314 4.25 7 4.25C8.65683 4.25 10 5.59314 10 7.25C10 8.90683 8.65683 10.25 7 10.25Z"
                                                fill="#30c7b5"></path>
                                        </svg>
                                        <span style="
                        color: #748aa0;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      ">
                                            4260 Notre Dame,Ouest
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="footer__bottom" style="background: #30c7b5">
            <p style="
          padding: 25px 5px;
          color: #748aa0;
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
          text-transform: capitalize;
          margin: 0;
        ">
                © Hygeco All Rights Reserved Developed By GcsHolding
            </p>
        </div>
        <img src="https://www.4damstheme.com/clenis/wp-content/themes/clenis/assets/images/footer/footer-spra.png"
            alt="Footer backgound image" class="footer-spara" style="position: absolute; right: 60px; bottom: 220px" />
        <img src="https://www.4damstheme.com/clenis/wp-content/themes/clenis/assets/images/icon/working-ball.png"
            alt="Footer backgound image" class="footer-working" style="
        position: absolute;
        bottom: 420px;
        left: 60px;
        animation: updown 2s linear infinite;
      " />
    </footer>
</template>
<style scoped>
.cmn--btn.cmn-alt2 {
    background: #F3CB5F;
}
@media (max-width: 1399px) {
    .cmn--btn {
        padding: 9px 20px 11px;
    }
}
.cmn--btn {
    padding: 12px 28px 15px;
    color: white;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
    display: inline-block;
    position: relative;
    background: var(--base);
    overflow: hidden;
    border-radius: 100px;
    transition: all 0.5s;
}
.about-textcircle .text-circles {
    width: 165px;
    height: 165px;
    border-radius: 50%;
    background: #EEF7FF;
    display: flex;
    align-items: center;
    justify-content: center;
}
.video-btn {
    position: relative;
}
.about-textcircle .text-circles .icon {
    background: #0236a6;
    width: 64px;
    height: 64px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.about-textcircle .text-circles .icon i {
    font-size: 36px;
    color: white;
}
.bn-category-item {
    background: #F0F8FF;
    border: 1px solid #F0F8FF;
    border-radius: 60px;
    padding: 50px 40px;
    transition: all 0.4s;
}
.bn-category-item .bn-cate-head {
    border-bottom: 1px solid rgba(0, 0, 0, 0.09);
    padding-bottom: 24px;
    margin-bottom: 30px;
    display: flex;
    align-items: center;
    gap: 20px;
    transition: all 0.4s;
}
.bn-category-item .bn-cate-head .icon {
    width: 68px;
    height: 68px;
    background: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
}
.icon svg {
    fill: #0236A6;
}
.bn-category-item .bn-cate-head .cont .clam {
    font-size: 15px;
    color: #748AA0;
    display: block;
    margin-bottom: 12px;
    font-family: "DM Sans", sans-serif;
}

</style>
