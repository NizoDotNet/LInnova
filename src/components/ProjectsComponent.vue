<script setup>

</script>

<template>
  <div class="linnova-color-1 project-container d-flex justify-content-center p-3 m-3">
    <div class="">
      <img class="cover" src="../assets/images/Dormitory.png" alt="" />
    </div>

    <div class="">
      <p>This project was created for maneging and securing Azerbaijan Agriculture University Dormitory.
        This project consist of 3 parts
      </p>
      <ol>
        <li>Client for Students and who lives in dormitory and for Guard for checking if person really lives here</li>
        <li>API for clients so they can Authenticate and Authorize and take actions</li>
        <li>Admin panel for controlling data and monitoring events.</li>
      </ol>
      <h5>Technologies used for this project</h5>
      <ul>
        <li>
          ASP.NET Core - used for serverside: API and Admin Panel
        </li>
        <li>
          VueJs - used for client side
        </li>
        <li>
          MySql - application database which stores users and there data
        </li>
        <li>
          Entity Framework Core - ORM(Object Relational Mapping) used for interaction with database
        </li>
      </ul>
    </div>
  </div>

  <div class="linnova-color-1 project-container d-flex justify-content-center p-3 m-3">
    <div class="">
      <img class="cover" src="../assets/images/TechStudy.png" alt="" />
    </div>

    <div class="">
      <p>This project was created for students who wants get into IT and make decision about there field. In this project we implemented:
      </p>
      <ol>
        <li>Cookie based Authentication and Authorization</li>
        <li>Email verification</li>
        <li>Groups which you can apply and join.</li>
      </ol>
      <h5>Technologies used for this project</h5>
      <ul>
        <li>
          ASP.NET Core Razor pages - Server based web framework.
        </li>
        <li>
          MySql - application database which stores users and there data
        </li>
        <li>
          Entity Framework Core - ORM(Object Relational Mapping) used for interaction with database
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.project-container {
  overflow: hidden;
  border-radius: 10px;
  font-size: 18px;
  color: white;
}
.cover {
  object-fit: contain;
  width: 90%;
  height: 90%;
}

</style>