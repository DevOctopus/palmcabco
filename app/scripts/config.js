require.config({
    deps: [
        'main'
    ],
    baseUrl: 'scripts',
    paths: {
        jquery: '../bower_components/jquery/jquery',
        fittext: '../bower_components/jquery-fittext/jquery.fittext',
        bootstrap: '../bower_components/bootstrap/dist/js/bootstrap'
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