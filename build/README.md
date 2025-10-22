# Build 构建配置

本目录包含 MeeUI 的所有构建配置和脚本。

---

## 📁 文件说明

### Webpack 配置文件

#### `webpack.config.dev.js`
**用途**：开发环境配置

**特性**：
- 启动开发服务器（端口 8080）
- 热模块替换（HMR）
- Source Map 调试支持
- 自动打开浏览器

**执行**：
```bash
npm run dev
```

#### `webpack.common.js`
**用途**：构建 CommonJS 和 ES Module 格式

**输出**：
- `lib/meeui.common.js` - CommonJS2 格式（Node.js 环境）
- `lib/meeui.esm.js` - ES Module 格式（支持 Tree Shaking）

**特性**：
- 外部化 Vue 依赖
- 不压缩代码（保留可读性）
- 生成两种模块格式

**执行**：
```bash
webpack --config build/webpack.common.js
```

#### `webpack.component.js`
**用途**：构建独立组件模块

**输出**：
- `lib/button.js` - Button 组件
- `lib/cell.js` - Cell 组件
- ... 其他 48 个组件

**特性**：
- 每个组件单独构建为独立文件
- 支持按需引入 `import Button from 'meeui/lib/button'`
- 正确处理组件间依赖

**执行**：
```bash
webpack --config build/webpack.component.js
```

#### `webpack.umd.js`
**用途**：构建 UMD 浏览器版本

**输出**：
- `lib/index.js` - UMD 格式（浏览器全局变量）
- `lib/index.css` - 提取的样式文件

**特性**：
- 支持 `<script>` 标签直接引入
- 自动提取 CSS 为独立文件
- 代码压缩优化

**执行**：
```bash
webpack --config build/webpack.umd.js
```

---

### 构建脚本

#### `build-entry.js`
**用途**：自动生成入口文件

**功能**：
- 读取 `components.json` 获取组件列表
- 自动生成 `src/index.js` 入口文件
- 包含所有组件的导入、注册和导出

**输出示例**：
```javascript
import Alert from './alert'
import Button from './button'
// ... 所有组件

const components = [Alert, Button, ...]

const install = function(Vue) {
  components.forEach(component => {
    Vue.use(component)
  })
}

export { install, Alert, Button, ... }
export default { install }
```

**执行**：
```bash
node build/build-entry.js
```

#### `build-theme.js`
**用途**：编译 SCSS 主题为 CSS

**功能**：
- 编译 `theme/index.scss` → `lib/theme-chalk/index.css`
- 编译每个组件样式 → `lib/theme-chalk/[component].css`
- 编译基础样式 → `lib/theme-chalk/base.css`

**输出**：
```
lib/theme-chalk/
├── index.css        # 完整样式
├── base.css         # 基础样式
├── button.css       # 各组件样式
├── cell.css
└── ...
```

**执行**：
```bash
node build/build-theme.js
```

---

### 配置文件

#### `components.json`
**用途**：组件列表映射配置

**格式**：
```json
{
  "button": "./src/button/index.js",
  "cell": "./src/cell/index.js",
  ...
}
```

**用途**：
- 供 `build-entry.js` 生成入口文件
- 供 `webpack.component.js` 构建独立组件

---

## 🔨 构建流程

### 完整构建
```bash
npm run build
```

**执行步骤**：
1. `node build/build-entry.js` - 生成 src/index.js
2. `webpack --config build/webpack.common.js` - 构建 CommonJS/ESM
3. `webpack --config build/webpack.component.js` - 构建独立组件
4. `node build/build-theme.js` - 编译主题样式

### 分步构建

#### 1. 只构建组件文件
```bash
npm run build:file
```

生成：
- `lib/meeui.common.js`
- `lib/meeui.esm.js`
- `lib/button.js`
- ... 其他组件

#### 2. 只构建主题
```bash
npm run build:theme
```

生成：
- `lib/theme-chalk/index.css`
- `lib/theme-chalk/button.css`
- ... 其他组件样式

#### 3. 开发模式
```bash
npm run dev
```

启动开发服务器，支持热更新。

---

## 📦 构建输出

