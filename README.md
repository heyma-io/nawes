# NAWES

Nawes is a random name generator.

Sometimes we just need a set of name from which take inspiration for the ultimate name to create.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
  - [Options](#options)

## Installation

```sh
$ npm i @heyma/nawes
```

## Usage

```js
const nawes = require("@heyma/nawes");

const randomName = nawes({ length: 5 }); // this will return a random name with length 5
```

### Options

- #### length

  - Type: `number`
  - Required: `true`

  The length of string that has to be generated.

- #### customWord

  - Required: `false`
  - Default: `""`

  A string of characters that in a certain way you want it to have an influence on name generation. The influence is just probabilistic.

- #### weight

  - Type: `number`
  - Required: `false`
  - Default: `1`

  This express the weight that you want your custom string has an influence on the generated name. The influence is just probabilistic.
