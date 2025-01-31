<script setup>

import ProjectsComponent from "@/components/ProjectsComponent.vue";
import CurrentProjects from "@/components/CurrentProjects.vue";
</script>

<template>
  <div class="container-fluid main-1">
      <span class="text-white px-4"
      ><img src="../assets/images/logo.png" alt="" />LInnova</span
      >
    <div class="display-6 text-white my-3 px-4">
      Ganja hackathon winners... <br />The founders of the YouBase project,
      etc
    </div>
    <a class="btn my-5" href="#aboutus"
    ><img style="width: 80px" src="../assets/images/white-down-arrow-png-2.png" alt=""
    /></a>
  </div>
  <div class="container-fluid about text-white display py-5" id="aboutus">
    <p class="display">ABOUT US</p>
    <p class="h1">Taking Your Business to the Next Level</p>
    <p>
      At the hackathon held in Ganja on October 13, the Linnova team won the
      first place in the region. <br />Our main staff consists of 4 people.
    </p>
    <a class="btn text-white border my-4" href="">More about them</a>
    <a
        style="background-color: rgb(6, 64, 138)"
        class="btn text-white my-3"
        href=""
    >Hurry to join our team!</a
    >
  </div>
  <div class="lang container-fluid bg-white py-4 px-3">
    <div class="col-2">
      <img src="../assets/images/html-icon.png" alt="" />
    </div>
    <div class="col-2"><img src="../assets/images/css-logo.png" alt="" /></div>
    <div class="col-2">
      <img src="../assets/images/js-icon.png" alt="" />
    </div>
    <div class="col-2"><img src="../assets/images/Bootstrap_logo.svg.png" alt="" /></div>
    <div class="col-2">
      <img src="../assets/images/csharp-icon.png" alt="" />
    </div>
    <div class="col-2">
      <img src="../assets/images/vuejs-icon.png" alt="" />
    </div>
  </div>

  <div class="main-2 container-fluid text-white">
    <div class="news py-5 container">
      <div class="first display-6" style="font-size: 1.3rem">
        RECENT ISSUES OF
      </div>
      <div class="m-3">Our team</div>
      <div class="new-items row container-fluid m-3">
        <div class="col-sm-4 new">
          <a href=""
          >The implementation of the YouBase project has begun...</a
          >
        </div>
        <div class="col-sm-4 new">
          <a href=""
          >The team of LInnova took the 1st place in the Ganja
            hackathon...</a
          >
        </div>
        <div class="col-sm-4 new">
          <a href=""
          >Our team is with different type of application. See other
            <a class="text-decoration-underline" href="#projects">projects</a>
          </a>
        </div>
      </div>
      <a class="btn text-white border rounded my-5" href="">Read more</a>
    </div>
  </div>
  <div class="staff1 row container-fluid py-5">
    <div class="staff-text text-white py-5">
      <p style="font-size: 3rem; font-weight: 700">Who we are?</p>
      <p class="display">
        Discover Our Core Team! Behind every successful project, there's a
        team of dedicated experts. Our members are not only experienced but
        deeply passionate about making a difference. With a shared commitment
        to innovation and success, each member plays a vital role in our
        journey. Get to know more about the passionate professionals who drive
        our vision forward.
      </p>
    </div>
    <div class="member col-sm-3">
      <img src="../assets/images/Huseyn.jpg" alt="" />
      <div class="member-text text-white">
        Huseyn Valiyev <br />CEO/Cybersecurity Analyst
      </div>
    </div>
    <div class="member col-sm-3">
      <img src="../assets/images/humanPAyejG1.jpg" alt="" />
      <div class="member-text text-white">
        Nizami Mammadov <br />Backend developer
      </div>
    </div>
    <div class="member col-sm-3">
      <img src="../assets/images/Sabina.jpg" alt="" />
      <div class="member-text text-white">
        Sabina Rzazada <br />Frontend developer
      </div>
    </div>
    <div class="member col-sm-3">
      <img src="../assets/images/Murad.jpg" alt="" />
      <div class="member-text text-white">
        Murad Quliyev <br />UI/UX designer
      </div>
    </div>
  </div>
  <div id="projects" class="p-5">
    <h1 class="text-center text-white">Our projects:</h1>
    <ProjectsComponent />
  </div>
  <div>
    <h1 class="text-center text-white">We currently working on: </h1>
    <CurrentProjects />
  </div>
  <footer class="footer">
    <div class="footer-bottom">
      <p class="footer-copyright">
        &copy; 2024 LInnova. All Rights Reserved.
      </p>
      <div class="newsletter">
        <input
            type="email"
            placeholder="Enter your email"
            class="newsletter-input"
        />
        <button type="submit" class="newsletter-btn">Subscribe</button>
      </div>
    </div>
  </footer>

  Need more details? Contact us We are here to assist. Contact us by phone,
  email or via our social media channels.

</template>

<style scoped>

</style>