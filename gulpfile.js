const elixir = require('laravel-elixir');

require('laravel-elixir-vue-2');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(mix => {
    mix.sass('app.scss')
       .webpack('app.js')
       .scripts([
           '../../../node_modules/mdbootstrap/js/jquery-2.2.3.min.js',
           '../../../node_modules/mdbootstrap/js/tether.min.js',
           '../../../node_modules/mdbootstrap/js/bootstrap.min.js',
           '../../../node_modules/mdbootstrap/js/mdb.min.js'
       ], 'public/js/3rdparty.js')
       .sass('../../../node_modules/mdbootstrap/sass/mdb.scss');
});
