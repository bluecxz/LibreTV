const CUSTOMER_SITES = {
    wl: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: 'WL',
    }
    
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
