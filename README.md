# vue-components

### Install
```
npm i vue-pawel-ui -S
```

### Import all components
```
import Vue from 'vue'
import pawelUI from 'vue-pawel-ui'
import 'vue-pawel-ui/lib/themes/index.css'

Vue.use(pawelUI)
```

### Manually import
```
// Install plugin
npm i babel-plugin-import -D

// For users who use babel7, that can be configured in babel.config.js
module.exports = {
    plugins: [
        [
            'component',
        {
            libraryName: 'vue-pawel-ui',
            styleLibrary: {
            name: 'themes'
            }
        },
            'vue-pawel-ui'
        ]
    ]
}

// Then you can import components from vue-pawel-ui
import Vue from 'vue'
import { Button, ImagePreview } from 'vue-pawel-ui'

Vue.use(Button)
Vue.use(ImagePreview)
```
