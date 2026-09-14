# JavaScript - Objects, Scopes and Closures

Repository: `SET-higher_level_programming`

Project directory: `0x13-javascript_objects_scopes_closures`

These exercises use JavaScript classes, constructors, instance attributes,
methods, and inheritance. Each JavaScript file exports its class using
CommonJS so that another file can load it with `require()`.

## Requirements

- Ubuntu 20.04 LTS with Node.js 14.x.
- JavaScript style: semistandard 16.x.x.
- Every JavaScript file starts with `#!/usr/bin/node`, ends with a newline,
  and is executable.

## Tasks

| Task | File | Description |
| --- | --- | --- |
| 0. Rectangle #0 | `0-rectangle.js` | Exports an empty `Rectangle` class. |
| 1. Rectangle #1 | `1-rectangle.js` | Initializes `width` and `height` from the constructor arguments. |
| 2. Rectangle #2 | `2-rectangle.js` | Sets dimensions only when both are positive integers. |
| 3. Rectangle #3 | `3-rectangle.js` | Adds `print()` to display rows of `X` characters. |
| 4. Rectangle #4 | `4-rectangle.js` | Adds `rotate()` to swap dimensions and `double()` to double them. |
| 5. Square #0 | `5-square.js` | Extends the rectangle from task 4 using `super(size, size)`. |
| 6. Square #1 | `6-square.js` | Extends the square from task 5 and adds `charPrint(c)`, defaulting to `X` when `c` is undefined. |

For tasks 2 through 4, invalid dimensions leave the instance without `width`
or `height` properties. Squares inherit this validation.

## Try a rectangle

Run from this project directory:

```bash
node - <<'JS'
const Rectangle = require('./4-rectangle');
const rectangle = new Rectangle(2, 3);
console.log('Normal:');
rectangle.print();
console.log('Double:');
rectangle.double();
rectangle.print();
console.log('Rotate:');
rectangle.rotate();
rectangle.print();
JS
```

## Try a square

```bash
node - <<'JS'
const Square = require('./6-square');
const square = new Square(4);
square.charPrint();
square.charPrint('C');
JS
```

Running a class file directly produces no output; load the class and call
its methods as shown above.

## Check style and file permissions

If semistandard 16.x is installed:

```bash
semistandard *.js
```

To inspect Git's recorded permissions and file lengths:

```bash
git ls-files --stage -- '*.js'
wc -l *.js
```

The Git mode for each JavaScript file should be `100755`.
