# JavaScript Warm Up

Repository: `SET-higher_level_programming`

Directory: `0x12-javascript-warm_up`

JavaScript exercises covering command-line arguments, recursion, objects,
CommonJS exports, and callbacks. The files below complete tasks 0 through 8
of this assignment.

## Requirements

- Node.js to run the JavaScript files.
- Bash to run the setup script.
- `semistandard` if you want to check JavaScript style.

## Solutions

| Task | File | Purpose |
| --- | --- | --- |
| 0. Addition | `9-add.js` | Adds two integer arguments using `add(a, b)`; missing arguments produce `NaN`. |
| 1. Factorial | `10-factorial.js` | Computes factorial recursively; `NaN` and zero produce `1`. |
| 2. Second biggest! | `11-second_biggest.js` | Prints the second value after sorting integers from largest to smallest; fewer than two arguments produce `0`. |
| 3. Object | `12-object.js` | Changes an object's value from `12` to `89`. |
| 4. Add file | `13-add.js` | Exports an `add` function that returns a sum. |
| 5. Const or not const | `100-let_me_const.js` | Changes the global `myVar` to `333`. |
| 6. Call me Moby | `101-call_me_moby.js` | Exports `callMeMoby` to call a function `x` times. |
| 7. Add me maybe | `102-add_me_maybe.js` | Exports `addMeMaybe` to pass an incremented number to a callback. |
| 8. Increment object | `103-object_fct.js` | Adds an `incr` method and increments the object's value three times. |

## Run the scripts

From this directory:

```bash
./9-add.js 1 7
./10-factorial.js 3
./11-second_biggest.js 4 2 5 3 0 -3
./12-object.js
./103-object_fct.js
```

The first three commands print `8`, `6`, and `4`, respectively.
If Node.js is installed somewhere other than `/usr/bin/node`, use
`node filename.js` instead of `./filename.js`.

## Use the exported functions

```bash
node -e "console.log(require('./13-add').add(3, 5));"
node -e "myVar = 89; require('./100-let_me_const'); console.log(myVar);"
node -e "require('./101-call_me_moby').callMeMoby(3, () => console.log('C is fun'));"
node -e "require('./102-add_me_maybe').addMeMaybe(4, nb => console.log('New value: ' + nb));"
```

These commands print `8`, `333`, three lines of `C is fun`, and
`New value: 5`, respectively.

## Check style

If `semistandard` is installed, run:

```bash
semistandard 9-add.js 10-factorial.js 11-second_biggest.js 12-object.js 13-add.js 101-call_me_moby.js 102-add_me_maybe.js 103-object_fct.js
```

`100-let_me_const.js` intentionally assigns a global variable, so it is
excluded from this check as instructed in the assignment.

The second-biggest exercise counts repeated values as separate entries.
Function labels in printed objects may differ between Node.js versions.
