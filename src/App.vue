<template>
  <div class="app-container">
    <h1 class="app-title">MeeUI 组件库</h1>
    <p class="app-description">一个基于Vue的UI组件库</p>

    <div class="components-section">
      <h2>基础组件展示</h2>

      <!-- 按钮组件示例 -->
      <div class="component-demo">
        <h3>Button 按钮</h3>
        <m-button type="primary">主要按钮</m-button>
        <m-button>默认按钮</m-button>
        <m-button type="danger">危险按钮</m-button>
      </div>

      <!-- 图标组件示例 -->
      <div class="component-demo">
        <h3>Icon 图标</h3>
        <m-icon name="success" color="#07c160" size="24" />
        <m-icon name="warning" color="#ff976a" size="24" />
        <m-icon name="error" color="#ee0a24" size="24" />
      </div>

      <!-- 其他组件示例... -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style scoped>
.app-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 40px 20px;
}

.app-title {
  font-size: 36px;
  color: #333;
  margin-bottom: 20px;
}

.app-description {
  font-size: 18px;
  color: #666;
  margin-bottom: 40px;
}

.components-section {
  background-color: #fff;
  border-radius: 8px;
  padding: 30px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.components-section h2 {
  font-size: 24px;
  margin-bottom: 30px;
  color: #333;
}

.component-demo {
  margin-bottom: 40px;
  padding-bottom: 20px;
  border-bottom: 1px solid #f0f0f0;
}

.component-demo:last-child {
  border-bottom: none;
}

.component-demo h3 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #333;
}
</style>
