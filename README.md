# react-satisfactor-web-integration

> This package helps you integrate the satisfaction survey into any website implemented in react

[![NPM](https://img.shields.io/npm/v/satisfactor-web-integration.svg)](https://www.npmjs.com/package/react-satisfactor-web-integration) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-satisfactor-web-integration
```

## Usage

```jsx
import React, { Component } from 'react'

import { Satifactor, UserSurvey } from 'react-satisfactor-web-integration'

class Example extends Component {
  render () {
    const userSurvey = new UserSurvey({
      id: 589746,
      name: 'Testing Test',
      email: 'test@satisfactor.com',
      cellPhone: null,
      company: null,
    });
    return (
      <div>
        <Satisfactor projectToken='ybpK2y8bLaGaVRRuGfm3hP7nrRPzB6PX' userSurvey={userSurvey} />
      </div>
    )
  }
}
```

## License

MIT © [](https://github.com/)
