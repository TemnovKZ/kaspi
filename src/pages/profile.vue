<script setup>

import ProfileData from "../components/ui-kit/ProfileData.vue";
import SwitchApp from "../components/ui-kit/SwitchApp.vue";
import PostItem from "../components/ui-kit/PostItem.vue";
import { useStore } from "../store.js";

const store = useStore()

</script>

<template>
    <div class="container">
        <ProfileData/>
        <SwitchApp class="switch"/>
        <PostItem
            v-if="store.switchId === 1"
            v-for="post in store.posts"
            :key="post.id"
            :class="{active: post.id === store.postID}"
            :title="post.title"
            :subtitle="post.subtitle"
            :time="post.time"
            :active="post.id === store.postID"
            @click="store.setActivePost(post.id)"
        />
        <div
            v-if="store.switchId === 2"
            v-for="image in store.images"
            :key="image.id"
            class="images"
        />
    </div>
</template>

<style scoped lang="sass">
    .container
        &:before
            content: ''
            position: absolute
            top: 0
            left: 0
            height: 25%
            width: 100%
            background-color: var(--main-color)

        .switch
            margin: 24px 0 16px

        .images
            height: 240px
            width: 100%
            margin-bottom: 16px
            background-color: var(--gray)
            border-radius: 8px

</style>