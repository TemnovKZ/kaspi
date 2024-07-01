<script setup>

import {useStore} from "../../store.js";

const store = useStore();

defineProps({
    title: String,
    subtitle: String,
    time: String,
    active: {
        type: Boolean,
        default: false
    },
})

</script>

<template>
    <div class="posts">
        <div class="image">

        </div>
        <div class="content">
            <p class="title">{{ title }}</p>
            <p class="subtitle">{{ subtitle }}</p>
            <p class="description">{{ time }} ago</p>
            <router-link
                v-if="active"
                class="link"
                :to="`/content`"
            >
                more...
            </router-link>
        </div>
    </div>
</template>

<style scoped lang="sass">
    .posts
        display: flex
        gap: 16px
        margin-bottom: 16px
        transition: all 0.5s ease-in-out
        .image
            height: 50px
            min-width: 50px
            width: 50px
            border-radius: 8px
            background-color: var(--gray)
            transition: all 0.5s ease-in-out
        .content
            position: relative
            width: 100%
            padding: 0 8px 16px 0
            border-bottom: 1px solid #E8E8E8
            text-align: left
            .title
                font-size: 16px
                line-height: 100%
                font-weight: 700
                margin-bottom: 8px
            .description
                position: absolute
                top: 2px
                right: 0
                color: #BDBDBD
            .link
                position: absolute
                right: 16px
                bottom: 16px
                color: var(--main-color)
    .active
        flex-direction: column
        .image
            height: 240px
            width: 100%
        .content
            .description
                position: static
                margin-top: 8px
</style>