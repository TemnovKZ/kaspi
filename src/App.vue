<script setup>
import AppFooter from "./components/structural/AppFooter.vue";
import AppHeader from "./components/structural/AppHeader.vue";
import Content from "./pages/content.vue";
import Feed from "./pages/feed.vue";
import Profile from "./pages/profile.vue";
import SignIn from "./pages/sign-in.vue";

</script>

<template>
    <AppHeader/>
    <div class="wrapper">
        <router-view/>
    </div>
    <AppFooter/>
</template>

<style lang="sass" scoped>
    .wrapper
        flex: 1 1 auto
        padding: 16px
</style>
