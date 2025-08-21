# 搜索功能配置说明

## 重要提示
为了使搜索功能正常工作，需要在 Hexo 博客根目录进行以下配置：

### 1. 复制搜索数据生成器
将 `themes/simple-but-not-just-simple/scripts/search-generator.js` 文件复制到博客根目录的 `scripts/` 文件夹中：

```bash
# 在博客根目录执行
mkdir -p scripts
cp themes/simple-but-not-just-simple/scripts/search-generator.js scripts/
```

### 2. 重新生成博客
```bash
hexo clean
hexo generate
hexo server
```

### 3. 验证搜索数据
访问 `http://localhost:4000/search.json` 确认搜索数据文件已生成。

## 功能说明

### 搜索功能
- 点击顶部导航栏的搜索图标（放大镜）打开搜索模态框
- 支持按标题、内容、标签、分类搜索
- 实时搜索结果显示
- 支持关键词高亮

### 导航菜单
- 移除了 Home 菜单项
- 点击左上角博客标题可回到首页
- Tags 和 Categories 页面已配置完成

### 图标功能
- GitHub 图标：链接到 GitHub（可在 layout.ejs 中修改链接）
- 搜索图标：打开搜索功能

## 故障排除

如果搜索功能不工作：
1. 确认 `search.json` 文件已生成
2. 检查浏览器控制台是否有错误
3. 确认 `search-generator.js` 已正确放置在根目录的 `scripts/` 文件夹中
4. 重新执行 `hexo clean && hexo generate`