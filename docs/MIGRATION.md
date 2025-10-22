# MeeUI 迁移至 Element-UI 风格指南

## 概述

本项目已从原有的打包方式迁移至 Element-UI v2.15.8 的项目结构和使用方式，以提供更好的开发体验和更灵活的使用方式。

---

## 主要变更

### 1. 目录结构变更

#### 旧结构
```
meeui/
├── dist/              # 构建输出
│   ├── meeui.js
│   ├── meeui.min.js
│   └── meeui.css
├── src/               # 源代码
└── theme/             # 主题样式
```

#### 新结构（Element-UI 风格）
```
meeui/
├── lib/                      # 构建输出（新）
│   ├── meeui.common.js      # CommonJS 格式（主入口）
│   ├── meeui.esm.js         # ES Module 格式（支持 tree-shaking）
│   ├── index.js             # UMD 格式（浏览器直接引入）
│   ├── theme-chalk/         # 编译后的 CSS
│   │   ├── index.css        # 完整样式
│   │   └── [component].css  # 单个组件样式
│   └── [component].js       # 单个组件（按需引入）
├── src/                      # 源代码
├── packages/                 # 组件源码目录（保留用于扩展）
├── types/                    # TypeScript 类型定义（新）
│   ├── index.d.ts
│   └── component.d.ts
└── theme/                    # 主题 SCSS 源码
```

### 2. Package.json 配置变更

#### 变更前
```json
{
  "main": "dist/meeui.js",
  "module": "dist/meeui.js",
  "unpkg": "dist/meeui.min.js",
  "style": "dist/meeui.css"
}
```

#### 变更后
```json
{
  "main": "lib/meeui.common.js",      // CommonJS 入口
  "module": "lib/meeui.esm.js",       // ES Module 入口
  "unpkg": "lib/index.js",            // UMD 浏览器入口
  "style": "lib/theme-chalk/index.css", // 样式入口
  "typings": "types/index.d.ts"       // TypeScript 入口
}
```

### 3. 构建方式变更

#### 新增构建脚本

```json
{
  "scripts": {
    "build:file": "构建组件文件（CommonJS/ESM/UMD）",
    "build:theme": "构建主题样式",
    "build": "完整构建流程"
  }
}
```

#### 构建输出格式

1. **CommonJS2 格式** (`lib/meeui.common.js`)
   - 用于 Node.js 环境和构建工具
   - package.json 的 `main` 入口

2. **ES Module 格式** (`lib/meeui.esm.js`)
   - 支持 tree-shaking
   - package.json 的 `module` 入口

3. **UMD 格式** (`lib/index.js`)
   - 支持浏览器直接引入
   - package.json 的 `unpkg` 入口

4. **独立组件** (`lib/[component].js`)
   - 每个组件单独构建
   - 支持按需加载

---

## 使用方式对比

### 方式一：完整引入

#### 旧方式
```javascript
import Vue from 'vue'
import MeeUI from '@emhome/meeui'
import '@emhome/meeui/dist/meeui.css'

Vue.use(MeeUI)
```

#### 新方式（推荐）
```javascript
import Vue from 'vue'
import MeeUI from '@emhome/meeui'
import '@emhome/meeui/lib/theme-chalk/index.css'

Vue.use(MeeUI)
```

### 方式二：按需引入

#### 旧方式
```javascript
import { Button, Cell } from '@emhome/meeui'

Vue.use(Button)
Vue.use(Cell)
```

#### 新方式（无变化，但路径改变）
```javascript
import { Button, Cell } from '@emhome/meeui'

Vue.use(Button)
Vue.use(Cell)
```

或者使用独立组件：

```javascript
import Button from '@emhome/meeui/lib/button'
import '@emhome/meeui/lib/theme-chalk/button.css'

Vue.use(Button)
```

### 方式三：Babel 插件自动按需引入（推荐）

#### 配置 babel.config.js

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

#### 使用
```javascript
import { Button, Cell, Tag } from '@emhome/meeui'
// babel-plugin-component 会自动转换为：
// import Button from '@emhome/meeui/lib/button'
// import '@emhome/meeui/lib/theme-chalk/button.css'
// import Cell from '@emhome/meeui/lib/cell'
// import '@emhome/meeui/lib/theme-chalk/cell.css'
// ...
```

### 方式四：CDN 引入

#### 旧方式
```html
<link rel="stylesheet" href="https://unpkg.com/@emhome/meeui/dist/meeui.css">
<script src="https://unpkg.com/@emhome/meeui/dist/meeui.min.js"></script>
```

#### 新方式
```html
<link rel="stylesheet" href="https://unpkg.com/@emhome/meeui/lib/theme-chalk/index.css">
<script src="https://unpkg.com/@emhome/meeui"></script>
<!-- unpkg 会自动解析到 lib/index.js -->
```

---

## TypeScript 支持

新版本添加了完整的 TypeScript 类型定义。

### 使用示例

