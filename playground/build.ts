import { resolve } from 'path'
import { createApp, build } from '@vuepress/core/src'

const main = async (): Promise<void> => {
  process.env.NODE_ENV = 'development'

  const app = createApp({
    title: 'title',
    description: 'description',
    head: [],
    locales: {},

    base: '/',
    host: '0.0.0.0',
    port: 8080,
    debug: true,
    open: false,

    templateDev: require.resolve('@vuepress/client/templates/index.dev.html'),
    templateSSR: require.resolve('@vuepress/client/templates/index.ssr.html'),

    dirSource: resolve(__dirname, 'src'),
    dirDest: resolve(__dirname, 'dist'),
    dirTemp: resolve(__dirname, '.temp'),

    // Theme
    theme: '@vuepress/default',
    themeConfig: {},

    plugins: [[resolve(__dirname, 'test-plugin.js')]],
  })

  // app.use(resolve(__dirname, 'test-plugin.js'))
  // app.use(require('./test-plugin'))

  // app.pluginApi.use({
  //   name: 'test',
  //   multiple: false,
  //   alias: {
  //     test: 'alias',
  //   },
  //   chainWebpack: config => config.resolve.alias.set('test2', 'chainWebpack'),
  //   define: {
  //     __TEST__: 'define',
  //   },
  // })

  await build(app)

  // console.log(app.pages)
}

main()
