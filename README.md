# btnify

This repository is the case of the "Patika.dev - Front-end Web Development Course" <u>publishing</u> lesson.

> Awesome button component

[![NPM](https://img.shields.io/npm/v/btnify.svg)](https://www.npmjs.com/package/btnify) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save btnify
```

## Usage

```jsx
import React, { Component } from 'react'

import { Button } from 'btnify'
import 'btnify/dist/index.css'

class Example extends Component {
  render() {
    return <Button />
  }
}
```

## Props

<table>
<thead>
<tr>
<th style="text-align:left;">Attribute</th>
<th style="text-align:center;">Type</th>
<th style="text-align:center;">Default</th>
<th style="text-align:left;">Description</th>
</tr>
</thead>
<tbody>
<tr>
<td style="text-align:left;">variants</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;"><code>primary</code></td>
<td style="text-align:left;">Render a specific button type</td>
</tr>
<tr>
<td style="text-align:left;">size</td>
<td style="text-align:center;"><code>string</code></td>
<td style="text-align:center;"><code>sm</code></td>
<td style="text-align:left;">Render a specific button size</td>
</tr>
<tr>
<td style="text-align:left;">rounded</td>
<td style="text-align:center;"><code>boolean</code></td>
<td style="text-align:center;"><code>false</code></td>
<td style="text-align:left;">Render a button border </td>
</tr>
<tr>
<td style="text-align:left;">outline</td>
<td style="text-align:center;"><code>boolean</code></td>
<td style="text-align:center;"><code>false</code></td>
<td style="text-align:left;">Render a outline border </td>
</tr>
<tr>
</tbody>
</table>

## License

MIT © [ibrahimgediktr](https://github.com/ibrahimgediktr)
