const Encore = require('@symfony/webpack-encore')


if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}


//"php": ">=5.5.9",
Encore
  .setOutputPath('web/build/')
  .setPublicPath('/build')
  .addStyleEntry('css/app', './web/assets/encore/css/app.scss')
  .addEntry('js/app', './web/assets/encore/js/app.js')
  .cleanupOutputBeforeBuild()
  //.enableVersioning()
  .disableSingleRuntimeChunk() 
  // enable post css loader
  .enableSassLoader()
  .enablePostCssLoader()


module.exports = Encore.getWebpackConfig()