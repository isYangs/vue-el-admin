const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { defineConfig } = require('@vue/cli-service');
const path = require('path');
module.exports = defineConfig({
    transpileDependencies: true,
    pluginOptions: {
        'style-resources-loader': {
            preProcessor: 'less',
            patterns: [
                path.resolve(__dirname, './src/assets/less/variables.less'),
            ],
        },
    },
    configureWebpack: {
        plugins: [
            AutoImport({
                imports: ['vue', 'vue-router', 'vuex'],
                resolvers: [ElementPlusResolver()],
                eslintrc: {
                    enabled: false,
                    filepath: './.eslintrc-auto-import.json',
                    globalsPropValue: true,
                },
            }),
            Components({
                resolvers: [ElementPlusResolver()],
            }),
        ],
    },
});
