<script setup>
import { useStore } from "../../store.js";
import { onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';

// футер с кнопками перехода по страницам

const store = useStore()
const router = useRouter()
const route = useRoute()

onMounted(() => {
    watch(route, (newRoute) => {
        const matchingPage = store.pages.find(page => page.route === newRoute.path);

        if (matchingPage) {
            store.setActivePageId(matchingPage.id);
        }
    }, { immediate: true });
});

</script>

<template>
    <footer>
        <button
            v-for="page in store.pages"
            :key="page.id"
            :class="{active: page.id === store.activePageId}"
            @click="store.setActivePageId(page.id); router.push(page.route)"
        />
    </footer>
</template>

<style scoped lang="sass">
    footer
        position: sticky
        left: 0
        bottom: 0
        z-index: 100
        padding: 16px 0
        width: 100%
        display: flex
        justify-content: center
        align-items: center
        gap: 40px
        border-top: 1px solid #E8E8E8
        background-color: white
        button
            height: 32px
            width: 32px
            border-radius: 50%
            background-color: #E8E8E8

            position: relative
            transition: all 0.5s ease
            &:active
                bottom: -5px


        .active
            background-color: var(--main-color)


</style>