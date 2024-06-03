<script>
// import { ref } from 'vue';
import { useStore } from 'vuex';
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
import Calendar from "@/examples/Calendar.vue";

// import PricingCard from "./components/PricingCard.vue";
// import AppFooter from "@/examples/PageLayout/Footer.vue";
// import AccordionItem from "./components/AccordionItem.vue";
// import setNavPills from "@/assets/js/nav-pills.js";
// import ProjectGallerie from "./components/ProjectGallerie.vue";
// import TeamCard from "./components/TeamCard.vue";

// import ComplexBackgroundCard from "@/views/ecommerce/components/ComplexBackgroundCard.vue";

export default {
  components: {
    Navbar,
    Calendar,
    // ProjectGallerie,
    // TeamCard
    // PricingCard,
    // AppFooter,
    // AccordionItem,
    // ComplexBackgroundCard,
  },
  data() {
    return {
      pricingParameters: [
        {
          name: 'Bedrooms',
          options: [
            { label: '1 Bedroom', price: 50 },
            { label: '2 Bedrooms', price: 75 },
            { label: '3 Bedrooms', price: 100 },
            { label: '4 Bedrooms', price: 125 },
            { label: '5 Bedrooms', price: 150 },
            { label: '6 Bedrooms', price: 175 },
          ],
        },
        {
          name: 'Bathrooms',
          options: [
            { label: '1 Bathroom', price: 30 },
            { label: '2 Bathrooms', price: 60 },
            { label: '3 Bathrooms', price: 90 },
            { label: '4 Bathrooms', price: 120 },
            { label: '5 Bathrooms', price: 150 },
            { label: '6 Bathrooms', price: 180 },
          ],
        },
        {
          name: 'Kitchens',
          options: [
            { label: '1 Kitchen', price: 40 },
            { label: '2 Kitchens', price: 80 },
            { label: '3 Kitchens', price: 120 },
          ],
        },
        {
          name: 'Etats',
          options: [
            { label: 'Slightly Dirty', price: 40 },
            { label: 'Pretty Dirty', price: 80 },
            { label: 'Very Dirty', price: 120 },
          ],
        },
        {
          name: 'service',
          options: [
            { label: 'Regular', price: 40 },
            { label: 'Deep Clean', price: 80 },
            { label: 'Move-Out/Move In', price: 120 },
          ],
        },
      ],
      extraServices: [
        { name: 'Four intérieur', price: 20 },
        { name: 'Murs', price: 30 },
        { name: 'Vitres intérieures', price: 20 },
        { name: 'Réfrigérateur intérieur', price: 30 },
        { name: 'Armoire intérieure', price: 20 },
        { name: 'Organisation', price: 30 },
        { name: 'Lave-vaisselle intérieur', price: 20 },
        { name: 'Garage intérieur', price: 30 },
        { name: 'Micro-ondes', price: 20 },
        { name: 'Lessive', price: 30 },
        { name: 'Stores', price: 20 },
        { name: 'Laveuse intérieure', price: 30 },
        // Ajouter plus de services supplémentaires si nécessaire
      ],







      selectedOptions: {
        Bedrooms: null,
        Bathrooms: null,
        Kitchens: null,
        Etats: null,
        service: null,
      },
      selectedFrequency: 'Hebdomadaire',
      subTotal: 0,
      salesTax: 0,
      finalTotal: 0,
    };
  },
  computed: {
    store() {
      return useStore();
    }
  },
  methods: {
    selectFrequency(frequency) {
      this.selectedFrequency = frequency;
    },
    selectExtraService(extraService) {
      // Toggle the selected state of the clicked extra service
      extraService.selected = !extraService.selected;
      // Update the total
      this.updateTotal();
    },
    updateTotal() {
      this.subTotal = Object.values(this.selectedOptions).reduce((total, option) => {
        return total + (option ? option.price : 0);
      }, 0);
      this.subTotal += this.extraServices.reduce((total, service) => {
        return total + (service.selected ? service.price : 0);
      }, 0);
      this.salesTax = this.subTotal * 0.1; // Assuming a 10% sales tax rate
      this.finalTotal = this.subTotal + this.salesTax;
    },

  },
  mounted() {
    if (this.store) {
      this.store.state.showSidenav = false;
      this.store.state.showNavbar = false;
      this.store.state.showFooter = false;
    }
    this.updateTotal();
  },
  beforeUnmount() {
    if (this.store) {
      this.store.state.showSidenav = false;
      this.store.state.showNavbar = false;
      this.store.state.showFooter = true;
      if (this.store.state.isPinned === false) {
        const sidenav_show = document.querySelector(".g-sidenav-show");
        sidenav_show.classList.remove("g-sidenav-hidden");
        sidenav_show.classList.add("g-sidenav-pinned");
        this.store.state.isPinned = true;
      }
    }
  }
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
    backgroundImage: 'url(' + require('../../assets/img/header1.png') + ')',
    backgroundSize: 'cover',
    padding: '100px',
  }">

    <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
      <div class="row">
        <div class="mx-auto text-center col-md-6 mt-4">
          <h3 class="text-white">Reservation </h3>
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
      <div class="col-sm-8  form-section shadow-border booking-panel card ">
        <div class="text-center">
          <h2 style="font-weight: 200;
    font-size: 40px;font-family: proxima, arial;
    color: #373e4a;margin-top: 17px;line-height: 1.1;">
            <span class="editable can-be-hidden ng-binding" data-type="paragraph"
              data-code="complete_your_booking">Complétez votre réservation.</span>

          </h2>
          <h3 style="font-weight: 100;
    font-size: 19px;font-family: proxima, arial;
    color: #373e4a; line-height: 1.1;">
            <span class="editable can-be-hidden ng-binding" data-type="paragraph" data-code="few_details"
              data-id="122">Super ! Quelques détails et nous pouvons finaliser votre réservation.</span>

          </h3>
        </div>

        <div class="form-group p-5">
          <div class="text-start">
            <h3 style="font-weight: 100;
    font-size: 19px;font-family: proxima, arial;
    color: #373e4a; line-height: 1.1;">CHOISISSEZ LE TYPE DE SERVICE</h3>
          </div>
          <div class="col-sm-12 can-be-hidden" data-id="254" data-code="service_type" data-type="service_type">

            <select autocomplete="off"
              class="form-control input-lg booking-service-type ng-pristine ng-untouched ng-valid"
              v-model="selectedOptions.service" @change="updateTotal">
              <option v-for="option in pricingParameters[4].options" :key="option.label" :value="option"> {{
                option.label }} </option>
            </select>
          </div>
        </div>
        <fieldset>
          <div class="pricing-parameters-container ng-scope">
            <div class="row form-group ng-scope">
              <div class="text-start">
                <h3 style="font-weight: 100;
    font-size: 19px;font-family: proxima, arial;
    color: #373e4a; line-height: 1.1;">PARLEZ-NOUS DE VOTRE DOMICILE</h3>
              </div>
              <div class="col-sm-6 xs-vertical-space ng-scope"> <select autocomplete="off" class="form-control input-lg"
                  v-model="selectedOptions.Bedrooms" @change="updateTotal">
                  <option v-for="option in pricingParameters[0].options" :key="option.label" :value="option"> {{
                    option.label }} </option>
                </select> </div>
              <div class="col-sm-6 xs-vertical-space ng-scope"> <select autocomplete="off" class="form-control input-lg"
                  v-model="selectedOptions.Bathrooms" @change="updateTotal">
                  <option v-for="option in pricingParameters[1].options" :key="option.label" :value="option"> {{
                    option.label }} </option>
                </select> </div>
            </div>
            <div class="row form-group ng-scope">
              <div class="col-sm-6 xs-vertical-space ng-scope"> <select autocomplete="off" class="form-control input-lg"
                  v-model="selectedOptions.Kitchens" @change="updateTotal">
                  <option v-for="option in pricingParameters[2].options" :key="option.label" :value="option"> {{
                    option.label }} </option>
                </select> </div>
              <div class="col-sm-6 xs-vertical-space ng-scope"> <select autocomplete="off" class="form-control input-lg"
                  v-model="selectedOptions.Etats" @change="updateTotal">
                  <option v-for="option in pricingParameters[3].options" :key="option.label" :value="option"> {{
                    option.label }} </option>
                </select> </div>
            </div>
          </div>
        </fieldset>
        <fieldset>
          <div class="text-start">
            <h3 style="font-weight: 100;
    font-size: 19px;font-family: proxima, arial;
    color: #373e4a; line-height: 1.1;">AJOUTEZ DES OPTIONS SUPPLÉMENTAIRES</h3>
          </div>
          <div class="row">
            <tui-booking-service-extra v-for="(extraService, index) in extraServices" :key="index"
              class="col-sm-3 col-xs-4" @click="selectExtraService(extraService)">
              <div :id="'extra-' + extraService.id"
                :class="{ 'extra-option': true, 'selected': extraService.selected }">
                <div :class="'extra-icon ' + extraService.iconClass"
                  :style="{ backgroundColor: extraService.selected ? 'green' : 'transparent' }">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RDNGOEZDRTdBMTFFNDk5NDBCRTNBMUUxRDg4NDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RDNGOTBDRTdBMTFFNDk5NDBCRTNBMUUxRDg4NDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RDREM0Y4RENFN0ExMUU0OTk0MEJFM0ExRTFEODg0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RDREM0Y4RUNFN0ExMUU0OTk0MEJFM0ExRTFEODg0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjp/ERcAAAFvSURBVHja7JeBbYMwEEVNxAAeoWwAEzSMkAk6QpIN0gnSEcgEFRPEnaBMAIzgDci5+q5ONIgYQXAln3RyfDnZz3fnk4m6rhO+SNw0jaTxk3S7EoMi3SVJomMGokmrJ4Ok2Nsw5DEmLWkGoMlCp3PyR1a+bVY2sLcmTPh9Ir1ifESs/5ltciK9mpHZzrAdGLxGIH4kquvaVLCiP3JyTEFqJRtJXd8/R3T7a0gAM46kBaSxb2kebYRHEvfmJgrvpK+kXw8UNPev6HQKp/1dg2wVbB+IZGmjMgYjHGpl0J82u2c7ji1ka2aNa83rTpqasZGRKza9P2myt0k8s8/w28T7jBfi9dXmIlFcLiEfS6OaAvOCLirnPDnBmlubDfWZoTTt5wZh0d671ky6cF/xv4ADTIAJMAEmwPgGoxfcU7vClAvClK7vmQLj28wgF3rLFFNeegWDWuxB7m0Bh4+40PT+PYzygENZmN3KQAoM4ibAAI0igQ3XUaV0AAAAAElFTkSuQmCC">
                </div>
                <div class="extra-text">{{ extraService.name }}</div>
              </div>
            </tui-booking-service-extra>



          </div>
        </fieldset>
        <div class="text-start p-5">
          <h2 style="font-weight: 100;
    font-size: 19px;
    font-family: proxima, arial;
    color: rgb(55, 62, 74);
    line-height: 1.1;">
            <span class="editable can-be-hidden ng-binding" data-type="paragraph"
              data-code="complete_your_booking">QUAND SOUHAITEZ-VOUS QUE NOUS VENIONS ?</span>

          </h2>

          <p>Choisissez la date et la plage horaire* qui vous convient. Si vous avez besoin d'un rendez-vous de dernière
            minute, appelez-nous au (206) 294-9654. *Veuillez noter : Votre plage horaire d'arrivée est la période
            pendant laquelle les nettoyeurs peuvent arriver.</p>


        </div>
        <calendar id="calendar-table" />
        <div class="container p-5">
          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title" style="font-weight: 100;
    font-size: 19px;
    font-family: proxima, arial;
    color: rgb(55, 62, 74);
    line-height: 1.1;">À QUELLE FRÉQUENCE</h3>
                </div>
                <div class="panel-body">
                  <p>Il s'agit de vous trouver le nettoyage parfait pour votre domicile. La planification est flexible.
                    Annulez ou reportez à tout moment. Les remises sont appliquées en fonction de la sélection.</p>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option"
                        :class="{ selected: selectedFrequency === 'Hebdomadaire' }"
                        @click="selectFrequency('Hebdomadaire')">
                        Hebdomadaire
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option"
                        :class="{ selected: selectedFrequency === 'Bimensuel' }" @click="selectFrequency('Bimensuel')">
                        Bimensuel
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option"
                        :class="{ selected: selectedFrequency === 'Mensuel' }" @click="selectFrequency('Mensuel')">
                        Mensuel
                      </div>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title" style="font-weight: 100;
    font-size: 19px;
    font-family: proxima, arial;
    color: rgb(55, 62, 74);
    line-height: 1.1;">QUI ÊTES-VOUS</h3>
                </div>
                <div class="panel-body">
                  <p>Ces informations seront utilisées pour vous contacter concernant votre service.</p>
                  <form class="form-horizontal">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[first_name]"
                            ng-model="ctrl.booking.first_name" maxlength="255" placeholder="First Name*" type="text">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[last_name]"
                            ng-model="ctrl.booking.last_name" maxlength="255" placeholder="Last Name*" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[email]" ng-model="ctrl.booking.email"
                            maxlength="255" placeholder="Email*" type="email">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[phone]" ng-model="ctrl.booking.phone"
                            maxlength="20" placeholder="Phone*" type="text">
                        </div>
                      </div>
                    </div>

                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title" style="font-weight: 100;
    font-size: 19px;
    font-family: proxima, arial;
    color: rgb(55, 62, 74);
    line-height: 1.1;">ADRESSE</h3>
                </div>
                <div class="panel-body">
                  <p>Où aimeriez-vous que nous nettoyions ?</p>
                  <form class="form-horizontal">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[address_wo_suite]" maxlength="255"
                            placeholder="Adresse*" type="text">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[apt_suite]" maxlength="255"
                            placeholder="Apt/Suite #" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[city]" maxlength="100" placeholder="Ville*"
                            type="text">
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <select class="form-control input-lg">
                            <option value="" selected="selected">État*</option>
                            <option value="1">AK</option>
                            <option value="2">AL</option>
                            <option value="3">AR</option>

                            <!-- Options for states -->
                          </select>
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[zip]" maxlength="10"
                            placeholder="Code Postal*" type="text">
                        </div>
                      </div>
                    </div>
                    <!-- ngIf: ctrl.booking.prevent_booking -->
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title" style="font-weight: 100;
    font-size: 19px;
    font-family: proxima, arial;
    color: rgb(55, 62, 74);
    line-height: 1.1;">CODE DE RÉDUCTION</h3>
                </div>
                <div class="panel-body">
                  <p>Si vous avez un code de réduction, saisissez-le ici.</p>
                  <form class="form-horizontal">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[first_name]"
                            ng-model="ctrl.booking.first_name" maxlength="255"
                            placeholder="Discount Code (or leave this blank)" type="text">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <button style="padding-top: 6px;" class="btn btn-lg btn-block btn-orange apply-button"
                            data-name="Apply Button" data-type="apply">Apply</button>
                        </div>
                      </div>
                    </div>


                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title" style="font-weight: 100;
    font-size: 19px;
    font-family: proxima, arial;
    color: rgb(55, 62, 74);
    line-height: 1.1;">Commentaires et instructions spéciales</h3>
                </div>
                <div class="panel-body">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <div class="col-sm-12">
                        <textarea autocomplete="off" class="form-control input-lg non-resizable"
                          ng-model="ctrl.booking.customer_notes" maxlength="255"
                          placeholder="Instructions spéciales : Y a-t-il quelque chose que nous devrions savoir ? Par exemple : le code de la porte est 1234 ou faites attention au chien."
                          rows="4"></textarea>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <fieldset class="submit-section">
          <div class="row">
            <div class="col-sm-12">
              <p style="padding: 15px;">
                <tui-paragraph>
                  <span>En cliquant sur le bouton Réserver maintenant, <a href="#" rel="noopener noreferrer"
                      target="_blank"><u>Tvous acceptez nos Conditions générales d'utilisation</u></a> <a href="#"
                      rel="noopener noreferrer" target="_blank"><u>et notre Politique de
                        confidentialité.</u></a><u>.</u></span>
                </tui-paragraph>
              </p>
            </div>
          </div>

          <div class="fields-container before-submit-button-custom-fields">
            <div class="row">
              <div class="col-xs-12" ng-repeat="customField in ctrl.customFields"
                ng-if="customField.settings.before_submit_button">
                <div class="checkbox">
                  <label style="display: flex; align-items: center;">
                    <input style="margin-right: 5px;" type="checkbox"
                      ng-model="ctrl.booking.customValues[customField.id].value"
                      class="ng-pristine ng-untouched ng-valid">
                    <p style="margin: 0;">Je suis d'accord avec les Conditions générales d'utilisation et la Politique
                      de confidentialité.</p>
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-sm-12">
              <a class="btn btn-lg btn-green btn-block submit-button stripe-button ng-binding" data-name="Submit Button"
                data-type="submit" ng-click="ctrl.onSubmit()"
                ng-disabled="(!ctrl.paymentsService.isRecaptchaVerified || ctrl.validating || ctrl.processing) &amp;&amp; ctrl.paymentsService.showRecaptcha()"
                href="#">Book Now</a>
            </div>
          </div>
        </fieldset>
















      </div>

      <div class="col-sm-3  card " style="margin-left: 20px;">
        <div class="form-section shadow-border text-center editable can-be-hidden content-panel ng-binding">
          <div class="form_section text-center" id="content_panel">
            <div class="row">
              <div class="col-12 col-md-6 col-lg-12">
                <div class="icon-sidebar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                      fill="#30c7b5"></path>
                  </svg>
                </div>
                <h4>VOUS FAIT GAGNER DU TEMPS</h4>
                <p>Notre service vous aide à vivre plus intelligemment, vous donnant du temps pour vous concentrer sur
                  ce qui est le plus important.</p>
              </div>
              <div class="col-12 col-md-6 col-lg-12">
                <div class="icon-sidebar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                      fill="#30c7b5"></path>
                  </svg>
                </div>
                <h4>SÉCURITÉ AVANT TOUT</h4>
                <p>Nous examinons rigoureusement tous nos nettoyeurs, qui font l'objet de vérifications d'identité ainsi
                  que d'entretiens en personne.
                </p>
              </div>
              <div class="col-12 col-md-6 col-lg-12">
                <div class="icon-sidebar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                      fill="#30c7b5"></path>
                  </svg>
                </div>
                <h4>QUALITÉ SEULEMENT LA MEILLEURE</h4>
                <p>Nos professionnels qualifiés vont au-delà de chaque tâche. Les nettoyeurs sont évalués et revus après
                  chaque mission.</p>
              </div>
              <div class="col-12 col-md-6 col-lg-12">
                <div class="icon-sidebar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                      fill="#30c7b5"></path>
                  </svg>
                </div>
                <h4>FACILE À OBTENIR DE L'AIDE</h4>
                <p>Sélectionnez votre code postal, le nombre de chambres et de salles de bains, la date et détendez-vous
                  pendant que nous nous occupons de votre maison.</p>
              </div>
              <div class="col-12 col-md-6 col-lg-12">
                <div class="icon-sidebar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                      fill="#30c7b5"></path>
                  </svg>
                </div>
                <h4>COMMUNICATION FLUIDE</h4>
                <p>Appelez-nous ou envoyez-nous un e-mail. Nous sommes heureux de parler à tout moment.</p>
              </div>
              <div class="col-12 col-md-6 col-lg-12">
                <div class="icon-sidebar">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                      fill="#30c7b5"></path>
                  </svg>
                </div>
                <h4>PAIEMENT SANS NUMÉRAIRE</h4>
                <p>Payez en toute sécurité en ligne</p>
              </div>
            </div>
          </div>
        </div>
        <div class="booking-summary-container">
          <div class="booking-summary">
            <div class="text-center">
              <h2 style="font-size: 1.25rem;">RÉCAPITULATIF DE LA RÉSERVATION</h2>
            </div>
            <div class="room-info">
              <span class="bedroom">{{ selectedOptions['Bedrooms'] ? `${selectedOptions['Bedrooms'].label}
                ($${selectedOptions['Bedrooms'].price})` : '' }}</span>
              <span class="bathroom">{{ selectedOptions['Bathrooms'] ? `${selectedOptions['Bathrooms'].label}
                ($${selectedOptions['Bathrooms'].price})` : '' }}</span>
              <span class="kitchen">{{ selectedOptions['Kitchens'] ? `${selectedOptions['Kitchens'].label}
                ($${selectedOptions['Kitchens'].price})` : '' }}</span>
              <span class="Etats">{{ selectedOptions['Etats'] ? `${selectedOptions['Etats'].label}
                ($${selectedOptions['Etats'].price})` : '' }}</span>
              <span class="service">{{ selectedOptions['service'] ? `${selectedOptions['service'].label}
                ($${selectedOptions['service'].price})` : '' }}</span>
              <template v-for="(extraService, index) in extraServices">
                <span v-if="extraService.selected" :key="index">{{ extraService.name }} (${{ extraService.price
                  }})</span>
              </template>
            </div>
            <div class="service-info">
              <span class="service-date">Choisissez la date du service...</span>
              <span class="service-type">{{ selectedFrequency }}</span>
            </div>
            <div class="prices">
              <span class="sub-total">SOUS-TOTAL : ${{ subTotal }}</span>
              <span class="sales-tax">TAXE DE VENTE : ${{ salesTax }}</span>
            </div>
            <div class="final-total">
              <span class="final-total-label">TOTAL FINAL :</span>
              <span class="final-total-amount">${{ finalTotal }}</span>
            </div>
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
            Abonnez-vous à notre infolettre et ne ratez aucun de nos bons plans exclusifs !
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
                <label class="fz-16 title fw-700 prafont" style="padding-right: 10px;">Entre Ton Email</label>
                <input type="email" name="EMAIL" required="" style="
                    width: 100%;
                    max-width: 500px;
                    border-radius: 10px;
                    border: 1px solid rgba(0, 0, 0, 0.09);
                    color: var(--pra);
                    padding: 13px 16px;
                    margin-bottom: 10px;
                  " />
                <input class="cmn--btn" type="submit" value="Decouvrir Nos Offers" style="
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
                Avec une histoire riche s'étendant sur des décennies, notre club est devenu un symbole d'excellence dans
                la communauté du golf. Il propose un gameplay stimulant mais gratifiant.
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
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                <li style="list-style: none">
                  <a href="" style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    ">
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
              <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                Liens rapides
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/">A propos</a>
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/contact-us/">Contact Nous</a>
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
                    <a href="https://www.4damstheme.com/clenis/our-services/">buanderie</a>
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
            <div id="block-19" class="widget-footer widget_block footer__item">
              <h4 class="footer__title" style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                ">
                Nos coordonnées
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li style="margin-bottom: 24px">
                    <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                      Lun - Ven 12:00 - 18:00
                    </span>
                  </li>
                  <li style="margin-bottom: 24px">
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M7 14.6746L10.7123 10.9623C12.7625 8.91208 12.7625 5.58794 10.7123 3.53769C8.66208 1.48744 5.33794 1.48744 3.28769 3.53769C1.23744 5.58794 1.23744 8.91208 3.28769 10.9623L7 14.6746ZM7 16.7959L2.22703 12.023C-0.40901 9.3869 -0.40901 5.11307 2.22703 2.47703C4.86307 -0.15901 9.1369 -0.15901 11.773 2.47703C14.409 5.11307 14.409 9.3869 11.773 12.023L7 16.7959ZM7 8.75C7.82845 8.75 8.5 8.07845 8.5 7.25C8.5 6.42157 7.82845 5.75 7 5.75C6.17155 5.75 5.5 6.42157 5.5 7.25C5.5 8.07845 6.17155 8.75 7 8.75ZM7 10.25C5.34314 10.25 4 8.90683 4 7.25C4 5.59314 5.34314 4.25 7 4.25C8.65683 4.25 10 5.59314 10 7.25C10 8.90683 8.65683 10.25 7 10.25Z"
                        fill="#30c7b5"></path>
                    </svg>
                    <span style="
                        color: #748aa0;
                        font-size: 15px;
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
.card {
  border: 1px solid #ccc;
  /* Define the border color */
  border-radius: 10px;
  /* Adjust border radius for rounded corners */
  padding: 20px;
  /* Add padding to create space between content and border */
  background-color: #fff;
  /* Define the background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Add a shadow for depth */
}

