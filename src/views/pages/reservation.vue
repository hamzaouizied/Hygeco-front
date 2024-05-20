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
    this.startSlideshow();
  },
  beforeUnmount() {
    this.stopSlideshow();
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
  methods: {
    startSlideshow() {
      this.intervalId = setInterval(() => {
        this.currentIndexHead =
          (this.currentIndexHead + 1) % this.existingSlides.length;
      }, 5000); // Change image every 5 seconds (adjust as needed)
    },
    stopSlideshow() {
      clearInterval(this.intervalId);
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
      <div class="col-sm-8  form-section shadow-border booking-panel" >
        <div class="text-center">
          <h2 style="font-weight: 200;
    font-size: 40px;font-family: proxima, arial;
    color: #373e4a;margin-top: 17px;line-height: 1.1;">
            <span class="editable can-be-hidden ng-binding" data-type="paragraph"
              data-code="complete_your_booking">Complete your booking.</span>

          </h2>
          <h3 style="font-weight: 100;
    font-size: 19px;font-family: proxima, arial;
    color: #373e4a; line-height: 1.1;">
            <span class="editable can-be-hidden ng-binding" data-type="paragraph" data-code="few_details"
              data-id="122">Great! Few details and we can complete your booking.</span>

          </h3>
        </div>

        <div class="form-group">
          <div class="text-start">
            <h3 style="font-weight: 100;
    font-size: 19px;font-family: proxima, arial;
    color: #373e4a; line-height: 1.1;">CHOOSE YOUR SERVICE</h3>
          </div>
          <div class="col-sm-12 can-be-hidden" ng-class="{hidden: !ctrl.bookingForm.system_fields.service_type.show}"
            data-id="254" data-code="service_type" data-type="service_type">
            <select autocomplete="off"
              class="form-control input-lg booking-service-type ng-pristine ng-untouched ng-valid"
              ng-class="{error: ctrl.booking.errors.serviceType}" ng-model="ctrl.booking.serviceType"
              ng-change="ctrl.onBookingServiceTypeChanged()"
              ng-options="serviceType.name for serviceType in ctrl.serviceTypes track by serviceType.id"><!-- ngIf: !ctrl.serviceTypes.length -->
              <option label="Regular" value="1" selected="selected">Regular</option>
              <option label="Deep Clean" value="2">Deep Clean</option>
              <option label="Move-Out/Move In" value="3">Move-Out/Move In</option>
            </select>
          </div>
        </div>
        <fieldset data-type="service_block" service-block-type="dropdown" class="ng-scope">
          <tui-booking-service-dropdown booking="ctrl.booking" booking-form="ctrl.bookingForm"
            ng-if="ctrl.bookingForm.settings.form.service_block_type == 'dropdown' || !ctrl.bookingForm.settings.form.service_block_type"
            class="ng-scope ng-isolate-scope">
            <div class="pricing-parameters-container ng-scope"
              ng-if="ctrl.booking.bookingServices[0].service.pricing_parameters" style="">
              <div class="row form-group ng-scope"
                ng-repeat="pricingParameterPair in [ctrl.booking.bookingServices[0].service] | _:'concat':ctrl.booking.bookingServices[0].service.pricing_parameters | pairs as filtered_result">
                <div class="col-sm-6 xs-vertical-space ng-scope" ng-if="pricingParameterPair[1]">
                  <select autocomplete="off"
                    class="form-control input-lg booking-service ng-pristine ng-untouched ng-valid ng-scope"
                    ng-if="pricingParameterPair[0].pricing_parameters"
                    ng-model="ctrl.booking.bookingServices[0].service" ng-change="ctrl.onServiceChanged()"
                    ng-options="service.name for service in ctrl.availableServices track by service.id">
                    <option label="1 Bedroom" value="112" selected="selected">1 Bedroom</option>
                    <option label="2 Bedroom" value="113">2 Bedroom</option>
                    <option label="3 Bedrooms" value="114">3 Bedrooms</option>
                    <option label="4 Bedrooms" value="97">4 Bedrooms</option>
                    <option label="5 Bedrooms" value="98">5 Bedrooms</option>
                    <option label="6 Bedrooms" value="99">6 Bedrooms</option>
                  </select>
                </div>
                <div class="col-sm-6 ng-scope" ng-if="pricingParameterPair[1]">
                  <select autocomplete="off" class="form-control input-lg booking-pricing-parameter pricing-parameter-2"
                    ng-model="ctrl.booking.bookingServices[0].pricingParameters[pricingParameterPair[1].id]"
                    ng-if="pricingParameterPair[1].type == 'ranged'"
                    ng-options="range.quantity as range.label for range in pricingParameterPair[1].ranges">
                    <option label="1 Bathroom" value="number:1" selected="selected">1 Bathroom</option>
                    <option label="2 Bathrooms" value="number:2">2 Bathrooms</option>
                    <option label="3 Bathrooms" value="number:3">3 Bathrooms</option>
                    <option label="4 Bathrooms" value="number:4">4 Bathrooms</option>
                    <option label="5 Bathrooms" value="number:5">5 Bathrooms</option>
                    <option label="6 Bathrooms" value="number:6">6 Bathrooms</option>
                  </select>
                </div>
              </div>
              <div class="row form-group ng-scope"
                ng-repeat="pricingParameterPair in [ctrl.booking.bookingServices[0].service] | _:'concat':ctrl.booking.bookingServices[0].service.pricing_parameters | pairs as filtered_result">
                <div class="col-sm-6 xs-vertical-space ng-scope" ng-if="pricingParameterPair[1]">
                  <select autocomplete="off"
                    class="form-control input-lg booking-pricing-parameter pricing-parameter-11"
                    ng-if="!pricingParameterPair[0].pricing_parameters && pricingParameterPair[0].type == 'ranged'"
                    ng-model="ctrl.booking.bookingServices[0].pricingParameters[pricingParameterPair[0].id]"
                    ng-options="range.quantity as range.label for range in pricingParameterPair[0].ranges">
                    <option label="1 Kitchen" value="number:1" selected="selected">1 Kitchen</option>
                    <option label="2 Kitchens" value="number:2">2 Kitchens</option>
                    <option label="3 Kitchens" value="number:3">3 Kitchens</option>
                  </select>
                </div>
                <div class="col-sm-6 ng-scope" ng-if="pricingParameterPair[1]">
                  <select autocomplete="off"
                    class="form-control input-lg booking-pricing-parameter pricing-parameter-21"
                    ng-model="ctrl.booking.bookingServices[0].pricingParameters[pricingParameterPair[1].id]"
                    ng-if="pricingParameterPair[1].type == 'ranged'"
                    ng-options="range.quantity as range.label for range in pricingParameterPair[1].ranges">
                    <option label="Slightly Dirty" value="number:0" selected="selected">Slightly Dirty</option>
                    <option label="Pretty Dirty" value="number:2">Pretty Dirty</option>
                    <option label="Very Dirty" value="number:3">Very Dirty</option>
                  </select>
                </div>
              </div>
            </div>
          </tui-booking-service-dropdown>
        </fieldset>
        <fieldset
          ng-if="!ctrl.bookingForm.settings.form.service_block_type || ctrl.bookingForm.settings.form.service_block_type == 'dropdown'"
          class="ng-scope">

          <div class="row">
            <tui-booking-service-extra booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra" style="">
              <div id="extra-92" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-92">
                <div class="extra-icon inside-the-oven"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <img
                    ng-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RDNGOEZDRTdBMTFFNDk5NDBCRTNBMUUxRDg4NDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RDNGOTBDRTdBMTFFNDk5NDBCRTNBMUUxRDg4NDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RDREM0Y4RENFN0ExMUU0OTk0MEJFM0ExRTFEODg0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RDREM0Y4RUNFN0ExMUU0OTk0MEJFM0ExRTFEODg0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjp/ERcAAAFvSURBVHja7JeBbYMwEEVNxAAeoWwAEzSMkAk6QpIN0gnSEcgEFRPEnaBMAIzgDci5+q5ONIgYQXAln3RyfDnZz3fnk4m6rhO+SNw0jaTxk3S7EoMi3SVJomMGokmrJ4Ok2Nsw5DEmLWkGoMlCp3PyR1a+bVY2sLcmTPh9Ir1ifESs/5ltciK9mpHZzrAdGLxGIH4kquvaVLCiP3JyTEFqJRtJXd8/R3T7a0gAM46kBaSxb2kebYRHEvfmJgrvpK+kXw8UNPev6HQKp/1dg2wVbB+IZGmjMgYjHGpl0J82u2c7ji1ka2aNa83rTpqasZGRKza9P2myt0k8s8/w28T7jBfi9dXmIlFcLiEfS6OaAvOCLirnPDnBmlubDfWZoTTt5wZh0d671ky6cF/xv4ADTIAJMAEmwPgGoxfcU7vClAvClK7vmQLj28wgF3rLFFNeegWDWuxB7m0Bh4+40PT+PYzygENZmN3KQAoM4ibAAI0igQ3XUaV0AAAAAElFTkSuQmCC"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RDNGOEZDRTdBMTFFNDk5NDBCRTNBMUUxRDg4NDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RDNGOTBDRTdBMTFFNDk5NDBCRTNBMUUxRDg4NDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RDREM0Y4RENFN0ExMUU0OTk0MEJFM0ExRTFEODg0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RDREM0Y4RUNFN0ExMUU0OTk0MEJFM0ExRTFEODg0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjp/ERcAAAFvSURBVHja7JeBbYMwEEVNxAAeoWwAEzSMkAk6QpIN0gnSEcgEFRPEnaBMAIzgDci5+q5ONIgYQXAln3RyfDnZz3fnk4m6rhO+SNw0jaTxk3S7EoMi3SVJomMGokmrJ4Ok2Nsw5DEmLWkGoMlCp3PyR1a+bVY2sLcmTPh9Ir1ifESs/5ltciK9mpHZzrAdGLxGIH4kquvaVLCiP3JyTEFqJRtJXd8/R3T7a0gAM46kBaSxb2kebYRHEvfmJgrvpK+kXw8UNPev6HQKp/1dg2wVbB+IZGmjMgYjHGpl0J82u2c7ji1ka2aNa83rTpqasZGRKza9P2myt0k8s8/w28T7jBfi9dXmIlFcLiEfS6OaAvOCLirnPDnBmlubDfWZoTTt5wZh0d671ky6cF/xv4ADTIAJMAEmwPgGoxfcU7vClAvClK7vmQLj28wgF3rLFFNeegWDWuxB7m0Bh4+40PT+PYzygENZmN3KQAoM4ibAAI0igQ3XUaV0AAAAAElFTkSuQmCC">
                </div>

                <div class="extra-text ng-binding">
                  Inside Oven
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-93" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-93">
                <div class="extra-icon walls"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <img
                    ng-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzQzOTNCOUJDRTdBMTFFNDhGNERDQzBENDQzMzIwNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzQzOTNCOUNDRTdBMTFFNDhGNERDQzBENDQzMzIwNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNDM5M0I5OUNFN0ExMUU0OEY0RENDMEQ0NDMzMjA1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNDM5M0I5QUNFN0ExMUU0OEY0RENDMEQ0NDMzMjA1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuJXU30AAABzSURBVHja7NYxDoAgEERRMN7/iHsVbCzUaEE2EEzeNCQUyy+Yza8R0co99Tyf99mk5m7lJwEKdPXslzZ+tbQMan83aEs+OGWN+aNAgdqjk/Zi79y3PUrzlAkozaN5NA8oUPbEnvxRoEDZE3sCCnTpHAIMACiiFQsQTynCAAAAAElFTkSuQmCC"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAYAAADFw8lbAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MzQzOTNCOUJDRTdBMTFFNDhGNERDQzBENDQzMzIwNUQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MzQzOTNCOUNDRTdBMTFFNDhGNERDQzBENDQzMzIwNUQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDozNDM5M0I5OUNFN0ExMUU0OEY0RENDMEQ0NDMzMjA1RCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNDM5M0I5QUNFN0ExMUU0OEY0RENDMEQ0NDMzMjA1RCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PuJXU30AAABzSURBVHja7NYxDoAgEERRMN7/iHsVbCzUaEE2EEzeNCQUyy+Yza8R0co99Tyf99mk5m7lJwEKdPXslzZ+tbQMan83aEs+OGWN+aNAgdqjk/Zi79y3PUrzlAkozaN5NA8oUPbEnvxRoEDZE3sCCnTpHAIMACiiFQsQTynCAAAAAElFTkSuQmCC">
                </div>

                <div class="extra-text ng-binding">
                  Walls
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-94" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-94">
                <div class="extra-icon inside-windows"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <img
                    ng-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAArCAYAAACARVOCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDNCOEJCNEJDRTdBMTFFNDhDMjI4RDExNzFEMzcwRkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDNCOEJCNENDRTdBMTFFNDhDMjI4RDExNzFEMzcwRkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0M0I4QkI0OUNFN0ExMUU0OEMyMjhEMTE3MUQzNzBGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0M0I4QkI0QUNFN0ExMUU0OEMyMjhEMTE3MUQzNzBGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsCHKcEAAAHzSURBVHja7JRRRENhFMfv1sSIMSIiStHLYkpP0VOplxKlRA+J0ZTSQ0+JHmKkyFKKNFIkeogUiXpKWaKRRhYRI9K0l6as/+E/btdWt5qWfIef++3b/c7/nPOde2yRSEQzabWgnU8ncHE/AUIgCk7BKrgx49DyiXgR8IAeUA5i4JrI+g4UgxJQCKp57hisgwCIf1U8HwyAcfAKdsAG2GemmUwq0kaawD0YA8tmxeWQnwFMMvpEmuCMZU8XyAiTkGsYBkf6F6wGh4tgiyWrBEt0bgfdYBc8gWcQJBcgCSSLNdBAfw/MugycgUMwTZ13mcudbVKkA4T5fwGYAH3AoZk3yXQGLPDaxOoZ3C3okqeVkZ4zuhqdsHT2FUvnoJNtlq+RVyLmY8A++hAr5dWJ3zruScmr2AdSrRbJ/AWLQUapMfsV0Mnf0tVTbJqoLrt+MA+8urMae8FDUiWeBaO63pE+8EvmebrDUv4TnbA0WwWzjJoseYjJuMEe94bAAT9LsTljw9lZJhezbQW9LNN37BI000ec5Q9+1O1Ort2832xYgL2UGlppxY3dmk0Lp9u0ajk0JZ4TkyEjc9nCKfb4G5p8Jv9k2S0m8PJdr8n3VcMpcSWuxqsar2q8KnElrsTVeP2Z2XTrWKYx+C/vPJV5MhfibwIMABEbiTTP6ncbAAAAAElFTkSuQmCC"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAArCAYAAACARVOCAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NDNCOEJCNEJDRTdBMTFFNDhDMjI4RDExNzFEMzcwRkMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NDNCOEJCNENDRTdBMTFFNDhDMjI4RDExNzFEMzcwRkMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo0M0I4QkI0OUNFN0ExMUU0OEMyMjhEMTE3MUQzNzBGQyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo0M0I4QkI0QUNFN0ExMUU0OEMyMjhEMTE3MUQzNzBGQyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsCHKcEAAAHzSURBVHja7JRRRENhFMfv1sSIMSIiStHLYkpP0VOplxKlRA+J0ZTSQ0+JHmKkyFKKNFIkeogUiXpKWaKRRhYRI9K0l6as/+E/btdWt5qWfIef++3b/c7/nPOde2yRSEQzabWgnU8ncHE/AUIgCk7BKrgx49DyiXgR8IAeUA5i4JrI+g4UgxJQCKp57hisgwCIf1U8HwyAcfAKdsAG2GemmUwq0kaawD0YA8tmxeWQnwFMMvpEmuCMZU8XyAiTkGsYBkf6F6wGh4tgiyWrBEt0bgfdYBc8gWcQJBcgCSSLNdBAfw/MugycgUMwTZ13mcudbVKkA4T5fwGYAH3AoZk3yXQGLPDaxOoZ3C3okqeVkZ4zuhqdsHT2FUvnoJNtlq+RVyLmY8A++hAr5dWJ3zruScmr2AdSrRbJ/AWLQUapMfsV0Mnf0tVTbJqoLrt+MA+8urMae8FDUiWeBaO63pE+8EvmebrDUv4TnbA0WwWzjJoseYjJuMEe94bAAT9LsTljw9lZJhezbQW9LNN37BI000ec5Q9+1O1Ort2832xYgL2UGlppxY3dmk0Lp9u0ajk0JZ4TkyEjc9nCKfb4G5p8Jv9k2S0m8PJdr8n3VcMpcSWuxqsar2q8KnElrsTVeP2Z2XTrWKYx+C/vPJV5MhfibwIMABEbiTTP6ncbAAAAAElFTkSuQmCC">
                </div>

                <div class="extra-text ng-binding">
                  Inside Windows
                </div>
              </div>
            </tui-booking-service-extra><tui-booking-service-extra booking-service="ctrl.booking.bookingServices[0]"
              extra="extra" ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-95" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-95">
                <div class="extra-icon inside-the-fridge"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <img
                    ng-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OERCRTZFNTdDRTdBMTFFNEFDNENEMEU3NzA3OUUwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OERCRTZFNThDRTdBMTFFNEFDNENEMEU3NzA3OUUwNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4REJFNkU1NUNFN0ExMUU0QUM0Q0QwRTc3MDc5RTA2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4REJFNkU1NkNFN0ExMUU0QUM0Q0QwRTc3MDc5RTA2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pod+/bMAAAC/SURBVHja7NjhCcIwEAXgS3CArpANXCET2RXcIJnIFZwgGcFsEN9p/FMQBGkO8R08SP/04xqag7jeu9RaFxFZkROi672qIRlJIYTmSimKXZCjzKsrEv3oeCYsw1u189vOn/rtFngjWGvxYlhb3I2Y4KadE59Sh81z/5vOnQ6WV2HAfPUyDIsf6hxne+evxuOVOHEOFuLEiRMnTvwTvBnZj2uRbIRnxZM8r6ZmlnrJ62UcFhE5T9iCNpyo7l2AAQCRQSxIGZuVZQAAAABJRU5ErkJggg=="
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAAqCAYAAABLGYAnAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OERCRTZFNTdDRTdBMTFFNEFDNENEMEU3NzA3OUUwNjciIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OERCRTZFNThDRTdBMTFFNEFDNENEMEU3NzA3OUUwNjciPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo4REJFNkU1NUNFN0ExMUU0QUM0Q0QwRTc3MDc5RTA2NyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo4REJFNkU1NkNFN0ExMUU0QUM0Q0QwRTc3MDc5RTA2NyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pod+/bMAAAC/SURBVHja7NjhCcIwEAXgS3CArpANXCET2RXcIJnIFZwgGcFsEN9p/FMQBGkO8R08SP/04xqag7jeu9RaFxFZkROi672qIRlJIYTmSimKXZCjzKsrEv3oeCYsw1u189vOn/rtFngjWGvxYlhb3I2Y4KadE59Sh81z/5vOnQ6WV2HAfPUyDIsf6hxne+evxuOVOHEOFuLEiRMnTvwTvBnZj2uRbIRnxZM8r6ZmlnrJ62UcFhE5T9iCNpyo7l2AAQCRQSxIGZuVZQAAAABJRU5ErkJggg==">
                </div>

                <div class="extra-text ng-binding">
                  Inside the Fridge
                </div>
              </div>
            </tui-booking-service-extra><tui-booking-service-extra booking-service="ctrl.booking.bookingServices[0]"
              extra="extra" ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-96" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-96">
                <div class="extra-icon inside-cabinets"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <img
                    ng-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAqCAMAAADRRmi8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTFGNEJBN0ZEMzEyMTFFNEI1QkU5RkJBRjRBMkQ5MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTFGNEJBODBEMzEyMTFFNEI1QkU5RkJBRjRBMkQ5MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMUY0QkE3REQzMTIxMUU0QjVCRTlGQkFGNEEyRDkxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMUY0QkE3RUQzMTIxMUU0QjVCRTlGQkFGNEEyRDkxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmtudEUAAAAGUExURd7e3v///32j7RAAAAA0SURBVHjaYmBkwA0Y8UmNahzVOKpxVOOoxlGNI0ojIxjANSK4NNM4Gh1U0EgmIFsjQIABAJ4wAQHZlUPNAAAAAElFTkSuQmCC"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAAqCAMAAADRRmi8AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RTFGNEJBN0ZEMzEyMTFFNEI1QkU5RkJBRjRBMkQ5MUIiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RTFGNEJBODBEMzEyMTFFNEI1QkU5RkJBRjRBMkQ5MUIiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpFMUY0QkE3REQzMTIxMUU0QjVCRTlGQkFGNEEyRDkxQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpFMUY0QkE3RUQzMTIxMUU0QjVCRTlGQkFGNEEyRDkxQiIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PmtudEUAAAAGUExURd7e3v///32j7RAAAAA0SURBVHjaYmBkwA0Y8UmNahzVOKpxVOOoxlGNI0ojIxjANSK4NNM4Gh1U0EgmIFsjQIABAJ4wAQHZlUPNAAAAAElFTkSuQmCC">
                </div>

                <div class="extra-text ng-binding">
                  Inside Cabinets
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-88" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-88">
                <div class="extra-icon"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <!-- ngIf: ctrl.extra.image || ctrl.extra.icon --><img
                    ng-src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/88/7ac32951580c89d346f8e976d757aedff5e8d145.png"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/88/7ac32951580c89d346f8e976d757aedff5e8d145.png">
                </div>

                <div class="extra-text ng-binding">
                  Organization
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-89" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-89">
                <div class="extra-icon"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <!-- ngIf: ctrl.extra.image || ctrl.extra.icon --><img
                    ng-src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/89/8b94c4f6559cc22536e2bcac20e7f9bf537f3725.png"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/89/8b94c4f6559cc22536e2bcac20e7f9bf537f3725.png"><!-- end ngIf: ctrl.extra.image || ctrl.extra.icon -->
                </div>

                <div class="extra-text ng-binding">
                  Inside Dishwasher
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-91" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-91">
                <div class="extra-icon"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <!-- ngIf: ctrl.extra.image || ctrl.extra.icon --><img
                    ng-src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/91/4010ac71119815eb9ad3c8d6107ccf473b57fc97.png"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/91/4010ac71119815eb9ad3c8d6107ccf473b57fc97.png"><!-- end ngIf: ctrl.extra.image || ctrl.extra.icon -->
                </div>

                <div class="extra-text ng-binding">
                  Inside Garage
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-90" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-90">
                <div class="extra-icon"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <!-- ngIf: ctrl.extra.image || ctrl.extra.icon --><img
                    ng-src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/90/1e0f2757ea854d27fc5e7c3e89e9a26370082658.png"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/90/1e0f2757ea854d27fc5e7c3e89e9a26370082658.png"><!-- end ngIf: ctrl.extra.image || ctrl.extra.icon -->
                </div>

                <div class="extra-text ng-binding">
                  Microwave
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-8" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-8">
                <div class="extra-icon load-of-laundry"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <!-- ngIf: ctrl.extra.image || ctrl.extra.icon --><img
                    ng-src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAArCAYAAAAQVipNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzhERjdCN0JDRTc5MTFFNEI0RjRGM0FFQTU1M0NGQTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzhERjdCN0NDRTc5MTFFNEI0RjRGM0FFQTU1M0NGQTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOERGN0I3OUNFNzkxMUU0QjRGNEYzQUVBNTUzQ0ZBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOERGN0I3QUNFNzkxMUU0QjRGNEYzQUVBNTUzQ0ZBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlJAmTIAAAPJSURBVHjazJgPRF1RHMerl8fj8YjHI0Y0zViaZmw20cSI8WYZ0TSjWTaxbJaNmGYZy1g2S7OUYpZlI2KMWYo0nmVpjEuMZxERj7ja7/A5HNe99917S70f33e8++d3vud3fv/uKd/d3S0rJakoKzEpOUKV6seyLDXUCu4KTh8CjyXBkOCPtlBGsCC4JUgdMJkU86r5M5Vc7BCkBd2C14dgoS7BG8VDEzrCOBtCyQnBGZ/7i4IVl+tNgjrBb8E3rs1pHppQLMKqJiHlJYpMveOa2pqngveCZ4I+x47EKva492Hv3xO0CW4yPiiFsI8bo72fhJSpCx73Ch7B0S/4KPjO2O+ahyLKIAgjE4IcwdDt5vRBCFUJGkAd/2uM/FXt8d4Pxg3BOsiBEd9M7RA1QTvh2eAzoZ4ozxatQjhppJK0z7s5wn7Cj9AnSGhZ5aWcgY0I25s2rKzRAgbQ60rouOAzeUIlya2AE8aYJOcWOSziCzDTQqvgquCiF6GTWKWYJNnWS6wybtzbYWK1sCnBtoeOLe5PYYhfboS2A1iiCzNXMflXfKnM8J0WVq+y8iOc2PbRux0l7JVVPmBeRaBXMO2xCPVsFuKvsGRbgAUHTowpkpkiMyw4KhhjAnWvkdyixgTXJ3humPcWgrQ2FQEddhynVcXwDltVjcX+CZaZcJn/78hVOzzfRyEeL1bIgxDqwOQjRmZuxwmvOBxab1en4CfP6aw+gp6OvRBK4Ad5fEY3U5MBzJ/EIjqke9EzgN5IhLJszSB+obbhZcik+NeIpEH0ZaMSaiVcdXp/6LJFfjLlKKAT6GuNSqiJIrmJM2ZDWmfM8X8TfU1RCMUwr2UkvKqQhNx6agu9sbCEko4smohQVDd9snIyLKEt9jtjFMiwkvG4ZnsV7mI+ZPFFa/Y/YaTB5VqN4QahCS3SdNV5OGkx6XH8r6WyL0YlNM3YyfgkYHuipcXsdURuOPSGJjRL03WbyFC16RpjENkxHLsaPTm/L+RihGwKoy4DcfLIKY+QdmboC5xsxHk/iT57L8V1jqOSZsEoylcg1ecgVsA/VIU/Jpjn+VHeHzK+4wN/dbjJfaKjgwR5nUgp9m1WQyuiMvMMevalQVMmvszkSvma4AUNmZs0cn+N5wd53w50ghZC+ljpc0K6B1/Jk+hSjo/HedqOpVBHehGO387TAWYJbVVWzuFPFs3YTADH9yRkRyC2Ah7v48mIrX1Il4TmQzp81e3Ierk6OLcsK0MPnCYTFw6QTIJyomplvbaQcsqz7H3hgK2j5nvL/Pn/AgwAIYzwFPEiAsEAAAAASUVORK5CYII="
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAArCAYAAAAQVipNAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzhERjdCN0JDRTc5MTFFNEI0RjRGM0FFQTU1M0NGQTMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzhERjdCN0NDRTc5MTFFNEI0RjRGM0FFQTU1M0NGQTMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOERGN0I3OUNFNzkxMUU0QjRGNEYzQUVBNTUzQ0ZBMyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOERGN0I3QUNFNzkxMUU0QjRGNEYzQUVBNTUzQ0ZBMyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PlJAmTIAAAPJSURBVHjazJgPRF1RHMerl8fj8YjHI0Y0zViaZmw20cSI8WYZ0TSjWTaxbJaNmGYZy1g2S7OUYpZlI2KMWYo0nmVpjEuMZxERj7ja7/A5HNe99917S70f33e8++d3vud3fv/uKd/d3S0rJakoKzEpOUKV6seyLDXUCu4KTh8CjyXBkOCPtlBGsCC4JUgdMJkU86r5M5Vc7BCkBd2C14dgoS7BG8VDEzrCOBtCyQnBGZ/7i4IVl+tNgjrBb8E3rs1pHppQLMKqJiHlJYpMveOa2pqngveCZ4I+x47EKva492Hv3xO0CW4yPiiFsI8bo72fhJSpCx73Ch7B0S/4KPjO2O+ahyLKIAgjE4IcwdDt5vRBCFUJGkAd/2uM/FXt8d4Pxg3BOsiBEd9M7RA1QTvh2eAzoZ4ozxatQjhppJK0z7s5wn7Cj9AnSGhZ5aWcgY0I25s2rKzRAgbQ60rouOAzeUIlya2AE8aYJOcWOSziCzDTQqvgquCiF6GTWKWYJNnWS6wybtzbYWK1sCnBtoeOLe5PYYhfboS2A1iiCzNXMflXfKnM8J0WVq+y8iOc2PbRux0l7JVVPmBeRaBXMO2xCPVsFuKvsGRbgAUHTowpkpkiMyw4KhhjAnWvkdyixgTXJ3humPcWgrQ2FQEddhynVcXwDltVjcX+CZaZcJn/78hVOzzfRyEeL1bIgxDqwOQjRmZuxwmvOBxab1en4CfP6aw+gp6OvRBK4Ad5fEY3U5MBzJ/EIjqke9EzgN5IhLJszSB+obbhZcik+NeIpEH0ZaMSaiVcdXp/6LJFfjLlKKAT6GuNSqiJIrmJM2ZDWmfM8X8TfU1RCMUwr2UkvKqQhNx6agu9sbCEko4smohQVDd9snIyLKEt9jtjFMiwkvG4ZnsV7mI+ZPFFa/Y/YaTB5VqN4QahCS3SdNV5OGkx6XH8r6WyL0YlNM3YyfgkYHuipcXsdURuOPSGJjRL03WbyFC16RpjENkxHLsaPTm/L+RihGwKoy4DcfLIKY+QdmboC5xsxHk/iT57L8V1jqOSZsEoylcg1ecgVsA/VIU/Jpjn+VHeHzK+4wN/dbjJfaKjgwR5nUgp9m1WQyuiMvMMevalQVMmvszkSvma4AUNmZs0cn+N5wd53w50ghZC+ljpc0K6B1/Jk+hSjo/HedqOpVBHehGO387TAWYJbVVWzuFPFs3YTADH9yRkRyC2Ah7v48mIrX1Il4TmQzp81e3Ierk6OLcsK0MPnCYTFw6QTIJyomplvbaQcsqz7H3hgK2j5nvL/Pn/AgwAIYzwFPEiAsEAAAAASUVORK5CYII="><!-- end ngIf: ctrl.extra.image || ctrl.extra.icon -->
                </div>

                <div class="extra-text ng-binding">
                  Laundry
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-16" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-16">
                <div class="extra-icon"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <!-- ngIf: ctrl.extra.image || ctrl.extra.icon --><img
                    ng-src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/16/c9a367dc36e7bc7a23c030457722acdae8507b56.png"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/16/c9a367dc36e7bc7a23c030457722acdae8507b56.png"><!-- end ngIf: ctrl.extra.image || ctrl.extra.icon -->
                </div>

                <div class="extra-text ng-binding">
                  Blinds
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id --><tui-booking-service-extra
              booking-service="ctrl.booking.bookingServices[0]" extra="extra"
              ng-repeat="extra in ctrl.booking.bookingServices[0].service.extras track by extra.id"
              class="col-sm-3 col-xs-4 ng-scope ng-isolate-scope extra">
              <div id="extra-48" class="extra-option"
                ng-class="{'extra-quantity-based-option': ctrl.extra.quantity_based, selected: ctrl.bookingService.extras[ctrl.extra.id].checked}"
                ng-click="ctrl.onExtraClick()" click-outside="ctrl.onOutsideExtraClick()" outside-if-not="extra-48">
                <div class="extra-icon"
                  ng-class="{selected: ctrl.bookingService.extras[ctrl.extra.id].checked, 'fa fa-check default-extra-icon': !ctrl.extra.icon &amp;&amp; !ctrl.extra.image}"
                  ng-show="!ctrl.showQuantityInput" uib-tooltip="" tooltip-placement="auto bottom"
                  tooltip-enable="!ctrl.isMobileDevice">
                  <!-- ngIf: ctrl.extra.image || ctrl.extra.icon --><img
                    ng-src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/48/fc6f534756fdbd652be16b0d121537197046ee9b.png"
                    ng-if="ctrl.extra.image || ctrl.extra.icon" class="ng-scope"
                    src="https://launch27.s3.us-west-2.amazonaws.com/live_10891/extras/48/fc6f534756fdbd652be16b0d121537197046ee9b.png"><!-- end ngIf: ctrl.extra.image || ctrl.extra.icon -->
                </div>

                <div class="extra-text ng-binding">
                  Inside Washer/Dryer
                </div>
              </div>
            </tui-booking-service-extra><!-- end ngRepeat: extra in ctrl.booking.bookingServices[0].service.extras track by extra.id -->
          </div>
        </fieldset>

        <div class="form-group">
          <div class="date-time-container">
            <div class="col-sm-6" data-id="181" data-code="service_date" data-type="system">
              <input class="form-control input-lg service-date" placeholder="Click to Choose a Date" type="text"
                tui-date="{dateFormat: ctrl.dateFormat,
                        minDate: ctrl.minDate,
                        showOtherMonths: true,
                        selectOtherMonths: true}" tui-date-format="yy-mm-dd"
                tui-disable-unavailable-dates="{locationId: ctrl.booking.location_id, duration: ctrl.booking.summary.duration}"
                ng-change="ctrl.onSpotDateChanged()" ng-class="{error: ctrl.booking.errors.spot.date}"
                ng-model="ctrl.date" readonly="true" id="dp1716206383488">
            </div>
            <div class="col-sm-6">
              <div tabindex="0" ng-class="{'error-container': ctrl.booking.errors.spot.hours}">
                <div class="btn-group bootstrap-select form-control input-lg spot">
                  <select tui-selectpicker="{size: 10}" class="form-control input-lg spot" title="--:--"
                    ng-model="ctrl.booking.spot.id"
                    ng-options="spot.id as (spot | spotTime) group by (spot | spotDate) for spot in ctrl.spots track by spot.id">
                    <option class="bs-title-option" value="">--:--</option>
                  </select>
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
                  <h3 class="panel-title">HOW OFTEN</h3>
                </div>
                <div class="panel-body">
                  <p>It's all about matching you with the perfect clean for your home. Scheduling is flexible. Cancel or
                    reschedule anytime. Discounts are applied based on selection.</p>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option selected"
                        ng-click="ctrl.frequency = frequency">
                        One Time
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option"
                        ng-click="ctrl.frequency = frequency">
                        Weekly
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option"
                        ng-click="ctrl.frequency = frequency">
                        Biweekly
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option"
                        ng-click="ctrl.frequency = frequency">
                        Monthly
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
                  <h3 class="panel-title">WHO YOU ARE</h3>
                </div>
                <div class="panel-body">
                  <p>This information will be used to contact you about your service.</p>
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
                  <h3 class="panel-title">ADDRESS</h3>
                </div>
                <div class="panel-body">
                  <p>Where would you like us to clean?</p>
                  <form class="form-horizontal">
                    <div class="row">
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[address_wo_suite]" maxlength="255"
                            placeholder="Address*" ng-model="ctrl.booking.address_wo_suite"
                            ng-change="ctrl.changeLocation()" ng-model-options="{ updateOn: 'blur' }"
                            ng-class="{error: ctrl.booking.errors.address_wo_suite}" type="text">
                        </div>
                      </div>
                      <div class="col-sm-6">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[apt_suite]" maxlength="255"
                            placeholder="Apt/Suite #" ng-model="ctrl.booking.apt_suite"
                            ng-change="ctrl.changeLocation()" ng-model-options="{ updateOn: 'blur' }"
                            ng-class="{error: ctrl.booking.errors.apt_suite}" type="text">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-sm-4">
                        <div class="form-group">
                          <input class="form-control input-lg" name="booking[city]" maxlength="100" placeholder="City*"
                            ng-model="ctrl.booking.city" ng-change="ctrl.changeLocation()"
                            ng-model-options="{ updateOn: 'blur' }" ng-class="{error: ctrl.booking.errors.city}"
                            type="text">
                        </div>
                      </div>
                      <div class="col-sm-4">
                        <div class="form-group">
                          <select class="form-control input-lg" name="booking[state]" ng-model="ctrl.booking.state"
                            ng-change="ctrl.changeLocation()"
                            ng-options="state for state in ctrl.settings.country.states | _:'keys'"
                            ng-class="{error: ctrl.booking.errors.state}">
                            <option value="" selected="selected">State*</option>
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
                            placeholder="Zip Code*" ng-model="ctrl.booking.zip" ng-change="ctrl.changeLocation()"
                            ng-model-options="{ updateOn: 'blur' }" ng-class="{error: ctrl.booking.errors.zip}"
                            type="text">
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
                  <h3 class="panel-title">DISCOUNT CODE</h3>
                </div>
                <div class="panel-body">
                  <p>If you have a discount code, enter it here</p>
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
                  <h3 class="panel-title">Comments &amp; Special Instructions</h3>
                </div>
                <div class="panel-body">
                  <form class="form-horizontal">
                    <div class="form-group">
                      <div class="col-sm-12">
                        <textarea autocomplete="off" class="form-control input-lg non-resizable"
                          ng-model="ctrl.booking.customer_notes" maxlength="255"
                          placeholder="Special Instructions: Is there anything we should know? Example: the gate code is 1234 or look out for the dog."
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
                <tui-paragraph code="agreement_information" booking-form="ctrl.bookingForm" class="ng-isolate-scope">
                  <span class="editable can-be-hidden ng-binding"
                    ng-class="{hidden: !ctrl.bookingForm.paragraphs[ctrl.code].show}" data-type="paragraph"
                    data-code="agreement_information" data-id="131"
                    ng-bind-html="ctrl.bookingForm.paragraphs[ctrl.code].text | trustAsHtml">By clicking the Book Now
                    button you are agreeing to our <a href="https://spruseclean.com/terms-and-conditions/"
                      rel="noopener noreferrer" target="_blank"><u>Terms of Service</u></a> and <a
                      href="https://spruseclean.com/privacy-policy/" rel="noopener noreferrer"
                      target="_blank"><u>Privacy Policy</u></a><u>.</u></span>
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
                    <p style="margin: 0;">I agree to the Terms of Service and Privacy Policy.</p>
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

      <div class="col-sm-4 hidden-xs can-be-hidden right-sidebar ng-scope" ng-class="{hidden: ctrl.bookingForm.settings.form.hide_sidebar}" ng-if="ctrl.bookingForm">
    <div class="form-section shadow-border text-center editable can-be-hidden content-panel ng-binding" ng-class="{hidden: !ctrl.contentArea.show}" ng-bind-html="ctrl.trustedHtmlContent" data-code="content_area" data-id="120" data-type="content_area">
        <div class="form_section text-center" id="content_panel">
            <div class="row">
                <div class="col-12 col-md-6 col-lg-12">
                     <div class="icon-sidebar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"></path>
                    </svg>                    </div>
                    <h4>SAVES YOU TIME</h4>
                    <p>Our service helps you live smarter, giving you time to focus on what's most important.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-12">
                    <div class="icon-sidebar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"></path>
                    </svg>                    </div>
                    <h4>SAFETY FIRST</h4>
                    <p>We rigorously vet all of our Cleaners, who undergo identity checks as well as in-person interviews.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-12">
                    <div class="icon-sidebar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"></path>
                    </svg>                    </div>
                    <h4>ONLY THE BEST QUALITY</h4>
                    <p>Our skilled professionals go above and beyond on every job. Cleaners are rated and reviewed after each task.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-12">
                    <div class="icon-sidebar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"></path>
                    </svg>                    </div>
                    <h4>EASY TO GET HELP</h4>
                    <p>Select your ZIP code, number of bedrooms and bathrooms, date and relax while we take care of your home.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-12">
                    <div class="icon-sidebar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"></path>
                    </svg>                    </div>
                    <h4>SEAMLESS COMMUNICATION</h4>
                    <p>Give us a call or send us an email. We're happy to talk anytime.</p>
                </div>
                <div class="col-12 col-md-6 col-lg-12">
                    <div class="icon-sidebar">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"></path>
                    </svg>                    </div>
                    <h4>CASH FREE PAYMENT</h4>
                    <p>Pay securely online.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="booking-summary-container">
    

    <div class="booking-summary">
      <div class="text-center">
        <h2 style="font-size: 1.25rem;">BOOKING SUMMARY</h2>
      </div>
  <div class="room-info">
    <span class="bedroom">1 Bedroom</span>
    <span class="bathroom"> 1 Bathroom</span>
    <span class="kitchen"> 1 Kitchen</span>
  </div>
  <div class="service-info">
    <span class="service-date">Choose service date...</span>
    <span class="service-type">One Time</span>
  </div>
  <div class="prices">
    <span class="sub-total">SUB-TOTAL: $95.00</span>
    <span class="sales-tax">SALES TAX: $0.00</span>
    <!-- <span class="total">TOTAL: $115.00</span> -->
  </div>
  <!-- <div class="taxes">
    <span class="tax-amount">$15.39</span>
    <span class="tax-label">(Sales Tax)</span>
  </div> -->
  <div class="final-total">
    <span class="final-total-label">FINAL TOTAL:</span>
    <span class="final-total-amount">$130.39</span>
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
                <label class="fz-16 title fw-700 prafont" style="padding-right: 10px;">Enter your email</label>
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
                      Mon - Fri 12:00 - 18:00
                    </span>
                  </li>
                  <li style="display: flex; align-items: center; gap: 9px">
                    <svg width="14" height="17" viewBox="0 0 14 17" fill="none" xmlns="http://www.w3.org/2000/svg">
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
  .extra-option .extra-icon{
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
  .extra-option .extra-icon img{
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
  margin-right: 10px; /* Add some space between the elements */
}

.date-time-container .col-sm-6:last-child {
  margin-right: 0; /* Remove margin from the last item */
}
.frequency-option{
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
  flex-direction: column;  margin-right: 10px;
}

.final-total {
  font-size: 1.5em;
  font-weight: bold;
}

.final-total-amount {
  color: #f00;
}

</style>
