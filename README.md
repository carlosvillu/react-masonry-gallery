# cv-masonry-gallery

## Description
Masonry gallery based on ReactJS component.

All the credit for [@dudleystorey](https://twitter.com/dudleystorey) for his black magic post about flex ratios:

http://thenewcode.com/929/Modern-Masonry-with-Flexbox-and-JavaScript

## Instalation
Clone this repository and run:
```
$ npm install
```

## Dependencies

To run the lint tasks we have dependencies of:

* [Ruby](https://www.ruby-lang.org/en/downloads/)
* [scss-lint](https://github.com/brigade/scss-lint)
* Node v0.12

If that tools are not installed you cant commit. Because the lint pass never will be ok.

## Start working in development mode:
```
$ npm run dev
```
This command will build your `.sass`, `.jsx` and `.js` files and open a local development environment, with hot reloading. A browser window will be opened as well, showing the entry point of your documents folder for development purposes.

## To work in TDD mode:
```
$ npm run test:watch
```
## To run unit tests only once:
```
$ npm test
```

## Usage
```javascript
const images = [
  'orange-butterfly.jpg', 'butterfly-on-yellow-flower.jpg',
  'butterfly-on-petal.jpg', 'albino-butterfly.jpg',
  'blue-butterfly.jpg'].map( filename => `https://s3-us-west-2.amazonaws.com/s.cdpn.io/4273/${filename}` );

React.render(<MasonryGallery images={images}/>, document.getElementById('main'));
```

