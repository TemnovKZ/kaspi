<script setup>

import InputApp from "../components/ui-kit/InputApp.vue";
import ButtonApp from "../components/ui-kit/ButtonApp.vue";
</script>

<template>
    <div class="container">
        <InputApp
            :placeholder="'Name'"
        />
        <InputApp
            :placeholder="'Password'"
            :password="true"
        />
    </div>
    <ButtonApp class="button">
        Log In
    </ButtonApp>
    <a href="" class="link">Forgot your password?</a>
</template>

<style scoped lang="sass">
.container
    display: flex
    flex-direction: column
    gap: 16px
    margin-bottom: 150px
.button
    margin-bottom: 16px
.link
    color: var(--main-color)
</style>