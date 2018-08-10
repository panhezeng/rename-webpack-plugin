import changeCase from 'change-case'

export class RenameWebpackPlugin {
  /**
   * options {naming, p1, p2} naming for changeCase[naming](str)  p1, p2 for str.replace(regexp|substr, newSubstr|function)
   * @param options
   */
  constructor (options) {
    this.options = options
  }

  apply (compiler) {

    const emit = (compilation, callback) => {

      let naming
      let p1
      let p2

      if (Object.prototype.toString.call(this.options) === '[object Object]') {
        if (this.options.naming) {
          naming = this.options.naming
        }
        if (this.options.p1) {
          naming = this.options.p1
        }
        if (this.options.p2) {
          naming = this.options.p2
        }
      }

      // 如果是naming convention模式或者自定义替换模式
      if (naming || (p1 && p2)) {
        const {assets} = compilation

        let files = Object.keys(assets)

        files.forEach(fileName => {
          if (p1 && !new RegExp(p1).test(fileName)) {
            return
          }
          let name
          if (naming) {
            const array = fileName.split('.')
            name = changeCase[naming](array.shift())
            if (array.length && array[0]) {
              name += '.'
            }
            name += array.join('.')
          } else {
            name = fileName.replace(p1, p2)
          }
          if (name !== fileName) {
            assets[name] = assets[fileName]
            delete assets[fileName]
          }
        })
      }

      callback()
    }

    // webpack4以上使用hooks
    if (compiler.hooks) {
      compiler.hooks.emit.tapAsync('RenameWebpackPlugin', emit)
    } else {
      compiler.plugin('emit', emit)
    }
  }
}
