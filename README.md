# MeeUI

一个基于Vue.js的移动端UI组件库，Fork自Vant并进行了定制优化。

## 特性

- 丰富的移动端UI组件
- 基于Vue 2.6开发
- 响应式设计，适配各种屏幕尺寸
- 丰富的主题定制能力
- 完善的文档和示例

## 安装

### NPM

```bash
npm i @emhome/meeui -S
```

### Yarn

```bash
yarn add @emhome/meeui
```

### 按需引入

为了减小打包体积，可以使用按需引入的方式，首先需要安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

然后在 babel.config.js 中添加配置：

```javascript
plugins: [
  [
    'component',
    {
      libraryName: '@emhome/meeui',
      styleLibraryName: 'theme'
    }
  ]
]
```

## 快速上手

### 全局引入

在 main.js 中引入：

```javascript
import Vue from 'vue';
import MeeUI from '@emhome/meeui';
import '@emhome/meeui/theme/index'; // 支持不带扩展名的方式

Vue.use(MeeUI);
```

也可以使用带扩展名的方式：

```javascript
import Vue from 'vue';
import MeeUI from '@emhome/meeui';
import '@emhome/meeui/theme/index.scss';

Vue.use(MeeUI);
```

### 按需引入

在需要使用的组件中引入：

```javascript
import Vue from 'vue';
import { Button, Cell } from '@emhome/meeui';

Vue.use(Button);
Vue.use(Cell);
```

> 注意：使用 babel-plugin-component 后，样式会自动引入，无需手动引入样式文件。

## 开发说明

### 开发环境

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev
```

### 构建生产版本

```bash
# 构建组件库
npm run build

# 运行代码检查
npm run lint

# 运行测试
npm test
```

## License

MIT
