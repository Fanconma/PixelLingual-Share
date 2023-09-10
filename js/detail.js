const selectedItem = JSON.parse(localStorage.getItem('selectedItem'));
    
// 显示数据
if (selectedItem) {
    document.getElementById('pagetitle').textContent = selectedItem.title + '的汉化包 | 像素语匠分享 - PixelLingual Share';
    document.getElementById('title').textContent = selectedItem.title;
    document.getElementById('description').textContent = selectedItem.description;
    document.getElementById('author').textContent = selectedItem.author;
    document.getElementById('ratingNum').textContent = selectedItem.rating;
    document.getElementById('cover').src = selectedItem.image;
    document.getElementById('studio').textContent = selectedItem.studio;
    document.getElementById('url').href = selectedItem.url;
    document.getElementById('minecoins').textContent = selectedItem.minecoin;

    // 星星评分的展示
    const starsContainer = document.getElementById('rating');
    starsContainer.innerHTML = '';
    const rating = parseFloat(selectedItem.rating);
    showRatingStars(starsContainer, rating);

    // 显示徽章
    showBadge('official', selectedItem.official, 'official-badge-container');
    showBadge('bestQuality', selectedItem.best_quality, 'best-quality-badge-container');
    showBadge('popular', selectedItem.popular, 'popular-badge-container');
    showBadge('horrorCheck', selectedItem.horror_check, 'horror-check-badge-container');
}

// 通用的函数，用于显示星星评分
function showRatingStars(container, rating) {
    const integerPart = Math.floor(rating);
    const decimalPart = rating - integerPart;

    for (let i = 0; i < integerPart; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fas', 'fa-star');
        container.appendChild(starIcon);
    }

    if (decimalPart > 0) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fas', 'fa-star-half-alt');
        starIcon.style.width = `${decimalPart * 100}%`;
        container.appendChild(starIcon);
    }

    const remainingStars = 5 - Math.ceil(rating);
    for (let i = 0; i < remainingStars; i++) {
        const starIcon = document.createElement('i');
        starIcon.classList.add('fas', 'fa-star-o');
        container.appendChild(starIcon);
    }
}

// 通用的函数，用于显示徽章
function showBadge(badgeType, badgeValue, badgeContainerId) {
    const badgeContainer = document.getElementById(badgeContainerId);
    badgeContainer.style.display = badgeValue ? 'inline-block' : 'none';

    if (badgeValue) {
        addBadgeHoverEffect(badgeContainer);
    }
}

// 通用的函数，添加徽章扭头特效
function addBadgeHoverEffect(badgeContainer) {
    badgeContainer.addEventListener('mousemove', (event) => {
        const mouseX = event.clientX - badgeContainer.getBoundingClientRect().left;
        const mouseY = event.clientY - badgeContainer.getBoundingClientRect().top;
        const angleX = (mouseX / badgeContainer.clientWidth - 0.5) * 100;
        const angleY = (mouseY / badgeContainer.clientHeight - 0.5) * 100;
        badgeContainer.style.transform = `perspective(1000px) rotateX(${angleY}deg) rotateY(${angleX}deg)`;
    });

    badgeContainer.addEventListener('mouseleave', () => {
        badgeContainer.style.transform = 'none';
    });
}
// 获取模态框、关闭按钮和模态框内容
const modal = document.getElementById('myModal');
const closeButton = document.getElementsByClassName('close')[0];

// 获取徽章元素
const badgeElement = document.getElementById('official-badge-container');

// 点击徽章时显示模态框
badgeElement.addEventListener('click', () => {
  modal.style.display = 'block';
});

// 点击关闭按钮或模态框外部时隐藏模态框
closeButton.addEventListener('click', () => {
  modal.style.display = 'none';
});

window.addEventListener('click', (event) => {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});
