# Style 样式系统

MeeUI 的样式系统目录，包含基础样式、变量、函数、混合宏和工具类。

---

## 📁 目录结构

```
src/style/
├── README.md                    # 本文档
├── index.scss                   # 样式入口文件
├── base.scss                    # 基础样式入口
├── var.scss                     # 变量定义
├── normalize.scss               # CSS 重置
├── animation.scss               # 动画定义
├── umbe.scss                    # 自定义基础样式
├── bootstrap/                   # Bootstrap 核心功能
│   ├── _functions.scss          # Bootstrap 工具函数
│   └── mixins/                  # Bootstrap 混合宏
│       ├── _border-radius.scss  # 圆角混合宏
│       └── _gradients.scss      # 渐变混合宏
├── functions/                   # 自定义函数
│   ├── get.scss                 # 获取值函数
│   └── color.scss               # 颜色处理函数
└── utils/                       # 工具类（混合宏 + 实用类）
    ├── clearfix.scss            # 清除浮动
    ├── ellipsis.scss            # 文本省略
    ├── hairline.scss            # 0.5px 边框
    └── triangle.scss            # CSS 三角形
```

---

## 📝 文件说明

### 入口文件

#### `index.scss`
**用途**：样式系统总入口

**内容**：
- 导入 `base.scss`（基础样式）
- 导入 `var.scss`（变量）
- 导入所有组件样式

**使用**：
```scss
// 在组件中导入
@import '../style/index';
```

#### `base.scss`
**用途**：基础样式入口

**内容**：
```scss
// 变量
@import './var';

// Bootstrap 函数和混合宏
@import './functions/get';
@import './functions/color';
@import './bootstrap/mixins/border-radius';
@import './bootstrap/mixins/gradients';

// 基础重置
@import './normalize';

// 工具类
@import './utils/clearfix';
@import './utils/ellipsis';
@import './utils/hairline';

// 动画和自定义样式
@import './animation';
@import './umbe';
```

---

### 变量与配置

#### `var.scss`
**用途**：全局变量定义

**包含**：
- 颜色变量（主题色、灰度色、状态色）
- 尺寸变量（padding、margin、字体大小）
- 边框变量（宽度、圆角、颜色）
- 组件变量（各组件的样式变量）

**示例**：
```scss
// 主题色
$--color-primary: #1989fa;
$--color-success: #07c160;
$--color-warning: #ff976a;
$--color-danger: #ee0a24;

// 间距
$--padding-xs: 8px;
$--padding-sm: 12px;
$--padding-md: 16px;
$--padding-lg: 24px;
$--padding-xl: 32px;

// 边框
$--border-color: #ebedf0;
$--border-width-base: 1px;
$--border-radius-sm: 2px;
$--border-radius-md: 4px;
$--border-radius-lg: 8px;
```

---

### Bootstrap 功能

#### `bootstrap/_functions.scss`
**用途**：Bootstrap 核心工具函数

**包含函数**：
- `str-replace()` - 字符串替换
- `escape-svg()` - SVG 转义
- `color()` - 获取颜色
- `theme-color()` - 获取主题色
- `gray()` - 获取灰度色
- `theme-color-level()` - 主题色层级
- `add()` - 数值相加（支持 calc）
- `subtract()` - 数值相减（支持 calc）

**注意**：
- `color-yiq()` 函数已移除，请使用 `functions/color.scss` 中的版本

#### `bootstrap/mixins/_border-radius.scss`
**用途**：圆角混合宏

**包含混合宏**：
```scss
// 设置圆角
@mixin border-radius($radius: $border-radius, $fallback-border-radius: false)

// 顶部圆角
@mixin border-top-radius($radius)

// 右侧圆角
@mixin border-right-radius($radius)

// 底部圆角
@mixin border-bottom-radius($radius)

// 左侧圆角
@mixin border-left-radius($radius)

// 顶部左侧圆角
@mixin border-top-left-radius($radius)

// 顶部右侧圆角
@mixin border-top-right-radius($radius)

// 底部右侧圆角
@mixin border-bottom-right-radius($radius)

// 底部左侧圆角
@mixin border-bottom-left-radius($radius)
```

#### `bootstrap/mixins/_gradients.scss`
**用途**：渐变混合宏

