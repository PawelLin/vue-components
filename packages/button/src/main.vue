<template>
    <button @click="handleClick" class="pw-button pw-button-primary">按钮</button>
</template>

<script type="text/babel">
import '../../themes/button.scss'
export default {
    name: 'PwButton',
    methods: {
        handleClick () {
            alert(2)
        }
    }
}
</script>

<style lang="scss">
.p-button {
    background-color: transparent;
}
</style>
