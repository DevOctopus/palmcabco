require.config({
    deps: [
        'main'
    ],
    baseUrl: 'scripts',
    paths: {
        jquery: '../bower_components/jquery/jquery',
        fittext: '../bower_components/jquery-fittext/jquery.fittext',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap',
        addthis: 'http://s7.addthis.com/js/300/addthis_widget.js#pubid=ra-527bf6790adf3477'
    },
    shim: {
        fittext: {
            deps: [
                'jquery'
            ],
            exports: 'jquery'
        },
        bootstrap: {
            deps: [
                'jquery'
            ],
            exports: 'jquery'
        }
    }
});