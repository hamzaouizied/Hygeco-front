<template>
    <div class="container-fluid" style="background-color: #30c7b5; height: 41px">
    <div class="text-center">
      <h3 style="color: white">50% OFF</h3>
    </div>
  </div>
     <navbar
    is-blur="blur border-radius-lg my-3 py-2 start-0 end-0 mx-4 shadow"
    btn-background="bg-gradient-success"
    :dark-mode="true"
    style="position: absolute"
  />
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
    <div class="text-center p-5">
        <h3>Ajouter une bannière et écrire ça sent le linge frais et prêt à porter !</h3>
    </div>
    <div class="row">
        <div class="col-sm-7">
            <p class="text-center">Quels types de produits aimeriez-vous faire nettoyer ?</p>
            <select 
              class="form-control input-lg mb-3  ">
              <option label="Les produits" value="1" selected="selected">Les produits</option>
              <option label="Linge régulier" value="2">Linge régulier</option>
              <option label="Matelas" value="3">Matelas</option>
              <option label="Oreillers" value="4">Oreillers</option>
              <option label="Couette" value="5">Couette</option>
              <option label="Tapis" value="6">Tapis</option>

            </select>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Regular" id="regular">
                <label class="form-check-label" for="regular">
                    Linge régulier (pantalons, chandails, robes, vestes, chaussettes, etc,...)
                </label>
            </div>
            <div class="form-check">
                <input class="form-check-input" type="checkbox" value="Matelas" id="Matelas">
                <label class="form-check-label" for="deep-clean">
                    Matelas
                </label>
            </div>
            
            <div class="form-check ">
                <input class="form-check-input" type="checkbox" value="Oreillers" id="Oreillers">
                <label class="form-check-label" for="move-out-move-in">
                    Oreillers
                </label>
            </div>
            <div class="form-check ">
                <input class="form-check-input" type="checkbox" value="Couette" id="Couette">
                <label class="form-check-label" for="move-out-move-in">
                    Couette
                </label>
            </div>
            <div class="form-check mb-3 ">
                <input class="form-check-input" type="checkbox" value="Tapis" id="Tapis">
                <label class="form-check-label" for="move-out-move-in">
                    Tapis
                </label>
            </div>
    <!-- <argon-input type="text" placeholder="Text" value="John Smith" /> -->
    <p class="text-center">Quand souhaitez-vous que la collecte soit effectuée ?</p>
    <argon-input type="date" placeholder="Date" value="2018-11-23" />
    <argon-input type="time" placeholder="Time" value="10:30:00" />

    <p class="text-center">Quand souhaitez-vous être livré ?</p>
    <argon-input type="date" placeholder="Date" value="2018-11-23" />
    <argon-input type="time" placeholder="Time" value="10:30:00" />
    
            <p class="text-center">Combien de sacs avez-vous ?</p>

            <div class="input-group">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number"  data-type="minus" data-field="quant[1]"  @:click="handleButtonClick">
                        <span class="glyphicon glyphicon-minus">-</span>
                    </button>
                </span>
                <input style="height: 43px;text-align: center;" type="text" name="quant[1]" class="form-control input-number" value="0" min="0" max="10">
                <span class="input-group-btn">
                    <button type="button" class="btn btn-default btn-number" data-type="plus" data-field="quant[1]" @:click="handleButtonClick">
                        <span class="glyphicon glyphicon-plus">+</span>
                    </button>
                </span>
            </div>
            <div class="card " style="width: 18rem;" >
                <img src="../../assets/img/sac.jpeg" class="card-img-top" alt="Image description">
                <div class="card-body">
                    <p class="card-text text-center" style="color: #30c7b5;">Sac Hygeco = *lb</p>
                </div>
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
      <input type="text" class="form-control" id="validationCustomUsername" aria-describedby="inputGroupPrepend" required>
      
    </div>
  </div>
  <div class="col-md-6">
    <label for="validationCustom03" class="form-label"> rue</label>
    <input type="text" class="form-control" id="validationCustom03" required>
    
  </div>
  <div class="col-md-3">
    <label for="validationCustom04" class="form-label">ville</label>
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
      <!-- <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required> -->
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
            
            <!-- <argon-input type="search" placeholder="Search" value="Creative Tim" />
    <argon-input type="email" placeholder="Email" value="someone@example.com" />
    <argon-input type="url" placeholder="URL" value="www.creative-tim.com" />
    <argon-input type="tel" placeholder="Phone" value="40-(770)-888-444" />
    <argon-input type="password" placeholder="Password" value="password" />
    <argon-input type="number" placeholder="Number" value="123456789" />
    <argon-input type="datetime" placeholder="Date time" value="2018-11-23T10:30:00" />
    <argon-input type="date" placeholder="Date" value="2018-11-23" />
    <argon-input type="month" placeholder="Month" value="2018-11" />
    <argon-input type="week" placeholder="Week" value="2018-W23" /> -->
    </div>
