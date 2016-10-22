var fs = require('fs');

function getUserHome() {
    return process.env[(process.platform == 'win32') ? 'USERPROFILE' : 'HOME'];
}


function Configuration() {

    const configurationPath = getUserHome() + "/auditor.conf.json";

    var appConfiguration = {
        lang: 'fr'
    };

    var container = { data: undefined };

    container.save = function() {
        //fs.writeFile(configurationPath, JSON.stringify(data), 'utf-8');
    };

    container.load = function() {

        try {

            fs.accessSync(configurationPath, fs.F_OK);
            container.data = JSON.parse(fs.readFileSync(configurationPath, 'utf8'));
        } catch (e) {
            container.data = appConfiguration;
            this.save();
        }

    }

    return container;

};