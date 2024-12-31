<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# scalar2ndarrayLike

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Convert a scalar value to a zero-dimensional ndarray having the same [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

To use in Observable,

```javascript
scalar2ndarrayLike = require( 'https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-from-scalar-like@umd/browser.js' )
```

To vendor stdlib functionality and avoid installing dependency trees for Node.js, you can use the UMD server build:

```javascript
var scalar2ndarrayLike = require( 'path/to/vendor/umd/ndarray-base-from-scalar-like/index.js' )
```

To include the bundle in a webpage,

```html
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-from-scalar-like@umd/browser.js"></script>
```

If no recognized module system is present, access bundle contents via the global scope:

```html
<script type="text/javascript">
(function () {
    window.scalar2ndarrayLike;
})();
</script>
```

#### scalar2ndarrayLike( x, value )

Returns a zero-dimensional ndarray containing a provided scalar `value` and having the same [data type][@stdlib/ndarray/dtypes] as a provided ndarray.

```javascript
var zeros = require( '@stdlib/ndarray-base-zeros' );

var x = zeros( 'float32', [ 2, 2 ], 'row-major' );
// returns <ndarray>

var y = scalar2ndarrayLike( x, 1.0 );
// returns <ndarray>

var sh = y.shape;
// returns []

var dt = y.dtype;
// returns 'float32'

var v = y.get();
// returns 1.0
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   Along with data type and order, the function infers the "class" of the returned ndarray from the provided ndarray. For example, if provided a "base" [ndarray][@stdlib/ndarray/base/ctor], the function returns a base [ndarray][@stdlib/ndarray/base/ctor]. If provided a non-base [ndarray][@stdlib/ndarray/ctor], the function returns a non-base [ndarray][@stdlib/ndarray/ctor].
-   If `value` is a number and a provided ndarray has a complex [data type][@stdlib/ndarray/dtypes], the function returns a zero-dimensional ndarray containing a complex number whose real component equals the provided scalar `value` and whose imaginary component is zero.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-dtypes@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-empty@umd/browser.js"></script>
<script type="text/javascript" src="https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-from-scalar-like@umd/browser.js"></script>
<script type="text/javascript">
(function () {

// Get a list of data types:
var dt = dtypes();

// Generate zero-dimensional arrays...
var x;
var y;
var i;
for ( i = 0; i < dt.length; i++ ) {
    x = empty( dt[ i ], [ 2, 2 ], 'row-major' );
    y = scalar2ndarrayLike( x, i );
    console.log( y.get() );
}

})();
</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/ndarray-base-from-scalar-like.svg
[npm-url]: https://npmjs.org/package/@stdlib/ndarray-base-from-scalar-like

[test-image]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/ndarray-base-from-scalar-like/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/ndarray-base-from-scalar-like?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/ndarray-base-from-scalar-like.svg
[dependencies-url]: https://david-dm.org/stdlib-js/ndarray-base-from-scalar-like/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/tree/deno
[deno-readme]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/tree/umd
[umd-readme]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/tree/esm
[esm-readme]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/ndarray-base-from-scalar-like/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/ndarray-base-from-scalar-like/main/LICENSE

[@stdlib/ndarray/base/ctor]: https://github.com/stdlib-js/ndarray-base-ctor/tree/umd

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/ndarray-ctor/tree/umd

[@stdlib/ndarray/dtypes]: https://github.com/stdlib-js/ndarray-dtypes/tree/umd

</section>

<!-- /.links -->
