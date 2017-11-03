# Kirpichik

[![Build Status](https://travis-ci.org/kirpichikjs/kirpichik.svg?branch=master)](https://travis-ci.org/kirpichikjs/kirpichik)

> Minimalistic and flexible scaffold tool for components creation :building_construction:

## Table of content

1. [Installation]()
2. [Usage]()
3. [Options]()
4. [Component creation]()
5. [Templates reference]()
6. [Helper reference]()

## Installation

Install `kirpichik` local or globally:

```bash
npm i -g kirpichik
```

Find and install template what you want. For example `kirpichik-vue`:

```
npm i -g kirpichik-vue
```

## Usage

Ans use it! It doesn't need any configuration. Call it directly in directory,
where you want generate components:

```bash
kirpichik -t vue -k Component OtherComponent
```

## Options

|                   |                                                            |
|-------------------|------------------------------------------------------------|
|`-t`, `--template` | Component template                                         |

## Component creation

If you want to create your own component, you must create package with following
structure:

```
├──src/
|   ├──template/  # There are all template files
|   └──helpers/   # There are all helpers functions
└──kirpichikrc.json
```

`kirpichikrc.json` contains small configuration of component:

`name` - component name

`description` - component description

`template` - path to component templates. Default `src/template`.

`helpers` - path to component helpers. Default `src/helpers`

You can also check example of [vue-component template](https://github.com/kirpichikjs/kirpichik-vue).

### Templates reference

`kirpichik` templates uses `handlebars` as template engine.

```html
<div class="{{__NAME__}}"></div>
```

All logical constructions must be wrapped into double handlebars. In the
example above uses `__NAME__` variable. This is component name constant and it
always replacing by component name.

You can also use helpers functions:

```html
<div class="{{kebab __NAME__}}"></div>
```

Component `HelloWorld` compiles to:

```html
<div class="hello-world"></div>
```

### Helpers reference

If you want use your custom helper to process template data, just create `.js`
file in `helpers` directory of your template.

For example:

```html
<div class="{{reverse __NAME__}}"></div>
```

`helpers/reverse.js`:

```js
const reverse = (input) => input.split('').reverse().join('')

module.exports = reverse // Must be common-js module!
```

Compilation result with `HelloWorld` name :tada::

```html
<div class="dlroWolleH"></div>
```
