<template>
    <section class="testimonials">
        <div class="container">
            <div class="row text-center">
                <div class="col-md-12">
                    <div class="heading">
                        <h2>What our clients say?</h2>
                    </div>
                </div>
            </div>
            <div class="row text-center">
                <div class="col-md-12">
                    <div id="testimonialCarousel" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="testimonial">
                                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="team" alt="Client Image">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis in"
                                    </p>
                                    <h3>Alamin Musa</h3>
                                    <p>Front End Developer</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimonial">
                                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="team" alt="Client Image">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis in"
                                    </p>
                                    <h3>John Doe</h3>
                                    <p>Back End Developer</p>
                                </div>
                            </div>
                            <div class="carousel-item">
                                <div class="testimonial">
                                    <img src="https://i.ibb.co/8x9xK4H/team.jpg" class="team" alt="Client Image">
                                    <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                                        porttitordapibus dictum. Fusce faucibus ligula scelerisque, eleifend turpis in"
                                    </p>
                                    <h3>Jane Smith</h3>
                                    <p>Full Stack Developer</p>
                                </div>
                            </div>
                        </div>
                        <a class="carousel-control-prev" href="#testimonialCarousel" role="button" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="sr-only">Previous</span>
                        </a>
                        <a class="carousel-control-next" href="#testimonialCarousel" role="button" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="sr-only">Next</span>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Testimonials'
}
</script>

<style scoped>
.testimonials {
    background: url("https://www.4damstheme.com/clenis/wp-content/plugins/clenis-toolkit/widgets/img/testimonail/testi-bg.png") center center no-repeat;
    background-size: cover;
    background-attachment: fixed;
    padding: 32px 0 59px;
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

.testimonials .carousel-inner .carousel-item .team {
    width: 100px;
    height: 100px;
    border: 2px solid #30c7b5;
    border-radius: 100%;
    padding: 5px;
    margin: 50px auto 15px;
    /* Center the image */
    display: block;
    /* Make sure image is centered */
}

.testimonials .carousel-inner .carousel-item h3 {
    font-size: 20px;
    color: #ffffff;
    font-weight: 600;
}

.testimonials .carousel-inner .carousel-item p {
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

.testimonials .carousel-control-prev,
.testimonials .carousel-control-next {
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
</style>