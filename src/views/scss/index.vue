<template>
    <section class="scss">
        <h3>scss</h3>
        <ul class="menu">
            <li v-for="item in list" :key="item.title">
                <div @click="setActive(item)" class="title" :class="item.active ? 'active' : ''">
                    <span>{{item.title}}</span>
                    <pw-icon icon="arrow-right" />
                </div>
                <div v-if="item.active !== ''" v-show="item.active" class="contain">
                    <component :is="item.component"></component>
                </div>
            </li>
        </ul>
    </section>
</template>

<script>
import components from './component'
export default {
    name: 'Scss',
    components,
    data () {
        return {
            active: '',
            list: [
                {
                    active: true,
                    title: '1px边框',
                    component: 'miniBorder'
                },
                {
                    active: true,
                    title: 'border-image',
                    component: 'borderImage'
                }
            ]
        }
    },
    created () {
    },
    methods: {
        setActive (item) {
            item.active = !item.active
        }
    }
}
</script>

<style lang="scss" scoped>
.scss {
    padding: 0px 20px 20px;
    min-height: 100%;
    background-color: #ffffff;
    > h3 {
        text-align: center;
        line-height: 60px;
    }
    .menu {
        > li {
            > .title {
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
                &:active {
                    background-color: #eef0f4;
                }
                &.active {
                    border-radius: 19px;
                    border-bottom-left-radius: inherit;
                    border-bottom-right-radius: inherit;
                }
            }
            .contain {
                padding: 10px 20px 20px;
                background-color: #f7f8fa;
                border-bottom-left-radius: 19px;
                border-bottom-right-radius: 19px;
            }
            & + li {
                margin-top: 12px;
            }
        }
    }
}
</style>
