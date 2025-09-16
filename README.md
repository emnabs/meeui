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
npm i meeui -S
```

### Yarn

```bash
yarn add meeui
```

## 快速上手

### 引入组件

#### 1. 全局引入

```javascript
import Vue from 'vue';
import MeeUI from 'meeui';
import 'meeui/dist/meeui.css';

Vue.use(MeeUI);
```

#### 2. 按需引入

```javascript
import Vue from 'vue';
import { Button, Cell } from 'meeui';
import 'meeui/dist/meeui.css';

Vue.use(Button);
Vue.use(Cell);
```

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
