const loaderUtils = require('loader-utils')
const { transform } = require('unplugin-vue2-script-setup')

module.exports = function loader(content, map, meta) {
  const callback = this.async()
  transform(content, this.resourcePath, loaderUtils.getOptions(this)).then(result => {
    if (result) {
      callback(null, result.code, result.map, meta)
    } else {
      callback(null, content, map, meta)
    }
  }, err => {
    callback(err)
  })
}
