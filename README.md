# Movement Hack

This repository contains the source of the Movement Hack course book.

## Requirements

Building the book requires [mdBook]. To get it:

[mdBook]: https://github.com/rust-lang-nursery/mdBook

```bash
$ cargo install mdbook --version <version_num>
```

This fork also requires a few mdBook preprocessors to support our experimental extensions. Follow the installation instructions at each link below.

* `mdbook-aquascope`: <https://github.com/cognitive-engineering-lab/aquascope#installation>
* `mdbook-quiz`: <https://github.com/cognitive-engineering-lab/mdbook-quiz#installation>

You should install the same version of each preprocessor [used in CI](https://github.com/cognitive-engineering-lab/rust-book/blob/main/.github/workflows/main.yml).

Finally, you need [pnpm](https://pnpm.io/installation).

## Building

### With cargo-make

If you have [`cargo-make`] installed, then run:

```bash
$ cargo make install
```

### Without cargo-make

First, build the JavaScript extensions.

```bash
$ cd js-extensions
$ pnpm init-repo
$ cd ..
```

Then to build the book, type:

```bash
$ mdbook build
```

### Output

The output will be in the `book` subdirectory. To check it out, open it in
your web browser.

_Firefox:_
```bash
$ firefox book/index.html                       # Linux
$ open -a "Firefox" book/index.html             # OS X
$ Start-Process "firefox.exe" .\book\index.html # Windows (PowerShell)
$ start firefox.exe .\book\index.html           # Windows (Cmd)
```

_Chrome:_
```bash
$ google-chrome book/index.html                 # Linux
$ open -a "Google Chrome" book/index.html       # OS X
$ Start-Process "chrome.exe" .\book\index.html  # Windows (PowerShell)
$ start chrome.exe .\book\index.html            # Windows (Cmd)
```

To run the tests:

```bash
$ mdbook test
```

## Contributing

We'd love your help! Please see [CONTRIBUTING.md][contrib] to learn about the
kinds of contributions we're looking for.

[contrib]: https://github.com/movementlabsxyz/movement-hack/blob/main/CONTRIBUTING.md

### Translations

We'd love help translating the book! See the [Translations] label to join in
efforts that are currently in progress. Open a new issue to start working on
a new language! We're waiting on [mdbook support] for multiple languages
before we merge any in, but feel free to start!

[Translations]: https://github.com/movementlabsxyz/movement-hack/issues?q=is%3Aopen+is%3Aissue+label%3ATranslations
[mdbook support]: https://github.com/rust-lang-nursery/mdBook/issues/5

## Spellchecking

To scan source files for spelling errors, you can use the `spellcheck.sh`
script available in the `ci` directory. It needs a dictionary of valid words,
which is provided in `ci/dictionary.txt`. If the script produces a false
positive (say, you used word `BTreeMap` which the script considers invalid),
you need to add this word to `ci/dictionary.txt` (keep the sorted order for
consistency).

[`cargo-make`]: https://github.com/sagiegurari/cargo-make