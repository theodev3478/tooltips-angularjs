# tooltips-angularjs-theo
Tooltips for any element using any html in AngularJS with no requirements.

## Installation

Install through bower

```
bower install tooltips-angularjs-theo
```

or npm

```
npm install angularjs-tooltips-theo
```

Include the library files

```html
<link rel="stylesheet" href="bower_components/dist/angular-tooltips.css" />
<script src="bower_components/dist/angular-tooltips.js"></script>
```

Add the angular model ```tooltips```

```js
angular.module('app', ['tooltips'])
```

## Usage

Just add a normal title attribute and it will be overridden.

```html
<i class="fa fa-star" title="This is a tooltip!"></i>
```

The direction of the tooltip can be specified using ```title-direction``` with the options: top, top-right, right-top, right, right-bottom, bottom-right, bottom, bottom-left, left-bottom, left, left-top, top-left

```html
<i class="fa fa-star" title="This is a tooltip!" title-direction="right"></i>
```

The direction of the tooltip will automatically swap if the tooltip will sit outside of the window bounds.
To stop this happening and force the direction set the ```fixed-position``` option

```html
<i class="fa fa-star" title="This is a tooltip!" title-direction="right" fixed-position="true"></i>
```

## Demo

## Requrements

**None!!**