.extra-option .extra-icon {
  margin-right: 5px;
  border: 1px solid #ccc;
  border-radius: 4px;
  height: 75px;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}

.extra-option {
  text-align: center;
  margin-bottom: 20px;
  color: #000;
  cursor: pointer;
  font-size: 14px;
  border-radius: 4px;
}

.extra-option .extra-icon img {
  max-width: 105px;
  max-height: 105px;
  position: relative;
  top: 50%;

  transform: translateY(-50%);

}

.fieldset {
  display: block;
  margin-inline-start: 2px;
  margin-inline-end: 2px;
  padding-block-start: 0.35em;
  padding-inline-start: 0.75em;
  padding-inline-end: 0.75em;
  padding-block-end: 0.625em;
  min-inline-size: min-content;

}

.date-time-container {
  display: flex;
  align-items: center;
}

.date-time-container .col-sm-6 {
  flex: 1;
  margin-right: 10px;
  /* Add some space between the elements */
}

.date-time-container .col-sm-6:last-child {
  margin-right: 0;
  /* Remove margin from the last item */
}

.frequency-option {
  padding: 15px 6px;
  border: 1px solid #ccc;
  text-align: center;
  border-radius: 4px;
  margin: 0 12px 7px 0;
  color: #000;
  font-weight: 200;
  font-size: 12px;
  cursor: pointer;
  line-height: 15px;
  width: 20%;
}

.frequency-option.selected {
  background-color: #d9edf7;
}

.booking-summary-container {
  position: sticky;
  top: 0;
  z-index: 1;
}

.booking-summary {
  border: 1px solid #ccc;
  padding: 20px;
  font-family: Arial, sans-serif;
  background-color: #fff;

}

.room-info,
.service-info,
.prices,
.taxes,
.final-total {
  margin-bottom: 10px;
}

.room-info span,
.service-info span,
.prices span,
.taxes span,
.final-total span {
  display: flex;
  flex-direction: column;
  margin-right: 10px;
}

.final-total {
  font-size: 1.5em;
  font-weight: bold;
}

.final-total-amount {
  color: #f00;
}

@media (max-width: 767.98px) {
  .cc {
    margin-left: 0px;
  }
}
</style>
