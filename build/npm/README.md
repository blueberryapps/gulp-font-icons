# gulp-font-icons

A gulp-driven react/sass icon font generator.


## Install

```sh
$ npm install --save gulp-font-icons
```


## Usage

### Svg files

Provide at least 2 svg files named according to this pattern:

> uE**three_digit_hexadecimal_id**-**svgname**.svg


E.g.:

```
uE000-circle.svg
uE001-square.svg
...
```


### Gulp task

In your gulpfile, import the iconfont module and the necessary functions. The sass/js functions can be omitted.

```js
import {config, generateIcon} from 'gulp-font-icons';
import iconfont from 'gulp-iconfont';
```


Modify the config object if needed. You may not receive any errors or warnings if you point the script to non-existing paths, so make sure you set these right.

```js
Object.assign(config, {
  'iconSrc' : './path/in/your/project/*.svg'
});
```


Register the task. Again, no need to use the sass/js functions if you don't need the respective implementation.

```js
gulp.task('font-icons', function() {
  return gulp.src(config.iconSrc)
  .pipe(iconfont(config.options)
  .on('glyphs', function(glyphs, options) {
    generateIcon('css sass', glyphs)
  }))
  .pipe(gulp.dest(config.iconDest));
});
```


Run it.

```sh
$ gulp font-icons
```


It will use the svg files you provided to generate the fonts, css and sass/js files in the locations specified by the config object.


### Displaying the icons

Import the generated css which contains the font-face declarations. You can now use the React component in your project (after you import it from the path it was generated in) like this:

```jsx
<Icon kind="svgname" />
```


And the sass mixin like this:

```sass
@extend %icon_svgname
```

to prevent showing it on console use 
```js
Object.assign(config, {
 'showLog': false
});
 ```
 
 ### To compile own created types and files
 
 If you use different css preprocessor or html preprocessor or other. Simply add your type to config like this
 ```js
 Object.assign(config, {
  stylus: {
    template: 'path/to/your/template',
    dest: 'destanation/folder',
    outputName: 'fileName.withExtantion',
  },
  templateData: {
    //put any data you need in your custom template
  }
 });
 ```
 
 then simply call ```generateIcon``` with your type