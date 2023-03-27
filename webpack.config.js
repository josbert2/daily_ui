const Encore = require('@symfony/webpack-encore');
require("dotenv").config(); // line to add
const BrowserSyncPlugin = require("browser-sync-webpack-plugin"); // line to add



if (!Encore.isRuntimeEnvironmentConfigured()) {
    Encore.configureRuntimeEnvironment(process.env.NODE_ENV || 'dev');
}


/*Encore.DisableVersion = true;

Encore

    .setOutputPath('web/build/wenly/')
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
    }) */

    // entry to add 
    //.addPlugin(new BrowserSyncPlugin(
    //    {
    //        host: "localhost",
    //        port: 3000,
    //        proxy: process.env.PROXY,
    //        files: [
    //            {
    //                match: ["app/Resources/views/**/*.twig"],
    //            },
    //            {
    //                match: ["src/**/*.php"],
    //            },
    //            {
    //                match: ["web/assets/**/*.js"],
    //            },
    //            {
    //                match: ["web/assets/**/*.scss"],
    //            },
    //        ],
    //        notify: false,
    //    },
    //
    //    {
    //
    //        reload: true,
    //    }
    //))
//
//;

//"php": ">=5.5.9",
Encore
  .setOutputPath('web/build/wenly/')
  .setPublicPath('/build/wenly')
  .addStyleEntry('css/app', './web/assets/wenly/scss/app.scss')
  .addEntry('js/app', './web/assets/wenly/js/app.js')
  //.cleanupOutputBeforeBuild()
  //.enableVersioning()
  .disableSingleRuntimeChunk() 
  // enable post css loader
  .enableSassLoader()
  .enablePostCssLoader()
  .configureFontRule({
    type: 'asset',
    //maxSize: 4 * 1024
    filename: 'fonts/[name][ext]'  
  })
  .configureBabel((config) => {
    config.plugins.push('@babel/plugin-proposal-class-properties');
})
.configureBabelPresetEnv((config) => {
    config.useBuiltIns = 'usage';
    config.corejs = 3;
})
  .addPlugin(new BrowserSyncPlugin(
        {
            host: "localhost",
            port: 3000,
            proxy: "http://127.0.0.1:8000/",
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

const wenly = Encore.getWebpackConfig();
wenly.name = 'wenly';

// reset Encore to build the second config
Encore.reset();




//"php": ">=5.5.9",
Encore
  .setOutputPath('web/build/')
  .setPublicPath('/build')
  .addStyleEntry('css/app', './web/assets/encore/css/app.scss')
  .addEntry('js/app', './web/assets/encore/js/app.js')
  //.cleanupOutputBeforeBuild()
  //.enableVersioning()
  .disableSingleRuntimeChunk() 
  // enable post css loader
  .enableSassLoader()
  .enablePostCssLoader()


  
const inspectFlow = Encore.getWebpackConfig();
inspectFlow.name = 'inspectFlow';


module.exports = [wenly, inspectFlow];