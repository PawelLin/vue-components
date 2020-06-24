<template>
    <div ref="canvasDiv">
        <canvas ref="canvas"></canvas>
        <button @click="reDraw">重画</button>
    </div>
</template>

<script>
import '../../themes/clock.scss'

export default {
    name: 'PwClock',
    props: {
        scale: {
            type: Number,
            default: 0.8
        },
        color: {
            type: String,
            default: '#3d4051'
        },
        // 阴影模糊面积
        shadowBlur: {
            type: Number,
            default: 10
        }
    },
    data () {
        return {
        }
    },
    beforeCreate () {
    },
    created () {
    },
    mounted () {
        const canvas = this.canvas = this.$refs.canvas
        this.ctx = canvas.getContext('2d')
        this.size = (window.devicePixelRatio || 1) / (this.ctx.backingStorePixelRatio ||
            this.ctx.webkitBackingStorePixelRatio ||
            this.ctx.mozBackingStorePixelRatio ||
            this.ctx.msBackingStorePixelRatio ||
            this.ctx.oBackingStorePixelRatio || 1)
        const width = this.$refs.canvasDiv.offsetWidth || document.body.offsetWidth
        canvas.style.width = width + 'px'
        canvas.style.height = width + 'px'
        canvas.width = width * this.size
        canvas.height = width * this.size
        this.centerX = canvas.width / 2
        this.centerY = canvas.height / 2
        this.width = canvas.width * this.scale
        this.height = canvas.height * this.scale
        this.dandelionHeight = this.height / 4
        this.minuteHeight = this.dandelionHeight / 9
        // this.drawCircle()
        this.drawMinute()
        this.drawDandelion()
    },
    methods: {
        // 绘制分钟刻度
        drawMinute () {
            const ctx = this.ctx
            const centerX = this.centerX
            const centerY = this.centerY
            const radius = this.height / 2
            ctx.save()
            ctx.translate(centerX, centerY)
            ctx.strokeStyle = this.color
            for (let i = 0; i < 360; i += 6) {
                if (i && i % 5 !== 0) {
                    ctx.save()
                    ctx.lineWidth = 2
                    ctx.rotate(i / 180 * Math.PI)
                    ctx.beginPath()
                    ctx.moveTo(0, -radius)
                    ctx.lineTo(0, -radius + this.minuteHeight)
                    ctx.stroke()
                    ctx.restore()
                } else {
                    ctx.save()
                    ctx.lineWidth = 1
                    ctx.rotate(i / 180 * Math.PI)
                    ctx.beginPath()
                    ctx.moveTo(0, -radius + this.minuteHeight / 2)
                    ctx.lineTo(0, -radius + this.dandelionHeight)
                    ctx.stroke()
                    ctx.restore()
                }
            }
            ctx.restore()
        },
        // 绘制蒲公英
        drawDandelion () {
            const ctx = this.ctx
            const radius = this.minuteHeight / 2
            const points = this.getPoints(this.centerX, this.centerY, this.height / 2 - radius, 12)
            ctx.save()
            ctx.strokeStyle = this.color
            ctx.lineWidth = 1
            points.forEach(({ x, y }, index) => {
                const initAngle = index * 30
                const angle = 360 / (index || 12)
                const extraAngle = (index % 2) ? 0 : angle / 2
                if (index !== 2) {
                    for (let i = 0; i < 360 / angle; i++) {
                        ctx.save()
                        ctx.beginPath()
                        ctx.translate(x, y)
                        ctx.rotate((initAngle + i * angle - extraAngle) / 180 * Math.PI)
                        ctx.moveTo(0, -radius)
                        ctx.lineTo(0, 0)
                        ctx.stroke()
                        ctx.restore()
                    }
                } else {
                    ctx.save()
                    ctx.beginPath()
                    ctx.translate(x, y)
                    ctx.rotate((initAngle + 45) / 180 * Math.PI)
                    ctx.moveTo(0, -radius)
                    ctx.lineTo(0, 0)
                    ctx.stroke()
                    ctx.restore()
                    ctx.save()
                    ctx.beginPath()
                    ctx.translate(x, y)
                    ctx.rotate((initAngle - 45) / 180 * Math.PI)
                    ctx.moveTo(0, -radius)
                    ctx.lineTo(0, 0)
                    ctx.stroke()
                    ctx.restore()
                }
                // }
            })
            ctx.restore()
        },
        drawCircle () {
            const ctx = this.ctx
            const centerX = this.centerX
            const centerY = this.centerY
            const radius = this.height / 2
            ctx.beginPath()
            ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI)
            ctx.closePath()
            ctx.stroke()
        },
        // 重绘
        reDraw () {
            if (this.animateSize === 360) {
                this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height)
                this.animateSize = 0
                this.animateIndex = 0
                this.start = 0
                this.end = 0
                this.drawPie()
            }
        },
        getPoints (ox, oy, r, count) {
            const points = []
            const radians = (Math.PI / 180) * Math.round(360 / count) // 弧度
            const middle = Math.floor(count / 2) + 1
            for (let i = 0; i < count; i++) {
                const x = ox + r * Math.sin(radians * i)
                const y = oy + r * Math.cos(radians * i)
                points.push({ x, y })
            }
            return points.slice(0, middle).reverse().concat(points.slice(middle, count).reverse())
        },
        requestAnimationFrame (func) {
            if (window.requestAnimationFrame) {
                window.requestAnimationFrame(func)
            } else {
                setTimeout(func, 1000 / 60)
            }
        }
    }
}
</script>
