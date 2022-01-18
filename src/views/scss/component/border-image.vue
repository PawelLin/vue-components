<template>
    <div class="mini-border">
        <div class="border" :style="{ borderImageSlice, borderImageRepeat }"></div>
        <div class="contain">
            <ul class="img">
                <li :style="{ top: top + 'px' }"></li>
                <li :style="{ right: right + 'px' }"></li>
                <li :style="{ bottom: bottom + 'px' }"></li>
                <li :style="{ left: left + 'px' }"></li>
            </ul>
            <div>
                <input v-model="top" type="number" />
                <input v-model="right" type="number" />
                <input v-model="bottom" type="number" />
                <input v-model="left" type="number" />
                <select v-model="borderImageRepeat">
                    <option value="round">round</option>
                    <option value="stretch">stretch</option>
                </select>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data () {
        return {
            top: '26',
            right: '26',
            bottom: '26',
            left: '26',
            borderImageRepeat: 'round'
        }
    },
    computed: {
        borderImageSlice () {
            return `${this.top} ${this.right} ${this.bottom} ${this.left}`
        }
    }
}
</script>

<style lang="scss" scoped>
.mini-border {
    > .border {
        padding: 10px 20px;
        border: 15px solid transparent;
        border-image-source: url('~@/assets/border.png');
        border-image-repeat: round;
    }
    > .contain {
        margin-top: 10px;
        display: flex;
        > .img {
            position: relative;
            margin-top: 5px;
            width: 78px;
            height: 78px;
            background: url('~@/assets/border.png');
            > li {
                position: absolute;
                &:nth-child(2n + 1) {
                    width: 100%;
                    border-top: 1px dashed black;
                }
                &:nth-child(2n) {
                    height: 100%;
                    border-left: 1px dashed black;
                }
            }
        }
        > div {
            margin-left: 10px;
            flex: 1;
        }
    }
}
</style>
