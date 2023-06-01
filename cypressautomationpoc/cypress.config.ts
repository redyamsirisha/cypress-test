import { defineConfig } from "cypress";
import { Runnable } from "mocha";
import fs from 'fs'

const {verifyDownloadTasks} = require('cy-verify-downloads')

export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        deleteDownloadedFiles(folderName) {
          return new Promise((resolve, reject) => {
            fs.readdir(folderName, (err, files) => {
              if (err) {
                return reject(err)
              }

              resolve(files.length)

              fs.readdirSync('cypress/downloads').forEach((file) => {
                fs.unlinkSync(`cypress/downloads/${file}`);
              });
            })
          })
        }
      }),
      on('task', verifyDownloadTasks),      
      on('before:browser:launch', (browser, launchOptions) => {
        launchOptions.args.push('--disable-gpu');
        launchOptions.args.push('--no-sandbox');
        // launchOptions.args.push('--window-size=3840,2160')
        // launchOptions.args.push('--force-prefers-reduced-motion');
        // launchOptions.args.push("--force-device-scale-factor=1")
      })
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('cypress-grep/src/plugin')(config)
      return config
    },
    
    "env":{
      "tmp": "hello",
    },   
  "baseUrl": "http://localhost:4200/",
    "watchForFileChanges": true,
    "video": false,
    "viewportWidth": 1280,
    "viewportHeight": 630,
    "screenshotsFolder": "cypress/reports/screenshots/",
    "videosFolder": "cypress/reports/videos/",
    "screenshotOnRunFailure": true,
    
    "chromeWebSecurity": false,
    "retries": {
        "runMode": 0,
        "openMode": null
    },
    "defaultCommandTimeout": 10000,
    "pageLoadTimeout": 60000,
    "requestTimeout": 5000,
    "responseTimeout": 30000,
    "execTimeout": 60000,
    "taskTimeout":60000
  },
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    "reportDir": "cypress/reports",
    "reportFilename": "GFX Automation Execution Report for [name] test - [status]",
    "charts": true,
    "reportPageTitle": 'GFX Automation Execution Report',
    "embeddedScreenshots": true,
    "inlineAssets": true,
    "saveAllAttempts": true,
    "quiet":true,
    "code":false,
    "autoOpen":true,
    "overwrite": false
  },
});
