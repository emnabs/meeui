# Theme 主题定制

本目录包含 MeeUI 的主题 SCSS 源码，用于自定义主题。

---

## 📁 目录结构

```
theme/
├── index.scss          # 主题入口文件
└── src/
    └── index.scss      # 主题源码文件（导入所有组件样式）
```

---

## 🎨 用途

### 1. 主题定制

`theme/` 目录提供 SCSS 源码，允许用户通过覆盖变量来自定义主题。

**与 Element-UI 完全一致的使用方式！**

### 2. 从源码编译

用户可以从源码编译样式，而不是使用预编译的 CSS 文件，以获得更小的体积和更灵活的定制。

---

## 🚀 使用方式

### 方式一：覆盖变量（推荐）

创建自定义主题文件 `custom-theme.scss`：

```scss
/* 覆盖主题变量 */
$--color-primary: #1989fa;
$--color-success: #07c160;
$--color-warning: #ff976a;
$--color-danger: #ee0a24;

/* 覆盖组件变量 */
$--button-primary-background-color: $--color-primary;
$--button-default-height: 44px;
$--button-border-radius: 4px;

/* 导入 MeeUI 主题 */
@import '~@emhome/meeui/theme/index.scss';
```

然后在项目入口引入：

```javascript
// main.js
import Vue from 'vue'
import MeeUI from '@emhome/meeui'
import './custom-theme.scss'  // 引入自定义主题

Vue.use(MeeUI)
```

### 方式二：直接使用（不定制）

如果不需要定制主题，直接导入即可：

```scss
// main.scss
@import '~@emhome/meeui/theme/index.scss';
```

---

## 📝 可覆盖的变量

### 主题色变量

```scss
// 基础色
$--color-primary: #1989fa !default;
$--color-success: #07c160 !default;
$--color-warning: #ff976a !default;
$--color-danger: #ee0a24 !default;
$--color-info: #909399 !default;

// 文字色
$--color-text-primary: #323233 !default;
$--color-text-regular: #646566 !default;
$--color-text-secondary: #969799 !default;
$--color-text-placeholder: #c8c9cc !default;

// 边框色
$--border-color: #ebedf0 !default;
$--border-color-light: #f7f8fa !default;

// 背景色
$--background-color: #f7f8fa !default;
$--background-color-light: #fafafa !default;
```

### 字体变量

```scss
// 字体大小
$--font-size-xs: 10px !default;
$--font-size-sm: 12px !default;
$--font-size-md: 14px !default;
$--font-size-lg: 16px !default;
$--font-size-xl: 18px !default;

// 字重
$--font-weight-normal: 400 !default;
$--font-weight-medium: 500 !default;
$--font-weight-bold: 600 !default;

// 行高
$--line-height-xs: 14px !default;
$--line-height-sm: 18px !default;
$--line-height-md: 20px !default;
$--line-height-lg: 22px !default;
```

### 间距变量

```scss
// 内边距
$--padding-base: 4px !default;
$--padding-xs: 8px !default;
$--padding-sm: 12px !default;
$--padding-md: 16px !default;
$--padding-lg: 24px !default;
$--padding-xl: 32px !default;

// 外边距
$--margin-xs: 8px !default;
$--margin-sm: 12px !default;
$--margin-md: 16px !default;
$--margin-lg: 24px !default;
```

### 圆角变量

```scss
$--border-radius: 3px !default;
$--border-radius-sm: 2px !default;
$--border-radius-md: 4px !default;
$--border-radius-lg: 8px !default;
$--border-radius-max: 999px !default;
```

### 组件特定变量

#### Button 按钮

```scss
$--button-default-height: 44px !default;
$--button-default-font-size: $--font-size-lg !default;
$--button-small-height: 32px !default;
$--button-mini-height: 24px !default;
$--button-border-radius: $--border-radius !default;
$--button-primary-color: $--white !default;
$--button-primary-background-color: $--color-primary !default;
```

#### Cell 单元格

```scss
$--cell-font-size: $--font-size-md !default;
$--cell-vertical-padding: 10px !default;
$--cell-horizontal-padding: $--padding-md !default;
$--cell-background-color: $--white !default;
$--cell-border-color: $--border-color !default;
```

更多变量请查看：[src/style/var.scss](../src/style/var.scss)

---

## 📦 与预编译 CSS 的区别

### 预编译 CSS（lib/theme-chalk/）

```javascript
import '@emhome/meeui/lib/theme-chalk/index.css'
```

**特点**：
- ✅ 直接使用，无需编译
- ✅ 加载速度快
- ❌ 无法自定义变量
- ❌ 包含所有组件样式

**适用场景**：
- 不需要自定义主题
- 快速开发原型

### SCSS 源码（theme/）

```scss
@import '~@emhome/meeui/theme/index.scss';
```

**特点**：
- ✅ 可以覆盖变量
- ✅ 可以按需编译
- ✅ 可以深度定制
- ❌ 需要配置 SCSS 编译器
- ❌ 编译时间稍长

