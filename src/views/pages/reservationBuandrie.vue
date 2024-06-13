<template>
  <div class="container-fluid" style="background-color: #30c7b5; height: 41px">
    <div class="text-center">
      <h3 style="color: white">50% OFF</h3>
    </div>
  </div>
  <navbar is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow" btn-background="bg-gradient-success"
    :dark-mode="true" style="position: absolute" />
  <div class="page-header position-relative" :style="{
    backgroundImage: 'url(' + require('../../assets/img/700.png') + ')',
    backgroundSize: 'cover',
    padding: '100px',
  }">

    <div class="container pb-10 pb-lg-9 pt-7 postion-relative z-index-2">
      <div class="row">
        <div class="mx-auto text-center col-md-6 mt-4">
          <h3 class="text-center" style="color: #30c7b5;">Reservation </h3>
          <p class="text-center" style="color: #30c7b5;">
            ça sent le linge frais et prêt à porter !
          </p>
        </div>
      </div>

    </div>
  </div>
  <div class="container-fluid p-5 d-flex justify-content-center align-items-center" style="background-color: #30c7b5;border-radius: 4rem;
">
    
    <div class="row justify-content-center">
      <div class="col-sm-6  form-section shadow-border booking-panel cardi">
        <p class="text-center">Quels types de produits aimeriez-vous faire nettoyer ?</p>
        <fieldset>

          <div class="row">
            <tui-booking-service-extra v-for="(extraService, index) in extraServices" :key="index"
              class="col-sm-3 col-xs-4" @click="selectExtraService(extraService)">
              <div :id="'extra-' + extraService.id"
                :class="{ 'extra-option': true, 'selected': extraService.selected }">
                <div :class="'extra-icon ' + extraService.iconClass"
                  :style="{ backgroundColor: extraService.selected ? '#30c7b5' : 'transparent' }">
                  <img
                    src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAApCAYAAAC/QpA/AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYxIDY0LjE0MDk0OSwgMjAxMC8xMi8wNy0xMDo1NzowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNS4xIFdpbmRvd3MiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6N0Q0RDNGOEZDRTdBMTFFNDk5NDBCRTNBMUUxRDg4NDQiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6N0Q0RDNGOTBDRTdBMTFFNDk5NDBCRTNBMUUxRDg4NDQiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3RDREM0Y4RENFN0ExMUU0OTk0MEJFM0ExRTFEODg0NCIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3RDREM0Y4RUNFN0ExMUU0OTk0MEJFM0ExRTFEODg0NCIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pjp/ERcAAAFvSURBVHja7JeBbYMwEEVNxAAeoWwAEzSMkAk6QpIN0gnSEcgEFRPEnaBMAIzgDci5+q5ONIgYQXAln3RyfDnZz3fnk4m6rhO+SNw0jaTxk3S7EoMi3SVJomMGokmrJ4Ok2Nsw5DEmLWkGoMlCp3PyR1a+bVY2sLcmTPh9Ir1ifESs/5ltciK9mpHZzrAdGLxGIH4kquvaVLCiP3JyTEFqJRtJXd8/R3T7a0gAM46kBaSxb2kebYRHEvfmJgrvpK+kXw8UNPev6HQKp/1dg2wVbB+IZGmjMgYjHGpl0J82u2c7ji1ka2aNa83rTpqasZGRKza9P2myt0k8s8/w28T7jBfi9dXmIlFcLiEfS6OaAvOCLirnPDnBmlubDfWZoTTt5wZh0d671ky6cF/xv4ADTIAJMAEmwPgGoxfcU7vClAvClK7vmQLj28wgF3rLFFNeegWDWuxB7m0Bh4+40PT+PYzygENZmN3KQAoM4ibAAI0igQ3XUaV0AAAAAElFTkSuQmCC">
                </div>
                <div class="extra-text">{{ extraService.name }}</div>
              </div>
            </tui-booking-service-extra>



          </div>
        </fieldset>

        <!-- <div class="form-check">
  <input class="form-check-input" type="checkbox" v-model="selectedOptions.Regular" :value="{ label: 'Linge Regular', price: 40 }" id="Regular">
  <label class="form-check-label" for="Regular">
    Linge régulier (pantalons, chandails, robes, vestes, chaussettes, etc,...)
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" v-model="selectedOptions.Oreillers" :value="{ label: 'Oreillers', price: 50 }" id="Oreillers">
  <label class="form-check-label" for="move-out-move-in">
    Oreillers
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" v-model="selectedOptions.Couette" :value="{ label: 'Couette', price: 50 }" id="Couette">
  <label class="form-check-label" for="move-out-move-in">
    Couette
  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="checkbox" v-model="selectedOptions.Tapis" :value="{ label: 'Tapis', price: 50 }" id="Tapis">
  <label class="form-check-label" for="move-out-move-in">
    Tapis
  </label>
