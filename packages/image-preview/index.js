import ImagePreview from './src/main'

/* istanbul ignore next */
ImagePreview.install = function (Vue) {
    Vue.component(ImagePreview.name, ImagePreview)
}

export default ImagePreview
