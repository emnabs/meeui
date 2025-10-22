/**
 * Build Theme CSS from SCSS
 *
 * Compiles all component styles from SCSS to CSS
 * Outputs to lib/theme-chalk directory
 * Follows Element-UI v2.15.8 theme build pattern
 *
 * @description
 * This script compiles SCSS files to CSS:
 * - Main theme file: theme/index.scss -> lib/theme-chalk/index.css
 * - Individual components: src//index.scss -> lib/theme-chalk/*.css
 * - Base styles: src/style/base.scss -> lib/theme-chalk/base.css
 *
 * @author MeeUI Team
 * @date 2025-10-22
 */

const fs = require('fs')
const path = require('path')
const sass = require('sass')

// Colors for console output
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  red: '\x1b[31m',
  yellow: '\x1b[33m',
  cyan: '\x1b[36m',
  dim: '\x1b[2m'
}

// Paths configuration
const themePath = path.resolve(__dirname, '../theme')
const srcPath = path.resolve(__dirname, '../src')
const outputPath = path.resolve(__dirname, '../lib/theme-chalk')

console.log(`${colors.cyan}[build-theme]${colors.reset} Starting theme compilation...`)
console.log(`${colors.dim}  Source: ${themePath}${colors.reset}`)
console.log(`${colors.dim}  Output: ${outputPath}${colors.reset}\n`)

// Ensure output directory exists
try {
  if (!fs.existsSync(outputPath)) {
    fs.mkdirSync(outputPath, { recursive: true })
    console.log(`${colors.cyan}[build-theme]${colors.reset} Created output directory`)
  }
} catch (error) {
  console.error(`${colors.red}✖ [build-theme] Failed to create output directory!${colors.reset}`)
  console.error(`  Error: ${error.message}`)
  process.exit(1)
}

/**
 * Compile SCSS file to CSS
 * @param {string} inputFile - Path to input SCSS file
 * @param {string} outputFile - Path to output CSS file
 * @returns {boolean} - Success status
 */
function compileSCSS(inputFile, outputFile) {
  try {
    const result = sass.renderSync({
      file: inputFile,
      outputStyle: 'expanded',
      includePaths: [themePath, srcPath]
    })

    fs.writeFileSync(outputFile, result.css)

    const size = (result.css.length / 1024).toFixed(2)
    const fileName = path.basename(outputFile)
    console.log(`  ${colors.green}✔${colors.reset} ${fileName} ${colors.dim}(${size} KB)${colors.reset}`)

    return true
  } catch (error) {
    const fileName = path.basename(inputFile)
    console.error(`  ${colors.red}✖ ${fileName}${colors.reset}`)
    console.error(`    Error: ${error.message}`)
    return false
  }
}

// Build main theme file
console.log(`${colors.cyan}[build-theme]${colors.reset} Compiling main theme file...`)

const mainThemeInput = path.join(themePath, 'index.scss')
const mainThemeOutput = path.join(outputPath, 'index.css')

if (!fs.existsSync(mainThemeInput)) {
  console.error(`${colors.red}✖ [build-theme] Main theme file not found!${colors.reset}`)
  console.error(`  Expected: ${mainThemeInput}`)
  process.exit(1)
}

let hasErrors = false

if (!compileSCSS(mainThemeInput, mainThemeOutput)) {
  hasErrors = true
}

// Build individual component styles
let components
try {
  components = require('./components.json')
} catch (error) {
  console.error(`${colors.red}✖ [build-theme] Failed to load components.json!${colors.reset}`)
  console.error(`  Error: ${error.message}`)
  process.exit(1)
}

console.log(`\n${colors.cyan}[build-theme]${colors.reset} Compiling component styles...`)

let compiledCount = 0
let skippedCount = 0

Object.keys(components).forEach(key => {
  const componentStylePath = path.join(srcPath, key, 'index.scss')

  if (fs.existsSync(componentStylePath)) {
    if (compileSCSS(componentStylePath, path.join(outputPath, `${key}.css`))) {
      compiledCount++
    } else {
      hasErrors = true
    }
  } else {
    skippedCount++
  }
})

console.log(`${colors.dim}  Compiled: ${compiledCount}, Skipped: ${skippedCount}${colors.reset}`)

// Build base styles
console.log(`\n${colors.cyan}[build-theme]${colors.reset} Compiling base styles...`)

const baseStylePath = path.join(srcPath, 'style', 'base.scss')
if (fs.existsSync(baseStylePath)) {
  const baseOutputPath = path.join(outputPath, 'base.css')
  if (!compileSCSS(baseStylePath, baseOutputPath)) {
    hasErrors = true
  }
} else {
  console.log(`  ${colors.yellow}⚠ base.scss not found, skipped${colors.reset}`)
}

// Summary
console.log('')
if (hasErrors) {
  console.error(`${colors.red}✖ [build-theme] Theme build completed with errors!${colors.reset}`)
  process.exit(1)
} else {
  console.log(`${colors.green}✔ [build-theme] Theme build completed successfully!${colors.reset}`)
  console.log(`  ${colors.cyan}Output:${colors.reset} ${outputPath}`)
  console.log(`  ${colors.cyan}Files:${colors.reset} ${compiledCount + 2} CSS files generated`)
}
