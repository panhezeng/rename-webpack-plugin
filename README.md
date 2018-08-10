# rename-webpack-plugin

## 说明

用于更改webpack输出后的文件名

参数
{naming, p1, p2}

naming是naming convention的方法名，见[change-case](https://www.npmjs.com/package/change-case)说明，naming for changeCase\[naming](str)

p1, p2则是String类的replace方法的两个参数 str.replace(regexp|substr, newSubstr|function)

传了naming可以不传p1, p2，传了p1, p2，可不传naming

## 用法

`npm i @panhezeng/rename-webpack-plugin -D`

```javascript
const RenameWebpackPlugin = require('@panhezeng/rename-webpack-plugin')

module.exports = {
  plugins: [
    new RenameWebpackPlugin({naming: 'pascalCase'})
  ]
}
// file-name.js => FileName.js
```

## 感谢

"dcatfly <dcatfly@gmail.com> (https://github.com/Dcatfly/rename-webpack-plugin)"


# 发版
npm version patch && npm publish --access public
