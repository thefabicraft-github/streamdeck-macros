var Service = require('node-windows').Service;

// Create a new service object
var svc = new Service({
  name:'Streamdeck Macros',
  description: 'Macro Scripts for Streamdeck',
  script: 'C:\\Users\\fabia\\OneDrive\\Projects\\streamdeck-macros\\out\\index.js'
});

// Listen for the "install" event, which indicates the
// process is available as a service.
svc.on('install',function(){
  svc.start();
});

svc.install();