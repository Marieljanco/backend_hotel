<script setup lang="ts"></script>

<template>
  <section class="hero-section" id="section_1">
    <div class="section-overlay"></div>

    <div class="container d-flex justify-content-center align-items-center">
      <div class="row">
        <div class="col-12 mt-auto mb-5 text-center">
          <small>BIENVENIDO A</small>

          <h1 class="text-white mb-5">LARANA HOTEL</h1>

          <a class="btn custom-btn smoothscroll" href="#section_2">Comenzar</a>
        </div>

        <div class="col-lg-12 col-12 mt-auto d-flex flex-column flex-lg-row text-center">
          
          <div class="location-wrap mx-auto py-3 py-lg-0">
            <h5 class="text-white">
              <i class="custom-icon bi-geo-alt me-2"></i>
              Sucre, Bolvia
            </h5>
          </div>

          <div class="social-share">
            <ul class="social-icon d-flex align-items-center justify-content-center">
              <span class="text-white me-3">Share:</span>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-facebook"></span>
                </a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-twitter"></span>
                </a>
              </li>

              <li class="social-icon-item">
                <a href="#" class="social-icon-link">
                  <span class="bi-instagram"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="video-wrap">
      <video autoplay="true" loop="true" muted="false" class="custom-video" poster="">
        <source src="@/assets/video/videohotel.mp4" type="video/mp4" />
        <!-- reemplazar -->

        Your browser does not support the video tag.
      </video>
    </div>
  </section>

  <section class="about-section section-padding" id="section_2">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 col-12 mb-4 mb-lg-0 d-flex align-items-center">
          <div class="services-info">
            <h2 class="text-white mb-4">Sobre Larana HOTEL</h2>

            <p class="text-white">
              Larana Hotel ofrece elegancia y comodidad en el corazón de la ciudad. Experimenta una estancia 
              inolvidable con habitaciones espaciosas, cocina deliciosa, piscina relajante y un equipo dedicado
               para satisfacer tus necesidades durante tu visita.
            </p>

            <h6 class="text-white mt-4">Experiencia única en la vida</h6>

            <p class="text-white">
              Experiencia única en la vida: Vive momentos inolvidables en nuestro hotel, donde cada estancia 
              se convierte en una ocasión especial llena de comodidad, elegancia y atención personalizada. 
              ¡Descubre el lujo y la hospitalidad que solo nosotros podemos ofrecerte!
            </p>

          </div>
        </div>

        <div class="col-lg-6 col-12">
          <div class="about-text-wrap">
            <img
              src="@/assets/images/pexels-alexander-suhorucov-6457579.jpg"
              class="about-image img-fluid"
            />

            <div class="about-text-info d-flex">
              <div class="d-flex">
                <i class="about-text-icon bi-person"></i>
              </div>

              <div class="ms-4">
                <h3>feliz de recibirlos</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="artists-section section-padding" id="section_3">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 text-center">
          <h2 class="mb-4">Conoce nuestras instalaciones</h2>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img
                src="@/assets/images/artists/cuarto1.jpg"
                class="artists-image img-fluid"
              />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                President Suite Room
              </p>

              <hr />

            </div>
          </div>
        </div>

        <div class="col-lg-5 col-12">
          <div class="artists-thumb">
            <div class="artists-image-wrap">
              <img
                src="@/assets/images/artists/cuarto2.jpg"
                class="artists-image img-fluid"
              />
            </div>

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Deluxe Room
              </p>

              <hr />

            </div>
          </div>

          <div class="artists-thumb">
            <img
              src="@/assets/images/artists/cuarto3.jpg"
              class="artists-image img-fluid"
            />

            <div class="artists-hover">
              <p>
                <strong>Nombre:</strong>
                Standard Room

              </p>

              <hr />

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="schedule-section section-padding" id="section_4">
    <div class="container">
      <div class="row">
        <div class="col-12 text-center">
          <h2 class="text-white mb-4">Atencion por feriados</h2>

          <div class="table-responsive">
            <table class="schedule-table table table-dark">
              <thead>
                <tr>
                  <th scope="col">Fechas</th>

                  <th scope="col">Miercoles</th>

                  <th scope="col">Jueves</th>

                  <th scope="col">Viernes</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <th scope="row">Día 1</th>

                  <td class="table-background-image-wrap pop-background-image">
                    <h3>miercoles de ceniza</h3>

                    <p class="mb-2">5:00 - 7:00 PM</p>

                    <div class="section-overlay"></div>
                  </td>

                  <td style="background-color: #f3dcd4"></td>

                  <td class="table-background-image-wrap rock-background-image">
                    <h3>Viernes santo</h3>

                    <p class="mb-2">7:00 - 11:00 PM</p>

                    <div class="section-overlay"></div>
                  </td>
                </tr>

                <tr>
                  <th scope="row">Día 2</th>

                  <td style="background-color: #ecc9c7"></td>

                  <td>
                    <h3>Dia del maestro</h3>

                    <p class="mb-2">6:30 - 9:30 PM</p>
                  </td>

                  <td style="background-color: #d9e3da"></td>
                </tr>

                <tr>
                  <th scope="row">Día 3</th>

                  <td class="table-background-image-wrap country-background-image">
                    <h3>Miercoles de reencarnación</h3>

                    <p class="mb-2">4:30 - 7:30 PM</p>

                    <div class="section-overlay"></div>
                  </td>

                  <td style="background-color: #d1cfc0"></td>

                  <td>
                    <h3>Dia de la madre</h3>

                    <p class="mb-2">6:00 - 10:00 PM</p>

                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="pricing-section section-padding section-bg" id="section_5">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="text-center mb-4">Planea tu estancia</h2>
        </div>

        <div class="col-lg-6 col-12">
          <div class="pricing-thumb">
            <div class="d-flex">
              <div>
                <h3><small>suit presidencial</small> $120</h3>

                <p>Incluye la buena:</p>
              </div>

              <p class="pricing-tag ms-auto">Ahorra hasta <span>50%</span></p>
            </div>

            <ul class="pricing-list mt-3">
              <li class="pricing-list-item">Plataforma para clientes potenciales</li>

              <li class="pricing-list-item">Experiencia inigualable</li>

              <li class="pricing-list-item">Alta calidad en confort</li>

              <li class="pricing-list-item">Servicio favorable</li>
            </ul>

            <a class="link-fx-1 color-contrast-higher mt-4" href="ticket.html">
              <span>ticket</span>
              <svg class="icon" viewBox="0 0 32 32" aria-hidden="true">
                <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="16" cy="16" r="15.5"></circle>
                  <line x1="10" y1="18" x2="16" y2="12"></line>
                  <line x1="16" y1="12" x2="22" y2="18"></line>
                </g>
              </svg>
            </a>
          </div>
        </div>

        
      </div>
    </div>
  </section>

  <section class="contact-section section-padding" id="section_6">
    <div class="container">
      <div class="row">
        <div class="col-lg-8 col-12 mx-auto">
          <h2 class="text-center mb-4">Deja tus sugerencias</h2>

          <nav class="d-flex justify-content-center">
            <div
              class="nav nav-tabs align-items-baseline justify-content-center"
              id="nav-tab"
              role="tablist"
            >
              <!-- <button
                class="nav-link active"
                id="nav-ContactForm-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-ContactForm"
                type="button"
                role="tab"
                aria-controls="nav-ContactForm"
                aria-selected="false"
              > -->
                <!-- <h5>Formulario de Contacto </h5>
              </button>

              <button
                class="nav-link"
                id="nav-ContactMap-tab"
                data-bs-toggle="tab"
                data-bs-target="#nav-ContactMap"
                type="button"
                role="tab"
                aria-controls="nav-ContactMap"
                aria-selected="false"
              > -->
                <!-- <h5>Google Maps</h5>
              </button> -->
            </div>
          </nav>

          <div class="tab-content shadow-lg mt-5" id="nav-tabContent">
            <div
              class="tab-pane fade show active"
              id="nav-ContactForm"
              role="tabpanel"
              aria-labelledby="nav-ContactForm-tab"
            >
              <form
                class="custom-form contact-form mb-5 mb-lg-0"
                action="#"
                method="post"
                role="form"
              >
                <div class="contact-form-body">
                  <div class="row">
                    <div class="col-lg-6 col-md-6 col-12">
                      <input
                        type="text"
                        name="contact-name"
                        id="contact-name"
                        class="form-control"
                        placeholder="Full name"
                        required
                      />
                    </div>

                    <div class="col-lg-6 col-md-6 col-12">
                      <input
                        type="email"
                        name="contact-email"
                        id="contact-email"
                        pattern="[^ @]*@[^ @]*"
                        class="form-control"
                        placeholder="Email address"
                        required
                      />
                    </div>
                  </div>

                  <input
                    type="text"
                    name="contact-company"
                    id="contact-company"
                    class="form-control"
                    placeholder="Company"
                    required
                  />

                  <textarea
                    name="contact-message"
                    rows="3"
                    class="form-control"
                    id="contact-message"
                    placeholder="Message"
                  ></textarea>

                  <div class="col-lg-4 col-md-10 col-8 mx-auto">
                    <button type="submit" class="form-control">Envia tu mensaje</button>
                  </div>
                </div>
              </form>
            </div>

            <div
              class="tab-pane fade"
              id="nav-ContactMap"
              role="tabpanel"
              aria-labelledby="nav-ContactMap-tab"
            >
              <iframe
                class="google-map"
                src="@/assets/https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29974.469402870927!2d120.94861466021855!3d14.106066818082482!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33bd777b1ab54c8f%3A0x6ecc514451ce2be8!2sTagaytay%2C%20Cavite%2C%20Philippines!5e1!3m2!1sen!2smy!4v1670344209509!5m2!1sen!2smy"
                width="100%"
                height="450"
                style="border: 0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <!-- You can easily copy the embed code from Google Maps -> Share -> Embed a map // -->
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped></style>
