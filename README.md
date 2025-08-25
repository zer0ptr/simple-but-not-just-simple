# Simple But Not Just Simple

一个简洁而优雅的 Hexo 主题，灵感来源于 [deebato's blog](https://d33b4t0.com/)。这个主题专注于清晰的排版、极简的设计和出色的阅读体验。

## 特色功能

- 🎨 简洁优雅的设计风格
- 📱 完美适配各种设备
- 🚀 快速加载，性能优化
- 📝 舒适的阅读体验和排版
- 🏷️ 支持分类和标签
- 💬 评论系统支持 (Disqus)
- 📊 数据统计支持 (Google Analytics, 百度统计)
- 🔍 SEO 友好
- 🌙 阅读进度指示器
- 📋 代码一键复制
- ⬆️ 返回顶部按钮
- 🎯 平滑滚动效果

## 在线预览

你可以在这里查看效果：[your-demo-site.com](https://your-demo-site.com)

## 安装方法

### 方法一：Git 克隆

```bash
cd your-hexo-site
git clone https://github.com/zer0ptr/simple-but-not-just-simple.git themes/simple-but-not-just-simple
```

### 方法二：直接下载

下载主题文件并解压到 `themes/simple-but-not-just-simple` 目录。

## 配置说明

### 1. 启用主题

修改站点根目录的 `_config.yml` 文件：

```yaml
theme: simple-but-not-just-simple
```

### 2. 主题配置

将主题目录下的 `_config.yml` 复制到站点根目录并根据需要修改：

```yaml
# 站点信息
site:
  title: "你的博客标题"
  subtitle: "博客副标题"
  author: "你的名字"
  description: "博客描述"

# 导航菜单
menu:
  首页: /
  归档: /archives
  分类: /categories
  标签: /tags
  关于: /about

# 社交链接
social:
  GitHub: https://github.com/你的用户名
  Twitter: https://twitter.com/你的用户名
  Email: mailto:你的邮箱@example.com

# 文章设置
post:
  excerpt: true
  excerpt_length: 200
  read_more: true

# 评论系统（可选）
comments:
  enable: true
  provider: disqus
  disqus_shortname: 你的-disqus-shortname

# 数据统计（可选）
analytics:
  google_analytics: UA-XXXXXXXX-X
  baidu_analytics: 你的百度统计ID

# 其他设置
misc:
  word_count: true
  reading_time: true
  updated_time: true
```

### 3. 创建页面

创建必要的页面：

```bash
# 创建关于页面
hexo new page about

# 创建分类页面
hexo new page categories
echo 'type: categories' >> source/categories/index.md

# 创建标签页面
hexo new page tags
echo 'type: tags' >> source/tags/index.md
```

## 写作指南

### 文章头部信息

在文章中使用以下格式的头部信息：

```yaml
---
title: 你的文章标题
date: 2024-01-01 12:00:00
categories:
  - 分类名称
tags:
  - 标签1
  - 标签2
description: 文章描述，用于SEO优化
---
```

### 文章摘要

你可以通过两种方式设置文章摘要：

1. 在文章内容中使用 `<!-- more -->` 标签
2. 在头部信息中设置 `excerpt` 字段

## 个性化定制

### 自定义样式

在站点根目录创建 `source/css/custom.css` 文件来添加自定义样式：

```css
/* 你的自定义样式 */
.custom-class {
    /* 在这里写你的样式 */
}
```

### 自定义脚本

在站点根目录创建 `source/js/custom.js` 文件来添加自定义JavaScript：

```javascript
// 你的自定义JavaScript代码
console.log('自定义脚本已加载');
```

## 浏览器支持

- Chrome (最新版)
- Firefox (最新版)
- Safari (最新版)
- Edge (最新版)
- IE 11+

## 参与贡献

欢迎大家一起完善这个主题！

1. Fork 这个仓库
2. 创建你的功能分支 (`git checkout -b feature/amazing-feature`)
3. 提交你的修改 (`git commit -m 'Add some amazing feature'`)
4. 推送到分支 (`git push origin feature/amazing-feature`)
5. 提交 Pull Request

## 开源协议

本主题基于 [MIT License](LICENSE) 开源。

## 致谢

- 设计灵感来自 [deebato's blog](https://d33b4t0.com/)
- 为 [Hexo](https://hexo.io/) 静态博客框架而生


## 更新日志

### v1.0.0
- 首次发布
- 基础主题功能
- 响应式设计

## 技术支持

如果你遇到任何问题或有疑问，欢迎：

1. 查看这份 [使用文档](README.md)
2. 搜索已有的 [问题反馈](https://github.com/zer0ptr/simple-but-not-just-simple/issues)
3. 如果找不到解决方案，可以 [提交新问题](https://github.com/zer0ptr/simple-but-not-just-simple/issues/new)
4. 参与我们的 [社区讨论](https://github.com/zer0ptr/simple-but-not-just-simple/discussions)

---

**祝你用 Simple But Not Just Simple 写博客愉快！🎉**