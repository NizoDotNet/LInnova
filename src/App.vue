<script setup>

import Header from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
<template>
  <Header />
  <div class="main linnova-color-1">
    <router-view></router-view>
  </div>
  <Footer />
</template>

