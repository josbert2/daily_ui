const Encore = require('@symfony/webpack-encore');
require("dotenv").config(); // line to add
const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); // line to add



if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}


Encore.DisableVersion = true;

Encore

    .setOutputPath('web/build/wenly')
    .setPublicPath('/build/wenly')
    .addStyleEntry('wenlycss', './web/assets/wenly/scss/app.scss')
    .addEntry('wenlyjs', './web/assets/wenly/js/app.js')
    .splitEntryChunks()
    .enableSingleRuntimeChunk()
    .cleanupOutputBeforeBuild()
    .enableBuildNotifications()
    .enableSassLoader()
    .enablePostCssLoader()
    .configureFontRule({
        type: 'asset',
        //maxSize: 4 * 1024
        filename: 'fonts/[name][ext]'
        
    })
    //.enableSourceMaps(!Encore.isProduction())
    //.enableVersioning(Encore.isProduction())
    .configureBabel((config) => {
        config.plugins.push('@babel/plugin-proposal-class-properties');
    })
    .configureBabelPresetEnv((config) => {
        config.useBuiltIns = 'usage';
        config.corejs = 3;
    })

    // entry to add 
    .addPlugin(new BrowserSyncPlugin(
        {
            host: "localhost",
            port: 3000,
            proxy: process.env.PROXY,
            files: [
                {
                    match: ["app/Resources/views/**/*.twig"],
                },
                {
                    match: ["src/**/*.php"],
                },
                {
                    match: ["web/assets/**/*.js"],
                },
                {
                    match: ["web/assets/**/*.scss"],
                },
            ],
            notify: false,
        },

        {

            reload: true,
        }
    ))

;

module.exports = Encore.getWebpackConfig();


/*
Config vieja
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


module.exports = Encore.getWebpackConfig() */