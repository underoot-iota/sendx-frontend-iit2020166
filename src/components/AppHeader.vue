<template>
  <nav class="bg-darkslateblue-200 flex items-center justify-between px-20 h-16 text-white font-inter">
    <div class="flex items-center">
      <img src="@/assets/navbar/logo.svg" alt="Logo" />
      <div class="space-x-6 ml-10 flex items-center">
        <div v-for="(link, index) in navLinks" :key="index" class="font-medium">
          {{ link }}
        </div>
      </div>
    </div>
    <div class="flex items-center space-x-6">
      <img src="@/assets/navbar/icon.svg" alt="Icon" />
      <div class="w-px h-12 bg-darkslateblue-100"></div>
      <img src="@/assets/navbar/icon1.svg" alt="Icon 1" />
      <img src="@/assets/navbar/icon2.svg" alt="Icon 2" />
      <img src="@/assets/navbar/icon3.svg" alt="Icon 3" />
      <div class="w-px h-12 bg-darkslateblue-100"></div>
      <img class="w-8 h-8" src="@/assets/navbar/icon4.svg" alt="Icon 4" />
    </div>
  </nav>
</template>



<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "NavBar",
    data() {
      return {
        navLinks: ['Dashboard', 'Campaigns', 'Audience', 'Automation'],
      };
    },
  });
</script>

