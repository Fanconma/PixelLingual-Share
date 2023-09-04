const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));

// 获取徽章容器和徽章标题元素
const badgeContainer = document.getElementById('badge-container');
const badge = document.getElementById('badge');
const badgeTitle = document.getElementById('badge-title');

// 确保数据已成功读取
console.log(selectedItem);

// 在页面上显示数据
if (selectedItem) {
// 更新页面的DOM元素以显示数据
  document.getElementById('pagetitle').textContent = selectedItem.title + '的汉化包 | 像素语匠分享 - PixelLingual Share';
  document.getElementById('title').textContent = selectedItem.title;//标题
  document.getElementById('description').textContent = selectedItem.description;//简介
  document.getElementById('author').textContent = selectedItem.author;//作者
  document.getElementById('ratingNum').textContent = selectedItem.rating;//评分
//   document.getElementById('rating').textContent = ratingShow(selectedItem.rating);
  document.getElementById('cover').src = selectedItem.image; //封面图
  document.getElementById('studio').textContent = selectedItem.studio; //工作室
  document.getElementById('url').href = selectedItem.url; //下载链接

    // 星星评分的展示
    const ratingNum = parseFloat(selectedItem.rating);
    const rating = parseFloat(selectedItem.rating); // 评分值（示例：4.2）

    const starsContainer = document.getElementById('rating');
    starsContainer.innerHTML = '';
            
    const integerPart = Math.floor(rating); // 整数部分
    const decimalPart = rating - integerPart; // 小数部分
            
    // 添加整数部分的星星
    for (let i = 0; i < integerPart; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fas', 'fa-star');
        starsContainer.appendChild(starIcon);
    }
    
    // 添加部分星星
    if (decimalPart > 0) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fas', 'fa-star-half-alt');
        starIcon.style.width = `${decimalPart * 100}%`; // 根据小数部分的百分比设置宽度
        starsContainer.appendChild(starIcon);
    }
    
    // 添加空星星，如果需要
    const remainingStars = 5 - Math.ceil(rating); // 剩余的星星数量
    for (let i = 0; i < remainingStars; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fas', 'fa-star-o');
        starsContainer.appendChild(starIcon);
    }
    
}

    // 根据 official 属性显示/隐藏徽章和设置徽章标题
    if (selectedItem.official) {
        badge.src = '/pl-content/images/official-badge.png'; // 设置徽章图片的路径
        badgeTitle.textContent = '作品是官方DLC！'; // 设置徽章标题
    } else {
        badge.style.display = 'none'; // 非官方项目时隐藏徽章
        badgeTitle.style.display = 'none'; // 隐藏徽章标题
    }

    // 添加鼠标悬停事件处理程序，显示徽章标题
    badgeContainer.addEventListener('mouseenter', () => {
        badgeTitle.style.display = 'inline'; // 显示徽章标题
    });

    // 添加鼠标移出事件处理程序，隐藏徽章标题
    badgeContainer.addEventListener('mouseleave', () => {
        badgeTitle.style.display = 'none'; // 隐藏徽章标题
    });
    
//认证徽章转头特效
// 获取徽章图像元素
// 添加鼠标移动事件处理程序
badge.addEventListener('mousemove', (event) => {
    // 计算鼠标在徽章上的位置
    const mouseX = event.clientX - badge.getBoundingClientRect().left;
    const mouseY = event.clientY - badge.getBoundingClientRect().top;

    // 计算徽章扭头的角度（根据鼠标位置）
    const angleX = (mouseX / badge.clientWidth - 0.5) * 100; // 调整扭头的幅度
    const angleY = (mouseY / badge.clientHeight - 0.5) * 100;

    // 应用 CSS 变换以实现徽章扭头效果
    badge.style.transform = `perspective(1000px) rotateX(${angleY}deg) rotateY(${angleX}deg)`;
});

// 添加鼠标移出事件处理程序，重置徽章变换
badge.addEventListener('mouseleave', () => {
    badge.style.transform = 'none'; // 重置徽章变换
});

// 根据 official 属性显示/隐藏徽章
if (selectedItem.official) {
    badge.src = '/pl-content/images/official-badge.png'; // 设置徽章图片的路径
} else {
    badge.style.display = 'none'; // 非官方项目时隐藏徽章
}
