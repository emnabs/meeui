# MeeUI

<p align="center">
  <img src="https://img.shields.io/npm/v/@emhome/meeui.svg" alt="npm version">
  <img src="https://img.shields.io/npm/l/@emhome/meeui.svg" alt="license">
  <img src="https://img.shields.io/badge/vue-2.6+-green.svg" alt="vue version">
</p>

> 一个基于 Vue 2.x 的移动端 UI 组件库，采用 Element-UI 架构设计

## ✨ 特性

- 🔥 **50+ 高质量组件** - 覆盖移动端常见场景
- 📦 **多种引入方式** - 支持完整引入、按需引入
- 🌲 **按需加载** - 完善的 Tree Shaking 支持
- 💪 **TypeScript** - 完整的类型定义文件
- 🎨 **主题定制** - 支持 SCSS 变量覆盖
- 📱 **移动端优化** - 专为移动端设计
- 🔧 **灵活配置** - 与 Element-UI 相同的使用体验

---

## 📦 安装

### NPM

```bash
npm install @emhome/meeui
```

### Yarn

```bash
yarn add @emhome/meeui
```

### CDN

```html
<!-- 引入样式 -->
<link rel="stylesheet" href="https://unpkg.com/@emhome/meeui/lib/theme-chalk/index.css">
<!-- 引入组件库 -->
<script src="https://unpkg.com/@emhome/meeui"></script>
```

---

## 🚀 快速开始

### 方式一：完整引入

```javascript
import Vue from 'vue'
import MeeUI from '@emhome/meeui'
import '@emhome/meeui/lib/theme-chalk/index.css'

Vue.use(MeeUI)
```

### 方式二：按需引入（手动）

```javascript
import Vue from 'vue'
import { Button, Cell } from '@emhome/meeui'

Vue.use(Button)
Vue.use(Cell)
```

手动引入样式：

```javascript
import '@emhome/meeui/lib/theme-chalk/button.css'
import '@emhome/meeui/lib/theme-chalk/cell.css'
```

### 方式三：按需引入（自动，推荐）⭐

安装 babel-plugin-component：

```bash
npm install babel-plugin-component -D
```

配置 `babel.config.js`：

```javascript
module.exports = {
  plugins: [
    [
      'component',
      {
        libraryName: '@emhome/meeui',
        styleLibraryName: 'theme-chalk',
        libDir: 'lib'
      }
    ]
  ]
}
```

然后就可以直接使用：

```javascript
import { Button, Cell, Image } from '@emhome/meeui'

// babel-plugin-component 会自动按需引入组件和样式
Vue.use(Button)
Vue.use(Cell)
Vue.use(Image)
```

---

## 📝 基础示例

```vue
<template>
  <div>
    <!-- 按钮 -->
    <mee-button type="primary">主要按钮</mee-button>
    <mee-button type="success">成功按钮</mee-button>

    <!-- 单元格 -->
    <mee-cell-group>
      <mee-cell title="单元格" value="内容" />
      <mee-cell title="单元格" value="内容" is-link />
    </mee-cell-group>

    <!-- 图片 -->
    <mee-image
      width="100"
      height="100"
      src="https://example.com/image.jpg"
    />

    <!-- 标签页 -->
    <mee-tabs v-model="active">
      <mee-tab title="标签 1">内容 1</mee-tab>
      <mee-tab title="标签 2">内容 2</mee-tab>
      <mee-tab title="标签 3">内容 3</mee-tab>
    </mee-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    }
  }
}
</script>
```

---

## 📚 组件列表

### 基础组件
Alert、Avatar、Button、Card、Icon、Tag、Image

### 表单组件
Cell、CellGroup、Field、Search

### 展示组件
Circle、Progress、CountDown、Clock、Device、Statistic

### 导航组件
NavBar、Tabbar、TabbarItem、Tab、Tabs、NoticeBar

### 布局组件
Grid、GridItem、RatioBox、ScaleBox、ZoomBox、Sticky

### 商品组件
GoodsCard、GoodsBlock、GoodsAction、Coupon

### 交互组件
Swipe、SwipeItem、SwipeCell、Overlay、PlaceHolder

### 工具组件
Clipboard、Lazyload、RemoteScript

### 业务组件
ByteSize、Currency、Phone、PhoneNumber、ColorBlock、Descriptions

---

## 🎨 主题定制

### 方式一：SCSS 变量覆盖

创建自定义主题文件 `custom-theme.scss`：

```scss
/* 修改主题色 */
$--color-primary: #1989fa;
$--color-success: #07c160;
$--color-warning: #ff976a;
$--color-danger: #ee0a24;

/* 导入 MeeUI 样式 */
@import '~@emhome/meeui/theme/index.scss';
```

在项目入口引入：

```javascript
import './custom-theme.scss'
```

### 常用主题变量

```scss
// 颜色
$--color-primary: #1989fa;
$--color-success: #07c160;
$--color-warning: #ff976a;
$--color-danger: #ee0a24;

// 字体
$--font-size-xs: 10px;
$--font-size-sm: 12px;
$--font-size-md: 14px;
$--font-size-lg: 16px;

// 间距
$--padding-xs: 8px;
$--padding-sm: 12px;
$--padding-md: 16px;
$--padding-lg: 24px;

// 圆角
$--border-radius: 3px;
$--border-radius-sm: 2px;
$--border-radius-md: 4px;
$--border-radius-lg: 8px;
```

完整变量列表请查看：[src/style/var.scss](src/style/var.scss)

---

## 💻 TypeScript 支持

MeeUI 提供完整的 TypeScript 类型定义，开箱即用。

```typescript
import Vue from 'vue'
import { Button, Cell } from '@emhome/meeui'

// 类型会自动推导
Vue.use(Button)
Vue.use(Cell)
```

---

## 🌍 浏览器兼容性

现代浏览器和 IE 10+

| Chrome | Firefox | Safari | Edge | IE |
|--------|---------|--------|------|-----|
| ✅ 最新 | ✅ 最新 | ✅ 最新 | ✅ 最新 | ❌ |

---

## 🔨 开发指南

### 本地开发

```bash
# 克隆项目
git clone git@github.com:emnabs/meeui.git

# 安装依赖
cd meeui
npm install

# 启动开发服务器
npm run dev
```

### 构建

```bash
# 完整构建
npm run build

# 只构建组件
npm run build:file

# 只构建主题
npm run build:theme
```

### 代码规范

```bash
# 检查代码
npm run lint
```

---

## 📖 文档

- **[升级指南](docs/MIGRATION.md)** - 从旧版本升级
- **[发布检查清单](docs/PUBLISH.md)** - NPM 发布指南
- **[项目架构说明](docs/ARCHITECTURE.md)** - 项目结构详解

---

## 🤝 贡献

欢迎贡献代码！

### 提交 Issue

如果遇到问题或有功能建议：

1. 在 [Issues](https://github.com/emnabs/meeui/issues) 搜索是否已存在
2. 如果没有，创建新 Issue 并提供详细信息

### Pull Request

1. Fork 本仓库
2. 创建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 开启 Pull Request

---

## 📄 开源协议

本项目基于 [MIT](./LICENSE) 协议开源。

---

## 🙏 致谢

- 感谢 [Vant](https://github.com/youzan/vant) 提供的设计灵感
- 感谢 [Element-UI](https://github.com/ElemeFE/element) 提供的架构参考

---

**享受开发！** 🎉
