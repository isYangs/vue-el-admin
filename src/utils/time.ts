export const getCurrentTime = () => {
    const hour = new Date().getHours();
    if (hour >= 6 && hour < 12) {
        return [
            {
                time: '早上好',
                hitokoto: '今天也要元气满满哦！',
            },
        ];
    } else if (hour >= 11 && hour < 14) {
        return [
            {
                time: '中午好',
                hitokoto: '时间飞逝，又过去了半天，记得再忙也要吃午饭哦！',
            },
        ];
    } else if (hour >= 14 && hour < 18) {
        return [
            {
                time: '下午好',
                hitokoto: '下午茶时间到了，喝杯茶休息一下吧！',
            },
        ];
    } else if (hour >= 18 && hour < 20) {
        return [
            {
                time: '晚上好',
                hitokoto: '该下班了，拒绝加班，身体才是革命的本钱！',
            },
        ];
    } else {
        return [
            {
                time: '夜深了',
                hitokoto: '夜深了，注意休息，明天又是元气满满的一天！',
            },
        ];
    }
};
