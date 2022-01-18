<script type="text/babel">
import '../../themes/steps.scss'
export default {
    name: 'PwSteps',
    props: {
        data: {
            type: Array,
            default () {
                return []
            }
        }
    },
    render (h) {
        return h('div', {
            class: 'steps'
        }, this.data.map((item, index) => {
            const tag = item.active ? 'div' : 'section'
            return h(tag, {
                class: {
                    item: true,
                    active: item.active
                },
                on: {
                    click: () => {
                        item.active = !item.active
                    }
                }
            }, [
                h('div', {
                    class: 'icon'
                }),
                h('div', {
                    class: 'contain'
                }, item.title)
            ])
        }))
    },
    data () {
        return {
        }
    },
    created () {
    },
    methods: {
    }
}
</script>