</div> -->





        <p class="text-center">Quand souhaitez-vous que la collecte soit effectuée ?</p>
        <calendar id="calendar-table" />



        <p class="text-center">Quand souhaitez-vous être livré ?</p>
        <calendar id="calendar-tablee" />

        <div class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="panel panel-default">
                <div class="panel-heading">
                  <h3 class="panel-title"></h3>
                </div>
                <div class="panel-body">
                  <p>Options à inclure :</p>
                  <div class="form-group">
                    <div class="row">
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option"
                        :class="{ selected: selectedFrequency === 'Hebdomadaire' }"
                        @click="selectFrequency('Hebdomadaire')">
                        Hebdomadaire
                      </div>
                      <div class="col-lg-3 col-md-3 col-sm-3 col-xs-12 frequency-option"
                        :class="{ selected: selectedFrequency === ' Bimensuel' }"
                        @click="selectFrequency(' Bimensuel')">
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

        <p class="text-center">Combien de sacs avez-vous ?</p>

        <div class="input-group">
          <span class="input-group-btn">
            <button type="button" class="btn btn-default btn-number" data-type="minus" data-field="quant[1]"
              @:click="handleButtonClick">
              <span class="glyphicon glyphicon-minus">-</span>
            </button>
          </span>
          <input style="height: 43px;text-align: center;" type="text" name="quant[1]" class="form-control input-number"
            value="0" min="0" max="10">
          <span class="input-group-btn">
            <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]"
              @:click="handleButtonClick">
              <span class="glyphicon glyphicon-plus">+</span>
            </button>
          </span>
        </div>
        <ul class="example-2" >
  <li class="icon-content">
    <a
      href="#"
      aria-label="Spotify"
      data-social="spotify"
    >
      <div class="filled"></div>
      <svg
   xmlns:dc="http://purl.org/dc/elements/1.1/"
   xmlns:cc="http://creativecommons.org/ns#"
   xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"
   xmlns:svg="http://www.w3.org/2000/svg"
   xmlns="http://www.w3.org/2000/svg"
  
   viewBox="0 0 853.33331 853.33331"
   height="5000"
   width="5000"
   xml:space="preserve"
   id="svg2"
   version="1.1"><metadata
     id="metadata8"><rdf:RDF><cc:Work
         rdf:about=""><dc:format>image/svg+xml</dc:format><dc:type
           rdf:resource="http://purl.org/dc/dcmitype/StillImage" /></cc:Work></rdf:RDF></metadata><defs
     id="defs6" /><g
     transform="matrix(1.3333333,0,0,-1.3333333,0,853.33333)"
     id="g10"><g
       transform="scale(0.1)"
       id="g12"><path
         id="path14"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 835.344,4195.11 c -5.41,0 -10.903,1.1 -16.156,3.4 -20.27,8.94 -29.493,32.64 -20.567,52.93 10.82,24.54 21.977,48.87 33.535,72.99 9.574,20.02 33.535,28.49 53.559,18.92 20,-9.55 28.457,-33.56 18.887,-53.52 -11.172,-23.42 -22.036,-47 -32.485,-70.75 -6.637,-15.03 -21.363,-23.97 -36.773,-23.97 z m -78.008,-199.34 c -4.34,0 -8.731,0.7 -13.066,2.2 -20.977,7.22 -32.114,30.05 -24.922,51.01 11.797,34.27 24.414,68.61 37.539,102.06 8.062,20.71 31.406,30.84 52.008,22.74 20.648,-8.05 30.839,-31.36 22.738,-52.01 -12.695,-32.41 -24.922,-65.71 -36.328,-98.9 -5.727,-16.65 -21.313,-27.1 -37.969,-27.1 z m -85.219,-309.45 c -2.73,0 -5.484,0.28 -8.238,0.86 -21.738,4.55 -35.625,25.82 -31.098,47.52 14.746,70.56 32.715,141.47 53.364,210.76 6.343,21.27 28.71,33.25 49.941,26.97 21.25,-6.33 33.316,-28.7 26.988,-49.92 -20.015,-67.15 -37.398,-135.86 -51.719,-204.26 -3.945,-18.91 -20.64,-31.93 -39.238,-31.93 z m -54.804,-531.54 c -22.145,0 -40.133,17.98 -40.133,40.15 0,145.11 11.968,290.74 35.562,432.86 3.637,21.91 24.067,36.59 46.176,33.04 21.852,-3.6 36.656,-24.3 33.023,-46.15 -22.871,-137.81 -34.492,-279.04 -34.492,-419.75 0,-22.17 -17.969,-40.15 -40.136,-40.15" /><path
         id="path16"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="M 3199.99,576.57 C 1753.78,576.57 577.18,1753.9 577.18,3203.9 h 80.269 c 0,-1420 1140.591,-2547.029 2542.541,-2547.029 699.26,0 1351.02,275.781 1835.2,780.599 l 57.96,-54.44 C 4593.66,862.281 3921.34,576.57 3199.99,576.57" /><path
         id="path18"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="M 4872.59,1497.35 5251.67,1626 5173.6,1233.37 Z" /><path
         id="path20"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 5747.72,2728.5 c -2.18,0 -4.37,0.16 -6.62,0.52 -21.85,3.64 -36.66,24.31 -33.02,46.19 22.85,137.68 34.45,278.9 34.45,419.72 0,22.16 17.99,40.15 40.16,40.15 22.14,0 40.13,-17.99 40.13,-40.15 0,-145.21 -11.95,-290.85 -35.54,-432.87 -3.27,-19.66 -20.28,-33.56 -39.56,-33.56 z m -72.28,-312.75 c -3.81,0 -7.66,0.53 -11.5,1.68 -21.25,6.32 -33.32,28.69 -27,49.94 20.02,67.14 37.41,135.83 51.72,204.26 4.53,21.69 26.04,35.54 47.5,31.05 21.72,-4.53 35.63,-25.81 31.08,-47.51 -14.75,-70.57 -32.7,-141.46 -53.36,-210.75 -5.2,-17.43 -21.17,-28.67 -38.44,-28.67 z m -69.71,-202.48 c -4.86,0 -9.8,0.9 -14.61,2.77 -20.64,8.08 -30.84,31.35 -22.79,52 12.91,33 25.14,66.27 36.37,98.94 7.2,20.96 30.08,32.12 51.03,24.91 20.96,-7.21 32.09,-30.05 24.9,-51.02 -11.6,-33.69 -24.21,-68.03 -37.5,-102.06 -6.19,-15.84 -21.34,-25.54 -37.4,-25.54 z m -68.98,-159.76 c -5.74,0 -11.54,1.23 -17.09,3.81 -20.04,9.47 -28.63,33.4 -19.18,53.45 9.35,19.88 18.51,39.88 27.4,60.04 8.93,20.27 32.62,29.47 52.91,20.54 20.29,-8.97 29.49,-32.67 20.53,-52.95 -9.14,-20.75 -18.56,-41.4 -28.22,-61.87 -6.86,-14.51 -21.27,-23.02 -36.35,-23.02" /><path
         id="path22"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 5822.82,3203.9 h -80.29 c 0,1390 -1140.59,2538.03 -2542.54,2538.03 -698.32,0 -1349.49,-279.63 -1833.5,-783.31 l -57.93,54.53 c 499.32,519.58 1171.04,809.64 1891.43,809.64 1446.23,0 2622.83,-1178.89 2622.83,-2618.89" /><path
         id="path24"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 1528.99,4894.09 -379.18,-128.27 78.46,392.57 z" /><path
         id="path26"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 2716.1,4273.9 v 320 h 925.49 l 8.95,-320 h 205.17 l -120.45,460 H 2611.2 l -109.02,-460 h 213.92" /><path
         id="path28"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 2793.84,2914.89 c 11.76,8.89 17.67,20.41 17.67,36.82 0,17.15 -6.09,36.81 -18.22,43.93 -12.13,7.14 -31.05,18.26 -56.74,18.26 h -40.45 v -110 h 46.35 c 22.48,0 39.59,2.07 51.39,10.99" /><path
         id="path30"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 2807.22,2835.84 c -13.56,7.85 -34.09,18.06 -61.55,18.06 h -49.57 v -100 h 46.88 c 8.57,0 17.85,-10.8 27.83,-9.55 9.98,1.25 19.18,-1.86 27.58,2.07 8.36,3.9 15.33,6.76 20.88,14.26 5.51,7.51 8.3,19.19 8.3,31.71 0,19.97 -6.82,35.58 -20.35,43.45" /><path
         id="path32"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 3735.4,3426.12 c -10.18,-24.45 -24.36,-45.5 -42.56,-63.16 -18.2,-17.67 -39.78,-31.39 -64.78,-41.22 -24.96,-9.83 -52.27,-14.72 -81.9,-14.72 -29.26,0 -56.29,4.89 -81.09,14.72 -24.81,9.83 -46.21,23.55 -64.22,41.22 -18.03,17.66 -32.13,38.71 -42.29,63.16 -10.17,24.43 -15.27,51.47 -15.27,81.09 0,30.31 5.1,57.7 15.27,82.16 10.16,24.44 24.26,45.23 42.29,62.37 18.01,17.15 39.41,30.31 64.22,39.62 24.8,9.26 51.83,13.9 81.09,13.9 29.63,0 56.94,-4.64 81.9,-13.9 25,-9.31 46.58,-22.47 64.78,-39.62 18.2,-17.14 32.38,-37.93 42.56,-62.37 10.16,-24.46 15.23,-51.85 15.23,-82.16 0,-29.62 -5.07,-56.66 -15.23,-81.09 z m 0.7,-731.96 c -30,-9.31 -46.11,-16.52 -69.16,-21.69 -23,-5.18 -52.34,-7.76 -82.32,-7.76 -30.72,0 -60.12,4.88 -85.43,14.7 -25.33,9.84 -47.84,23.56 -66.05,41.22 -18.18,17.68 -32.72,38.71 -42.9,63.18 -10.15,24.4 -15.45,51.45 -15.45,81.06 0,30.33 5.16,57.72 15.69,82.18 10.55,24.44 24.93,45.22 43.33,62.36 18.34,17.14 40.03,30.33 65.01,39.62 24.98,9.25 52.05,13.91 81.33,13.91 30.31,0 58.1,-4.39 83.24,-13.13 25.17,-8.72 45.41,-20.24 60.76,-34.49 l -46.56,-50.34 c -9.65,10.72 -23.11,19.81 -40.41,27.29 -17.33,7.52 -36.15,11.24 -56.49,11.24 -20,0 -38.1,-3.56 -54.33,-10.7 -16.23,-7.14 -30.06,-16.96 -41.47,-29.44 -11.44,-12.5 -20.27,-27.11 -26.52,-43.87 -6.23,-16.78 -9.36,-35 -9.36,-54.63 0,-20.32 3.13,-38.98 9.36,-55.92 6.25,-16.94 15.17,-31.68 26.78,-44.17 11.6,-12.49 25.68,-22.22 42.28,-29.16 16.6,-6.96 33.79,-10.44 54.86,-10.44 28.91,0 43.81,4.48 73.81,13.38 v 115.34 h -90 v 50 h 170 z m -479.8,9.74 -35.33,70 h -164.32 l -34.28,-70 h -75.47 l 164.87,370 h 58.34 l 163.26,-370 z m -294.92,885.47 c 10.52,24.44 24.98,45.23 43.36,62.37 18.38,17.15 40.05,30.31 65.02,39.62 24.98,9.26 52.11,13.9 81.36,13.9 12.13,0 24.81,-1.15 38.03,-3.47 13.16,-2.33 25.86,-5.88 38.01,-10.69 12.13,-4.84 23.55,-10.82 34.24,-17.96 10.72,-7.12 19.8,-15.71 27.3,-25.69 l -51.39,-40.66 c -10,13.53 -23.02,23.46 -39.06,29.68 -16.07,6.25 -31.79,9.36 -47.13,9.36 -19.63,0 -37.46,-3.55 -53.53,-10.68 -16.04,-7.14 -29.87,-16.97 -41.47,-29.47 -11.62,-12.49 -20.52,-27.1 -26.77,-43.85 -6.23,-16.78 -9.36,-35 -9.36,-54.62 0,-20.71 3.05,-39.6 9.1,-56.72 6.06,-17.14 14.71,-31.86 25.96,-44.17 11.23,-12.31 24.73,-21.85 40.43,-28.65 15.68,-6.79 33.34,-10.16 52.99,-10.16 20.33,0 38.36,3.99 54.06,12.05 15.68,8.02 28.36,18.62 38.01,31.83 l 54.04,-38 c -16.78,-21.07 -37.3,-37.37 -61.54,-48.99 -24.28,-11.58 -52.64,-17.38 -85.1,-17.38 -29.65,0 -56.86,4.89 -81.66,14.72 -24.81,9.83 -46.09,23.55 -63.95,41.22 -17.85,17.66 -31.75,38.71 -41.73,63.16 -10.02,24.43 -15.02,51.47 -15.02,81.09 0,30.31 5.25,57.7 15.8,82.16 z m -78.71,-856.95 c -8.21,-14.11 -19.01,-25.43 -32.37,-34 -13.38,-8.55 -28.73,0.07 -46.03,-3.69 -17.31,-3.76 -34.89,9.17 -52.72,9.17 H 2606.1 v 370 h 156.68 c 14.28,0 28.36,-12.01 42.29,-15.4 13.9,-3.4 26.33,-14.06 37.21,-21.73 10.89,-7.7 19.68,-20.14 26.5,-32.27 6.76,-12.16 10.16,-28.05 10.16,-45.19 0,-21.41 0.44,-39.71 -11.68,-53.61 -12.17,-13.9 -41.16,-24.57 -41.16,-30.62 v -1.11 c 0,-3.19 37.03,-12.49 52.41,-27.81 15.31,-15.37 19.74,-35.86 19.74,-61.57 0,-20.7 -7.36,-38.08 -15.58,-52.17 z M 2606.1,3713.9 h 240 v -50 h -180 v -110 h 180 v -60 h -180 v -110 h 210 v -50 h -270 z M 4481.4,2446.4 c -78.38,462.44 -391.94,1857.5 -391.94,1857.5 H 2247.37 l -389.1,-1855.45 c 0,0 -42.01,-364.55 394.71,-394.55 h 1825.29 c 0,0 481.52,-69.94 403.13,392.5" /><path
         id="path34"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 3641.44,3605.68 c -11.43,12.5 -25.14,22.33 -41.2,29.47 -16.07,7.13 -33.92,10.68 -53.53,10.68 -19.65,0 -37.38,-3.55 -53.26,-10.68 -15.88,-7.14 -29.53,-16.97 -40.96,-29.47 -11.41,-12.49 -20.25,-27.1 -26.48,-43.85 -6.25,-16.78 -9.36,-35 -9.36,-54.62 0,-20.34 3.11,-39 9.36,-55.94 6.23,-16.93 15.15,-31.67 26.75,-44.16 11.61,-12.5 25.36,-22.23 41.21,-29.17 15.9,-6.96 33.46,-10.43 52.74,-10.43 19.28,0 36.95,3.47 52.99,10.43 16.05,6.94 29.88,16.67 41.48,29.17 11.6,12.49 20.51,27.23 26.76,44.16 6.25,16.94 9.39,35.6 9.39,55.94 0,19.62 -3.14,37.84 -9.39,54.62 -6.25,16.75 -15.08,31.36 -26.5,43.85" /><path
         id="path36"
         style="fill:#1b5065;fill-opacity:1;fill-rule:nonzero;stroke:none"
         d="m 3079.64,2833.9 h 117.77 l -58.36,154.15 z" /></g></g></svg>
    </a>
    <div class="tooltip">Sac Hygeco = *lb</div>
  </li>
 
