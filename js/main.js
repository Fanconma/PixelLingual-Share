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
