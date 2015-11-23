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
import {config, generateIconJs, generateIconSass, generateFontCss} from 'gulp-font-icons';
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
    generateFontCss();
    generateIconSass(glyphs, options);
    generateIconJs(glyphs, options);
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
