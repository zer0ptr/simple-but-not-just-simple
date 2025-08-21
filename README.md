# Simple But Not Just Simple

A simple but elegant Hexo theme inspired by [deebato's blog](https://d33b4t0.com/). This theme focuses on clean typography, minimal design, and excellent readability.

## Features

- 🎨 Clean and minimal design
- 📱 Fully responsive layout
- 🚀 Fast loading and optimized performance
- 📝 Excellent typography and readability
- 🏷️ Support for categories and tags
- 💬 Comment system support (Disqus)
- 📊 Analytics support (Google Analytics, Baidu Analytics)
- 🔍 SEO optimized
- 🌙 Reading progress indicator
- 📋 Code copy functionality
- ⬆️ Back to top button
- 🎯 Smooth scrolling

## Demo

You can see a live demo at [your-demo-site.com](https://your-demo-site.com)

## Installation

### Method 1: Git Clone

```bash
cd your-hexo-site
git clone https://github.com/zer0ptr/simple-but-not-just-simple.git themes/simple-but-not-just-simple
```

### Method 2: Download

Download the theme files and extract them to `themes/simple-but-not-just-simple` directory.

## Configuration

### 1. Enable the theme

Modify your site's `_config.yml`:

```yaml
theme: simple-but-not-just-simple
```

### 2. Theme Configuration

Copy the theme's `_config.yml` to your site root and customize it:

```yaml
# Site information
site:
  title: "Your Blog Title"
  subtitle: "Your blog subtitle"
  author: "Your Name"
  description: "Your blog description"

# Navigation menu
menu:
  Home: /
  Archives: /archives
  Categories: /categories
  Tags: /tags
  About: /about

# Social links
social:
  GitHub: https://github.com/zer0ptr
  Twitter: https://twitter.com/zer0ptr
  Email: mailto:iszhenghailin@gmail.com

# Post settings
post:
  excerpt: true
  excerpt_length: 200
  read_more: true

# Comments (optional)
comments:
  enable: true
  provider: disqus
  disqus_shortname: your-disqus-shortname

# Analytics (optional)
analytics:
  google_analytics: UA-XXXXXXXX-X
  baidu_analytics: your-baidu-id

# Misc settings
misc:
  word_count: true
  reading_time: true
  updated_time: true
```

### 3. Create Pages

Create necessary pages:

```bash
# Create about page
hexo new page about

# Create categories page
hexo new page categories
echo 'type: categories' >> source/categories/index.md

# Create tags page
hexo new page tags
echo 'type: tags' >> source/tags/index.md
```

## Writing Posts

### Front Matter

Use the following front matter in your posts:

```yaml
---
title: Your Post Title
date: 2024-01-01 12:00:00
categories:
  - Category Name
tags:
  - tag1
  - tag2
description: Post description for SEO
---
```

### Post Excerpt

You can define post excerpts in two ways:

1. Use `<!-- more -->` tag in your post content
2. Set `excerpt` in front matter

## Customization

### Custom CSS

Create `source/css/custom.css` in your site root to add custom styles:

```css
/* Your custom styles */
.custom-class {
    /* Your styles here */
}
```

### Custom JavaScript

Create `source/js/custom.js` in your site root to add custom JavaScript:

```javascript
// Your custom JavaScript
console.log('Custom JS loaded');
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- IE 11+

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This theme is released under the [MIT License](LICENSE).

## Credits

- Inspired by [deebato's blog](https://d33b4t0.com/)
- Built for [Hexo](https://hexo.io/)
- Typography inspired by modern web design principles

## Changelog

### v1.0.0
- Initial release
- Basic theme functionality
- Responsive design
- Comment system support
- Analytics integration

## Support

If you have any questions or issues, please:

1. Check the [documentation](README.md)
2. Search [existing issues](https://github.com/zer0ptr/simple-but-not-just-simple/issues)
3. Create a [new issue](https://github.com/zer0ptr/simple-but-not-just-simple/issues/new)

---

Made with ❤️ for the Hexo community