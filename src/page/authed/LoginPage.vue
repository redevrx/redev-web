<script setup lang="ts">
import {Vue3Lottie} from "vue3-lottie";
import bgPCAnimation from '../../assets/animation/bg_pc.json'
import bgMobile from '../../assets/animation/bg_mobile.json'
import {onMounted} from "vue";

onMounted(()=>  {
    const  title = document.querySelector("#titleLogin")
    title.classList.add("animate-bounce")
})

</script>

<template>
<!--      login content-->
      <section class="relative h-screen bg-dark-bg">
          <div class="max-h-screen bg-red">
              <!--      PC BG-->
              <Vue3Lottie :animation-data="bgPCAnimation"
                          :width="200"
                          :height="200"
                          :loop="true"  :play-on-hover="true"
                          class=""/>

              <!--      Mobile BG-->
              <Vue3Lottie :animation-data="bgMobile"
                          :width="200"
                          :height="200"
                          :loop="true"  :play-on-hover="true"
                          class="block lg:hidden"/>
          </div>
          <div class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 justify-center items-center">
              <h1 class="text-8xl text-white" id="titleLogin">Login</h1>
          </div>
      </section>

</template>

<style scoped>

</style>