/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1565926644277_5269';

  // add your middleware config here
  config.middleware = [
    // 'checkWhiteList'
  ];

  config.security = {
    domainWhiteList: ['http://localhost:8080'],
    csrf: {
      enable: false,
      ignoreJSON: false
    },
    // domainWhiteList: [ '*' ]
  }

  config.cors = {
    origin: 'http://localhost:8080',
    credentials: true,
    // origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  // config.checkWhiteList = {
  //   whiteList: [
  //     'http://localhost:8080'
  //   ]
  // }

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  

  return {
    ...config,
    ...userConfig,
  };
};
