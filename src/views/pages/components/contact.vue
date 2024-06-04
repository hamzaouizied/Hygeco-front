<script>
import { mapState } from "vuex";
import setNavPills from "@/assets/js/nav-pills.js";
import axios from 'axios';

export default {
  name: 'Contact',
  data() {
    return {
      form: {
        firstName: '',
        address: '',
        email: '',
        service: '',
        object: '',
        note: ''
      },
      errors: {}
    };
  },
  computed: {
    ...mapState({
      showSidenav: state => state.showSidenav,
      showNavbar: state => state.showNavbar,
      showFooter: state => state.showFooter,
      isPinned: state => state.isPinned,
    }),
  },
  mounted() {
    this.$store.state.showSidenav = false;
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = false;
    this.setNavPills();
  },
  beforeUnmount() {
    this.$store.state.showSidenav = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showFooter = true;
    if (this.$store.state.isPinned === false) {
      const sidenav_show = document.querySelector(".g-sidenav-show");
      sidenav_show.classList.remove("g-sidenav-hidden");
      sidenav_show.classList.add("g-sidenav-pinned");
      this.$store.state.isPinned = true;
    }
  },
  methods: {
    setNavPills,
    validateForm() {
      const errors = {};
      if (!this.form.first_name) {
        errors.first_name = 'Le nom complet est obligatoire';
      }
      if (!this.form.address) {
        errors.address = 'L\'adresse est obligatoire';
      }
      if (!this.form.email) {
        errors.email = 'L\'email est obligatoire';
      } else if (!this.isValidEmail(this.form.email)) {
        errors.email = 'L\'email doit être valide';
      }
      if (!this.form.service) {
        errors.service = 'Le service est obligatoire';
      }
      if (!this.form.object) {
        errors.object = 'Le objet est obligatoire';
      }
      if (!this.form.note) {
        errors.note = 'La note est obligatoire';
      }
      this.errors = errors;
      return Object.keys(errors).length === 0;
    },
    isValidEmail(email) {
      const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i
        ;
      return re.test(email);
    },
    async submitForm() {
      if (this.validateForm()) {
        try {
          const response = await axios.post('https://hygeco-back.test/api/submit-contact-form', this.form);
          this.$swal('Formulaire soumis avec succès');
          console.log('Form submitted successfully:', response.data);
          this.reinitialiserFormulaire();
        } catch (error) {
          console.error('Error submitting form:', error);
        }
      }
    },
    reinitialiserFormulaire() {
      this.form = {};
    }
  },

};
</script>

