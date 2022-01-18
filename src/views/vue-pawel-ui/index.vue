<template>
    <section class="vue-pawel-ui">
        <h3>vue-pawel-ui</h3>
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
export default {
    name: 'VuePawelUi',
    data () {
        return {
            active: 'scroll-table',
            list: [
                {
                    active: '',
                    title: '环形饼图 - pie-chart',
                    component: {
                        render: h => h('div', [
                            this.$createElement('pw-pie-chart', {
                                props: { spaceColor: '#f7f8fa' },
                                ref: 'pwPieChart'
                            }),
                            h('button', {
                                on: {
                                    click: () => this.$refs.pwPieChart.reDraw()
                                }
                            }, '重画')
                        ])
                    }
                },
                {
                    active: '',
                    title: '蒲公英时钟 - clock',
                    component: {
                        render: h => h('div', [
                            this.$createElement('pw-clock', {
                                ref: 'pwClock'
                            }),
                            h('button', {
                                on: {
                                    click: () => this.$refs.pwClock.reDraw()
                                }
                            }, '重画')
                        ])
                    }
                },
                {
                    active: '',
                    title: '滚动表格 - scroll-table',
                    component: {
                        render: h => h('pw-scroll-table', {
                            props: {
                                maxlengthKey: 'name',
                                columns: [
                                    { title: '居中', key: 'index' },
                                    { title: '左对齐&居中', key: 'name' },
                                    { title: '右对齐&居中', key: 'age' }
                                ],
                                list: Array.from(Array(15)).map((item, index) => ({ index, name: `姓名${index}`, age: index }))
                            },
                            style: {
                                height: '52vw'
                            }
                        })
                    }
                },
                {
                    active: '',
                    title: '步骤条 - steps',
                    component: {
                        render: h => h('pw-steps', {
                            props: {
                                data: this.steps
                            }
                        })
                    }
                },
                {
                    active: true,
                    title: '进度环 - circular-progress',
                    component: {
                        render: h => h('div', [
                            h('pw-circular-progress', {
                                props: this.circularProgressProps,
                                style: {
                                    position: 'relative'
                                },
                                scopedSlots: {
                                    default: props => h('pw-calc-number', {
                                        props: {
                                            value: Number(Number(this.circularProgressProps.percent * 100).toFixed(2)),
                                            fixed: 2,
                                            minSeed: 0.01
                                        },
                                        style: {
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -60%)',
                                            fontSize: '60px'
                                        }
                                    })
                                }
                            }),
                            h('div', [
                                h('button', {
                                    attrs: {
                                        disabled: this.circularProgressProps.percent >= 1
                                    },
                                    on: {
                                        click: () => this.changePercent('+')
                                    }
                                }, '+'),
                                h('button', {
                                    attrs: {
                                        disabled: this.circularProgressProps.percent <= 0
                                    },
                                    on: {
                                        click: () => this.changePercent('-')
                                    }
                                }, '-')
                            ])
                        ])
                    }
                },
                {
                    active: true,
                    title: '动画数字 - animate-number',
                    component: {
                        render: h => h('div', [
                            h('div', [
                                h('pw-slide-number', {
                                    props: this.slideNumberProps,
                                    style: {
                                        verticalAlign: 'middle'
                                    }
                                }),
                                ...Array.from(Array(10)).map((num, index) => h('button', {
                                    on: {
                                        click: () => this.changeNumber(index)
                                    }
                                }, index))
                            ]),
                            h('div', [
                                h('pw-calc-number', {
                                    props: this.calcNumberProps
                                }),
                                h('button', {
                                    on: {
                                        click: this.changeCalcNumber
                                    }
                                }, this.calcNumberProps.value)
                            ])
                        ])
                    }
                }
            ],
            steps: [
                { title: '步骤1', active: true },
                { title: '步骤2', active: true },
                { title: '步骤3-点击可改变active状态', active: true },
                { title: '步骤4', active: true },
                { title: '步骤5', active: false },
                { title: '步骤6', active: false }
            ],
            circularProgressProps: {
                percent: 0.2112
            },
            slideNumberProps: {
                value: 0
            },
            calcNumberProps: {
                value: 0
            }
        }
    },
    created () {
    },
    methods: {
        setActive (item) {
            item.active = !item.active
        },
        changePercent (calc) {
            let percent = this.circularProgressProps.percent
            percent = calc === '+' ? percent + 0.2112 : percent - 0.2112
            percent = percent > 1 && this.circularProgressProps.percent < 1 ? 1 : percent
            this.circularProgressProps.percent = percent > 1 || percent < 0 ? 0 : Number(percent.toFixed(4))
        },
        changeNumber (number) {
            this.slideNumberProps.value = number
        },
        changeCalcNumber () {
            this.calcNumberProps.value = Math.floor(Math.random() * 100)
        }
    }
}
</script>

<style lang="scss" scoped>
.vue-pawel-ui {
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
                padding: 0 20px 20px;
                background-color: #f7f8fa;
                border-bottom-left-radius: 19px;
                border-bottom-right-radius: 19px;
            }
            & + li {
                margin-top: 12px;
            }
        }
    }
    ::v-deep button {
        min-width: 20px;
        min-height: 20px;
        & + button {
            margin-left: 5px;
        }
    }
}
</style>
