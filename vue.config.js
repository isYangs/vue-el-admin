const AutoImport = require('unplugin-auto-import/webpack');
const Components = require('unplugin-vue-components/webpack');
const Icons = require('unplugin-icons/webpack');
const IconsResolver = require('unplugin-icons/resolver');
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers');
const { defineConfig } = require('@vue/cli-service');
module.exports = defineConfig({
    transpileDependencies: true,
    css: {
        loaderOptions: {
            less: {
                additionalData: '@import "@/assets/less/variables.less";',
            },
        },
    },
    configureWebpack: {
        plugins: [
            AutoImport({
                resolvers: [
                    ElementPlusResolver(),
                    IconsResolver({
                        prefix: 'Icon',
                    }),
                ],
                eslintrc: {
                    enabled: false,
                    filepath: './.eslintrc-auto-import.json',
                    globalsPropValue: true,
                },
            }),
            Components({
                resolvers: [
                    IconsResolver({
                        enabledCollections: ['ep'],
                    }),
                    ElementPlusResolver(),
                ],
            }),
            Icons({
                autoInstall: true,
            }),
        ],
    },
});
