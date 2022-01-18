<template>
    <div class="pw-slide-number">
        <span :style="{ transform: `translateX(-50%) translateY(${translateY})` }">0123456789</span>
    </div>
</template>

<script type="text/babel">
import '../../themes/slideNumber.scss'
export default {
    name: 'PwSlideNumber',
    props: {
        value: {
            type: Number,
            default: 0
        }
    },
    data () {
        return {
            translateY: 0
        }
    },
    watch: {
        value: {
            handler () {
                this.$nextTick(() => {
                    this.translateY = `-${this.value * 10}%`
                })
            },
            immediate: true
        }
    }
}
</script>
