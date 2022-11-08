export default () => {
    return {
        title: {
            text: '项目使用的语言',
            subtext: '使用技术占比',
            left: 'left',
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)',
        },
        legend: {
            orient: 'horizontal',
            left: 'center',
            top: 'bottom',
        },
        color: ['#42B883', ' #337ECC', '#E8DC46', '#B65426', ' #C8C9CC'],
        series: [
            {
                name: '技术栈',
                type: 'pie',
                radius: '50%',
                data: [
                    { value: 49764, name: 'Vue' },
                    { value: 10919, name: 'TypeScript' },
                    { value: 3733, name: 'JavaScript' },
                    { value: 611, name: 'HTML' },
                    { value: 497, name: 'Less' },
                ],
                emphasis: {
                    itemStyle: {
                        shadowBlur: 10,
                        shadowOffsetX: 0,
                        shadowColor: 'rgba(0, 0, 0, 0.5)',
                    },
                },
            },
        ],
    };
};
