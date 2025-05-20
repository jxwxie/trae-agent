# 统一报告配置系统说明文档

## 1. 系统概述

统一报告配置系统（Unified Report Configuration System）是一个集成的配置管理方案，用于标准化行业分析报告的生成过程。该系统整合了原有的模板系统，并支持多种报告风格，提供了更灵活和可扩展的配置选项。

## 2. 核心功能

### 2.1 基础配置（baseConfig）

- **主题配置**：统一的颜色系统、排版规范和响应式断点
- **布局配置**：容器尺寸、网格系统和间距管理

### 2.2 报告模板类型（templateTypes）

支持三种基础模板风格：

1. **标准分析型（standard）**
   - 全面的行业分析报告模板
   - 文字与图表比例 7:3
   - 适合大多数行业分析场景

2. **图表主导型（chartDriven）**
   - 以数据可视化为主
   - 文字与图表比例 4:6
   - 适合数据密集型分析

3. **咨询建议型（consulting）**
   - 侧重战略建议和解决方案
   - 文字与图表比例 8:2
   - 适合战略咨询报告

### 2.3 图表配置（chartConfig）

- **统一主题**：配色方案、动画效果
- **图表类型**：各类图表的默认配置
- **响应式规则**：不同设备下的展示策略

### 2.4 组件配置（components）

- **章节组件**：支持多种展示变体
- **图表组件**：基础版和交互增强版

## 3. 使用指南

### 3.1 模板选择

```javascript
// 选择报告模板
const template = config.utils.selectTemplate('standard');
```

### 3.2 图表配置

```javascript
// 配置图表
const chartOptions = config.chartConfig.types.line;
```

### 3.3 响应式处理

```javascript
// 获取响应式布局
const layout = config.utils.selectLayout('desktop');
```

## 4. 最佳实践

### 4.1 模板选择建议

- **标准分析型**：适用于综合性行业分析
- **图表主导型**：适用于数据分析为主的报告
- **咨询建议型**：适用于战略规划类报告

### 4.2 组件使用建议

- 根据内容特点选择合适的章节变体
- 数据复杂度高时使用交互式图表组件

### 4.3 性能优化建议

- 合理使用图表动画
- 启用适当的响应式策略

## 5. 配置示例

### 5.1 创建标准报告

```javascript
const reportConfig = {
  type: 'standard',
  theme: config.baseConfig.theme,
  layout: config.baseConfig.layout,
  sections: [
    // 配置各章节
  ]
};
```

### 5.2 自定义图表

```javascript
const customChart = {
  type: 'line',
  options: {
    ...config.chartConfig.types.line,
    // 自定义配置
  }
};
```

## 6. 注意事项

1. 保持配色方案的一致性
2. 确保响应式配置的完整性
3. 合理控制图表数量和复杂度

## 7. 更新维护

- 定期检查和更新配置项
- 收集用户反馈优化模板
- 持续改进组件性能