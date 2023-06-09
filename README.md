# nuxt3-template
nuxt3 + Element-plus + windicss，包括接口调用封装(接口地址代理配置)，项目打包部署(pm2+nginx)
好用记得给个star

## 文件结构目录
- components // 公共组件
- layouts // 布局组件
- pages // 页面
- public // 静态资源
- utils // 各种工具包含接口请求封装
- ecosystem.config.js // pm2配置
- nuxt.config.ts // nuxt配置

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on http://localhost:3000

```bash
npm run dev
```
## SEO
nuxt.config.ts
```
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
```
app.vue
```
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - site-name` : `site-name`;
  }
})
```
其他页面动态设置title等
```
useHead({
  title: '新闻详情'
})
```

## 打包部署pm2+nginx

1. 首先执行```npm run build```
2. 把打包后的文件.output文件内容放到服务器中
3. 服务器安装node环境（要求版本在16及以上哈）
4. 全局安装pm2;```npm install pm2 -g```
5. 把ecosystem.config.js文件也放到服务器里，服务器文件结构如下
    - public
    - server
    - nitro.json
    - ecosystem.config.js
6. 执行```pm2 start ecosystem.config.js```启动成功
7. 配置nginx进行项目代理主要代码如下：
```bash
    upstream nuxt {
        # 这里就是上面配置的 Node ip + 端口号，之前默认是 localhost:3000
        server 0.0.0.0:3000;
        keepalive 64;
    }

    server {
        listen 9988; # 服务器端口
        server_name 'url'; # 域名自己配
        location / {
          proxy_pass http://nuxt;
          index index.html index.htm;
        }
    }
```
    