<template>





  <div class="container-fluid p-5">
    <section class="cleaning-quote position-relative">
      <div class="cleaning-thumbing">
        <img decoding="async" src="../../../assets/img/2.png" alt="Contact Us" />
      </div>
      <div class="container">
        <div class="row g-4">
          <div class="col-lg-5">
            <div class="cleaning-quote-content">
              <div class="cmn-section-title" style="margin-top: 4.5rem;">

                <h2 class="white mt-xxl-4 mt-2 mb-0 wow fadeInUp" data-wow-delay="0.6s" style="
                    visibility: visible;
                    animation-delay: 0.6s;
                    animation-name: fadeInUp;
                    color: white;
                  ">
                  Request a free cleaning quote today
                </h2>
                <div class="cmn--btn cmn-alt2 wow fadeInDown" data-wow-delay="0.4s" style="
                    visibility: visible;
                    animation-delay: 0.4s;
                    animation-name: fadeInDown;
                  ">
                  <span> Contact Us </span>
                </div>
              </div>
              <div class="cleaning-info">
                <div class="cleaning-info-item wow fadeInDown" data-wow-delay="0.7s" style="
                    visibility: visible;
                    animation-delay: 0.7s;
                    animation-name: fadeInDown;
                  ">
                  <div class="c-info-icon d-flex align-items-center">
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                      </path>
                    </svg>
                    <span class="pra"> Telephone </span>
                  </div>
                  <h3 class="title" style="font-size: 1.5rem">
                    +1 514-939-2020
                  </h3>
                </div>
                <div class="cleaning-info-item wow fadeInDown" data-wow-delay="0.7s" style="
                    visibility: visible;
                    animation-delay: 0.7s;
                    animation-name: fadeInDown;
                  ">
                  <div class="c-info-icon d-flex align-items-center">
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-map-marker-alt" viewBox="0 0 384 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z">
                      </path>
                    </svg>
                    <span class="pra"> Location </span>
                  </div>
                  <h3 class="title" style="font-size: 1.2rem">
                    Montréal,Canada
                    <span class="d-block">4260 Notre Dame,Ouest</span>
                  </h3>
                </div>
                <div class="cleaning-info-item wow fadeInDown" data-wow-delay="0.7s" style="
                    visibility: visible;
                    animation-delay: 0.7s;
                    animation-name: fadeInDown;
                  ">
                  <div class="c-info-icon d-flex align-items-center">
                    <svg aria-hidden="true" class="e-font-icon-svg e-fas-envelope" viewBox="0 0 512 512"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z">
                      </path>
                    </svg>
                    <span class="pra"> Mail Us </span>
                  </div>
                  <h3 class="title" style="font-size: 1.2rem">
                    info@heygeco.ca
                  </h3>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7">
            <div class="wpcf7 js" id="wpcf7-f9-p72-o1" lang="en-US" dir="ltr">
              <div class="screen-reader-response">
                <p role="status" aria-live="polite" aria-atomic="true"></p>
                <ul></ul>
              </div>
              <form @submit.prevent="submitForm" class="wpcf7-form init clenis-cf7-form" aria-label="Contact form">
                <div class="cleaning-form wow fadeInUp" data-wow-delay="0.6s"
                  style="visibility: visible; animation-delay: 0.6s; animation-name: fadeInUp;">
                  <div class="row g-4">
                    <div class="col-lg-6 col-md-6">
                      <div class="clean-form-grp">
                        <p>
                          <label>Nom complet</label><br />
                          <input v-model="form.first_name" class="wpcf7-form-control wpcf7-text" aria-required="true"
                            placeholder="Nom complet" type="text" name="first_name" />
                          <span v-if="errors.first_name" class="error">{{ errors.first_name }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="clean-form-grp">
                        <p>
                          <label>Adresse</label><br />
                          <input v-model="form.address" class="wpcf7-form-control wpcf7-text" aria-required="true"
                            placeholder="Adresse" type="text" name="address" />
                          <span v-if="errors.address" class="error">{{ errors.address }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="clean-form-grp">
                        <p>
                          <label>E-mail</label><br />
                          <input v-model="form.email" class="wpcf7-form-control wpcf7-email" aria-required="true"
                            placeholder="E-mail" type="email" name="email" />
                          <span v-if="errors.email" class="error">{{ errors.email }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="clean-form-grp">
                        <p>
                          <label>Objet</label><br />
                          <input v-model="form.object" class="wpcf7-form-control wpcf7-email" aria-required="true"
                            placeholder="Objet" type="text" name="object" />
                          <span v-if="errors.object" class="error">{{ errors.object }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6 col-md-6">
                      <div class="clean-form-grp">
                        <p>
                          <label>Service</label><br />
                          <select v-model="form.service" class="wpcf7-form-control wpcf7-select" aria-invalid="false"
                            name="service" style="
                                border-radius: 10px;
                                border: 1px solid rgba(255, 255, 255, 0.15);
                                outline: none;
                                color: rgba(255, 255, 255, 0.55);
                                padding: 16px 23px;
                                background: transparent;
                                width: 100%;
                              ">
                            <option style="background-color: #30c7b5" value="" disabled>Sélectionner un service</option>
                            <option style="background-color: #30c7b5" value="Menage">Menage</option>
                            <option style="background-color: #30c7b5" value="Buandrie">Buandrie</option>
                            <option style="background-color: #30c7b5" value="Commercial">Commercial</option>
                            <!-- Add more options as needed -->
                          </select>
                          <span v-if="errors.service" class="error">{{ errors.service }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-12">
                      <div class="clean-form-grp">
                        <p>
                          <label>Écrire une note</label><br />
                          <textarea v-model="form.note" class="wpcf7-form-control wpcf7-textarea" aria-required="true"
                            placeholder="Écrire une note" name="note"></textarea>
                          <span v-if="errors.note" class="error">{{ errors.note }}</span>
                        </p>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="clean-form-grp">
                        <p style="margin-bottom: 0px">
                          <button class="wpcf7-form-control wpcf7-submit" type="submit" style="
                              border: unset;
                              color: white;
                              background: #344767;
                              border-radius: 87px;
                              padding: 1rem;
                              font-size: 16px;">Soumettre vos informations</button>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class=" wpcf7-response-output" aria-hidden="true">
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <img decoding="async"
        src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/working-ball.png"
        alt="Contact Us" class="cleaning-shape" />
      <img decoding="async"
        src="https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/icon/cirs.png"
        alt="Contact Us" class="working-cirs" />
    </section>
  </div>

</template>
<style scoped>
.choose-section1::before {
  position: absolute;
  top: -200px;
  right: -200px;
  width: 800px;
  height: 800px;
  content: "";
  border-radius: 795px;
  background: none;
  filter: blur(350px);
}

.choose-section1::after {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 490px;
  height: 490px;
  content: "";
  border-radius: 484px;
  background: none;
  filter: blur(350px);
}

.choose-wrapper {
  position: relative;
  z-index: 1;
}

.choose-wrapper .ripple {
  position: absolute;
  top: 150px;
  left: 260px;
  animation: updown 2s linear infinite;
}

@media (max-width: 991px) {
  .choose-wrapper .ripple {
    display: none;
  }
}

.choose-wrapper .ripple-ps {
  position: absolute;
  top: 80px;
  right: 150px;
}

@media (max-width: 1399px) {
  .choose-wrapper .ripple-ps {
    display: none;
  }
}

@keyframes updown {
  50% {
    transform: translateY(-14px);
  }
}

.choose-left-cont .thumb1 {
  width: 100%;
}

.choose-left-cont .thumb1 img {
  border-radius: 10px;
  width: 100%;
}

@media (max-width: 991px) {
  .choose-left-cont .thumb1 {
    display: none;
  }
}

.prograss-box {
  border-radius: 10px;
  background: #fff;
  padding: 24px 24px;
  display: flex;
  align-items: center;
  gap: 11px;
  margin-left: 23px;
  margin-top: 38px;
  z-index: 2;
  position: relative;
}

.prograss-box .content {
  width: calc(100% - 104px);
}

.prograss-box .content h3 {
  margin-bottom: 14px;
}

.prograss-box .content p {
  font-size: 16px;
  color: var(--pra);
  margin-bottom: 0;
}

.prograss-box .icons {
  position: relative;
  display: block;
  width: 104px;
  height: 104px;
  border-radius: 50%;
  background: var(--base);
  padding: 0px 4px 0 0;
}

.prograss-box .icons .texts {
  font-size: 24px;
  font-weight: 700;
  line-height: 36px;
  display: block;
  color: var(--white);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

@media (max-width: 575px) {
  .prograss-box {
    padding: 18px 10px;
    margin-left: 0;
    margin-top: 20px;
  }

  .prograss-box .content h3 {
    margin-bottom: 8px;
  }
}

.choose-content-right .cmn-section-title {
  margin-bottom: 35px;
}

@media (max-width: 1399px) {
  .choose-content-right .cmn-section-title {
    padding-left: 20px;
  }
}

@media (max-width: 991px) {
  .choose-content-right .cmn-section-title {
    padding-left: 4px;
  }
}

.choose-content-right .adjust-first-item {
  margin-bottom: 45px;
}

.choose-content-right .adjust-content {
  display: flex;
  justify-content: space-between;
  gap: 24px;
}

.choose-content-right .adjust-content .adjust-content-info {
  max-width: 400px;
}

.choose-content-right .adjust-content .thumb-ad {
  max-width: 421px;
  height: 449px;
  margin-left: -140px;
}

.choose-content-right .adjust-content .thumb-ad img {
  width: 100%;
  height: 100%;
}

@media (max-width: 1199px) {
  .choose-content-right .adjust-content .thumb-ad {
    height: auto;
  }

  .choose-content-right .adjust-content .thumb-ad img {
    height: auto;
  }
}

.choose-content-right .adjust-content .adjust-item {
  display: flex;
  gap: 28px;
}

.choose-content-right .adjust-content .adjust-item .conts h3 {
  margin-bottom: 10px;
}

.choose-content-right .adjust-content .adjust-item .conts p {
  margin: 0;
}

@media (max-width: 991px) {
  .choose-content-right .adjust-content .thumb-ad {
    margin-left: 4px;
  }
}

.choose-content-right .btn-custom-space {
  margin-top: 40px;
}

@media (max-width: 991px) {
  .choose-content-right .adjust-first-item {
    margin-bottom: 24px;
  }

  .choose-content-right .btn-custom-space {
    margin-top: 24px;
  }
}

@media (max-width: 767px) {
  .choose-content-right .adjust-content {
    flex-wrap: wrap;
    display: flex;
    width: 100%;
  }

  .choose-content-right .adjust-content .thumb-ad {
    max-width: 100%;
    width: 100% !important;
    height: 100%;
  }

  .choose-content-right .adjust-content .thumb-ad img {
    width: 100% !important;
    height: 100%;
  }

  .choose-content-right .adjust-content .adjust-content-info {
    max-width: 100%;
  }
}

.marquee-wrapper {
  position: relative;
  overflow: hidden;
  white-space: nowrap;
  z-index: 1;
}

.text-slider {
  padding: 10px 0;
  height: 90px;
}

@media (max-width: 767px) {
  .text-slider {
    padding: 0px 0;
    height: 65px;
  }
}

.marquee-inner.to-left {
  animation: marqueeLeft 25s linear infinite;
}

.marquee-inner.to-right {
  animation: marqueeRight 25s linear infinite;
}

.marquee-inner {
  position: absolute;
  display: inline-flex;
  width: 200%;
}

.marquee-item {
  display: flex;
  align-items: center;
  float: left;
  transition: animation 0.2s ease-out;
}

.marquee-item img {
  width: 36px;
}

@keyframes marqueeLeft {
  0% {
    left: 0;
  }

  100% {
    left: -100%;
  }
}

.sotrk-t {
  font-family: "Geologica Cursive";
  font-size: 50px;
  font-weight: 800;
  line-height: 62px;
  color: rgba(3, 43, 82, 0.35);
  -webkit-text-fill-color: white;
  -webkit-text-stroke-width: 1px;
  -webkit-text-stroke-color: rgba(3, 43, 82, 0.35);
  background: transparent;
}

@media (max-width: 767px) {
  .sotrk-t {
    font-size: 36px;
  }
}

.stroke-thumb {
  padding: 0 16px 0;
  margin-top: 7px;
}

.counter-wrapper {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.counter-wrapper .vline {
  border-width: 1px;
  border: 1px solid rgba(3, 43, 82, 0.17);
  height: 100px;
}

@media (max-width: 767px) {
  .counter-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    gap: 30px 100px;
  }

  .counter-wrapper .vline {
    display: none;
  }

  .counter-wrapper .cont {
    justify-content: center;
    margin-bottom: 0 !important;
  }

  .counter-wrapper .cont span {
    font-size: 36px !important;
  }
}

@media (max-width: 500px) {
  .counter-wrapper {
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px 30px;
  }

  .counter-wrapper .vline {
    display: none;
  }
}

.counter__items .cont {
  margin-bottom: 10px;
}

.counter__items .cont span {
  font-size: 50px;
  font-weight: 800;
  color: #032b52;
  line-height: 64px;
}

.plus__icon svg {
  width: 30px;
  height: 30px;
}

.plus__icon svg {
  fill: #032b52;
}

.counter__items p {
  font-size: 16px;
  color: rgba(3, 43, 82, 0.7);
  font-family: "DM Sans", sans-serif;
  font-weight: 400;
}

.counter-wrapper {
  border-radius: 60px;
  background: #30c7b5;
  padding: 80px 80px;
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

.options {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  overflow: hidden;
  max-width: 100%;
  height: 550px;
}

.options .option {
  position: relative;
  overflow: hidden;
  min-width: 200px;
  margin: 10px;
  background-size: auto 120%;
  background-position: center;
  cursor: pointer;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.options .option:nth-child(1) {
  --defaultBackground: #ff8000;
}

.options .option.active {
  flex-grow: 10000;
  transform: scale(1);
  border-radius: 5px;
  background-size: auto 100%;
}

.options .option.active .shadow {
  box-shadow:
    inset 0 -120px 120px -120px black,
    inset 0 -120px 120px -100px black;
}

.options .option.active .label {
  bottom: 20px;
  left: 20px;
}

.options .option.active .label .info>div {
  left: 0px;
  opacity: 1;
}

.options .option:not(.active) {
  flex-grow: 1;
  border-radius: 5px;
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

.options .option:not(.active) .shadow {
  bottom: -40px;
  box-shadow:
    inset 0 -120px 0px -120px black,
    inset 0 -120px 0px -100px black;
}

.options .option:not(.active) .label {
  bottom: 10px;
  left: 10px;
}

.options .option:not(.active) .label .info>div {
  left: 20px;
  opacity: 0;
}

.options .option:not(.active) .label .icon-custom {
  display: flex !important;
}

.options .option:not(.active) .label .info {
  opacity: 0;
  visibility: hidden;
  transition: all 0.4s;
}

.options .option .shadow {
  position: absolute;
  bottom: 0px;
  left: 0px;
  right: 0px;
  height: 120px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.options .option .label {
  display: flex;
  align-items: flex-end;
  position: absolute;
  right: 0px;
  transition: 0.5s cubic-bezier(0.05, 0.61, 0.41, 0.95);
}

.options .option .label .icon-custom {
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 87px;
  max-width: 87px;
  height: 250px;
  border-radius: 0px 10px;
  background: #f0f8ff;
}

.options .option .label .icon-custom h3 {
  transform: rotate(-90deg);
  color: var(--title);
  min-width: 187px;
}

.options .option .label .info {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 10px;
  color: white;
  gap: 30px;
  background: var(--base);
  border-radius: 5px;
  padding: 35px 35px;
  opacity: 1;
  visibility: visible;
  transition: all 0.4s;
  height: 116px;
}

.options .option .label .info i {
  font-size: 24px;
  color: var(--subtitle);
}

.options .option .label .info .main {
  font-weight: bold;
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
}

.options .option .label .info .sub {
  transition-delay: 0.1s;
  font-size: 16px;
  font-weight: 400;
  color: var(--subtitle);
}

@media (max-width: 1199px) {
  .options {
    display: flex;
    height: 450px;
  }

  .options .option {
    min-width: 80px;
    margin: 10px;
  }

  .options .option.active .label {
    bottom: 10px;
    left: 10px;
  }

  .options .option.active .label .info>div {
    left: 0px;
    opacity: 1;
  }

  .options .option:not(.active) .label {
    bottom: 10px;
    left: 10px;
  }

  .options .option:not(.active) .label .info>div {
    left: 20px;
    opacity: 0;
  }

  .options .option:not(.active) .label .icon-custom {
    display: flex !important;
  }

  .options .option:not(.active) .label .info {
    opacity: 0;
    visibility: hidden;
    transition: all 0.4s;
  }

  .options .option .shadow {
    height: 120px;
  }

  .options .option .label .icon-custom {
    min-width: 30px;
    max-width: 30px;
    height: 170px;
  }

  .options .option .label .icon-custom h3 {
    min-width: 140px;
    font-size: 16px;
  }

  .options .option .label .info {
    display: grid;
    justify-content: center;
    gap: 8px;
    padding: 18px 20px;
    height: 116px;
  }

  .options .option .label .info i {
    font-size: 18px;
  }

  .options .option .label .info .main {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 2px;
  }

  .options .option .label .info .sub {
    transition-delay: 0.1s;
    font-size: 14px;
    font-weight: 400;
  }
}

@media (max-width: 1199px) and (max-width: 575px) {
  .options .option:nth-child(1) {
    display: none;
  }
}

@media (max-width: 575px) {
  .options {
    display: grid;
    flex-wrap: wrap;
    height: 1300px;
  }

  .options .option {
    min-height: 400px;
  }
}

.follower-tung {
  position: absolute;
  bottom: 0;
  right: -40px;
}

@media (max-width: 1399px) {
  .follower-tung {
    display: none;
  }
}

.project-made-section {
  background: #f0f8ff;
}

.project-made-item .info {
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  gap: 30px;
  background: var(--base);
  border-radius: 5px;
  padding: 35px 35px;
  opacity: 1;
  visibility: visible;
  transition: all 0.4s;
  height: 116px;
}

.project-made-item .info i {
  font-size: 24px;
  color: var(--subtitle);
}

.project-made-item .info .main {
  font-weight: bold;
  font-size: 24px;
  font-weight: 700;
  color: var(--white);
  margin-bottom: 10px;
}

.project-made-item .info .sub {
  transition-delay: 0.1s;
  font-size: 16px;
  font-weight: 400;
  color: var(--subtitle);
}

.custom-project-slidewrap .swiper-slide {
  transition: all 0.4s;
  width: 100%;
}

.custom-project-slidewrap .swiper-slide .info {
  opacity: 0;
}

.custom-project-slidewrap .swiper-slide img {
  width: 100%;
  border-radius: 10px;
  overflow: hidden;
  height: 462px;
  object-fit: cover;
}

.custom-project-slidewrap .swiper-slide-duplicate-active img,
.custom-project-slidewrap .swiper-slide.swiper-slide-active img {
  border-radius: 10px;
}

@media (min-width: 992px) {

  .custom-project-slidewrap .swiper-slide-duplicate-active,
  .custom-project-slidewrap .swiper-slide.swiper-slide-active {
    width: 638px !important;
  }
}

.custom-project-slidewrap .swiper-slide-duplicate-active .info,
.custom-project-slidewrap .swiper-slide.swiper-slide-active .info {
  opacity: 1;
}

.project-custom-madewrap .project-made-item {
  overflow: hidden;
  border-radius: 10px;
}

.project-custom-madewrap .project-made-item .info {
  position: absolute;
  bottom: 10px;
  left: 10px;
  background: #f0f9fc;
}

.project-custom-madewrap .project-made-item .info i {
  color: var(--title) !important;
}

.project-custom-madewrap .project-made-item .info .cont .main {
  color: var(--title) !important;
}

.project-custom-madewrap .project-made-item .info .cont .sub {
  color: var(--base) !important;
}

@media (max-width: 1199px) {
  .project-custom-madewrap .project-made-item .info {
    padding: 10px 16px;
  }

  .project-custom-madewrap .project-made-item .info .cont .main {
    font-size: 18px;
  }
}

.project-custom-madewrap .custom-left-right2 {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  z-index: 9;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.project-custom-madewrap .custom-left-right2 .mcustom__next2 {
  margin-left: -20px;
}

.project-custom-madewrap .custom-left-right2 .mcustom__next2:hover {
  cursor: pointer;
}

.project-custom-madewrap .custom-left-right2 .mcustom__prev2 {
  margin-right: -20px;
}

.project-custom-madewrap .custom-left-right2:hover {
  cursor: pointer;
}

@media (max-width: 1399px) {
  .project-custom-madewrap .custom-left-right2 .mcustom__next2 {
    margin-left: 5px;
  }

  .project-custom-madewrap .custom-left-right2 .mcustom__next2:hover {
    cursor: pointer;
  }

  .project-custom-madewrap .custom-left-right2 .mcustom__prev2 {
    margin-right: 5px;
  }
}

.main-project-madeitem {
  position: relative;
}

.main-project-madeitem .thumb {
  width: 100%;
}

.main-project-madeitem .thumb img {
  width: 100%;
  border-radius: 5px;
}

.main-project-madeitem .info {
  max-width: 364px;
  background: var(--white);
  position: absolute;
  bottom: 0px;
  left: 0px;
  transition: all 0.4s;
  visibility: hidden;
  opacity: 0;
}

.main-project-madeitem .info .cont .main {
  font-size: 18px;
  color: var(--title);
  display: block;
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 4px;
}

.main-project-madeitem .info .cont .sub {
  color: var(--base);
}

.main-project-madeitem .info i {
  color: var(--title);
}

.main-project-madeitem:hover .info {
  bottom: 30px;
  left: 30px;
  visibility: visible;
  opacity: 1;
}

@media (max-width: 1399px) {
  .main-project-madeitem .info {
    padding: 10px 10px;
  }

  .main-project-madeitem .info .cont .main {
    font-size: 18px;
  }

  .main-project-madeitem:hover .info {
    bottom: 10px;
    left: 10px;
    visibility: visible;
    opacity: 1;
  }
}

.made-smallitem .info {
  max-width: 290px;
  padding: 35px 24px;
}

.made-smallitem .info .cont .main {
  font-size: 18px;
}

.made-smallitem:hover .info {
  left: 10px;
  bottom: 10px;
}

@media (max-width: 1399px) {
  .made-smallitem .info {
    padding: 18px 18px;
  }
}

@media (max-width: 1199px) {
  .made-smallitem .info {
    max-width: 200px !important;
  }
}

.project-big {
  width: 100%;
  margin-bottom: 40px;
}

.project-big img {
  width: 100%;
  border-radius: 60px;
}

@media (max-width: 1399px) {
  .project-big {
    margin-bottom: 20px;
  }
}

.project-details-info .cmn-box-cont1 {
  margin-top: 0;
  border-bottom: unset;
  padding-bottom: 0;
  margin-bottom: 0;
}

.project-details-vidwrap {
  display: flex;
  align-items: center;
  gap: 34px;
  margin-top: 39px;
  margin-bottom: 39px;
}

.project-details-vidwrap .thumb {
  border-radius: 60px;
}

.project-details-vidwrap .thumb img {
  border-radius: 60px;
}

.project-details-vidwrap .thumb .provid {
  width: 86px;
  height: 86px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: var(--subtitle);
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.project-details-vidwrap .thumb .provid i {
  font-size: 36px;
  color: var(--title);
}

.project-details-vidwrap .content h3 {
  margin-bottom: 10px;
}

.project-details-vidwrap .content .por-cont-list {
  margin-top: 20px;
}

.project-details-vidwrap .content .por-cont-list li {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 16px;
  color: var(--pra);
}

.project-details-vidwrap .content .por-cont-list li:not(:last-child) {
  margin-bottom: 16px;
}

@media (max-width: 767px) {
  .project-details-vidwrap {
    flex-wrap: wrap;
    gap: 20px;
    margin-top: 28px;
  }

  .project-details-vidwrap .content h3 {
    margin-bottom: 10px;
  }

  .project-details-vidwrap .content .por-cont-list li:not(:last-child) {
    margin-bottom: 8px;
  }
}

.cmn-padding {
  padding: 45px 45px;
  border-radius: 10px;
  background: #f0f8ff;
}

@media (max-width: 1399px) {
  .cmn-padding {
    padding: 24px 20px;
  }
}

.callbox .call-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.callbox .call-item .icon {
  background: var(--subtitle);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  transition: all 0.4s;
}

.callbox .call-item .icon svg {
  width: 24px;
  height: 24px;
}

.callbox .call-item .icon i {
  color: var(--title);
  transition: all 0.4s;
  font-size: 24px;
}

.callbox .call-item .cont .callsub {
  font-size: 16px;
  color: var(--pra);
  display: block;
  margin-bottom: 5px;
}

.callbox .call-item .cont span,
.callbox .call-item .cont a {
  font-size: 24px;
  color: var(--title);
  font-weight: 700;
  transition: all 0.4s;
}

.callbox .call-item:hover .icon {
  background: var(--base);
}

.callbox .call-item:hover .icon svg {
  fill: var(--white);
}

.callbox .call-item:hover .icon i {
  color: var(--white);
}

@media (max-width: 1199px) {
  .callbox .call-item {
    gap: 14px;
  }

  .callbox .call-item .icon {
    width: 48px;
    height: 48px;
  }

  .callbox .call-item .icon svg {
    width: 20px;
    height: 20px;
  }

  .callbox .call-item .icon i {
    font-size: 20px;
  }

  .callbox .call-item .cont a {
    font-size: 18px;
  }
}

.se-boxlist2 li {
  display: flex;
  align-items: center;
  gap: 14px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  padding-bottom: 20px;
}

.se-boxlist2 li .bold {
  font-size: 16px;
  font-weight: 700;
  color: var(--title);
}

.se-boxlist2 li .bold-m {
  font-size: 16px;
  font-weight: 400;
  color: var(--pra);
}

.se-boxlist2 li:not(:first-child) {
  padding-top: 20px;
}

.se-boxlist2 li:hover a {
  color: var(--base);
}

.cmn-padding {
  padding: 45px 45px;
  border-radius: 10px;
  background: #f0f8ff;
}

@media (max-width: 1399px) {
  .cmn-padding {
    padding: 24px 20px;
  }
}

.pt-cust23 {
  padding-top: 23px;
}

.project-social li a {
  background: rgba(2, 54, 166, 0.1);
  border: unset;
}

.project-social li a svg {
  width: 20px;
}

.project-social li a svg path {
  stroke: rgba(2, 54, 166, 0.5803921569);
  opacity: 58%;
}

.project-social li a:hover {
  background: var(--base);
}

.project-social li a:hover svg path {
  stroke: var(--white);
  opacity: 100%;
}

.details-pages .thumb {
  width: 100%;
  border-radius: 60px;
}

.details-pages .thumb img {
  width: 100%;
  border-radius: 60px;
}

.cmn-box-cont1 {
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  padding-bottom: 70px;
  margin-bottom: 34px;
  margin-top: 40px;
}

.cmn-box-cont1 h2 {
  margin-bottom: 20px;
}

.cmn-box-cont1 .text1 {
  margin-bottom: 34px;
}

.cmn-box-cont1 .text2 {
  margin-bottom: 25px;
}

.cmn-box-cont1 .con-checkbox {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
}

.cmn-box-cont1 .con-checkbox li {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 15px 0px;
  width: 33.3333333333%;
}

.cmn-box-cont1 .con-checkbox li span {
  font-size: 18px;
  font-weight: 500;
  color: var(--title);
}

.cmn-box-cont1 .text3 {
  margin-top: 25px;
}

@media (max-width: 1399px) {
  .cmn-box-cont1 {
    padding-bottom: 30px;
    margin-bottom: 20px;
    margin-top: 30px;
  }

  .cmn-box-cont1 h2 {
    margin-bottom: 14px;
  }

  .cmn-box-cont1 .text1 {
    margin-bottom: 14px;
  }

  .cmn-box-cont1 .text2 {
    margin-bottom: 16px;
  }

  .cmn-box-cont1 .text3 {
    margin-top: 14px;
  }
}

@media (max-width: 1199px) {
  .cmn-box-cont1 {
    margin-top: 24px;
    padding-bottom: 24px;
  }

  .cmn-box-cont1 .con-checkbox {
    margin-bottom: 10px;
  }

  .cmn-box-cont1 .con-checkbox li {
    padding: 5px 0px;
    width: 50%;
  }

  .cmn-box-cont1 .con-checkbox li span {
    font-size: 16px;
    font-weight: 500;
  }
}

@media (max-width: 500px) {
  .cmn-box-cont1 {
    margin-top: 20px;
    padding-bottom: 20px;
  }

  .cmn-box-cont1 .con-checkbox {
    margin-bottom: 0px;
  }

  .cmn-box-cont1 .con-checkbox li {
    padding: 5px 0px;
    width: 100%;
  }
}

.cmn-box-cont2 h3 {
  margin-bottom: 16px;
}

.cmn-box-cont2 .fasi-text {
  margin-bottom: 22px;
}

.details-fasterwrap {
  display: flex;
  flex-wrap: wrap;
  gap: 50px 50px;
}

.details-fasterwrap .faster-item img {
  width: 34px;
}

.details-fasterwrap .faster-item p {
  font-size: 16px;
  color: var(--pra);
  line-height: 28px;
  margin-top: 16px;
  max-width: 231px;
}

@media (max-width: 1199px) {
  .details-fasterwrap {
    gap: 24px 0px;
  }

  .details-fasterwrap .faster-item {
    padding-left: 10px;
    width: 50%;
  }

  .details-fasterwrap .faster-item p {
    margin-top: 10px;
  }
}

@media screen and (max-width: 400px) {
  .details-fasterwrap .faster-item {
    padding-left: 10px;
    width: 100%;
  }

  .details-fasterwrap .faster-item p {
    margin-top: 10px;
  }
}

.wman-thumb {
  width: 100%;
}

.wman-thumb img {
  width: 100%;
  border-radius: 8px;
}

.follower-section {
  position: relative;
  left: 30px;
  top: -151px;
}



.testimonail-items {
  border-radius: 10px;
  padding: 35px 35px 0;
  background: #fff;
  overflow: visible;
}

.testimonail-items p {
  padding-bottom: 24px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.09);
  margin-bottom: 24px;
  font-weight: 16;
}

.testimonail-items .content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
}

.testimonail-items .content .degination .name {
  font-size: 18px;
  font-weight: 700;
  color: var(--title);
  margin-bottom: 9px;
  display: block;
}

.testimonail-items .content .degination .gra {
  font-size: 16px;
  color: var(--pra);
  display: block;
}

.testimonail-items .content .days {
  font-size: 16px;
  color: var(--pra);
}

.testimonail-items .ratting {
  margin-bottom: 22px;
}

.testimonail-items .ratting li i {
  font-size: 22px;
  color: #30c7b5;
}

.testimonail-items .quote-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  transform: translateY(20px);
  margin-top: -20px;
}

.testimonail-items .quote-wrap .joh {
  width: 64px;
  height: 64px;
}

.testimonail-items .quote-wrap .joh img {
  border-radius: 50%;
}

.testimonail-items .quote-wrap .qicon {
  margin-bottom: -20px;
}

@media (max-width: 1399px) {
  .testimonail-items {
    padding: 25px 25px 0;
  }

  .testimonail-items p {
    padding-bottom: 18px;
    margin-bottom: 18px;
  }

  .testimonail-items .content {
    margin-bottom: 20px;
  }

  .testimonail-items .content .degination .name {
    margin-bottom: 4px;
  }

  .testimonail-items .ratting {
    margin-bottom: 18px;
  }
}

.testimonail-itemsv2 {
  max-width: 850px;
  margin: 0 auto;
}

.testimonail-itemsv2 .ratting {
  margin-bottom: 22px;
}

.testimonail-itemsv2 .ratting li i {
  font-size: 22px;
  color: #30c7b5;
}

.testimonail-itemsv2 p {
  color: #032b52;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 36px;
  margin-bottom: 60px;
}

.testimonail-itemsv2 .quote-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 630px;
  margin: 0 auto;
}

.testimonail-itemsv2 .quote-wrap .joh {
  width: 64px;
  height: 64px;
}

.testimonail-itemsv2 .quote-wrap .joh img {
  border-radius: 50%;
}

.testimonail-itemsv2 .quote-wrap .qicon {
  margin-bottom: -20px;
}

.testimonail-itemsv2 .degination .name {
  font-size: 18px;
  font-weight: 700;
  color: var(--title);
  margin-bottom: 2px;
  display: block;
}

.testimonail-itemsv2 .degination .gra {
  font-size: 16px;
  color: var(--pra);
  display: block;
}

.testimonail-itemsv2 .man-designation {
  gap: 24px;
}

@media (max-width: 767px) {
  .testimonail-itemsv2 p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 40px;
  }
}

@media (max-width: 575px) {
  .testimonail-itemsv2 p {
    font-size: 18px;
    line-height: 28px;
    margin-bottom: 20px;
  }
}

.cleaning-thumbing {
  width: 100%;
  margin-bottom: -400px;
}

.cleaning-thumbing img {
  width: 100%;
}

@media (max-width: 1199px) {
  .cleaning-thumbing {
    margin-bottom: 30px;
  }
}

.cmn-section-title h2 {
  font-size: 51px;
}

.cleaning-quote-content .cleaning-info {
  margin-top: 120px;
}

@media (max-width: 1199px) {
  .cleaning-quote-content .cleaning-info {
    margin-top: 60px;
  }

  .cleaning-quote-content .cmn-section-title h2 {
    color: var(--title) !important;
  }
}

@media (max-width: 991px) {
  .cleaning-quote-content .cleaning-info {
    margin-top: 34px;
  }
}

.cleaning-info-item .c-info-icon {
  gap: 6px;
  margin-bottom: 20px;
}

.cleaning-info-item .c-info-icon span {
  font-weight: 400;
  font-family: "DM Sans", sans-serif;
  color: #748aa0;
}

.cleaning-info-item .c-info-icon svg {
  width: 20px;
  height: 20px;
}

.cleaning-info-item .c-info-icon svg {
  fill: #30c7b5;
}

.cleaning-info-item:not(:last-child) {
  margin-bottom: 40px;
}

@media (max-width: 1199px) {
  .cleaning-info-item:not(:last-child) {
    margin-bottom: 30px;
  }

  .cleaning-info-item .c-info-icon {
    margin-bottom: 10px !important;
  }
}

@media (max-width: 991px) {
  .cleaning-info-item h3 {
    font-size: 18px;
    line-height: 1.5;
    font-weight: 500;
  }

  .cleaning-info-item:not(:last-child) {
    margin-bottom: 20px;
  }

  .cleaning-info-item .c-info-icon {
    margin-bottom: 10px !important;
  }
}

.cleaning-form {
  border-radius: 60px;
  background: #30c7b5;
  padding: 60px 60px;
}

@media (max-width: 991px) {
  .cleaning-form {
    padding: 36px 20px;
  }
}

.clean-form-grp label {
  font-size: 16px;
  font-family: "DM Sans", sans-serif;
  color: rgba(255, 255, 255, 0.77);
  font-weight: 700;
  display: block;
  margin-bottom: -13px;
}

.clean-form-grp textarea,
.clean-form-grp input[type="email"],
.clean-form-grp input[type="text"] {
  border-radius: 10px;
  border: 1px solid rgba(255, 255, 255, 0.15);
  outline: none;
  color: rgba(255, 255, 255, 0.55);
  padding: 16px 23px;
  background: transparent;
  width: 100%;
}

.clean-form-grp ::placeholder {
  color: rgba(255, 255, 255, 0.55);
}

.clean-form-grp input[type="submit"] {
  border: unset;
  color: #032b52;
}

.wpcf7 form .wpcf7-response-output {
  color: #30c7b5;
}

.clean-form-grp textarea {
  height: 170px;
}

.clean-form-grp p {
  margin-bottom: 0px;
}

.working-customwrap {
  display: flex;
  align-items: center;
  position: relative;
  gap: 14px;
}

.working-customwrap .working-itemv2 {
  max-width: 400px;
  text-align: center;
  margin: 0 auto;
}

.working-customwrap .working-itemv2 .seri {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--white);
  font-size: 24px;
  font-weight: 500;
  background: var(--base);
  margin: 0 auto 30px;
}

.working-customwrap .working-itemv2 h3 {
  margin-bottom: 18px;
}

.working-customwrap .working-itemv2 p {
  color: var(--pra);
}

.working-customwrap .work-line {
  border: 1px solid rgba(0, 0, 0, 0.09);
  height: 256px;
  border-width: 1;
}

.working-customwrap .waroow-rotate1 {
  position: absolute;
  left: 320px;
  top: 10px;
}

.working-customwrap .waroow-rotate2 {
  position: absolute;
  right: 340px;
  top: 10px;
}

@media (max-width: 1199px) {

  .working-customwrap .waroow-rotate1,
  .working-customwrap .waroow-rotate2 {
    display: none;
  }

  .working-customwrap .working-itemv2 {
    max-width: 400px;
    text-align: center;
    margin: 0 auto;
  }

  .working-customwrap .working-itemv2 .seri {
    width: 50px;
    height: 50px;
    font-size: 14px;
    margin: 0 auto 10px;
  }

  .working-customwrap .working-itemv2 h3 {
    margin-bottom: 10px;
    font-size: 20px;
  }

  .working-customwrap .working-itemv2 p {
    color: var(--pra);
  }
}

@media (max-width: 991px) {
  .working-customwrap {
    flex-wrap: wrap;
  }

  .working-customwrap .work-line {
    display: none;
  }
}

.bn2-worball {
  position: absolute;
  bottom: 10%;
  right: 0;
}

.cleaning-shape2 {
  position: absolute;
  top: 130px;
  right: 20%;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(50px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.cleaning-quote {
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

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

.testimonials {
  background: url("https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/testimonail/testi-bg.png") center center no-repeat;
  background-size: cover;
  background-attachment: fixed;
  padding: 130px 0 150px;
  color: #ffffff;
  position: relative;
  margin-bottom: 90px;

}

.testimonials:before {
  content: "";
  background: rgba(0, 0, 0, 0.5);
  width: 100%;
  height: 100%;
  top: 0;
  position: absolute;
  left: 0;
}

.testimonials .heading h2 {
  font-size: 25px;
  font-weight: 700;
  color: #ffffff;
}

.testimonials .heading h2 span {
  color: #30c7b5;
}

.testimonials p {
  font-size: 15px;
  font-weight: 400;
  line-height: 1.7;
  color: #d1e5e7;
  margin: 20px 0;
  padding: 0;
}

/* Image */
.testimonials .carousel-inner .carousel-item .team {
  width: 100px;
  height: 100px;
  border: 2px solid #30c7b5;
  border-radius: 100%;
  padding: 5px;
  margin: 50px 0 15px;
}

.testimonials .carousel-inner .carousel-item h3 {
  font-size: 20px;
  color: #ffffff;
  font-weight: 600;
}

.testimonials .carousel-inner .carousel-item h4 {
  font-size: 14px;
  font-weight: 300;
  color: #e2e1e1;
  margin-bottom: 20px;
}

.testimonials .carousel-indicators {
  bottom: -30px;
}

.testimonials .carousel-indicators li {
  background-color: #b8b7b7;
  border-radius: 30px;
  height: 4px;
  width: 40px;
}

.testimonials .carousel-indicators .active {
  background-color: #30c7b5;
}

.testimonials .control span {
  cursor: pointer;
}

.testimonials .icon {
  height: 40px;
  width: 40px;
  background-size: 100%, 100%;
  border-radius: 50%;
  font-size: 30px;
  background-image: none;
  color: #ffffff;
}

.heading {
  position: relative;
}

:root {
  --clip-size: 1.5rem;
  --clip-bottom-right: polygon(0 0,
      100% 0,
      100% calc(100% - var(--clip-size)),
      calc(100% - var(--clip-size)) 100%,
      0% 100%,
      0 0);
  --clip-bottom-left: polygon(0 0,
      100% 0,
      100% 100%,
      var(--clip-size) 100%,
      0 calc(100% - var(--clip-size)),
      0 0);
  --nav-x: 0;
  --width-nav: 20ch;
}

:root {
  --bg: #eee;
  --fg: #494949;
  --border: rgba(120, 120, 130, 0.3);
  --hover: rgba(100, 100, 130, 0.2);
  --confirmation: #268500;
}

:where(html) {
  min-height: 100%;
  background-color: #242932;
  color: #d8dee9;
}

:where(body) {
  margin: 0;
  font-family: system-ui, Verdana, sans-serif;
  word-wrap: break-word;
  overflow-wrap: break-word;
  line-height: 1.5;
}

:where(h1, .title) {
  font-family: Josefin Sans, sans-serif;
  font-style: normal;
  text-transform: uppercase;
}


:where(a) {
  color: inherit;
}

:where(.clipped, .clipped--br) {
  clip-path: var(--clip-bottom-right);
}

:where(h1, h2, h3, p) {
  margin: 0;
}

.page {
  display: grid;
  align-items: center;
  overflow-x: hidden;
  overflow-y: auto;
  min-height: 100vh;
  min-height: 100svh;
}

/* nav {
  --gap: 1rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(275px, 1fr));
  gap: var(--gap);

  box-sizing: border-box;
  width: 100vw;
  max-width: 100ch;
  margin: 0 auto;
  padding: var(--gap);
} */

.logo {
  --gap: 1rem;

  display: grid;
  grid-template-columns: auto auto;
  place-content: end start;

  padding: var(--gap);
  background: #0000001d;
  color: #70757e;
}


.link {
  --border: calc(100% - 2rem);
  --gap: clamp(1.2rem, calc(1.18rem + 0.1vw), 1.25rem);
  --colour: color-mix(in srgb, black 70%, var(--bg));
  --bg-stripe: color-mix(in srgb, black 8%, var(--bg));

  display: grid;
  align-content: end;
  gap: var(--gap);

  aspect-ratio: 1;
  padding: 1rem;
  line-height: 1;
  text-decoration: none;

  transition: background-size 0.25s;

  background: var(--bg) repeating-linear-gradient(-45deg,
      transparent 0,
      transparent 1rem,
      var(--bg-stripe) 0,
      var(--bg-stripe) 2rem);
  background-size: var(--border) var(--border);
  background-position: center;
  background-repeat: no-repeat;
  color: var(--colour);

  &:hover,
  &:focus {
    --border: 70%;
  }

  & span {

    background: var(--bg);

    &.subtitle {
      padding: 4px 0;
      font-family: Lora, serif;
      font-size: 1.45rem;
      line-height: 1.5;
    }

    &.title {
      padding: 12px 0 6px;
      font-size: 1.25rem;
      font-weight: 800;
      letter-spacing: 2px;
      line-height: 1.2;
    }
  }

  &[href="/about"] {
    --bg: #be6069;
  }

  &[href="/projects"] {
    --bg: #d18771;
  }

  &[href="/articles"] {
    --bg: #ebca89;
  }

  &[href="/weeknotes"] {
    --bg: #a4bf8d;
  }

  &[href="/in-use"] {
    --bg: #b48ead;
  }
}

.cmn--btn {
  padding: 12px 28px 15px;
  color: var(--white);
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
}

.error {
  color: red;
  font-weight: 600;
}
</style>
