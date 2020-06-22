<template>
    <div id="app">
        <p class="title">button</p>
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
                <pw-pie-chart />
            </div>
        </div>
    </div>
</template>

<script>

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
body {
    background-color: #f7f8fa;
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
</style>