</ul>

        <div class="form-check form-switch p-5">
          <input class="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault">
          <label class="form-check-label" for="flexSwitchCheckDefault">Profitez de nos services à la fréquence qui vous
            convient et obtenez un
            10% de rabais sur toutes vos prestations !</label>

        </div>
        <div class="container-fluid">
          <argon-alert class="font-weight-light" color="success" dismissible>
            Aucun engagement requis, vous pouvez annuler vos prestations à tout
            moment à partir de votre compte <a href="#" class="alert-link " style="color: red;">Consulter!</a>
          </argon-alert>
        </div>

        <form class="row g-3 needs-validation mt-3" novalidate>
          <div class="col-md-4 ">
            <label for="validationCustom01" class="form-label">Nom</label>
            <input type="text" class="form-control" id="validationCustom01" value="Mark" required>

          </div>
          <div class="col-md-4">
            <label for="validationCustom02" class="form-label">Prenom</label>
            <input type="text" class="form-control" id="validationCustom02" value="Otto" required>

          </div>
          <div class="col-md-4">
            <label for="validationCustomUsername" class="form-label">Courriel</label>
            <div class="input-group has-validation">
              <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend"
                required>

            </div>
          </div>
          <div class="col-md-6">
            <label for="validationCustom03" class="form-label"> Rue</label>
            <input type="text" class="form-control" id="validationCustom03" required>

          </div>
          <div class="col-md-3">
            <label for="validationCustom04" class="form-label">Ville</label>
            <select class="form-select" id="validationCustom04" required>
              <option selected disabled value="">Choose...</option>
              <option>...</option>
            </select>

          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label"> Code Postal</label>
            <input type="text" class="form-control" id="validationCustom05" required>

          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label"> Appartement</label>
            <input type="text" class="form-control" id="validationCustom05" required>

          </div>
          <div class="col-md-3">
            <label for="validationCustom05" class="form-label"> Province</label>
            <input type="text" class="form-control" id="validationCustom05" required>

          </div>
          <div class="col-12">
            <div class="form-check">
              <label class="form-check-label" for="invalidCheck">
                Préférez-vous le libre-service ? Rendez-vous dans notre buanderie située à :
                4260 Notre-Dame Ouest, Montréal, H4C 1R6 QC
              </label>

            </div>
          </div>
          <div class="col-12">
            <button class="btn " type="submit" style="color: #30c7b5;">Reserver</button>
          </div>
        </form>

      </div>
      <div class="col-sm-2 cardi" style="margin-left: 20px;">
        <div class="booking-summary-container">
          <div class="booking-summary">
            <div class="text-center">
              <h2 style="font-size: 1.25rem;">RÉCAPITULATIF DE LA RÉSERVATION</h2>
            </div>
            <div class="room-info">
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
                <label class="fz-16 title fw-700 prafont" style="padding-right: 10px;">Veuillez insérer votre email ici</label>
                <input type="email" name="EMAIL" required="" style="
                        width: 100%;
                        max-width: 500px;
                        border: 1px solid rgba(0, 0, 0, 0.09);
                        color: var(--pra);
                        padding: 13px 16px;
                        margin-bottom: 10px;
                        border-bottom-left-radius: 0px;
                        border-top-left-radius: 0px;
                        border-bottom-left-radius: 25px;
                        border-top-left-radius: 25px;
                  " />
                <input class="cmn--btn" type="submit" value="Decouvrir Nos Offers" style="
                    padding: 13px 28px 15px;
                    color: white;
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px;
                    display: inline-block;
                    position: relative;
                    background: #30c7b5;
                    overflow: hidden;
                    border-radius: 100px;
                    transition: all 0.5s;
                    border: unset;
                    margin-top: 10px;
                    border-bottom-left-radius: 0px;
                    border-top-left-radius: 0px;
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
                    <a href="/pages/about">A propos</a>
                  </li>

                  <li>
                    <a href="/pages/contact">Contact Nous</a>
                  </li>


                  <li>
                    <a href="/pages/service-menage">Services</a>
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
                    <a href="/pages/reservation">Menage</a>
                  </li>

                  <li>
                    <a href="/pages/reservation-buandrie">buanderie</a>
                  </li>

                  <li>
                    <a href="/pages/menage-commercial">Menage commercial</a>
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
                Coordonnées
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

