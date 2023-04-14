// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    // @ts-ignore
    app: {
        head: {
            charset: 'utf-8',
            viewport: 'width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0',
            title: 'nuxt3-template', // 全局页面title
            // 配置描述，关键词等
            meta: [
                { name: 'description', content: 'description' }
            ],
            link: [
                { rel: "icon", type: "image/x-icon", href: "/img/favicon.ico" }
            ]

        }
    },
    ssr: true,
    css: [],
    modules: [
        '@vueuse/nuxt',
        '@element-plus/nuxt'
    ],
    buildModules: [
        'nuxt-windicss'
    ],
    vite: {
        define: {
            "process.env.VUE_APP_BASE_RUL": "'url地址'"
        },
        css: {
            preprocessorOptions: {
                scss: {
                    // additionalData: '@import "@/assets/style/global.scss";'
                }
            }
        }
    },
    elementPlus: { /** Options */ }

})

