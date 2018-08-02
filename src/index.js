import changeCase from 'change-case'

export default class RenameWebpackPlugin {
  /**
   * options {naming, p1, p2} naming for changeCase[naming](str)  p1, p2 for str.replace(regexp|substr, newSubstr|function)
   * @param options
   */
  constructor (options) {
    this.options = options
  }

  apply (compiler) {

    const emit = (compilation, callback) => {

      const {naming, p1, p2} = this.options

      // 如果是naming convention模式或者自定义替换模式
      if (naming || (p1 && p2)) {
        const {assets} = compilation

        let files = Object.keys(assets)

        files.forEach(fileName => {
          if (p1 && !new RegExp(p1).test(fileName)) {
            return
          }
          console.log()
          if (naming) {
            const array = fileName.split('.')
            let name = changeCase[naming](array.shift())
            if (array.length && array[0]) {
              name += '.'
            }
            name += array.join('.')
            assets[name] = assets[fileName]
          } else {
            assets[fileName.replace(p1, p2)] = assets[fileName]
          }
          delete assets[fileName]
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
