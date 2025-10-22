# 更新日志

## [2.0.0] - 2025-10-22

### 🎉 重大更新

项目架构全面升级，采用 Element-UI v2.15.8 的架构设计。

### ✨ 新增

- **多格式构建支持**
  - CommonJS2 格式 (`lib/meeui.common.js`)
  - ES Module 格式 (`lib/meeui.esm.js`)，支持 Tree Shaking
  - UMD 格式 (`lib/index.js`)，支持浏览器直接引入

- **独立组件构建**
  - 每个组件单独构建为独立文件
  - 支持更灵活的按需引入
  - 减小最终打包体积

- **TypeScript 类型定义**
  - 完整的 `.d.ts` 类型定义文件
  - 自动类型推导
  - 更好的开发体验

- **主题样式独立输出**
  - 编译后的 CSS 文件独立输出到 `lib/theme-chalk/`
  - 支持按组件引入样式
  - 主题定制更灵活

- **构建工具优化**
  - 新增自动入口文件生成脚本
  - 新增主题编译脚本
  - 构建流程更清晰

### 🔄 变更

- **Package.json 重构**
  - 更新入口字段配置
  - 添加 `module`、`typings` 字段
  - 更新 `files` 和 `sideEffects` 配置

- **构建输出目录变更**
  - `dist/` → `lib/`（更符合社区规范）
  - CSS 输出路径：`lib/theme-chalk/`

- **按需引入配置变更**
  - babel-plugin-component 配置更新
  - `styleLibraryName`: `theme` → `theme-chalk`
  - `libDir`: 新增，值为 `lib`

### 📝 文档

- 全新的 README 文档
- 新增升级迁移指南
- 新增 NPM 发布检查清单
- 新增项目架构说明文档

### ⚠️ 破坏性变更

1. **CSS 引入路径变更**
   ```javascript
   // 旧版本
   import '@emhome/meeui/dist/meeui.css'

   // 新版本
   import '@emhome/meeui/lib/theme-chalk/index.css'
   ```

2. **babel-plugin-component 配置变更**
   ```javascript
   // 旧版本
   {
     libraryName: '@emhome/meeui',
     styleLibraryName: 'theme'
   }

   // 新版本
   {
     libraryName: '@emhome/meeui',
     styleLibraryName: 'theme-chalk',
     libDir: 'lib'
   }
   ```

3. **CDN 引入路径变更**
   ```html
   <!-- 旧版本 -->
   <link rel="stylesheet" href="https://unpkg.com/@emhome/meeui/dist/meeui.css">

   <!-- 新版本 -->
   <link rel="stylesheet" href="https://unpkg.com/@emhome/meeui/lib/theme-chalk/index.css">
   ```

### 📦 升级指南

详细升级步骤请查看：[docs/MIGRATION.md](docs/MIGRATION.md)

---

## [1.0.7] - 2024-09-17

### 🐛 Bug 修复

- 修复若干组件样式问题
- 优化构建配置

### 📝 文档

- 更新文档和示例

---

## [1.0.0] - 2024-03-02

### 🎉 首次发布

- 发布 MeeUI 组件库
- 包含 48+ 移动端组件
- 支持完整引入和按需引入
- 支持主题定制

---

## 版本说明

版本号遵循 [语义化版本 2.0.0](https://semver.org/lang/zh-CN/) 规范：

- **主版本号（Major）**：不兼容的 API 修改
- **次版本号（Minor）**：向下兼容的功能性新增
- **修订号（Patch）**：向下兼容的问题修正

---

## 图例

- 🎉 重大更新
- ✨ 新增功能
- 🔄 功能变更
- 🐛 Bug 修复
- 📝 文档更新
- ⚠️ 破坏性变更
- 🗑️ 废弃功能
- 🔧 内部优化
