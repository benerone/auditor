const { remote } = require('electron')
const { Menu, MenuItem } = remote

var applicationMenu

function buildMenu() {

    applicationMenu = new Menu({ label: "ApplicationMenu" });

    auditMenu = new MenuItem({ label: i18next.t("audit"), submenu: [] });
    auditMenu.submenu.append(new MenuItem({ label: i18next.t("newAudit"), click() { RiotControl.trigger('newAudit') } }));

    applicationMenu.append(auditMenu);


    Menu.setApplicationMenu(applicationMenu)
}