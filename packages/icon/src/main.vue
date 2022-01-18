<template>
    <i class="iconfont" :class="iconClass" :style="{ color }"></i>
</template>

<script>
import '../../themes/icon.scss'
export default {
    name: 'PwIcon',
    props: {
        icon: {
            type: String,
            default: ''
        },
        color: {
            type: String,
            default: '#b6c3d2'
        }
    },
    computed: {
        iconClass () {
            return (this.icon && 'icon-' + this.icon) || ''
        }
    }
}
</script>