**包含混合宏**：
```scss
// 渐变背景
@mixin gradient-bg($color)

// 水平渐变
@mixin gradient-x($start-color, $end-color, $start-percent, $end-percent)

// 垂直渐变
@mixin gradient-y($start-color, $end-color, $start-percent, $end-percent)

// 方向渐变
@mixin gradient-directional($start-color, $end-color, $deg)

// X 方向三色渐变
@mixin gradient-x-three-colors($start-color, $mid-color, $color-stop, $end-color)

// Y 方向三色渐变
@mixin gradient-y-three-colors($start-color, $mid-color, $color-stop, $end-color)

// 径向渐变
@mixin gradient-radial($inner-color, $outer-color)

// 条纹渐变
@mixin gradient-striped($color, $angle)
```

---

### 自定义函数

#### `functions/get.scss`
**用途**：安全获取 map 值

**函数**：
```scss
@function get($map, $key, $default: null)
```

**示例**：
```scss
$color: get($theme-colors, 'primary', #1989fa);
```

#### `functions/color.scss`
**用途**：颜色处理函数

**包含函数**：
```scss
// 颜色对比度（自动选择深色或浅色文字）
@function color-yiq($color, $dark: $--yiq-text-dark, $light: $--yiq-text-light)

// 获取颜色
@function color($key: 'blue')

// 获取灰度色
@function gray($key: '100')

// 主题色层级
@function theme-color-level($color-name: 'primary', $level: 0)

// 获取主题色
@function theme-color($key: 'primary')

// 获取主题反色
@function theme-inverse-color($key: 'primary')

// 获取主题轮廓反色
@function theme-outline-inverse-color($key: 'primary')

// 获取主题悬停色
@function theme-hover-color($key: 'primary')

// 获取主题浅色
@function theme-light-color($key: 'primary', $level: 90)

// 获取主题阴影色
@function theme-shadow-color($key: 'primary')
```

**示例**：
```scss
.button {
  background: theme-color('primary');
  color: color-yiq(theme-color('primary'));

  &:hover {
    background: theme-hover-color('primary');
  }
}
```

---

### 工具类（Utils）

工具类目录结合了混合宏和实用类，提供可复用的样式功能。

#### `utils/clearfix.scss`
**用途**：清除浮动

**混合宏**：
```scss
@mixin clearfix()
```

**实用类**：
```scss
.mee-clearfix
```

**使用**：
```scss
// 作为混合宏
.container {
  @include clearfix();
}

// 作为实用类
<div class="mee-clearfix">...</div>
```

#### `utils/ellipsis.scss`
**用途**：文本省略

**混合宏**：
```scss
// 单行省略
@mixin ellipsis()

// 多行省略
@mixin multi-ellipsis($--lines)
```

**实用类**：
```scss
.mee-ellipsis        // 单行省略
.mee-ellipsis--2     // 2 行省略
.mee-ellipsis--3     // 3 行省略
```

**使用**：
```scss
// 作为混合宏
.title {
  @include ellipsis();
}

.description {
  @include multi-ellipsis(3);
}

// 作为实用类
<div class="mee-ellipsis">单行文本省略</div>
<div class="mee-ellipsis--2">两行文本省略</div>
```

#### `utils/hairline.scss`
**用途**：Retina 屏幕 0.5px 边框

**混合宏**：
```scss
// 通用样式
@mixin hairline-common()

// 完整边框
@mixin hairline($--color: $--border-color)

// 顶部边框
@mixin hairline-top($--color, $--left, $--right)

// 底部边框
@mixin hairline-bottom($--color, $--left, $--right)
```

**实用类**：
```scss
.mee-hairline             // 基础样式
.mee-hairline--top        // 顶部边框
.mee-hairline--left       // 左侧边框
.mee-hairline--right      // 右侧边框
.mee-hairline--bottom     // 底部边框
.mee-hairline--surround   // 四周边框
.mee-hairline--top-bottom // 上下边框
```

**使用**：
```scss
// 作为混合宏
.cell::after {
  @include hairline-bottom($--cell-border-color, 16px, 16px);
}

// 作为实用类
<div class="mee-hairline--bottom">...</div>
```

#### `utils/triangle.scss`
**用途**：CSS 三角形

**混合宏**：
```scss
@mixin triangle($width, $height, $color, $direction)
```

**参数**：
- `$width` - 宽度
- `$height` - 高度
- `$color` - 颜色
- `$direction` - 方向：`up`, `down`, `left`, `right`

