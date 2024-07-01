<script setup>
import {ref} from 'vue'
defineProps({
    placeholder: String,
    password: Boolean,
    isSearch: Boolean
})

const hidePassword = ref(true);

const inputValue = ref("");

const togglePassword = () => {
    hidePassword.value = !hidePassword.value;
}

// инпут имеет три состояния : text, search и password, у последнего есть доп кнопка show которая меняет тип на text

// все состояния передаются пропсами !

</script>

<template>
    <div class="input-container">
        <input
            :type="password && hidePassword ? 'password' : 'text'"
            :placeholder="placeholder"
            :class="{ search: isSearch }"
            v-model="inputValue"
        >
        <p
            v-if="password && inputValue !== '' "
            @click="togglePassword"
            class="show"
        >
            Show
        </p>
    </div>
</template>

<style lang="sass" scoped>
    .input-container
        position: relative
        display: flex
        input
            padding: 16px
            width: 100%
            border: 1px solid #E8E8E8
            border-radius: 10px
            background-color: #F6F6F6
            color: black
            &:focus
                outline: none
                border: 1px solid #5DB075
        .show
            position: absolute
            top: 18px
            right: 16px
            margin: 0
            line-height: 100%
            color: green
            font-weight: 500
            cursor: pointer
        .search
            border-radius: 50px
</style>