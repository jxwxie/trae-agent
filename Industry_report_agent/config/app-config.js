module.exports = {
  // 应用基础配置
  app: {
    name: '行业分析报告智能体',
    version: '1.0.0',
    env: process.env.NODE_ENV || 'development',
    port: process.env.PORT || 3000,
    apiPrefix: '/api/v1'
  },

  // 数据处理配置
  dataProcessing: {
    batchSize: 1000,
    parallelProcessing: true,
    maxWorkers: 4,
    timeout: 30000,
    // 数据源适配策略
    sourceAdaptation: {
      enabled: true,
      // API不可用时的降级策略
      fallbackStrategy: {
        // 本地数据缓存时间
        localCacheTTL: 7 * 24 * 60 * 60, // 7天
        // 备选数据源优先级
        alternativeSources: ['web', 'database', 'file'],
        // 数据合并策略
        mergingStrategy: 'weighted_average',
        // 数据质量阈值
        qualityThresholds: {
          completeness: 0.8,
          accuracy: 0.85,
          timeliness: 0.7
        }
      },
      // 数据补充策略
      enrichmentStrategy: {
        enabled: true,
        methods: {
          historicalData: true,
          industryBenchmarks: true,
          marketEstimates: true,
          competitorAnalysis: true
        },
        // 数据插补方法
        interpolationMethods: ['linear', 'polynomial', 'moving_average']
      }
    }
  },

  // 报告生成配置
  reportGeneration: {
    defaultTemplate: 'base_new_optimized',
    outputFormats: ['html', 'pdf', 'md'],
    chartLibrary: 'echarts',
    defaultChartTheme: 'professional',
    fonts: {
      title: '微软雅黑',
      body: 'Arial'
    },
    colors: {
      primary: '#2a5caa',
      secondary: '#91cc75',
      accent: '#fac858'
    }
  },

  // 图表配置
  charts: {
    defaultWidth: 800,
    defaultHeight: 400,
    responsive: true,
    animation: true,
    themes: {
      professional: {
        backgroundColor: '#ffffff',
        textStyle: {
          color: '#333333'
        },
        title: {
          textStyle: {
            color: '#000000',
            fontWeight: 'bold'
          }
        },
        toolbox: {
          show: true
        }
      }
    }
  },

  // 缓存配置
  cache: {
    enabled: true,
    driver: 'redis',
    ttl: 3600,
    prefix: 'ira:'
  },

  // 日志配置
  logging: {
    level: 'info',
    format: 'json',
    directory: './logs',
    maxFiles: '14d'
  },

  // 安全配置
  security: {
    rateLimit: {
      windowMs: 15 * 60 * 1000,
      max: 100
    },
    cors: {
      origin: '*',
      methods: ['GET', 'POST', 'PUT', 'DELETE'],
      allowedHeaders: ['Content-Type', 'Authorization']
    }
  },

  // MCP服务器配置
  mcpServers: {
    tavily: {
      enabled: true,
      apiKey: process.env.TAVILY_API_KEY
    },
    fetch: {
      enabled: true,
      timeout: 5000
    },
    brave: {
      enabled: true,
      apiKey: process.env.BRAVE_API_KEY
    },
    duckduckgo: {
      enabled: true
    },
    firecrawl: {
      enabled: true,
      maxConcurrency: 5
    },
    firesystem: {
      enabled: true
    },
    pandoc: {
      enabled: true,
      timeout: 30000
    },
    excel: {
      enabled: true
    },
    memory: {
      enabled: true,
      maxSize: '1GB'
    },
    git: {
      enabled: true
    },
    github: {
      enabled: true,
      token: process.env.GITHUB_TOKEN
    }
  }
};