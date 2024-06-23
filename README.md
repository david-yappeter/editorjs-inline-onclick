![](https://badgen.net/badge/Editor.js/v2.0/blue)

# Inline Onclick

Handle custom button onclick for [Editor.js](https://editorjs.io).

## Installation

Get the package

```shell
yarn add @davidyappeter/editorjs-inline-onclick
```

Include module at your application

```javascript
import InlineOnclick from "@davidyappeter/editorjs-inline-onclick";
```

## Usage

Add a new Tool to the `tools` property of the Editor.js initial config.

```javascript
var editor = EditorJS({
  ...

  tools: {
    ...
    inline_onclick: InlineOnclick,
  }

  ...
});
```

## Config Params

| Config Param   | Type                                     | Description                                                                       |
| -------------- | ---------------------------------------- | --------------------------------------------------------------------------------- |
| icon           | `string \| nullable`                     | String Icon for the inline button, SVG string is possible (Default Icon is '⚙️')   |
| onButtonClick  | `function(): void`                       | Handle on button click                                                            |

