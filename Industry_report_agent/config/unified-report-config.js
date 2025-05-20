// 统一报告配置系统
module.exports = {
  // 基础配置
  baseConfig: {
    // 主题配置
    theme: {
      colors: {
        primary: {
          base: '#2a5caa',  // 主色调
          light: '#4b7cc9',
          dark: '#1e4b8f'
        },
        secondary: {
          base: '#2c5282',  // 辅助蓝色，增强层次感
          light: '#4a69a7',
          dark: '#1a365d'
        },
        accent: {
          base: '#91cc75',  // 辅助色
          light: '#a7d891',
          dark: '#63a84d'
        },
        text: {
          primary: '#1a202c',  // 更深的文本色，提高可读性
          secondary: '#4a5568',
          muted: '#718096',
          light: '#ffffff'
        },
        background: {
          primary: '#f7fafc',  // 更柔和的背景色
          secondary: '#ffffff',
          tertiary: '#edf2f7',
          card: 'rgba(255, 255, 255, 0.95)',  // 增加卡片不透明度
          overlay: 'rgba(26, 32, 44, 0.05)'  // 更深的遮罩色
        }
      },
      typography: {
        fontFamily: {
          title: '思源黑体, Source Han Sans CN, 微软雅黑, system-ui, sans-serif',
          body: '思源宋体, Source Han Serif CN, Noto Serif SC, system-ui, serif',
          mono: 'JetBrains Mono, SFMono-Regular, Menlo, Consolas, monospace'
        },
        fontSize: {
          xs: 'clamp(0.813rem, 0.75rem + 0.25vw, 0.875rem)',  // 微调字号
          sm: 'clamp(0.875rem, 0.825rem + 0.25vw, 1rem)',
          base: 'clamp(1rem, 0.95rem + 0.25vw, 1.125rem)',
          lg: 'clamp(1.125rem, 1.075rem + 0.25vw, 1.25rem)',
          xl: 'clamp(1.25rem, 1.2rem + 0.25vw, 1.5rem)',
          h1: 'clamp(2.25rem, 2rem + 1vw, 2.75rem)',  // 增大标题字号
          h2: 'clamp(1.75rem, 1.6rem + 0.8vw, 2rem)',
          h3: 'clamp(1.375rem, 1.25rem + 0.6vw, 1.5rem)',
          h4: 'clamp(1.25rem, 1.15rem + 0.4vw, 1.375rem)'
        },
        fontWeight: {
          normal: 400,
          medium: 500,
          semibold: 600,
          bold: 700
        },
        lineHeight: {
          tight: 1.4,
          normal: 1.6,
          relaxed: 1.8
        }
      },
      spacing: {
        xs: '0.625rem',  // 增加基础间距
        sm: '1.25rem',
        md: '2rem',
        lg: '2.5rem',
        xl: '4rem',
        section: '4rem',  // 增加章节间距
        subsection: '2.5rem',
        paragraph: '1.75rem'  // 增加段落间距
      },
      breakpoints: {
        xs: '480px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        xxl: '1536px'
      },
      shadows: {
        sm: '0 2px 4px rgba(0, 0, 0, 0.05)',
        md: '0 4px 6px rgba(0, 0, 0, 0.1)',
        lg: '0 10px 15px rgba(0, 0, 0, 0.1)',
        xl: '0 20px 25px rgba(0, 0, 0, 0.1)'
      },
      transitions: {
        fast: 'all 0.2s ease',
        normal: 'all 0.3s ease',
        slow: 'all 0.5s ease',
        smooth: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
      }
    },

    // 布局配置
    layout: {
      container: {
        maxWidth: '1440px',  // 增加最大宽度，适应大屏显示
        padding: {
          desktop: '2.5rem',  // 增加边距
          tablet: '2rem',
          mobile: '1.5rem'
        },
        margin: 'auto'
      },
      grid: {
        columns: {
          xxl: 4,  // 增加列数，提供更灵活的布局
          xl: 3,
          lg: 3,
          md: 2,
          sm: 2,
          xs: 1
        },
        gap: {
          xxl: '3rem',  // 增加间距
          xl: '2.5rem',
          lg: '2.25rem',
          md: '2rem',
          sm: '1.5rem',
          xs: '1.25rem'
        }
      },
      sections: {
        padding: {
          xxl: '4rem',  // 增加章节内边距
          xl: '3.5rem',
          lg: '3rem',
          md: '2.5rem',
          sm: '2rem',
          xs: '1.75rem'
        },
        margin: {
          xxl: '5rem',  // 增加章节外边距
          xl: '4.5rem',
          lg: '4rem',
          md: '3.5rem',
          sm: '3rem',
          xs: '2.5rem'
        }
      },
      cards: {
        padding: {
          xxl: '2.5rem',  // 增加卡片内边距
          xl: '2.25rem',
          lg: '2rem',
          md: '1.75rem',
          sm: '1.5rem',
          xs: '1.25rem'
        },
        borderRadius: {
          xxl: '1.25rem',  // 增加圆角
          xl: '1.125rem',
          lg: '1rem',
          md: '0.875rem',
          sm: '0.75rem',
          xs: '0.625rem'
        },
        shadow: {  // 添加阴影效果
          default: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
          hover: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)'
        }
      }
    },

    // 组件配置
    components: {
      // 图表配置
      charts: {
        colors: ['#1a365d', '#2c5282', '#718096', '#4a5568', '#2b6cb0', '#3182ce', '#4299e1', '#63b3ed', '#90cdf4'],  // 专业蓝色系配色
        title: {
          textStyle: {
            fontSize: 18,  // 增大标题字号
            fontWeight: 600,  // 加粗标题
            color: '#1a202c',  // 更深的文本色
            lineHeight: 1.4
          },
          subtextStyle: {  // 添加副标题样式
            fontSize: 14,
            color: '#4a5568',
            lineHeight: 1.6
          }
        },
        legend: {
          textStyle: {
            fontSize: 14,
            color: '#4a5568',  // 更深的图例文本色
            fontWeight: 500  // 适当加粗
          },
          itemGap: 20,  // 增加图例间距
          padding: [8, 16]  // 增加内边距
        },
        tooltip: {
          backgroundColor: 'rgba(247, 250, 252, 0.95)',  // 更淡的背景色
          borderColor: '#e2e8f0',
          textStyle: {
            color: '#1a202c',  // 更深的文本色
            fontSize: 14
          },
          padding: [12, 16],  // 增加内边距
          extraCssText: 'box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);'  // 添加阴影
        },
        axis: {
          nameTextStyle: {
            fontSize: 14,
            color: '#4a5568',  // 更深的轴标题色
            fontWeight: 500,  // 适当加粗
            padding: [0, 0, 8, 0]  // 增加底部间距
          },
          axisLine: {
            lineStyle: {
              color: '#cbd5e0',  // 更淡的轴线色
              width: 1.5  // 加粗轴线
            }
          },
          splitLine: {
            lineStyle: {
              color: '#e2e8f0',
              type: 'dashed'  // 使用虚线
            }
          },
          axisLabel: {  // 添加轴标签样式
            fontSize: 12,
            color: '#4a5568',
            margin: 12  // 增加标签间距
          }
        },
        grid: {  // 添加网格配置
          top: '15%',
          left: '5%',
          right: '5%',
          bottom: '10%',
          containLabel: true
        }
      },

      // 表格配置
      tables: {
        headerBackground: '#f7fafc',  // 更淡的表头背景
        headerTextColor: '#1a202c',  // 更深的表头文本色
        borderColor: '#e2e8f0',
        hoverBackground: '#edf2f7',  // 更淡的悬停背景
        fontSize: {
          header: '0.9375rem',  // 增大表头字号
          body: '0.875rem'
        },
        padding: {
          cell: '1rem 1.25rem'  // 增加单元格内边距
        },
        fontWeight: {  // 添加字重配置
          header: 600,
          body: 400
        },
        lineHeight: {  // 添加行高配置
          header: 1.5,
          body: 1.6
        },
        borderWidth: '1px',  // 添加边框宽度
        borderStyle: 'solid',  // 添加边框样式
        transition: 'all 0.2s ease'  // 添加过渡效果
      },

      // 卡片配置
      cards: {
        background: '#ffffff',
        borderRadius: '0.5rem',
        shadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
        hoverShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        padding: '1.5rem',
        transition: 'all 0.3s ease'
      }
    }
  },

  // 报告类型配置
  reportTypes: {
    standard: {
      name: '标准分析报告',
      sections: [
        '市场概况',
        '竞争格局分析',
        '发展趋势预测',
        '投资机会分析',
        '风险分析',
        '发展建议'
      ],
      charts: {
        marketSize: {
          type: 'bar',
          options: {
            title: { show: true },
            tooltip: { trigger: 'axis' },
            legend: { show: true },
            grid: { containLabel: true },
            yAxis: [{ type: 'value' }],
            xAxis: [{ type: 'category' }]
          }
        },
        marketStructure: {
          type: 'pie',
          options: {
            title: { show: true },
            tooltip: { trigger: 'item' },
            legend: { orient: 'horizontal', bottom: 'bottom' },
            series: [{
              radius: ['40%', '70%'],
              avoidLabelOverlap: false,
              itemStyle: {
                borderRadius: 10,
                borderColor: '#fff',
                borderWidth: 2
              },
              label: {
                show: true,
                formatter: '{b}\n{c}%'
              }
            }]
          }
        }
      }
    }
  }
};