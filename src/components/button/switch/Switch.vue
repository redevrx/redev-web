<template>
    <label class="relative inline-flex items-center cursor-pointer">
        <input @click="onSwitchTheme" id="btnTheme" type="checkbox" v-model="themeValue" class="sr-only peer">
        <div class="w-11 h-6 bg-gray-200 peer-focus:outline-none
         peer-focus:ring-4 peer-focus:ring-blue-300
          dark:peer-focus:ring-blue-800 rounded-full
           peer dark:bg-gray-700 peer-checked:after:translate-x-full
            peer-checked:after:border-white after:content-['']
             after:absolute after:top-[2px] after:left-[2px] after:bg-white
              after:border-gray-300 after:border after:rounded-full after:h-5
               after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
    </label>
</template>

<script setup lang="ts">

import {onMounted, ref} from "vue";

const themeValue = ref(false)

onMounted(()=> function () {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        themeValue.value = true
    } else {
        document.documentElement.classList.remove('dark')
        themeValue.value = false
    }
})
function onSwitchTheme() {
    console.log('theme value',themeValue.value)
    if (!themeValue.value) {
        localStorage.theme = 'dark'
    } else {
        localStorage.theme = 'light'
    }

    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
        themeValue.value = true
    } else {
        document.documentElement.classList.remove('dark')
        themeValue.value = false
    }
}
</script>

<style scoped>
</style>
