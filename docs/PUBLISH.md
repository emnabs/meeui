# MeeUI NPM 发布检查清单

## ✅ 发布前检查

### 1. Package.json 配置检查

#### ✓ 入口字段（已配置）
```json
{
  "main": "lib/meeui.common.js",      // CommonJS 入口
  "module": "lib/meeui.esm.js",       // ES Module 入口
  "unpkg": "lib/index.js",            // CDN 入口
  "style": "lib/theme-chalk/index.css", // 样式入口
  "typings": "types/index.d.ts"       // TypeScript 类型
}
```

#### ✓ 发布文件列表（已配置）
```json
{
  "files": [
    "lib",      // 构建输出
    "src",      // 源代码
    "theme",    // SCSS 主题
    "types",    // TypeScript 类型
    "vetur"     // IDE 支持
  ]
}
```

#### ✓ SideEffects 配置（已配置）
```json
{
  "sideEffects": [
    "*.scss",
    "*.css",
    "lib/theme-chalk/*.css",
    "src/**/style/*",
    "src/style/**"
  ]
}
```

---

### 2. 构建检查

#### 运行完整构建
```bash
npm run build
```

#### 检查 lib/ 目录输出
执行构建后，应该生成以下文件：

```
lib/
├── meeui.common.js          ✓ CommonJS 格式
├── meeui.esm.js             ✓ ES Module 格式
├── index.js                 ✓ UMD 格式
├── index.css                ✓ UMD 样式（可选）
├── theme-chalk/             ✓ 主题目录
│   ├── index.css            ✓ 完整样式
│   ├── base.css             ✓ 基础样式
│   ├── button.css           ✓ 各组件样式
│   ├── cell.css
│   └── ...
├── button.js                ✓ 独立组件
├── cell.js
└── ...                      ✓ 其他组件
```

#### 验证命令
```bash
# 检查 lib 目录是否存在
ls lib/

# 检查关键文件
ls lib/meeui.common.js
ls lib/meeui.esm.js
ls lib/index.js
ls lib/theme-chalk/index.css

# 检查组件文件
ls lib/button.js
ls lib/cell.js
```

---

### 3. 用户安装后会得到的目录结构

```
node_modules/@emhome/meeui/
├── lib/                     # 构建输出（用户实际使用）
│   ├── meeui.common.js
│   ├── meeui.esm.js
│   ├── index.js
│   ├── theme-chalk/
│   │   └── index.css
│   └── button.js
│
├── src/                     # 源代码（可选，用于查看）
│   ├── button/
│   │   ├── index.js
│   │   └── index.scss
│   ├── cell/
│   ├── utils/
│   └── style/
│
├── theme/                   # SCSS 主题源码（用于主题定制）
│   └── index.scss
│
├── types/                   # TypeScript 类型定义
│   ├── index.d.ts
│   └── component.d.ts
│
├── vetur/                   # IDE 支持
│   ├── tags.json
│   └── attributes.json
│
└── package.json
```

---

### 4. 使用方式测试

创建测试项目验证以下使用方式：

#### 方式 1：完整引入
```javascript
import Vue from 'vue'
import MeeUI from '@emhome/meeui'
import '@emhome/meeui/lib/theme-chalk/index.css'

Vue.use(MeeUI)
```

#### 方式 2：按需引入（手动）
```javascript
import Button from '@emhome/meeui/lib/button'
import '@emhome/meeui/lib/theme-chalk/button.css'

Vue.use(Button)
```

#### 方式 3：按需引入（babel-plugin-component）
```javascript
// babel.config.js
plugins: [
  ['component', {
    libraryName: '@emhome/meeui',
    styleLibraryName: 'theme-chalk',
    libDir: 'lib'
  }]
]

// 使用
import { Button, Cell } from '@emhome/meeui'
```

#### 方式 4：CDN 引入
```html
<link rel="stylesheet" href="https://unpkg.com/@emhome/meeui/lib/theme-chalk/index.css">
<script src="https://unpkg.com/@emhome/meeui"></script>
```

---

### 5. TypeScript 支持测试

创建 `.ts` 文件测试：

```typescript
import Vue from 'vue'
import { Button, Cell } from '@emhome/meeui'

// 应该有类型提示
Vue.use(Button)
Vue.use(Cell)
```

---

### 6. 主题定制测试

创建自定义主题文件：