**适用场景**：
- 需要自定义主题
- 需要深度定制样式
- 有 SCSS 编译环境

---

## 🔧 配置 SCSS 编译器

### Webpack

确保安装了必要的 loader：

```bash
npm install sass-loader sass -D
```

配置 `webpack.config.js`：

```javascript
module.exports = {
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
    ]
  }
}
```

### Vite

Vite 内置支持 SCSS，只需安装 sass：

```bash
npm install sass -D
```

### Vue CLI

Vue CLI 项目已内置 SCSS 支持，直接使用即可。

---

## 📚 完整示例

### 示例 1：自定义主题色

```scss
// custom-theme.scss
/* 1. 定义自定义颜色 */
$my-brand-color: #ff6b6b;
$my-success-color: #51cf66;
$my-warning-color: #ffa94d;

/* 2. 覆盖 MeeUI 变量 */
$--color-primary: $my-brand-color;
$--color-success: $my-success-color;
$--color-warning: $my-warning-color;

/* 3. 覆盖组件变量 */
$--button-primary-background-color: $my-brand-color;
$--button-border-radius: 8px;

/* 4. 导入 MeeUI 主题 */
@import '~@emhome/meeui/theme/index.scss';
```

### 示例 2：按需导入组件样式

如果只使用部分组件，可以手动导入：

```scss
// custom-theme.scss
/* 1. 导入变量和基础样式 */
@import '~@emhome/meeui/src/style/var.scss';
@import '~@emhome/meeui/src/style/base.scss';

/* 2. 只导入需要的组件 */
@import '~@emhome/meeui/src/button/index.scss';
@import '~@emhome/meeui/src/cell/index.scss';
@import '~@emhome/meeui/src/icon/index.scss';
```

### 示例 3：深度定制

```scss
// custom-theme.scss
/* 1. 全局变量覆盖 */
$--color-primary: #1989fa;
$--border-radius: 8px;
$--font-size-base: 16px;

/* 2. 导入 MeeUI */
@import '~@emhome/meeui/theme/index.scss';

/* 3. 自定义额外样式 */
.mee-button {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
}
```

---

## ⚠️ 注意事项

### 1. 变量覆盖顺序

必须在导入 MeeUI 主题**之前**定义变量：

```scss
/* ✅ 正确 */
$--color-primary: #1989fa;
@import '~@emhome/meeui/theme/index.scss';

/* ❌ 错误 - 变量不会生效 */
@import '~@emhome/meeui/theme/index.scss';
$--color-primary: #1989fa;
```

### 2. 使用 !default

MeeUI 的所有变量都使用 `!default` 标志，允许覆盖：

```scss
// MeeUI 源码中
$--color-primary: #1989fa !default;

// 你的代码中（会覆盖）
$--color-primary: #ff0000;
```

### 3. 编译器配置

确保 SCSS 编译器的 `includePaths` 包含 `node_modules`：

```javascript
// sass-loader 配置
{
  loader: 'sass-loader',
  options: {
    sassOptions: {
      includePaths: ['node_modules']
    }
  }
}
```

### 4. 与 CSS 文件冲突

不要同时引入 SCSS 源码和预编译 CSS：

```javascript
/* ❌ 错误 - 会导致样式重复 */
import '@emhome/meeui/lib/theme-chalk/index.css'
import './custom-theme.scss'  // 内部导入了 theme/index.scss

/* ✅ 正确 - 只使用一种方式 */
import './custom-theme.scss'
```

---

## 🎯 最佳实践

### 1. 统一的主题文件

在项目根目录创建 `theme/` 目录：

```
your-project/
├── src/
├── theme/
│   ├── variables.scss     # 变量定义
│   └── index.scss         # 主题入口
└── package.json
```

```scss
// theme/variables.scss
$--color-primary: #1989fa;
$--color-success: #07c160;
// ...

// theme/index.scss
@import './variables.scss';
@import '~@emhome/meeui/theme/index.scss';
```

### 2. 多主题支持

```scss
// theme/light.scss
$--color-primary: #1989fa;
$--background-color: #ffffff;
@import '~@emhome/meeui/theme/index.scss';

// theme/dark.scss
$--color-primary: #409eff;
$--background-color: #1a1a1a;
@import '~@emhome/meeui/theme/index.scss';
```

### 3. 组件级定制

```scss
// components/Button/custom-button.scss
@import '~@emhome/meeui/src/style/var.scss';
@import '~@emhome/meeui/src/button/index.scss';

.my-custom-button {
  @extend .mee-button;
  // 自定义样式
}
```

---

## 📖 相关文档

- [主 README](../README.md) - 项目文档
- [src/style/var.scss](../src/style/var.scss) - 完整变量列表
- [主题定制示例](../docs/THEME-CUSTOMIZATION.md) - 更多示例（待添加）

---

## 🤝 贡献

如果你发现变量缺失或有更好的主题定制建议，欢迎：
- 提交 Issue
- 提交 Pull Request

---

**享受主题定制的乐趣！** 🎨
