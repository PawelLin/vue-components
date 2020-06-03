module.exports = {
    presets: [
        '@vue/cli-plugin-babel/preset'
    ],
    plugins: [
        [
            'component',
            {
                libraryName: 'element-ui',
                styleLibraryName: 'theme-chalk'
            },
            'element-ui'
        ],
        [
            'component',
            {
                libraryName: 'vue-pawel-ui',
                styleLibrary: {
                    name: 'themes',
                    base: false
                }
            },
            'vue-pawel-ui'
        ]
    ]
}
