new Vue({
    el: '#Pl-pack',
    data: {
        items: [],
        errorMessage: '',
        selectedItem: null,
        searchQuery: '',
        loading: true,
        error: null,
    },

    computed: {
        filteredItems() {
            // 使用搜索条件过滤数据
            return this.items.filter(item => item.title.toLowerCase().includes(this.searchQuery.toLowerCase()));
        }
    },
    created() {
        axios.get('/pl-content/data.json')
            .then(response => {
                this.items = response.data;
                this.loading = false;
            })
            .catch(error => {
                this.error = true;
                this.errorMessage = '加载数据出错: ' + error.message;
            });
    },
    // methods: {
    //     showDetails: function(item) {
    //         this.selectedItem = item;
    //     }
    methods: {
        showDetails(item) {
          // 将选中项目的数据转换为JSON字符串并存储在localStorage中
          localStorage.setItem('selectedItem', JSON.stringify(item));
      
          // 打开新页面
          window.open('detail.html', '_blank');
        }
      }
});

// 评分展示
function ratingShow(ratingValue){
    if (ratingValue<=1)
    return "⭐";
    if (ratingValue>1 && ratingValue<=2)
    return "⭐⭐";
    if (ratingValue>2 && ratingValue<=3)
    return "⭐⭐⭐";
    if (ratingValue>3 && ratingValue<=4)
    return "⭐⭐⭐⭐";
    if (ratingValue>4 && ratingValue<=5)
    return "⭐⭐⭐⭐⭐";
    else
    return ;
}
