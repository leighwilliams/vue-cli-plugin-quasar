module.exports = (api, options) => {
  const theme = options.pluginOptions.quasar.theme

  api.chainWebpack(chain => {
    chain
      .resolve
        .alias
          .set('quasar', api.resolve(`node_modules/quasar-framework/dist/quasar.${theme}.esm.js`))
          .set('variables', api.resolve(`src/styles/quasar.variables.styl`))
          .set('quasar-variables', api.resolve(`node_modules/quasar-framework/dist/core.variables.styl`))
          .set('quasar-styl', api.resolve(`node_modules/quasar-framework/dist/quasar.${theme}.styl`))
  })
}