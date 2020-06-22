<template>
    <div @click="handlePreviewHide" v-show="show" class="pw-image-preview" style="display: none;">
        <span>{{active + 1}} / {{imagesLength}}</span>
        <div :style="{ transform: 'translateX(' + translateX + 'px)', transition: transition ? 'transform 300ms' : '' }">
            <div v-for="(img, index) in list"
                :style="{
                    transform: 'translateX(' + (img.style.translateX || 0) + 'px) ' + 'translateY(' + (img.style.translateY || 0) + 'px) ' + 'scale(' + (img.style.scale || 1) + ') translateZ(0)',
                    transition: img.style.transition ? 'transform 300ms' : ''
                }"
                :key="img + index"
            >
                <img :src="img.src" @touchstart="handleMousedown" @touchmove="handleMousemove" @touchend="handleMouseup" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import '../../themes/imagePreview.scss'
function getDistance (touches) {
    return Math.sqrt(
        (touches[0].clientX - touches[1].clientX) ** 2 +
        (touches[0].clientY - touches[1].clientY) ** 2
    )
}
export default {
    name: 'PwImagePreview',
    model: {
        prop: 'show',
        event: 'change'
    },
    props: {
        show: {
            type: Boolean,
            default: false
        },
        startPosition: {
            type: Number,
            default: 0
        },
        images: {
            type: Array,
            default () {
                return []
            }
        }
    },
    data () {
        return {
            list: [],
            translateX: 0,
            transition: false,
            active: 0,
            scale: 1
        }
    },
    computed: {
        imagesLength () {
            return this.images.length
        },
        imagesIndexLength () {
            return this.images.length - 1
        }
    },
    watch: {
        show (show) {
            if (show) {
                this.handlePreview(this.startPosition)
            }
        },
        images: {
            handler (images) {
                this.list = images.map(item => ({ src: item, style: { scale: 1, translateX: 0, translateY: 0 } }))
            },
            immediate: true,
            deep: true
        }
    },
    beforeCreate: function () {
        this.width = window.innerWidth
        this.height = window.innerHeight
        this.whRatio = this.width / this.height
    },
    methods: {
        handlePreview (index) {
            this.active = index
            this.translateX = this.active * -this.width
        },
        handlePreviewHide (e) {
            this.$emit('change', false)
            this.handleMouseup(e)
        },
        handleMousedown (e) {
            if (e.touches.length === 1) {
                setTimeout(() => {
                    if (!this.canZoom) {
                        if (this.list[this.active].style.scale === 1) {
                            this.startMove(e)
                        } else {
                            this.startMoveZoom(e)
                        }
                    }
                }, 0)
            } else if (e.touches.length === 2) {
                this.startZoom(e)
            }
        },
        handleMousemove (e) {
            e.preventDefault()
            if (e.touches.length === 1) {
                setTimeout(() => {
                    if (!this.canZoom) {
                        if (this.list[this.active].style.scale === 1) {
                            this.touchMove(e)
                        } else {
                            this.touchMoveZoom(e)
                        }
                    }
                }, 0)
            } else if (e.touches.length === 2) {
                this.touchZoom(e)
            }
        },
        handleMouseup (e) {
            if (this.canZoom) {
                this.endZoom(e)
            } else {
                if (this.canMove) {
                    this.endMove(e)
                }
                if (this.canMoveZoom) {
                    this.canMoveZoom = false
                }
            }
        },
        startMove (e) {
            this.startTime = new Date().getTime()
            e.clientX = e.touches[0].clientX
            this.x = e.clientX
            this.l = this.translateX
            this.transition = false
            if (this.list[0].style.translateX && this.active === 0) {
                this.l = this.translateX = 0
                this.list[0].style.translateX = 0
            }
            if (this.list[this.imagesIndexLength].style.translateX && this.active === (this.imagesIndexLength)) {
                this.l = this.translateX = -this.width * (this.imagesIndexLength)
                this.list[this.imagesIndexLength].style.translateX = 0
            }
            this.canMove = true
        },
        touchMove (e) {
            if (!this.canMove) return
            e.clientX = e.touches[0].clientX
            this.toRight = e.clientX - this.x > 0
            // 鼠标移动前后距离差 + 拖动div原有的位置
            this.translateX = e.clientX - this.x + this.l
            if (this.imagesLength > 1) {
                if (this.active === 0 && this.toRight) {
                    this.list[this.imagesIndexLength].style.translateX = -this.width * this.imagesLength
                } else if (this.active === (this.imagesIndexLength) && !this.toRight) {
                    this.list[0].style.translateX = this.width * this.imagesLength
                } else {
                    this.list[0].style.translateX = 0
                    this.list[this.imagesIndexLength].style.translateX = 0
                }
            }
        },
        endMove (e) {
            var isQuick = ((new Date().getTime() - this.startTime) / 1000) < 0.3
            var toNext = Math.abs(this.l - this.translateX) > (this.width / 2)
            var next = toNext || isQuick
            if (this.imagesLength > 1) {
                if (this.active === 0 && this.toRight) {
                    this.active = next ? this.imagesIndexLength : 0
                    this.translateX = next ? this.width : 0
                } else if (this.active === (this.imagesIndexLength) && !this.toRight) {
                    this.active = next ? 0 : this.imagesIndexLength
                    this.translateX = next ? -this.width * this.imagesLength : -this.width * this.imagesIndexLength
                } else {
                    this.active = next ? (this.toRight ? this.active - 1 : this.active + 1) : this.active
                    this.translateX = this.active * -this.width
                }
            } else {
                this.translateX = 0
            }
            this.transition = true
            this.canMove = false
        },
        startZoom (e) {
            const scale = this.list[this.active].style.scale
            this.list[this.active].style.transition = false
            this.startDistance = getDistance(e.touches)
            this.startScale = scale
            if (this.list[this.active].style.scale === 1) {
                this.list[this.active].style.startTranslateX = this.list[this.active].style.translateX
            }
            this.list[this.active].style.translateX = this.list[this.active].style.startTranslateX
            this.list[this.active].style.translateY = 0
            this.canZoom = true
        },
        touchZoom (e) {
            if (!this.canZoom) return
            const distance = getDistance(e.touches)
            const scale = this.startScale * distance / this.startDistance
            this.list[this.active].style.scale = Math.min(Math.max(scale, 1 / 3), 3)
        },
        endZoom (e) {
            if (this.list[this.active].style.scale < 1) {
                this.list[this.active].style.transition = true
                this.list[this.active].style.translateX = this.list[this.active].style.startTranslateX
                this.list[this.active].style.scale = 1
            }
            setTimeout(() => {
                this.list[this.active].style.transition = false
            }, 300)
            this.canZoom = false
        },
        startMoveZoom (e) {
            e.clientX = e.touches[0].clientX
            e.clientY = e.touches[0].clientY
            this.x = e.clientX
            this.y = e.clientY
            this.l = this.list[this.active].style.translateX
            this.t = this.list[this.active].style.translateY
            if (!this.list[this.active].style.width) {
                this.getImgWH(this.list[this.active].src)
            }
            this.canMoveZoom = true
        },
        touchMoveZoom (e) {
            if (!this.canMoveZoom) return
            e.clientX = e.touches[0].clientX
            e.clientY = e.touches[0].clientY
            const imgStyle = this.list[this.active].style
            const imgWidth = imgStyle.width * imgStyle.scale
            const imgHeight = imgStyle.height * imgStyle.scale
            let init = 0
            let limit = 0
            let distance = 0
            if (imgWidth > this.width) {
                init = Math.abs(this.list[this.active].style.startTranslateX || 0)
                limit = Math.abs(imgWidth - this.width) / 2
                distance = Math.min(Math.max(e.clientX - this.x + this.l, -limit + init), limit + init)
                this.list[this.active].style.translateX = distance
            }
            if (imgHeight > this.height) {
                limit = Math.abs(imgHeight - this.height) / 2
                distance = Math.min(Math.max(e.clientY - this.y + this.t, -limit), limit)
                this.list[this.active].style.translateY = distance
            }
        },
        getImgWH (src) {
            const img = new Image()
            img.src = src
            const imgRatio = img.width / img.height
            if (imgRatio < this.whRatio) {
                this.list[this.active].style.height = this.height
                this.list[this.active].style.width = this.height * imgRatio
            } else {
                this.list[this.active].style.width = this.width
                this.list[this.active].style.height = this.width / imgRatio
            }
        }
    }
}
</script>
