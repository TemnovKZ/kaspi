<script setup>
import InputApp from "../components/ui-kit/InputApp.vue";
import PostItem from "../components/ui-kit/PostItem.vue";

import {useStore} from "../store.js";

const store = useStore();

</script>

<template>
    <InputApp
        :placeholder="'Search'"
        :is-search="true"
    />
    <div class="container">
        <PostItem
            class="active"
            :title="store.posts.find(p => p.id === store.postID)?.title || ''"
            :subtitle="store.posts.find(p => p.id === store.postID)?.subtitle || ''"
            :time="store.posts.find(p => p.id === store.postID)?.time || ''"
        />
    </div>
</template>

<style scoped lang="sass">
    .container
        padding: 16px 0
</style>