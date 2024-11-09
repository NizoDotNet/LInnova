<script setup>

import Header from "@/components/Header.vue";
</script>
<template>
  <Header />
  <div class="container mx-auto px-2 h-screen w-screen w-max bg-blue-500">
    <main>
      <router-view></router-view>
    </main>
  </div>

</template>

