// 搜索数据生成器
// 这个文件需要放在 Hexo 根目录的 scripts 文件夹中

hexo.extend.generator.register('search', function(locals) {
    const posts = locals.posts.sort('-date');
    const searchData = [];
    
    posts.forEach(function(post) {
        if (post.published) {
            searchData.push({
                title: post.title,
                url: post.permalink,
                content: post.content ? post.content.replace(/<[^>]*>/g, '').substring(0, 300) : '',
                date: post.date.format('YYYY-MM-DD'),
                tags: post.tags ? post.tags.map(tag => tag.name) : [],
                categories: post.categories ? post.categories.map(cat => cat.name) : []
            });
        }
    });
    
    return {
        path: 'search.json',
        data: JSON.stringify(searchData)
    };
});