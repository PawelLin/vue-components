<template>
    <input @change="handChange" class="pw-input" :placeholder="placeholder"></input>
</template>

<script type="text/babel">
import '../../themes/input.scss'
export default {
    name: 'PwInput',
    props: {
        placeholder: {
            type: String,
            default: '请输入'
        }
    },
    methods: {
        handChange () {
            console.log(123)
        }
    }
}
</script>