</div>
</div>
<footer class="footer__section position-relative">
    <div class="container">
      <div
        class="newsletter-section"
        style="padding-top: 130px; padding-bottom: 65px; text-align: center"
      >
        <div id="block-15" class="footer-top-widget widget_block">
          <h3
            class="title subcribe-title wow fadeInDown"
            data-wow-delay="0.4s"
            style="
              visibility: visible;
              animation-delay: 0.4s;
              animation-name: fadeInDown;
              font-size: 24px;
              line-height: 120%;
              font-weight: 700;
            "
          >
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
            <form
              id="mc4wp-form-1"
              class="mc4wp-form mc4wp-form-227"
              method="post"
              data-id="227"
              data-name="subscription"
            >
              <div class="mc4wp-form-fields">
                <label class="fz-16 title fw-700 prafont"
                 style="padding-right: 10px;" >Enter your email</label
                >
                <input
                  type="email"
                  name="EMAIL"
                  required=""
                  style="
                    width: 100%;
                    max-width: 500px;
                    border-radius: 10px;
                    border: 1px solid rgba(0, 0, 0, 0.09);
                    color: var(--pra);
                    padding: 13px 16px;
                    margin-bottom: 10px;
                  "
                />
                <input
                  class="cmn--btn"
                  type="submit"
                  value="Explore Our Offers"
                  style="
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
                  "
                />
              </div>
              <label style="display: none !important"
                >Leave this field empty if you're human:
                <input
                  type="text"
                  name="_mc4wp_honeypot"
                  value=""
                  tabindex="-1"
                  autocomplete="off" /></label
              ><input
                type="hidden"
                name="_mc4wp_timestamp"
                value="1715706989"
              /><input type="hidden" name="_mc4wp_form_id" value="227" /><input
                type="hidden"
                name="_mc4wp_form_element_id"
                value="mc4wp-form-1"
              />
              <div class="mc4wp-response"></div>
            </form>
            <!-- / Mailchimp for WordPress Plugin -->
            <p></p>
          </div>
        </div>
      </div>
      <div
        class="footer__top pb-120"
        style="border-top: 1px solid rgba(0, 0, 0, 0.09); padding-top: 60px"
      >
        <div class="row g-4" style="margin-bottom: 30px">
          <div
            class="col-xl-4 col-lg-3 col-md-5 col-sm-6 wow fadeInUp"
            data-wow-duration="2.1s"
            style="
              visibility: visible;
              animation-duration: 2.1s;
              animation-name: fadeInUp;
            "
          >
            <div
              class="footer__item"
              style="margin-bottom: 24px; display: block"
            >
              <a
                href="https://www.4damstheme.com/clenis/"
                class="footer-logo"
                style="margin-bottom: 24px; display: block"
              >
                <img src="../../assets/img/H-Logo.png" alt="Clenis" />
              </a>
              <div
                class="footer prag"
                style="
                  color: #748aa0;
                  font-size: 16px;
                  font-style: normal;
                  font-weight: 400;
                  line-height: 28px;
                  margin-bottom: 50px;
                  max-width: 325px;
                  margin-top: 40px;
                "
              >
                With a rich history spanning decades, our club has become a
                symbol of excellence in the golfing community. offers a
                challenging yet rewarding game play.
              </div>
              <ul
                class="footer-social d-flex align-items-center"
                style="gap: 24px"
              >
                <li style="list-style: none">
                  <a
                    href=""
                    style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    "
                  >
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.69771 13.2478C9.62571 13.2478 8.04171 13.2478 7.32171 13.2478C6.93771 13.2478 6.81771 13.1038 6.81771 12.7438C6.81771 11.7838 6.81771 10.7998 6.81771 9.83983C6.81771 9.45583 6.96171 9.33583 7.32171 9.33583H9.69771C9.69771 9.26383 9.69771 7.87183 9.69771 7.22383C9.69771 6.26383 9.86571 5.35183 10.3457 4.51183C10.8497 3.64783 11.5697 3.07183 12.4817 2.73583C13.0817 2.51983 13.6817 2.42383 14.3297 2.42383H16.6817C17.0177 2.42383 17.1617 2.56783 17.1617 2.90383V5.63983C17.1617 5.97583 17.0177 6.11983 16.6817 6.11983C16.0337 6.11983 15.3857 6.11983 14.7377 6.14383C14.0897 6.14383 13.7537 6.45583 13.7537 7.12783C13.7297 7.84783 13.7537 8.54383 13.7537 9.28783H16.5377C16.9217 9.28783 17.0657 9.43183 17.0657 9.81583V12.7198C17.0657 13.1038 16.9457 13.2238 16.5377 13.2238C15.6737 13.2238 13.8257 13.2238 13.7537 13.2238V21.0478C13.7537 21.4558 13.6337 21.5998 13.2017 21.5998C12.1937 21.5998 11.2097 21.5998 10.2017 21.5998C9.84171 21.5998 9.69771 21.4558 9.69771 21.0958C9.69771 18.5758 9.69771 13.3198 9.69771 13.2478Z"
                        fill="#30c7b5"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li style="list-style: none">
                  <a
                    href=""
                    style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    "
                  >
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.8571 0H6.85714C3.49714 0 0.857143 2.64 0.857143 6V18C0.857143 21.36 3.49714 24 6.85714 24H18.8571C22.2171 24 24.8571 21.36 24.8571 18V6C24.8571 2.64 22.2171 0 18.8571 0ZM22.4571 18C22.4571 20.04 20.8971 21.6 18.8571 21.6H6.85714C4.81714 21.6 3.25714 20.04 3.25714 18V6C3.25714 3.96 4.81714 2.4 6.85714 2.4H18.8571C20.8971 2.4 22.4571 3.96 22.4571 6V18Z"
                        fill="#30c7b5"
                      ></path>
                      <path
                        d="M12.8571 6C9.49714 6 6.85714 8.64 6.85714 12C6.85714 15.36 9.49714 18 12.8571 18C16.2171 18 18.8571 15.36 18.8571 12C18.8571 8.64 16.2171 6 12.8571 6ZM12.8571 15.6C10.8171 15.6 9.25714 14.04 9.25714 12C9.25714 9.96 10.8171 8.4 12.8571 8.4C14.8971 8.4 16.4571 9.96 16.4571 12C16.4571 14.04 14.8971 15.6 12.8571 15.6Z"
                        fill="#30c7b5"
                      ></path>
                      <path
                        d="M18.8566 7.1998C19.5194 7.1998 20.0566 6.66255 20.0566 5.9998C20.0566 5.33706 19.5194 4.7998 18.8566 4.7998C18.1939 4.7998 17.6566 5.33706 17.6566 5.9998C17.6566 6.66255 18.1939 7.1998 18.8566 7.1998Z"
                        fill="#30c7b5"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li style="list-style: none">
                  <a
                    href=""
                    style="
                      text-decoration: none;
                      text-transform: capitalize;
                      margin: 0;
                      color: #30c7b5;
                      transition: all 0.3s;
                    "
                  >
                    <svg
                      width="23"
                      height="20"
                      viewBox="0 0 23 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.9178 0.25H21.2258L13.9988 8.51L22.5008 19.75H15.8438L10.6298 12.933L4.66383 19.75H1.35383L9.08383 10.915L0.927826 0.25H7.75383L12.4668 6.481L17.9178 0.25ZM16.7568 17.77H18.5898L6.75783 2.126H4.79083L16.7568 17.77Z"
                        fill="#30c7b5"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-duration="2.3s"
            style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            "
          >
            <div id="block-16" class="widget-footer widget_block footer__item">
              <h4
                class="footer__title"
                style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                "
              >
                Quick links
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/"
                      >About Us</a
                    >
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/contact-us/"
                      >Contact Us</a
                    >
                  </li>


                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/"
                      >Services</a
                    >
                  </li>

                  
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-duration="2.3s"
            style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            "
          >
            <div id="block-17" class="widget-footer widget_block footer__item">
              <h4
                class="footer__title"
                style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                "
              >
                Services
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-project/"
                      >Menage</a
                    >
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/"
                      >Buandrie</a
                    >
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/our-services/"
                      >Menage commercial</a
                    >
                  </li>

                  
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-duration="2.3s"
            style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            "
          >
            <div id="block-18" class="widget-footer widget_block footer__item">
              <h4
                class="footer__title"
                style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                "
              >
                Policy
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/"
                      >Ban plans</a
                    >
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/faqs-page/"
                      >Reservtion</a
                    >
                  </li>

                  

                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/"
                      >Privacy Policy</a
                    >
                  </li>

                  <li>
                    <a href="https://www.4damstheme.com/clenis/about-clenis/"
                      >Testimonial</a
                    >
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            class="col-xl-2 col-lg-2 col-md-4 col-sm-6 wow fadeInUp"
            data-wow-duration="2.3s"
            style="
              visibility: visible;
              animation-duration: 2.3s;
              animation-name: fadeInUp;
            "
          >
            <div id="block-19" class="widget-footer widget_block footer__item">
              <h4
                class="footer__title"
                style="
                  font-weight: 700;
                  text-transform: capitalize;
                  color: #30c7b5;
                  display: inline-block;
                  margin-bottom: 41px;
                "
              >
                Our Contact
              </h4>
              <div class="wp-widget-group__inner-blocks">
                <ul style="padding: 0; margin: 0; list-style: none">
                  <li style="margin-bottom: 24px">
                    <svg
                      width="16"
                      height="15"
                      viewBox="0 0 16 15"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.84091 12.25L0.5 14.875V1C0.5 0.58579 0.83579 0.25 1.25 0.25H14.75C15.1642 0.25 15.5 0.58579 15.5 1V11.5C15.5 11.9142 15.1642 12.25 14.75 12.25H3.84091ZM3.32211 10.75H14V1.75H2V11.7888L3.32211 10.75ZM7.25 5.5H8.75V7H7.25V5.5ZM4.25 5.5H5.75V7H4.25V5.5ZM10.25 5.5H11.75V7H10.25V5.5Z"
                        fill="#30c7b5"
                      ></path>
                    </svg>
                    <a
                      href="mailto:info@hygeco.ca"
                      style="
                        transition: all 0.4s;
                        font-size: 16px;
                        font-weight: 400;
                        color: #748aa0;
                      "
                    >
                    info@hygeco.ca
                    </a>
                  </li>
                  <li style="margin-bottom: 24px">
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 14 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.02417 6.01158C5.7265 7.2466 6.7534 8.2735 7.98842 8.9758L8.6518 8.04708C8.87238 7.73838 9.2887 7.64297 9.6217 7.82485C10.6768 8.40123 11.8428 8.75148 13.0592 8.84778C13.4492 8.87868 13.75 9.20417 13.75 9.59545V12.9426C13.75 13.3271 13.4591 13.6493 13.0766 13.6886C12.6792 13.7295 12.2783 13.75 11.875 13.75C5.45469 13.75 0.25 8.5453 0.25 2.125C0.25 1.7217 0.270565 1.32078 0.311418 0.92332C0.350725 0.540812 0.672955 0.25 1.05749 0.25H4.40456C4.79583 0.25 5.12135 0.55078 5.15222 0.940817C5.2485 2.15716 5.59877 3.32323 6.17515 4.37833C6.35703 4.7113 6.26162 5.12766 5.95292 5.34818L5.02417 6.01158ZM3.13319 5.5189L4.55815 4.50107C4.1541 3.62885 3.87721 2.70387 3.73545 1.75H1.7568C1.75227 1.87474 1.75 1.99975 1.75 2.125C1.75 7.71685 6.28315 12.25 11.875 12.25C12.0002 12.25 12.1253 12.2478 12.25 12.2432V10.2645C11.2962 10.1228 10.3712 9.84587 9.49892 9.44185L8.4811 10.8668C8.06935 10.7069 7.6717 10.5186 7.29055 10.3046L7.24697 10.2797C5.77728 9.44402 4.55601 8.22272 3.72025 6.75303L3.69545 6.70945C3.48137 6.3283 3.29316 5.93065 3.13319 5.5189Z"
                        fill="#30c7b5"
                      ></path>
                    </svg>
                    <span
                      style="
                        color: #748aa0;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      "
                    >
                    +1 514-939-2020
                    </span>
                  </li>
                 
                  <li style="margin-bottom: 24px">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M5.75 0.75V2.25H10.25V0.75H11.75V2.25H14.75C15.1642 2.25 15.5 2.58579 15.5 3V15C15.5 15.4142 15.1642 15.75 14.75 15.75H1.25C0.83579 15.75 0.5 15.4142 0.5 15V3C0.5 2.58579 0.83579 2.25 1.25 2.25H4.25V0.75H5.75ZM14 8.25H2V14.25H14V8.25ZM4.25 3.75H2V6.75H14V3.75H11.75V5.25H10.25V3.75H5.75V5.25H4.25V3.75Z"
                        fill="#30c7b5"
                      ></path>
                    </svg>
                    <span
                      style="
                        color: #748aa0;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      "
                    >
                      Mon - Fri 12:00 - 18:00
                    </span>
                  </li>
                  <li style="display: flex; align-items: center; gap: 9px">
                    <svg
                      width="14"
                      height="17"
                      viewBox="0 0 14 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7 14.6746L10.7123 10.9623C12.7625 8.91208 12.7625 5.58794 10.7123 3.53769C8.66208 1.48744 5.33794 1.48744 3.28769 3.53769C1.23744 5.58794 1.23744 8.91208 3.28769 10.9623L7 14.6746ZM7 16.7959L2.22703 12.023C-0.40901 9.3869 -0.40901 5.11307 2.22703 2.47703C4.86307 -0.15901 9.1369 -0.15901 11.773 2.47703C14.409 5.11307 14.409 9.3869 11.773 12.023L7 16.7959ZM7 8.75C7.82845 8.75 8.5 8.07845 8.5 7.25C8.5 6.42157 7.82845 5.75 7 5.75C6.17155 5.75 5.5 6.42157 5.5 7.25C5.5 8.07845 6.17155 8.75 7 8.75ZM7 10.25C5.34314 10.25 4 8.90683 4 7.25C4 5.59314 5.34314 4.25 7 4.25C8.65683 4.25 10 5.59314 10 7.25C10 8.90683 8.65683 10.25 7 10.25Z"
                        fill="#30c7b5"
                      ></path>
                    </svg>
                    <span
                      style="
                        color: #748aa0;
                        font-size: 16px;
                        font-style: normal;
                        font-weight: 400;
                        line-height: 140%;
                      "
                    >
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
      <p
        style="
          padding: 25px 5px;
          color: #748aa0;
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 400;
          line-height: 30px;
          text-transform: capitalize;
          margin: 0;
        "
      >
      © Hygeco All Rights Reserved Developed By GcsHolding
      </p>
    </div>
    <img
      src="https://www.4damstheme.com/clenis/wp-content/themes/clenis/assets/images/footer/footer-spra.png"
      alt="Footer backgound image"
      class="footer-spara"
      style="position: absolute; right: 60px; bottom: 220px"
    />
    <img
      src="https://www.4damstheme.com/clenis/wp-content/themes/clenis/assets/images/icon/working-ball.png"
      alt="Footer backgound image"
      class="footer-working"
      style="
        position: absolute;
        bottom: 420px;
        left: 60px;
        animation: updown 2s linear infinite;
      "
    />
  </footer>
  </template>
  
  <script>
import ArgonInput from "@/components/ArgonInput.vue";
import Navbar from "@/examples/PageLayout/NavbarHygeco.vue";
import { useStore } from 'vuex';
import setNavPills from "@/assets/js/nav-pills.js";

export default {
    components: {
        ArgonInput,
        Navbar,
    },
    data() {
        return {
            store: useStore(),
        };
    },
    mounted() {
        this.store.state.showSidenav = false;
        this.store.state.showNavbar = false;
        this.store.state.showFooter = false;
        setNavPills();

       
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
btnPlus.forEach(function(button) {
    button.addEventListener('click', handleButtonClick);
});

// Ajouter un écouteur d'événements à tous les boutons de type moins
const btnMinus = document.querySelectorAll('.btn-number[data-type="minus"]');
btnMinus.forEach(function(button) {
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