const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
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
// 获取JSON数据中的徽章属性值
const officialBadge = selectedItem.official;
const bestQualityBadge = selectedItem.best_quality;
const popularBadge = selectedItem.popular;
const horrorCheckBadge = selectedItem.horror_check;

// 获取徽章容器元素
const officialBadgeContainer = document.getElementById('official-badge-container');
const bestQualityBadgeContainer = document.getElementById('best-quality-badge-container');
const popularBadgeContainer = document.getElementById('popular-badge-container');
const horrorCheckBadgeContainer = document.getElementById('horror-check-badge-container');

// 根据属性值动态显示/隐藏徽章
if (officialBadge) {
    officialBadgeContainer.style.display = 'inline-block';
}
else{
    officialBadgeContainer.style.display = 'none';
}

if (bestQualityBadge) {
    bestQualityBadgeContainer.style.display = 'inline-block';
}
else {
    bestQualityBadgeContainer.style.display = 'none';
}

if (popularBadge) {
    popularBadgeContainer.style.display = 'inline-block';
}
else{
    popularBadgeContainer.style.display = 'none';
}

if (horrorCheckBadge) {
    horrorCheckBadgeContainer.style.display = 'inline-block';
}
else{
    horrorCheckBadgeContainer.style.display = 'none';
}
//认证徽章转头特效
// 获取徽章图像元素
// 添加鼠标移动事件处理程序
officialBadgeContainer.addEventListener('mousemove', (event) => {
    // 计算鼠标在徽章上的位置
    const mouseX = event.clientX - officialBadgeContainer.getBoundingClientRect().left;
    const mouseY = event.clientY - officialBadgeContainer.getBoundingClientRect().top;

    // 计算徽章扭头的角度（根据鼠标位置）
    const angleX = (mouseX / officialBadgeContainer.clientWidth - 0.5) * 80; // 调整扭头的幅度
    const angleY = (mouseY / officialBadgeContainer.clientHeight - 0.5) * 80;

    // 应用 CSS 变换以实现徽章扭头效果
    officialBadgeContainer.style.transform = `perspective(1000px) rotateX(${angleY}deg) rotateY(${angleX}deg)`;
});

// 添加鼠标移出事件处理程序，重置徽章变换
officialBadgeContainer.addEventListener('mouseleave', () => {
    officialBadgeContainer.style.transform = 'none'; // 重置徽章变换
});

//认证徽章转头特效
// 获取徽章图像元素
// 添加鼠标移动事件处理程序
bestQualityBadgeContainer.addEventListener('mousemove', (event) => {
    // 计算鼠标在徽章上的位置
    const mouseX = event.clientX - bestQualityBadgeContainer.getBoundingClientRect().left;
    const mouseY = event.clientY - bestQualityBadgeContainer.getBoundingClientRect().top;

    // 计算徽章扭头的角度（根据鼠标位置）
    const angleX = (mouseX / bestQualityBadgeContainer.clientWidth - 0.5) * 80; // 调整扭头的幅度
    const angleY = (mouseY / bestQualityBadgeContainer.clientHeight - 0.5) * 80;

    // 应用 CSS 变换以实现徽章扭头效果
    bestQualityBadgeContainer.style.transform = `perspective(1000px) rotateX(${angleY}deg) rotateY(${angleX}deg)`;
});

// 添加鼠标移出事件处理程序，重置徽章变换
bestQualityBadgeContainer.addEventListener('mouseleave', () => {
    bestQualityBadgeContainer.style.transform = 'none'; // 重置徽章变换
});

//认证徽章转头特效
// 获取徽章图像元素
// 添加鼠标移动事件处理程序
popularBadgeContainer.addEventListener('mousemove', (event) => {
    // 计算鼠标在徽章上的位置
    const mouseX = event.clientX - popularBadgeContainer.getBoundingClientRect().left;
    const mouseY = event.clientY - popularBadgeContainer.getBoundingClientRect().top;

    // 计算徽章扭头的角度（根据鼠标位置）
    const angleX = (mouseX / popularBadgeContainer.clientWidth - 0.5) * 80; // 调整扭头的幅度
    const angleY = (mouseY / popularBadgeContainer.clientHeight - 0.5) * 80;

    // 应用 CSS 变换以实现徽章扭头效果
    popularBadgeContainer.style.transform = `perspective(1000px) rotateX(${angleY}deg) rotateY(${angleX}deg)`;
});

// 添加鼠标移出事件处理程序，重置徽章变换
popularBadgeContainer.addEventListener('mouseleave', () => {
    popularBadgeContainer.style.transform = 'none'; // 重置徽章变换
});
