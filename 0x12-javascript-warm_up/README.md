# JavaScript warm up

Solutions for tasks 0–8 in `SET-higher_level_programming`, in the directory
`0x12-javascript-warm_up`.

## Requirements

- Node.js 14.x on Ubuntu 20.04 LTS.
- semistandard 16.x for style checks.
- JavaScript scripts start with `#!/usr/bin/node`, end with a newline and
  are executable.
- Use `vi`, `vim` or `emacs` if editing the scripts manually.

## Create every file together

Download `setup_javascript_warm_up.js` and save it in your local
`SET-higher_level_programming` repository root. Open a terminal there and run:

```bash
node setup_javascript_warm_up.js
```

The setup script creates this directory and all nine task scripts plus this
README. It sets executable permissions and keeps identical existing files.
If a target file has different contents, setup stops before changing any
project file. Use `--target` to choose a separate directory for comparison:

```bash
node setup_javascript_warm_up.js --target ./javascript-warm-up-review
```

Alternatively, extract `0x12-javascript-warm_up.zip` into your repository
root. If your ZIP tool drops executable permissions, restore them with:

```bash
chmod +x 0x12-javascript-warm_up/*.js
```

## Tasks

| File | Behavior |
| --- | --- |
| `0-javascript_is_amazing.js` | Print the constant `myVar`. |
| `1-multi_languages.js` | Print the three language messages. |
| `2-arguments.js` | Print a message based on the argument count. |
| `3-value_argument.js` | Print the first argument, without using `length`. |
| `4-concat.js` | Print two arguments joined by ` is `. |
| `5-to_integer.js` | Parse and print an integer, or `Not a number`. |
| `6-multi_languages_loop.js` | Print the languages using an array and loop. |
| `7-multi_c.js` | Print `C is fun` the requested number of times. |
| `8-square.js` | Print an X square of the requested size. |

Integer conversion uses `parseInt`, so a decimal argument such as `89.89`
becomes `89`. Missing and unparseable values produce the specified messages.
Zero and negative repetition counts or square sizes produce no output.

## Run and check

From this directory, run examples:

```bash
./0-javascript_is_amazing.js
./2-arguments.js Best School
./3-value_argument.js School
./5-to_integer.js 89.89
./7-multi_c.js 2
./8-square.js 3
```

If semistandard is not installed, pin its assignment-compatible major version:

```bash
npm install --global semistandard@16
```

Check the version, style and line counts:

```bash
node --version
semistandard --version
semistandard *.js
wc -l *.js
```

## Submit all files together

From the `SET-higher_level_programming` repository root:

```bash
git add 0x12-javascript-warm_up
git diff --cached --stat
git commit -m "Complete JavaScript warm-up tasks 0 through 8"
git push
```

The repository should contain the actual task files inside
`0x12-javascript-warm_up`, not just a ZIP or setup script.
