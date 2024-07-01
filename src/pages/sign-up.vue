<script setup>

import InputApp from "../components/ui-kit/InputApp.vue";
import CheckboxApp from "../components/ui-kit/CheckboxApp.vue";
import ButtonApp from "../components/ui-kit/ButtonApp.vue";

</script>

<template>
    <div class="container">
        <InputApp
            :placeholder="'Name'"
        />
        <InputApp
            :placeholder="'Email'"
        />
        <InputApp
            :placeholder="'Password'"
            :password="true"
        />
    </div>
    <CheckboxApp class="checkbox">
        I would like to receive your newsletter and other promotional information.
    </CheckboxApp>
    <ButtonApp class="button">
        Sign Up
    </ButtonApp>
    <a href="" class="link">Forgot your password?</a>
</template>

<style scoped lang="sass">
    .container
        display: flex
        flex-direction: column
        gap: 16px
        margin-bottom: 32px
    .checkbox
        margin-bottom: 43px
    .button
        margin-bottom: 16px
    .link
        color: var(--main-color)
</style>