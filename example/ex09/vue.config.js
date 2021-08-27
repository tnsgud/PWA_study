module.exports = {
    pwa: {
        workboxOptions: {
            include: [/^index\.html$/, /\.html$/, /\.js$/, /^manifest\.js$/, /^\.png$/],
            exclude: [],
        },
    },

    transpileDependencies: [
      'vuetify'
    ]
};
