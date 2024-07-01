<script setup>

defineProps({
    title: String,
    subtitle: String,
    time: String
})

</script>

<template>
    <div class="container">
        <div class="image">

        </div>
        <div class="content">
            <p class="title">{{ title }}</p>
            <p class="subtitle">{{ subtitle }}</p>
            <p class="description">{{ time }} ago</p>
        </div>
    </div>
</template>

<style scoped lang="sass">
    .container
        display: flex
        gap: 16px
        margin-bottom: 16px
        .image
            height: 50px
            min-width: 50px
            border-radius: 8px
            background-color: var(--gray)
        .content
            position: relative
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

</style>