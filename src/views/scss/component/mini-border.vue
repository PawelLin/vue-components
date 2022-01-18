<template>
    <div class="mini-border">
        <ul class="border">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
    </div>
</template>

<script>
export default {
    created () {
    }
}
</script>

<style lang="scss" scoped>
.mini-border {
    > .border {
        display: flex;
        > li {
            width: 40px;
            height: 40px;
            & + li {
                margin-left: 10px;
            }
        }
        > li:first-child {
            @include mini-border(bottom);
        }
        > li:nth-child(2) {
            @include mini-border1(bottom);
        }
        > li:nth-child(3) {
            position: relative;
            &:before, &:after {
                content: '';
                position: absolute;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                border: 1px solid transparent;
            }
            &:before {
                border-image: svg(1px-border) 2 stretch;
            }
            &:after {
                border-image: svg(1px-border2) 2 stretch;
            }
        }
        > li:nth-child(4) {
            border: 1px solid black;
        }
    }
}
</style>