```typescript
import Vue from 'vue'
import { Button, Cell } from '@emhome/meeui'

// 类型会自动推导
Vue.use(Button)
Vue.use(Cell)
```

### 类型定义位置

- 主类型定义：`types/index.d.ts`
- 组件基类：`types/component.d.ts`

---

## 构建工具配置

### Webpack

#### 配置别名（可选）

```javascript
module.exports = {
  resolve: {
    alias: {
      'meeui': '@emhome/meeui/lib/meeui.esm.js' // 使用 ESM 版本
    }
  }
}
```

### Vite

Vite 会自动使用 `package.json` 中的 `module` 字段，无需额外配置。

```javascript
import { Button } from '@emhome/meeui'
// Vite 会自动使用 lib/meeui.esm.js
```

---

## 主题定制

### 旧方式
```scss
// 在导入前覆盖变量
$--color-primary: #409EFF;

@import '~@emhome/meeui/theme/index.scss';
```

### 新方式（无变化）
```scss
// 在导入前覆盖变量
$--color-primary: #409EFF;

@import '~@emhome/meeui/theme/index.scss';
```

主题变量文件位置：`src/style/var.scss`

---

## 升级步骤

### 1. 安装新版本

```bash
npm install @emhome/meeui@latest
# 或
yarn add @emhome/meeui@latest
```

### 2. 更新样式引入路径

查找并替换项目中的样式引入：

```bash
# 查找
dist/meeui.css

# 替换为
lib/theme-chalk/index.css
```

### 3. （可选）配置 Babel 插件实现按需引入

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

### 4. （可选）启用 TypeScript 支持

如果项目使用 TypeScript，新版本会自动提供类型推导，无需额外配置。

---

## 兼容性说明

### 向后兼容

- ✅ 组件 API 完全兼容，无需修改代码
- ✅ 主题变量系统兼容
- ✅ 原有的引入方式继续支持

### 破坏性变更

- ⚠️ 构建输出目录从 `dist/` 变更为 `lib/`
- ⚠️ CSS 文件路径变更
- ⚠️ package.json 入口字段变更

### 迁移检查清单

- [ ] 更新 CSS 引入路径
- [ ] 更新 CDN 引用（如使用）
- [ ] 配置 Babel 插件（可选）
- [ ] 验证构建输出
- [ ] 测试按需引入功能

---

## 优势总结

### 新架构的优势

1. **更好的 Tree-Shaking 支持**
   - ES Module 格式支持现代打包工具的 tree-shaking
   - 减少最终打包体积

2. **多种引入方式**
   - CommonJS：Node.js 环境
   - ES Module：现代构建工具
   - UMD：浏览器直接引入

3. **按需加载**
   - 每个组件独立构建
   - 支持单独引入组件和样式

4. **TypeScript 支持**
   - 完整的类型定义
   - 更好的开发体验

5. **与 Element-UI 一致的使用方式**
   - 降低学习成本
   - 更符合社区习惯

---

## 开发者指南

### 本地开发

```bash
# 安装依赖
npm install

# 开发模式
npm run dev

# 构建
npm run build

# 构建组件
npm run build:file

# 构建主题
npm run build:theme
```

### 构建流程

1. **生成入口文件**（`build/build-entry.js`）
   - 自动扫描组件
   - 生成 `src/index.js`

2. **构建组件文件**（`build/webpack.common.js`, `build/webpack.component.js`）
   - 生成 CommonJS/ESM 格式
   - 生成独立组件模块

3. **构建主题**（`build/build-theme.js`）
   - 编译 SCSS 为 CSS
   - 输出到 `lib/theme-chalk/`

4. **构建 UMD**（`build/webpack.umd.js`）
   - 生成浏览器版本
   - 压缩优化

---

## 常见问题

### Q1: 升级后样式丢失？
**A:** 检查 CSS 引入路径是否从 `dist/meeui.css` 更新为 `lib/theme-chalk/index.css`

### Q2: TypeScript 报错找不到类型？
**A:** 确保安装的是最新版本，类型定义已包含在 `types/` 目录

### Q3: 按需引入不生效？
**A:** 检查 babel-plugin-component 配置，确保 `libDir` 设置为 `lib`

### Q4: 构建后体积变大？
**A:** 使用 ES Module 格式（`import`）并确保打包工具支持 tree-shaking

### Q5: CDN 引用失效？
**A:** 更新 CDN 路径，或使用 unpkg 自动解析：`https://unpkg.com/@emhome/meeui`

---

## 技术支持

如有问题，请提交 Issue：
https://github.com/emnabs/meeui/issues

---

## 更新日志

### v1.0.7
- ✨ 重构构建系统，采用 Element-UI v2.15.8 架构
- ✨ 新增 ES Module 格式支持
- ✨ 新增 TypeScript 类型定义
- ✨ 优化按需加载体验
- ✨ 新增独立组件构建
- 📝 完善文档和迁移指南

---

**享受更好的开发体验！** 🎉
