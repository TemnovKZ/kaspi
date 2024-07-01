<script setup>
import {useStore} from "../../store.js";

const store = useStore()

</script>
<template>
    <div class="switch">
        <button
            v-for="item in store.switchData"
            :key="item.id"
            class="switch-item"
            :class="{ active: store.switchId === item.id }"
            @click="store.switchToggle(item.id)"
        >
            {{ item.name }}
        </button>
    </div>
</template>
<style scoped lang="sass">
.switch
    margin: 0 auto
    padding: 1px
    display: flex
    justify-content: space-between
    font-size: 16px
    border: 1px solid var(--gray)
    border-radius: 50px
    background-color: var(--gray)
    .switch-item
        display: flex
        justify-content: center
        width: 170px
        padding: 16px
        border-radius: 50px
        background-color: transparent
        color: #BDBDBD
        transition: width 0.3s ease
        &:hover
            border: 1px solid transparent
    & .active
        font-weight: 600
        color: var(--main-color)
        background-color: white
        width: 60%
</style>