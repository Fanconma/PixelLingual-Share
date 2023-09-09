new Vue({
    el: '#Pl-pack',
    data: {
        items: [],
        searchQuery: '',
        loading: true,
        error: null,
    },
    computed: {
        filteredItems() {
            const query = this.searchQuery.toLowerCase();
            return this.items.filter(item =>
                item.title.toLowerCase().includes(query) ||
                item.name_eng.toLowerCase().includes(query) ||
                item.author.toLowerCase().includes(query) ||
                item.studio.toLowerCase().includes(query)
            );
        }
    },
    created() {
        axios.get('/pl-content/data.json')
            .then(response => {
                this.items = response.data;
                this.loading = false;
            })
            .catch(error => {
                console.error('加载数据出错:', error);
                this.error = true;
                this.loading = false;
            });
    },
    methods: {
        showDetails(item) {
            // 将选中项目的数据转换为JSON字符串并存储在localStorage中
            localStorage.setItem('selectedItem', JSON.stringify(item));
        
            // 打开新页面
            window.open('detail.html', '_blank');
        }
    }
});

// 动态加载页眉和页脚
const headerContainer = document.getElementById('header-container');
const footerContainer = document.getElementById('footer-container');

// 使用AJAX或其他方式加载外部HTML文件
fetch('/pl-content/content/header.html')
    .then(response => response.text())
    .then(data => {
        headerContainer.innerHTML = data;
    });

fetch('/pl-content/content/footer.html')
    .then(response => response.text())
    .then(data => {
        footerContainer.innerHTML = data;
    });
