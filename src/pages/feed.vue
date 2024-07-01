<script setup>

import InputApp from "../components/ui-kit/InputApp.vue";
import PostItem from "../components/ui-kit/PostItem.vue";
import {useStore} from "../store.js";

const store = useStore();
const posts = store.posts

</script>

<template>
    <InputApp
        :placeholder="'Search'"
        :is-search="true"
    />
    <div class="container">
        <PostItem
            v-for="post in posts"
            :key="post.id"
            :class="{active: post.id === store.postID}"
            :title="post.title"
            :subtitle="post.subtitle"
            :time="post.time"
            :active="post.id === store.postID"
            @click="store.setActivePost(post.id)"
        />
    </div>
</template>

<style scoped lang="sass">
    .container
        padding: 16px 0
</style>