### lib/ 目录结构
```
lib/
├── meeui.common.js          # CommonJS 格式 (~200KB)
├── meeui.esm.js             # ES Module 格式 (~200KB)
├── index.js                 # UMD 格式 (~200KB)
├── index.css                # UMD 样式 (可选)
├── theme-chalk/             # 主题样式目录
│   ├── index.css            # 完整样式 (~60KB)
│   ├── base.css             # 基础样式
│   ├── button.css           # 各组件样式
│   ├── cell.css
│   └── ...
├── button.js                # 独立组件
├── cell.js
└── ...                      # 其他组件
```

---

## 🎯 构建配置说明

### 外部化依赖

所有构建配置都将 Vue 外部化：

```javascript
externals: {
  vue: {
    root: 'Vue',
    commonjs: 'vue',
    commonjs2: 'vue',
    amd: 'vue'
  }
}
```

**原因**：
- 避免将 Vue 打包进组件库
- 减小包体积
- 避免版本冲突

### Babel 转译

所有 JS 文件通过 Babel 转译：

```javascript
{
  test: /\.js$/,
  exclude: /node_modules/,
  loader: 'babel-loader'
}
```

**配置**：见 `babel.config.js`

### 样式处理

#### 开发环境
- 使用 `style-loader` 注入到 HTML
- 支持热更新

#### 生产环境
- 使用 `MiniCssExtractPlugin` 提取为独立 CSS 文件
- 分离 JS 和 CSS

---

## 🔧 修改构建配置

### 添加新组件

1. 在 `src/` 目录创建组件目录
2. 更新 `build/components.json`：
   ```json
   {
     "new-component": "./src/new-component/index.js"
   }
   ```
3. 运行 `npm run build`

### 修改输出目录

编辑对应的 webpack 配置文件的 `output.path`：

```javascript
output: {
  path: path.resolve(__dirname, '../lib'),  // 修改这里
  // ...
}
```

### 修改 UMD 全局变量名

编辑 `webpack.umd.js` 的 `output.library`：

```javascript
output: {
  library: 'MeeUI',  // 修改这里
  // ...
}
```

---

## ⚠️ 注意事项

### 1. 构建顺序
必须先运行 `build:file` 再运行 `build:theme`：
- `build:file` 会生成 `src/index.js`
- 某些构建可能依赖这个文件

### 2. Node 版本
推荐使用 Node.js 12+：
```bash
node --version  # v12.0.0 或更高
```

### 3. 依赖安装
确保所有构建依赖已安装：
```bash
npm install
```

### 4. 清理输出
如果遇到构建问题，尝试清理输出目录：
```bash
rm -rf lib/
npm run build
```

---

## 📊 构建性能

### 构建时间（估算）

| 任务 | 时间 | 说明 |
|------|------|------|
| `build-entry.js` | ~1s | 生成入口文件 |
| `webpack.common.js` | ~10s | CommonJS/ESM 构建 |
| `webpack.component.js` | ~15s | 独立组件构建 |
| `build-theme.js` | ~5s | SCSS 编译 |
| **总计** | **~30s** | 完整构建 |

### 优化建议

1. **使用缓存**：Webpack 已配置缓存
2. **并行构建**：可以考虑并行执行多个 webpack 任务
3. **增量构建**：开发时使用 `npm run dev`

---

## 🐛 常见问题

### Q1: 构建失败，提示找不到模块
**A:** 检查依赖是否已安装：
```bash
npm install
```

### Q2: 样式没有生成
**A:** 确保先运行了 `build:file`：
```bash
npm run build:file
npm run build:theme
```

### Q3: 组件没有导出
**A:** 检查 `components.json` 是否包含该组件

### Q4: 开发服务器无法启动
**A:** 检查端口 8080 是否被占用：
```bash
# Windows
netstat -ano | findstr :8080

# Mac/Linux
lsof -i :8080
```

---

## 📚 参考资料

- [Webpack 文档](https://webpack.js.org/)
- [Babel 文档](https://babeljs.io/)
- [Vue Loader 文档](https://vue-loader.vuejs.org/)
- [Sass 文档](https://sass-lang.com/)

---

## 🤝 贡献

如果你想改进构建配置：

1. Fork 本仓库
2. 修改构建文件
3. 测试构建流程
4. 提交 Pull Request

---

**构建配置维护中，如有问题请提 Issue！** 🔧
