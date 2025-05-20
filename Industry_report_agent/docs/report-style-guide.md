# 行业分析报告样式指南

## 1. 自适应布局系统

### 1.1 布局模式

#### A. 文字密集型布局
- **适用场景**：市场分析、政策解读等文字为主的内容
- **布局特点**
  - 宽列式排版（70-80字/行）
  - 段落间距加大（1.8倍行高）
  - 重点内容使用引用块或卡片强调
  - 辅助图表采用嵌入式布局

#### B. 图表主导型布局
- **适用场景**：数据分析、趋势对比等图表为主的内容
- **布局特点**
  - 大尺寸图表（宽度70-100%）
  - 图表说明紧随其后
  - 多图表时采用网格布局
  - 响应式调整：小屏幕下垂直排列

#### C. 混合型布局
- **适用场景**：综合性内容，需要图文并茂的展示
- **布局模式**
  - 左图右文（默认）
  - 上图下文（窄屏）
  - 交错式排版
  - 动态调整图文比例

### 1.2 响应式策略

- **断点设计**
  ```css
  --breakpoints: {
    xs: 480px,   /* 超小屏 */
    sm: 640px,   /* 小屏 */
    md: 768px,   /* 中屏 */
    lg: 1024px,  /* 大屏 */
    xl: 1280px,  /* 超大屏 */
    xxl: 1536px  /* 特大屏 */
  }
  ```

- **内容自适应规则**
  - 图表尺寸：相对单位（vw, %）
  - 字体大小：clamp()函数动态计算
  - 布局切换：CSS Grid/Flexbox动态调整
  - 间距调整：rem单位响应式变化

## 2. 组件样式系统

### 2.1 基础组件

#### A. 文本组件
- **标题系统**
  ```css
  .title-h1 {
    font-size: clamp(1.875rem, 5vw, 2.5rem);
    line-height: 1.2;
    margin-bottom: 2rem;
  }
  ```

- **段落文本**
  ```css
  .paragraph {
    font-size: clamp(1rem, 2vw, 1.125rem);
    line-height: 1.8;
    margin-bottom: 1.5rem;
  }
  ```

#### B. 图表容器
- **自适应尺寸**
  ```css
  .chart-container {
    width: clamp(300px, 90%, 1200px);
    margin: 2rem auto;
    aspect-ratio: 16/9;
  }
  ```

### 2.2 布局组件

#### A. 弹性卡片
```css
.flex-card {
  display: flex;
  gap: var(--spacing);
  padding: clamp(1rem, 3vw, 2rem);
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
}
```

#### B. 网格容器
```css
.grid-container {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: var(--spacing);
  padding: var(--container-padding);
}
```

## 3. 主题与视觉系统

### 3.1 颜色系统
```css
:root {
  /* 主色调 */
  --primary-100: #e6f0ff;
  --primary-500: #2a5caa;
  --primary-900: #1a365d;
  
  /* 辅助色 */
  --accent-100: #f0f9eb;
  --accent-500: #91cc75;
  --accent-900: #3c8618;
  
  /* 文本色 */
  --text-primary: #1a202c;
  --text-secondary: #4a5568;
  --text-tertiary: #718096;
}
```

### 3.2 字体系统
```css
:root {
  /* 字体族 */
  --font-heading: "思源黑体", "Source Han Sans CN", "微软雅黑";
  --font-body: "思源宋体", "Source Han Serif CN", "Noto Serif SC";
  --font-code: "JetBrains Mono", "SFMono-Regular";
  
  /* 字重 */
  --weight-normal: 400;
  --weight-medium: 500;
  --weight-bold: 600;
  
  /* 行高 */
  --leading-tight: 1.2;
  --leading-normal: 1.5;
  --leading-loose: 1.8;
}
```

## 4. 最佳实践指南

### 4.1 内容组织原则

- **层级结构**
  - 使用清晰的标题层级（H1-H4）
  - 重要内容前置
  - 相关内容分组展示
  - 使用空白建立视觉层次

- **图文配比**
  - 文字密集段落：70-30文图比
  - 数据分析段落：40-60文图比
  - 图表展示段落：20-80文图比

### 4.2 响应式建议

- **移动优先原则**
  - 从最小视口开始设计
  - 渐进增强功能和布局
  - 保持内容的可访问性

- **性能优化**
  - 使用响应式图片
  - 延迟加载非关键资源
  - 优化大型图表的渲染
  - 减少布局抖动

### 4.3 特殊内容处理

- **大型图表**
  - 提供缩放/平移控制
  - 考虑分屏展示
  - 添加导航辅助

- **复杂数据表格**
  - 横向滚动而非缩放
  - 固定关键列
  - 提供搜索/筛选功能

- **交互式内容**
  - 确保触摸友好
  - 提供键盘导航
  - 添加适当的反馈效果