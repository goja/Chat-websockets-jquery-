load('vertx.js');

var webServerConf = {  
  port: 8081,
  host: 'localhost',
  bridge: true,
  
  permitted: [
  {
      address: 'vertx.goja'
  }
  ]
};

vertx.deployVerticle('web-server', webServerConf);