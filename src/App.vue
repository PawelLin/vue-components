<template>
    <div id="app">
        <router-view></router-view>
        <!-- <p class="title">button</p>
        <div class="contain">
            <pw-button />
        </div>
        <p class="title">input</p>
        <div class="contain">
            <pw-input />
        </div>
        <p class="title">image-preview</p>
        <div class="contain">
            <div>
                <img @click="showPreview(index)" v-for="(item, index) in images" :src="item" :alt="item" :key="item + index" width="80">
            </div>
            <pw-image-preview v-model="show" :images="images" :startPosition="startPosition"></pw-image-preview>
        </div>
        <p class="title">pie-chart</p>
        <div class="contain pie-chart">
            <div>
                <pw-pie-chart background-color="#f9c" />
            </div>
        </div>
        <p class="title">clock</p>
        <div class="contain clock">
            <pw-clock />
        </div> -->
    </div>
</template>

<script>

import lunar from '@/lib/lunar.js'
import solarLunar from '@/lib/solarLunar.js'

export default {
    name: 'App',
    components: {

    },
    data () {
        return {
            show: false,
            images: [
                'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/152/152-bigskin-4.jpg',
                'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/141/141-bigskin-4.jpg',
                'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/176/176-bigskin-2.jpg',
                'http://game.gtimg.cn/images/yxzj/img201606/skin/hero-info/523/523-bigskin-2.jpg'
            ],
            startPosition: 0
        }
    },
    created () {
        const date = new Date('2020/01/01')
        const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
        console.log(date.toLocaleString())
        console.log(lunar.solarToLunar(year, month, day))
        console.log(solarLunar.solar2lunar(year, month, day))
        for (let i = 1; i < 365 * 5; i++) {
            date.setDate(date.getDate() + 1)
            const [year, month, day] = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
            const result = solarLunar.solar2lunar(year, month, day)
            if (result.isTerm) {
                console.log(year, month, day, result.term)
            }
        }
    },
    methods: {
        showPreview (index) {
            this.startPosition = index
            this.show = true
        }
    }
}
</script>

<style lang="scss">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
html, body, #app {
    height: 100%;
}
body {
    background-color: #f7f8fa;
}
ul, li {
    list-style: none;
}
a {
    text-decoration: none;
}
</style>
<style lang="scss" scoped>
.title {
    padding: 15px 15px 5px;
    color: #666;
}
.contain {
    padding: 15px;
    background-color: #ffffff;
}
.pie-chart {
    > div {
        margin: auto;
        width: 50%;
    }
}
.clock {
    > div {
        margin: auto;
        width: 70%;
    }
}
.example {
    @include mini-border(bottom);
}
.example1 {
    border-bottom: 1px solid #00b1ff;
}
</style>
