<script setup>
import {useStore} from "../../store.js";

const store = useStore()
</script>

<template>
    <div class="profile">
        <div class="image">
            <img :src="store.profileImage" alt="Image">
        </div>
        <p class="name">
            {{ store.profileData.name }}
        </p>
        <p class="description">
            {{ store.profileData.description }}
        </p>
    </div>
</template>

<style scoped lang="sass">
    .profile
        display: flex
        flex-direction: column
        justify-content: center
        align-items: center
        position: relative
        z-index: 5
        .image
            height: 158px
            width: 158px
            margin-bottom: 16px
            img
                height: 100%
                width: 100%
                border: 4px solid white
                border-radius: 50%
                object-fit: cover
                object-position: center
        .name
            margin-bottom: 8px
            font-size: 30px
            font-weight: 600

        .description
            font-size: 16px
            font-weight: 600
</style>