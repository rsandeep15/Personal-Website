babel --presets react,es2015 js/source/ -d js/build
browserify js/build/app.js -o js/build/bundle.js