```scss
// custom-theme.scss
$--color-primary: #1989fa;
@import '~@emhome/meeui/theme/index.scss';
```

应该能够成功编译并覆盖默认主题色。

---

## 📋 发布步骤

### 1. 更新版本号
```bash
# 补丁版本（bug 修复）
npm version patch

# 次要版本（新功能）
npm version minor

# 主要版本（破坏性更新）
npm version major
```

### 2. 运行构建
```bash
npm run build
```

### 3. 测试发布内容
查看将要发布的文件：
```bash
npm pack --dry-run
```

这会显示将要打包的所有文件。

### 4. 登录 NPM
```bash
npm login
```

### 5. 发布
```bash
npm publish --access public
```

注意：由于包名使用了 scope (`@emhome/meeui`)，需要加 `--access public`。

### 6. 验证发布
```bash
# 查看包信息
npm info @emhome/meeui

# 在新项目中安装测试
mkdir test-meeui
cd test-meeui
npm init -y
npm install @emhome/meeui
```

---

## 🔍 常见问题排查

### Q1: 发布后用户报错找不到模块
**检查**：
- [ ] `package.json` 的 `main` 字段是否正确
- [ ] `lib/` 目录是否包含在 `files` 字段中
- [ ] 构建是否成功生成了 `lib/meeui.common.js`

### Q2: 样式文件找不到
**检查**：
- [ ] `lib/theme-chalk/` 目录是否存在
- [ ] CSS 文件是否正确生成
- [ ] `package.json` 的 `style` 字段是否正确

### Q3: TypeScript 报错找不到类型
**检查**：
- [ ] `types/` 目录是否包含在 `files` 字段中
- [ ] `package.json` 的 `typings` 字段是否正确
- [ ] `types/index.d.ts` 文件是否存在

### Q4: 按需引入不生效
**检查**：
- [ ] 独立组件文件（如 `lib/button.js`）是否生成
- [ ] 组件样式文件（如 `lib/theme-chalk/button.css`）是否生成
- [ ] babel-plugin-component 配置是否正确

### Q5: CDN 引入报错
**检查**：
- [ ] `lib/index.js` 文件是否存在
- [ ] `package.json` 的 `unpkg` 字段是否正确
- [ ] UMD 构建是否成功

---

## 📊 发布后的包大小估算

### 构建输出大小（lib/ 目录）
- `meeui.common.js`: ~200KB
- `meeui.esm.js`: ~200KB
- `index.js`: ~200KB (UMD)
- `theme-chalk/index.css`: ~60KB
- 独立组件（每个）: ~5-20KB
- 组件样式（每个）: ~1-5KB

### 完整 NPM 包大小
估计总大小：**~1-2MB**

包含：
- lib/ 目录: ~500KB
- src/ 目录: ~300KB
- theme/ 目录: ~200KB
- types/ 目录: ~50KB
- vetur/ 目录: ~50KB

### 用户实际使用大小
**完整引入**：~260KB (JS + CSS)
**按需引入 3-5 个组件**：~30-50KB

---

## ✅ 最终检查清单

发布前确认：

- [ ] 版本号已更新
- [ ] `npm run build` 成功执行
- [ ] `lib/` 目录包含所有必需文件
- [ ] `types/` 目录包含类型定义
- [ ] `theme/` 目录包含 SCSS 源码
- [ ] README.md 文档完整
- [ ] LICENSE 文件存在
- [ ] `.npmignore` 或 `files` 字段配置正确
- [ ] Git 标签已创建
- [ ] 测试项目验证通过
- [ ] 文档和示例代码准确

---

## 🎉 发布成功后

### 1. 更新文档
- 在 GitHub Releases 创建发布说明
- 更新 README 中的版本号
- 更新 CHANGELOG

### 2. 通知用户
- 发布公告
- 更新示例项目
- 社交媒体宣传

### 3. 监控反馈
- 关注 GitHub Issues
- 回复用户问题
- 收集改进建议

---

## 📞 遇到问题？

如果发布过程中遇到问题：

1. 检查 NPM 日志：`npm publish --verbose`
2. 验证包内容：`npm pack` 然后解压 `.tgz` 文件查看
3. 测试本地链接：`npm link` 在本地项目中测试
4. 查看 NPM 文档：https://docs.npmjs.com/

---

**祝发布顺利！** 🚀
