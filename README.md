
### MobikeBazar ###

This README would document whatever steps are necessary to get your application up and running.

### Summary ###

* This repo contains front end files for the MobikeBazar website.
* This project uses BootStrap for the grid system
* Jade(now PugJs) is used as a HTML templating language, SASS for CSS pre-processing and BEM(http://getbem.com/) as naming convention for style rules.
* HarpJs(https://harpjs.com/) is used as a static web server for development.
* GulpJs(http://gulpjs.com/) is used to build distribution files.

### Getting set up ###

* Install gulp globally: $ npm install --global gulp-cli
* Install harp globally: $ npm install -g harp
* clone the repo and run gulp.
* Access distribution files from dist folder.

### Development guidelines ###

* cd into src folder, open up cmd/terminal and run: harp server
* Now you can make changes to jade, scss or js files directly and check updated changes on the browser
* To export production files, cd to project root and run gulp. Final files will be gulped into the dist
