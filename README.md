# vue2-script-setup-loader

Bring [`<script setup>`](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to Vue 2.

It's really just another wrapper for [`unplugin-vue2-script-setup`](https://github.com/antfu/unplugin-vue2-script-setup).

### Why not just use `unplugin-vue2-script-setup` ?

Because Unplugin uses non-serializable loader options when adding functionality to Webpack, which will cause the worker of `thread-loader` to not work properly (e.g. with the default configuration of the Vue CLI).

Fortunately, it can be avoided by using a loader that is handled completely independently, and it is especially easy since `unplugin-vue2-script-setup` only uses the `transform` API. The only caveat is that you may need to manage the files you wish to transform manually, including `.vue` or `.js/ts` files.

## Installation

```shell
npm install -D vue2-script-setup-loader
npm i @vue/composition-api
```

Install [`@vue/composition-api`](https://github.com/vuejs/composition-api) in your App's entry (it enables the `setup()` hook):

```javascript
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
```

## Usage

```javascript
// webpack.config.js
module.exports = {
  // ...
  module: {
    rules: [
      {
        test: /\.vue$/i,
        use: [
          {
            loader: 'vue-loader',
          },
          // Add it here
          {
            loader: 'vue2-script-setup-loader',
          },
        ],
      },
    ],
  },
}
```
