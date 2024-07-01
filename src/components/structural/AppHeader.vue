<script setup>
import {computed} from "vue";
import {useStore} from "../../store.js";
import { useRoute } from 'vue-router';

const store = useStore()
const route = useRoute()

const currentPage = computed(() => store.pages.find(page => page.route === route.path))

</script>

<template>
    <header :class="{profile: route.path === '/profile'}">
        <a href="" class="green">Back</a>
        <h1>{{ currentPage.name }}</h1>
        <a href="" class="green">Filter</a>
    </header>
</template>

<style scoped lang="sass">
    header
        position: sticky
        top: 0
        left: 0
        z-index: 100
        display: flex
        justify-content: space-between
        align-items: center
        background-color: white
        .green
            color: var(--main-color)
    .profile
        background: var(--main-color)
        color: white
        .green
            color: white
</style>