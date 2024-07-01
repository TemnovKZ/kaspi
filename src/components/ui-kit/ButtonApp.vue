<script setup>

</script>

<template>
    <button>
        <slot/>
    </button>
</template>

<style lang="sass" scoped>
    button
        width: 100%
        padding: 16px 0
        background-color: #5DB075
        border: 1px solid #5DB075
        border-radius: 100px
        font-weight: 600
        color: white
        transition: 0.2s ease-in-out
        &:focus
            background-color: #F6F6F6
            border-color: #F6F6F6
            color: var(--main-color)

</style>