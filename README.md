# rename-webpack-plugin

## 说明

用于更改 webpack 输出后的文件名

参数
{naming, p1, p2}

naming 是 naming convention 的方法名，见[change-case](https://www.npmjs.com/package/change-case)说明，naming for changeCase\[naming](str)

p1, p2 则是 String 类的 replace 方法的两个参数 str.replace(regexp|substr, newSubstr|function)

传了 naming 可以不传 p1, p2，传了 p1, p2，可不传 naming

## 用法

`npm i @panhezeng/rename-webpack-plugin -D`

```javascript
const RenameWebpackPlugin = require("@panhezeng/rename-webpack-plugin");

module.exports = {
  plugins: [new RenameWebpackPlugin({ naming: "pascalCase" })]
};
// file-name.js => FileName.js
```

## 感谢

"dcatfly <dcatfly@gmail.com> (https://github.com/Dcatfly/rename-webpack-plugin)"

## 编译

```bash
# install dependencies
npm install

# 编译插件
npm run build

# 发版
npm set registry https://registry.npmjs.org/ && npm set @panhezeng:registry https://registry.npmjs.org/ && npm version patch && npm publish --access public && npm set registry https://registry.npm.taobao.org/ && npm set @panhezeng:registry https://registry.npm.taobao.org/

```
