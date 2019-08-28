module.exports = function(app) {
    const upload = require('../config/fileupload.config.js')
    const fileWorker = require('../controller/fileupload.controller.js');

    app.post('/api/uploadfile', upload.single("uploadfile"), fileWorker.upload);
}