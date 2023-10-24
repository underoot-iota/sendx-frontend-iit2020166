<template>
  <header
    class="bg-white w-full h-[60px] overflow-hidden flex flex-row items-center justify-between py-0 px-20 box-border text-left text-[19.16px] text-darkslategray-100 font-inter"
  >
    <div class="w-[46px] h-[60px] flex flex-col items-center justify-center">
      <div class="relative font-semibold">Type</div>
    </div>
    <div
      class="self-stretch flex flex-row items-center justify-between text-[12.77px] text-lightslategray-200"
    >
      <div class="w-[537px] flex flex-row items-center justify-between">
        <div class="relative font-medium text-darkslategray-100">Type</div>
        <img
          class="relative w-2 h-3 overflow-hidden shrink-0"
          alt=""
          src="@/assets/headerComponent/icon.svg"
        />
        <div class="relative font-medium">Design</div>
        <img
          class="relative w-2 h-3 overflow-hidden shrink-0"
          alt=""
          src="@/assets/headerComponent/icon.svg"
        />
        <div class="relative font-medium">Content</div>
        <img
          class="relative w-2 h-3 overflow-hidden shrink-0"
          alt=""
          src="@/assets/headerComponent/icon.svg"
        />
        <div class="relative font-medium">Targeting</div>
        <img
          class="relative w-2 h-3 overflow-hidden shrink-0"
          alt=""
          src="@/assets/headerComponent/icon.svg"
        />
        <div class="relative font-medium">Behaviour</div>
        <img
          class="relative w-2 h-3 overflow-hidden shrink-0"
          alt=""
          src="@/assets/headerComponent/icon.svg"
        />
        <div class="relative font-medium">Success</div>
      </div>
    </div>
  </header>
</template>



<script>
  import { defineComponent } from "vue";

  export default defineComponent({
    name: "Div",
  });
</script>
