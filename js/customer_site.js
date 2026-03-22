const CUSTOMER_SITES = {
    wl: {
        api: 'https://wolongzyw.com/api.php/provide/vod',
        name: 'WL',
    },
    bf: {
        api: 'https://bfzyapi.com/api.php/provide/vod',
        name: 'bf',
    },
    js: {
        api: 'https://jszyapi.com/api.php/provide/vod',
        name: 'js',
    },
    wj: {
        api: 'https://api.wujinapi.com/api.php/provide/vod',
        name: 'wj',
    },
    ww: {
        api: 'https://wwzy.tv/api.php/provide/vod',
        name: 'ww',
    },
    gs: {
        api: 'https://api.guangsuapi.com/api.php/provide/vod',
        name: 'gs',
    },
    lz: {
        api: 'https://cj.lziapi.com/api.php/provide/vod',
        name: 'lz',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