<script>
// import ArgonInput from "@/components/ArgonInput.vue";
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
import { useStore } from 'vuex';
import setNavPills from "@/assets/js/nav-pills.js";
import Calendar from "@/examples/Calendar.vue";
import ArgonAlert from "@/components/ArgonAlert.vue";



export default {

  components: {
    ArgonAlert,
    Navbar,
    Calendar
  },
  data() {
    return {
      extraServices: [
        { name: 'Oreillers', price: 20 },
        { name: 'Couette', price: 30 }, { name: 'Tapis', price: 20 },
        { name: 'Regular', price: 30 },
        // Add more extra services as needed
      ],
      store: useStore(),
      selectedOptions: {
        Oreillers: null,
        Couette: null,
        Tapis: null,
        Regular: null
      },
      selectedFrequency: 'Hebdomadaire',
      subTotal: 0,
      salesTax: 0,
      finalTotal: 0,
    };
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
    this.store.state.showSidenav = false;
    this.store.state.showNavbar = false;
    this.store.state.showFooter = false;
    setNavPills();
    this.updateTotal();


    function handleButtonClick(event) {
      const buttonType = event.target.dataset.type;
      const input = document.querySelector('.form-control.input-number'); // Update this line
      const currentValue = parseInt(input.value);
      const maxValue = parseInt(input.getAttribute('max'));
      const minValue = parseInt(input.getAttribute('min'));

      if (buttonType === 'plus') {
        if (!isNaN(maxValue) && currentValue >= maxValue) return;
        input.value = currentValue + 1;
      } else if (buttonType === 'minus') {
        if (!isNaN(minValue) && currentValue <= minValue) return;
        input.value = currentValue - 1;
      }

      // Émettre un événement input pour que Vue mette à jour le modèle
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }

    // Ajouter un écouteur d'événements à tous les boutons de type plus
    const btnPlus = document.querySelectorAll('.btn-number[data-type="plus"]');
    btnPlus.forEach(function (button) {
      button.addEventListener('click', handleButtonClick);
    });

    // Ajouter un écouteur d'événements à tous les boutons de type moins
    const btnMinus = document.querySelectorAll('.btn-number[data-type="minus"]');
    btnMinus.forEach(function (button) {
      button.addEventListener('click', handleButtonClick);
    });
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
<style scoped>
/* ul {
  list-style: none;
  align-items: center;
  display: flex;
  
} */

li::after {
  content: "";
  display: block;
  height: 0px;
  transition: height 0.3s ease-in-out;
  pointer-events: none;
}

li:hover::after {
  height: 10px;
}

.example-2 {
  display: flex;
  list-style: none;
  justify-content: center;
  align-items: center;
}
.example-2 .icon-content {
  margin: 0 10px;
  position: relative;
}
.example-2 .icon-content .tooltip {
  position: absolute;
  bottom: -40px;
  left: 70%;
  transform: translateX(-50%);
  color: #fff;
  padding: 6px 22px;
  border-radius: 5px;
  opacity: 0;
  pointer-events: none;
  visibility: hidden;
  font-size: 14px;
  transition: all 0.3s ease;
}
.example-2 .icon-content:hover .tooltip {
  opacity: 1;
  visibility: visible;
  bottom: -40px;
}
.example-2 .icon-content a {
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  color: #4d4d4d;
  background-color: #fff;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover {
  box-shadow: 3px 2px 45px 0px rgb(0 0 0 / 12%);
}
.example-2 .icon-content a svg {
  position: relative;
  z-index: 1;
  width: 60px;
  height: 60px;
}
.example-2 .icon-content a:hover {
  color: white;
}
.example-2 .icon-content a .filled {
  position: absolute;
  top: auto;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0;
  background-color: #000;
  transition: all 0.3s ease-in-out;
}
.example-2 .icon-content a:hover .filled {
  height: 100%;
}
.example-2 .icon-content a[data-social="spotify"] .filled,
.example-2 .icon-content a[data-social="spotify"] ~ .tooltip {
  background-color: #30c7b5;
  width: 320%;
}
.example-2 .icon-content a[data-social="pinterest"] .filled,
.example-2 .icon-content a[data-social="pinterest"] ~ .tooltip {
  background-color: #bd081c;
}
.example-2 .icon-content a[data-social="dribbble"] .filled,
.example-2 .icon-content a[data-social="dribbble"] ~ .tooltip {
  background-color: #ea4c89;
}
.example-2 .icon-content a[data-social="telegram"] .filled,
.example-2 .icon-content a[data-social="telegram"] ~ .tooltip {
  background-color: #0088cc;
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

.cardi {
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

.cardii {
  border: 1px solid #ccc;
  /* Define the border color */
  border-radius: 10px;
  /* Adjust border radius for rounded corners */
  padding: 20px;
  /* Add padding to create space between content and border */
  background-color: aliceblue;
  /* Define the background color */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  /* Add a shadow for depth */
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
  color: #30c7b5;
}
</style>
<!-- <style scoped>
.card {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
    overflow: hidden;
    width: 300px;
    text-align: center;
}

.card-img {
    width: 100%;
    height: auto;
}

.card-content {
    padding: 20px;
}

.card-content h2 {
    margin: 0 0 10px;
    font-size: 24px;
}

.card-content p {
    color: #777;
    font-size: 16px;
    margin: 0;
}
</style> -->