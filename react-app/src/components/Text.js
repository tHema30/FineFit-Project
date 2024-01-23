
function Text() {
    return (
      <div>
        <div class="container-fluid p-0 mb-5 wow fadeIn" data-wow-delay="0.1s">
        <div id="header-carousel" class="carousel slide" data-bs-ride="carousel">
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img class="w-100" src="./assets/img/homebanner1.webp" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-lg-7">
                                    <h1 class="display-2 mb-5 animated slideInDown">We Stitch Design <br/>FIT YOU PERFECTLY</h1>
                                    <a href="" class="btn btn-secondary rounded-pill py-sm-3 px-sm-5 ms-3">Book Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <img class="w-100" src="./img/homebanner1.webp" alt="Image"/>
                    <div class="carousel-caption">
                        <div class="container">
                            <div class="row justify-content-start">
                                <div class="col-lg-7">
                                    <h1 class="display-2 mb-5 animated slideInDown">Best and Realiable Tailoring service</h1>
                                    <a href="" class="btn btn-primary rounded-pill py-sm-3 px-sm-5">Register Now</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#header-carousel"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#header-carousel"
                data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    <div class="container-xxl py-5">
        <div class="container">
            <div class="row g-5 align-items-center">
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.1s">
                    <div class="about-img position-relative overflow-hidden p-5 pe-0">
                        <img class="img-fluid w-100" src={require("../assets/img/images.jpeg")}/>
                    </div>
                </div>
                <div class="col-lg-6 wow fadeIn" data-wow-delay="0.5s">
                    <h1 class="display-5 mb-4">Best Tailoring Services</h1>
                    <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet</p>
                    <p><i class="fa fa-check  me-3"></i>Tempor erat elitr rebum at clita</p>
                    <p><i class="fa fa-check  me-3"></i>Aliqu diam amet diam et eos</p>
                    <p><i class="fa fa-check  me-3"></i>Clita duo justo magna dolore erat amet</p>
                    <a class="btn btn-primary rounded-pill py-3 px-5 mt-3" href="">Read More</a>
                </div>
            </div>
        </div>
    </div>
 </div>
 <div class="container-fluid bg-light bg-icon my-5 py-6 onefit">
 <div class="container">
     <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "500px;"}}>
         <h1 class="display-5 mb-3">Our Features</h1>
         <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
     </div>
     <div class="row g-4">
         <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
             <div class="bg-white text-center h-100 p-4 p-xl-5">
                 <img class="img-fluid mb-4" src="img/icon-1.png" alt=""/>
                 <h4 class="mb-3">Home Delivery</h4>
                 <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                 <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
             </div>
         </div>
         <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.3s">
             <div class="bg-white text-center h-100 p-4 p-xl-5">
                 <img class="img-fluid mb-4" src="img/icon-2.png" alt=""/>
                 <h4 class="mb-3">Altering</h4>
                 <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                 <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
             </div>
         </div>
         <div class="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.5s">
             <div class="bg-white text-center h-100 p-4 p-xl-5">
                 <img class="img-fluid mb-4" src="img/icon-3.png" alt=""/>
                 <h4 class="mb-3">Custom Stitching</h4>
                 <p class="mb-4">Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed vero dolor duo.</p>
                 <a class="btn btn-outline-primary border-2 py-2 px-4 rounded-pill" href="">Read More</a>
             </div>
         </div>
     </div>
 </div>
</div>
 <div class="container-fluid bg-light bg-icon py-6 mb-5">
 <div class="container">
     <div class="section-header text-center mx-auto mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{"max-width": "500px;"}}>
         <h1 class="display-5 mb-3">Customer Review</h1>
         <p>Tempor ut dolore lorem kasd vero ipsum sit eirmod sit. Ipsum diam justo sed rebum vero dolor duo.</p>
     </div>
     <div class="owl-carousel testimonial-carousel wow fadeInUp" data-wow-delay="0.1s">
         <div class="testimonial-item position-relative bg-white p-5 mt-4">
             <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
             <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
             <div class="d-flex align-items-center">
                 <img class="flex-shrink-0 rounded-circle" src="" alt=""/> 
                 <div class="ms-3">
                     <h5 class="mb-1">Client Name</h5>
                     <span>Profession</span>
                 </div>
             </div>
         </div>
         <div class="testimonial-item position-relative bg-white p-5 mt-4">
             <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
             <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
             <div class="d-flex align-items-center">
                 <img class="flex-shrink-0 rounded-circle" src="" alt=""/>
                 <div class="ms-3">
                     <h5 class="mb-1">Client Name</h5>
                     <span>Profession</span>
                 </div>
             </div>
         </div>
         <div class="testimonial-item position-relative bg-white p-5 mt-4">
             <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
             <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
             <div class="d-flex align-items-center">
                 <img class="flex-shrink-0 rounded-circle" src="" alt=""/> 
                 <div class="ms-3">
                     <h5 class="mb-1">Client Name</h5>
                     <span>Profession</span>
                 </div>
             </div>
         </div>
         <div class="testimonial-item position-relative bg-white p-5 mt-4">
             <i class="fa fa-quote-left fa-3x text-primary position-absolute top-0 start-0 mt-n4 ms-5"></i>
             <p class="mb-4">Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit diam amet diam et eos. Clita erat ipsum et lorem et sit.</p>
             <div class="d-flex align-items-center">
                 <img class="flex-shrink-0 rounded-circle" src="" alt=""/> 
                 <div class="ms-3">
                     <h5 class="mb-1">Client Name</h5>
                     <span>Profession</span>
                 </div>
             </div>
         </div>
     </div>
 </div>
</div>
</div>
    );
  }
  
  export default Text
