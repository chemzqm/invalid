# Invalid

[![Build Status](https://secure.travis-ci.org/chemzqm/invalid.png)](http://travis-ci.org/chemzqm/invalid)

An element is considered as invalid when one of these match:

* `disabled` or display is `none` or visibility is `hidden`
* one of it's parentNode display is `none` or visibility is `hidden`

## Install

    npm i invalid-component

## Usage

```
var invalid = require('invalid-component')
el.parentNode.style.display = 'none'
invalid(el) //true
```

See [test.js](https://github.com/chemzqm/invalid/blob/master/test/test.js)
