function MainStore() {
    riot.observable(this);
    var self = this;


    self.on('newAudit', function(user) {
        console.log("New Audit");
    });

}

var store = new MainStore() // Create a store instance.
RiotControl.addStore(store) // Register the store in central dispatch.

var configuration = new Configuration();
configuration.load();
prepareTranslations(() => {
    buildMenu();
})

riot.mount('*');