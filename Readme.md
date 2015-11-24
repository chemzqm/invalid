# Invalid

[![Build Status](https://secure.travis-ci.org/chemzqm/invalid.svg)](http://travis-ci.org/chemzqm/invalid)
[![Dependency Status](https://david-dm.org/chemzqm/invalid.svg)](https://david-dm.org/chemzqm/invalid)

An element is considered as invalid when one of these match:

* `disabled` or visibility is `hidden`
* one of it's parentNode display is `none` or visibility is `hidden`

An element is not considered invalid when it's not disabled and itself display is `none` (you may need to hide the real input and use
other component for user input).

## Install

    npm i invalid-component

## Usage

```
var invalid = require('invalid-component')
el.parentNode.style.display = 'none'
invalid(el) //true
```
See [test.js](https://github.com/chemzqm/invalid/blob/master/test/test.js)

## MIT license
Copyright (c) 2015 chemzqm@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
