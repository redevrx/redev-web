<template>
    <nav class="bg-white border-gray-200 shadow-2xl dark:bg-dark-bg">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
            <a href="#" class="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" class="h-8 mr-3" alt="Logo"/>
                <span class="self-center text-2xl font-semi-bold whitespace-nowrap dark:text-white">IdeaBy</span>
            </a>
            <div class="flex items-center md:order-2">
                <Switch/>
                <button @click="showProfileMenu" type="button"
                        class="flex mr-3 ml-1 text-sm bg-gray-800 rounded-full
                md:mr-0 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                        id="user-menu-button">
                    <span class="sr-only">Open user menu</span>
                    <img class="w-8 h-8 rounded-full" src="https://cdn-icons-png.flaticon.com/512/5592/5592730.png"
                         alt="user photo">
                </button>
                <!-- Dropdown menu -->
                <div class="z-50 hidden my-4 text-base list-none
                 bg-white divide-y divide-gray-100 rounded-lg
                  shadow dark:bg-dark-bg dark:divide-gray-600" id="user-dropdown">
                    <div class="px-4 py-3">
                        <span class="block text-sm text-gray-900 dark:text-white">Bonnie Green</span>
                        <span class="block text-sm  text-gray-500 truncate dark:text-gray-400">name@flowbite.com</span>
                    </div>
                    <ul class="py-2" aria-labelledby="user-menu-button">
                        <li>
                            <a href="#"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Dashboard</a>
                        </li>
                        <li>
                            <a href="#"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Settings</a>
                        </li>
                        <li>
                            <a href="#"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Earnings</a>
                        </li>
                        <li>
                            <a href="#"
                               class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign
                                out</a>
                        </li>
                    </ul>
                </div>
                <button @click="showMenu" data-collapse-toggle="mobile-menu-2" type="button"
                        class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                        aria-controls="mobile-menu-2" aria-expanded="false">
                    <span class="sr-only">Open main menu</span>
                    <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                         xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd"
                              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                              clip-rule="evenodd"></path>
                    </svg>
                </button>
            </div>
            <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="mobile-menu-2">
                <ul class="flex flex-col font-medium p-4 md:p-0 mt-4
                border-gray-100 dark:border-dark-item rounded-lg bg-gray-50 md:flex-row
                md:space-x-8 md:mt-0 md:bg-white
                dark:bg-dark-bg"
                >
                    <li v-for="item in Links">
                        <a href="#" class="block py-2 pl-3 pr-4
                        dark:text-white text-black dark:hover:md:bg-indigo-900  hover:md:bg-white hover:bg-blue-700  rounded md:bg-transparent
                         hover:md:text-blue-700 md:p-0 md:dark:text-white"
                           aria-current="page">{{ item.name }}</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script setup>
import Switch from "../button/switch/Switch.vue";
import {ref} from "vue";

let Links = ref([
    { name: "HOME", link: "/" },
    { name: "SERVICE", link: "/" },
    { name: "ABOUT", link: "/" },
    { name: "BLOG'S", link: "/" },
    { name: "CONTACT", link: "/" },
]);
function showProfileMenu() {
    const dropDowMenu = document.querySelector("#user-dropdown")
    dropDowMenu.classList.toggle("hidden")
}

function showMenu(){
    const  menu = document.querySelector("#mobile-menu-2")
    menu.classList.toggle("hidden")
}

</script>