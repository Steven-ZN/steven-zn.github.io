// 搜索功能
class SiteSearch {
  constructor() {
    this.searchData = [];
    this.searchWrapper = null;
    this.searchInput = null;
    this.searchResults = null;
    this.searchToggle = null;
    this.isExpanded = false;

    this.init();
  }

  async init() {
    // 创建搜索组件
    this.createSearchComponent();

    // 加载搜索数据
    await this.loadSearchData();

    // 绑定事件
    this.bindEvents();
  }

  createSearchComponent() {
    // 创建搜索容器
    this.searchWrapper = document.createElement('div');
    this.searchWrapper.className = 'search-wrapper';

    // 创建搜索表单
    const searchForm = document.createElement('form');
    searchForm.className = 'search-form';
    searchForm.onsubmit = (e) => e.preventDefault();

    // 创建搜索输入框
    this.searchInput = document.createElement('input');
    this.searchInput.type = 'text';
    this.searchInput.className = 'search-input';
    this.searchInput.placeholder = '搜索...';

    // 创建搜索按钮
    this.searchToggle = document.createElement('button');
    this.searchToggle.type = 'button';
    this.searchToggle.className = 'search-toggle';
    this.searchToggle.innerHTML = '<i class="fas fa-search"></i>';

    // 创建搜索结果容器
    this.searchResults = document.createElement('div');
    this.searchResults.className = 'search-results';

    // 组装组件
    searchForm.appendChild(this.searchToggle);
    searchForm.appendChild(this.searchInput);
    this.searchWrapper.appendChild(searchForm);
    this.searchWrapper.appendChild(this.searchResults);

    // 添加到页面
    document.body.appendChild(this.searchWrapper);
  }

  async loadSearchData() {
    try {
      // 获取所有页面的 JSON 数据
      const response = await fetch('/search.json');
      if (response.ok) {
        this.searchData = await response.json();
      } else {
        // 如果没有 search.json，使用默认数据
        this.createDefaultSearchData();
      }
    } catch (error) {
      console.warn('搜索数据加载失败，使用默认数据');
      this.createDefaultSearchData();
    }
  }

  createDefaultSearchData() {
    // 创建默认搜索数据
    this.searchData = [
      {
        title: '首页',
        url: '/',
        content: 'Nuojunxi Zhang (Steven) Computer Science Research in Weakly Supervised Segmentation and Active Learning',
        categories: ['home']
      },
      {
        title: '项目与研究',
        url: '/projects/',
        content: 'AI research portfolio medical imaging natural language processing computer vision machine learning',
        categories: ['projects']
      },
      {
        title: '出版物',
        url: '/publications/',
        content: 'publications research papers conferences presentations',
        categories: ['publications']
      },
      {
        title: '经历',
        url: '/experience/',
        content: 'research experience education background',
        categories: ['experience']
      },
      {
        title: '联系方式',
        url: '/contact/',
        content: 'contact information email social media',
        categories: ['contact']
      }
    ];
  }

  bindEvents() {
    // 搜索按钮点击事件
    this.searchToggle.addEventListener('click', () => {
      this.toggleSearch();
    });

    // 输入事件
    this.searchInput.addEventListener('input', (e) => {
      this.performSearch(e.target.value);
    });

    // 点击外部关闭搜索
    document.addEventListener('click', (e) => {
      if (!this.searchWrapper.contains(e.target)) {
        this.collapseSearch();
      }
    });

    // 键盘事件
    document.addEventListener('keydown', (e) => {
      // Ctrl/Cmd + K 快捷键
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        this.toggleSearch();
      }

      // ESC 键关闭搜索
      if (e.key === 'Escape' && this.isExpanded) {
        this.collapseSearch();
      }
    });
  }

  toggleSearch() {
    if (this.isExpanded) {
      this.collapseSearch();
    } else {
      this.expandSearch();
    }
  }

  expandSearch() {
    this.isExpanded = true;
    this.searchWrapper.classList.add('expanded');
    this.searchInput.focus();
  }

  collapseSearch() {
    this.isExpanded = false;
    this.searchWrapper.classList.remove('expanded');
    this.searchInput.value = '';
    this.searchResults.classList.remove('active');
  }

  performSearch(query) {
    const trimmedQuery = query.trim().toLowerCase();

    if (!trimmedQuery) {
      this.searchResults.classList.remove('active');
      return;
    }

    const results = this.searchData.filter(item => {
      return item.title.toLowerCase().includes(trimmedQuery) ||
             item.content.toLowerCase().includes(trimmedQuery) ||
             (item.categories && item.categories.some(cat => cat.toLowerCase().includes(trimmedQuery)));
    });

    this.displayResults(results, trimmedQuery);
  }

  displayResults(results, query) {
    this.searchResults.innerHTML = '';

    if (results.length === 0) {
      this.searchResults.innerHTML = `
        <div class="search-result-item">
          <div class="search-result-title">未找到相关结果</div>
          <div class="search-result-excerpt">请尝试其他关键词</div>
        </div>
      `;
    } else {
      results.forEach(result => {
        const item = document.createElement('div');
        item.className = 'search-result-item';

        // 高亮匹配的文本
        const highlightedTitle = this.highlightText(result.title, query);
        const highlightedExcerpt = this.highlightText(result.excerpt || result.content.substring(0, 150) + '...', query);

        item.innerHTML = `
          <div class="search-result-title">${highlightedTitle}</div>
          <div class="search-result-excerpt">${highlightedExcerpt}</div>
          <div class="search-result-url">${result.url}</div>
        `;

        item.addEventListener('click', () => {
          window.location.href = result.url;
        });

        this.searchResults.appendChild(item);
      });
    }

    this.searchResults.classList.add('active');
  }

  highlightText(text, query) {
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark>$1</mark>');
  }
}

// 返回顶部功能
class BackToTop {
  constructor() {
    this.button = null;
    this.isVisible = false;
    this.init();
  }

  init() {
    this.createButton();
    this.bindEvents();
    this.checkScroll();
  }

  createButton() {
    this.button = document.createElement('div');
    this.button.className = 'back-to-top';
    this.button.innerHTML = '<i class="fas fa-arrow-up"></i>';
    this.button.setAttribute('aria-label', '返回顶部');
    document.body.appendChild(this.button);
  }

  bindEvents() {
    // 滚动事件
    window.addEventListener('scroll', () => {
      this.checkScroll();
    });

    // 点击事件
    this.button.addEventListener('click', () => {
      this.scrollToTop();
    });

    // 键盘事件
    document.addEventListener('keydown', (e) => {
      // Home 键返回顶部
      if (e.key === 'Home' && !e.ctrlKey && !e.metaKey) {
        e.preventDefault();
        this.scrollToTop();
      }
    });
  }

  checkScroll() {
    const shouldShow = window.pageYOffset > 300;

    if (shouldShow !== this.isVisible) {
      this.isVisible = shouldShow;

      if (shouldShow) {
        this.button.classList.add('visible');
      } else {
        this.button.classList.remove('visible');
      }
    }
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}

// 初始化
document.addEventListener('DOMContentLoaded', () => {
  new SiteSearch();
  new BackToTop();
});