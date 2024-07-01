<script setup>

</script>

<template>
    <div class="checkbox">
        <input type="checkbox" id="check1" class="custom-checkbox"/>
        <label for="check1">
            <slot/>
        </label>
    </div>
</template>

<style scoped lang="sass">
.checkbox
    display: flex
    align-items: flex-start
    gap: 8px
    text-align: left
    color: #666666


.custom-checkbox
    appearance: none
    -webkit-appearance: none
    -moz-appearance: none
    -ms-appearance: none
    position: absolute
    height: 16px
    width: 16px
    border: 1px solid #E8E8E8
    border-radius: 4px
    opacity: 0

.checkbox
    label
        position: relative
        padding-left: 30px
        cursor: pointer
        &::before
            content: ""
            position: absolute
            left: 0
            height: 16px
            width: 16px
            background-color: #F6F6F6
            border: 1px solid #E8E8E8
            border-radius: 4px
        &::after
            content: ""
            position: absolute
            height: 8px
            width: 3.5px
            border-right: 2px solid white
            border-bottom: 2px solid white
            top: 3px
            left: 6px
            transform: rotate(45deg)
            opacity: 0

.custom-checkbox:checked
    & + label
        &::before
            border: 1px solid #4B9460
            background-color: #5DB075
        &::after
            opacity: 1
</style>