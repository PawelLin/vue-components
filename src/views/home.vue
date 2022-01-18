<template>
    <section class="home">
        <h3>菜单</h3>
        <ul class="menu">
            <li>
                <router-link to="/vue-pawel-ui">vue-pawel-ui 组件</router-link>
                <pw-icon icon="arrow-right" />
            </li>
            <li>
                <router-link to="/scss">自定义scss</router-link>
                <pw-icon icon="arrow-right" />
            </li>
        </ul>
    </section>
</template>
<script>
export default {
    name: 'Home'
}
</script>

<style lang="scss" scoped>
.home {
    padding: 0 20px 20px;
    height: 100%;
    background-color: #ffffff;
    > h3 {
        text-align: center;
        line-height: 60px;
    }
    .title {
        margin: 24px 0 8px 16px;
        color: rgba(69, 90, 100, 0.6);
        font-size: 14px;
    }
    .menu {
        > li {
            position: relative;
            padding: 0 16px 0 20px;
            line-height: 40px;
            background-color: #f7f8fa;
            border-radius: 99px;
            > a {
                display: block;
                color: #323233;
            }
            > i {
                position: absolute;
                top: 0;
                right: 16px;
            }
            & + li {
                margin-top: 12px;
            }
            &:active {
                background-color: #eef0f4;
            }
        }
    }
}
</style>