**使用**：
```scss
.arrow {
  &::after {
    content: '';
    @include triangle(10px, 8px, #333, down);
  }
}
```

---

## 🎨 使用指南

### 在组件中使用

#### 导入变量和工具
```scss
// 导入变量
@import '../style/var';

// 导入工具类
@import '../style/utils/hairline';
@import '../style/utils/ellipsis';

.mee-component {
  padding: $--padding-md;

  &__title {
    @include ellipsis();
  }

  &::after {
    @include hairline-bottom($--border-color);
  }
}
```

#### 使用颜色函数
```scss
@import '../style/var';
@import '../style/functions/color';

.mee-button {
  background: theme-color('primary');
  color: color-yiq(theme-color('primary'));

  &--success {
    background: theme-color('success');
  }
}
```

#### 使用 Bootstrap 混合宏
```scss
@import '../style/var';
@import '../style/bootstrap/mixins/border-radius';
@import '../style/bootstrap/mixins/gradients';

.mee-card {
  @include border-radius($--border-radius-md);
  @include gradient-y(#fff, #f7f8fa);
}
```

---

## 📋 重构说明（2025-10-22）

本次重构对样式系统进行了以下优化：

### 1. 创建 utils/ 目录
将分散的混合宏和工具类合并到统一的 `utils/` 目录：
- `clearfix.scss` - 清除浮动
- `ellipsis.scss` - 文本省略
- `hairline.scss` - 0.5px 边框
- `triangle.scss` - CSS 三角形

每个文件包含：
- 混合宏定义
- 实用类生成
- 完整文档注释

### 2. 删除冗余文件
删除了以下重复和中间导入文件：
- `_mixins.scss` - 中间导入文件
- `_functions.scss` - 中间导入文件
- 根目录下的 `clearfix.scss`, `ellipsis.scss`, `hairline.scss`
- `mixins/` 目录下的 `clearfix.scss`, `ellipsis.scss`, `hairline.scss`, `_triangle.scss`

### 3. 简化 base.scss
直接导入所需文件，移除中间层：
```scss
// 之前
@import 'functions';  // 中间文件
@import 'mixins';     // 中间文件

// 之后
@import './functions/get';
@import './functions/color';
@import './bootstrap/mixins/border-radius';
@import './bootstrap/mixins/gradients';
```

### 4. 去除重复代码
- 移除 `bootstrap/_functions.scss` 中的 `color-yiq()` 函数
- 统一使用 `functions/color.scss` 中的版本（支持 MeeUI 的 `$--` 变量前缀）

### 5. 更新组件导入
更新了 9 个组件文件的导入路径：
```scss
// 之前
@import '../style/mixins/hairline';
@import '../style/mixins/ellipsis';

// 之后
@import '../style/utils/hairline';
@import '../style/utils/ellipsis';
```

**受影响的组件**：
- cell
- color-block
- avatar
- ratio-box
- scale-box
- zoom-box
- coupon
- clock
- scalebox

---

## 🔧 维护建议

### 添加新工具类
1. 在 `utils/` 目录创建新文件
2. 包含混合宏定义和实用类
3. 在 `base.scss` 中导入
4. 更新本 README

### 添加新变量
1. 在 `var.scss` 中定义
2. 使用 `$--` 前缀（MeeUI 约定）
3. 添加注释说明用途

### 添加新函数
1. 在 `functions/` 目录创建或更新文件
2. 添加 `@function` 注释
3. 在 `base.scss` 中导入

---

## ⚠️ 注意事项

1. **变量前缀**：MeeUI 使用 `$--` 前缀，与 Bootstrap 的无前缀区分
2. **导入顺序**：变量 → 函数 → 混合宏 → 重置 → 工具类
3. **工具类命名**：使用 `.mee-` 前缀，BEM 命名规范
4. **避免重复**：使用 Bootstrap 功能时，避免重复定义
5. **文档更新**：修改样式系统后，及时更新本 README

---

## 📚 参考资料

- [Bootstrap SCSS](https://github.com/twbs/bootstrap/tree/v4.6.0/scss)
- [Sass 文档](https://sass-lang.com/documentation)
- [BEM 命名规范](http://getbem.com/)

---

**样式系统已完成重构，结构清晰，易于维护！** 🎨
