function prepareTranslations(callback) {
    i18next.init({
        lng: configuration.data.lang,
        resources: {
            en: {
                translation: {
                    "audit": "Audit",
                    "newAudit": "New audit"
                }
            },
            fr: {
                translation: {
                    "audit": "Audit",
                    "newAudit": "Nouvel audit"
                }
            }
        }
    }, (err, t) => {
        callback();
    });
}