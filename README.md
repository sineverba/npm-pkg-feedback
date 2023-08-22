Feedback
========

| CI / CD | Status |
| ------- | ------ |
| NPM | [![npm version](https://badge.fury.io/js/%40sineverba%2Ffeedback.svg)](https://badge.fury.io/js/%40sineverba%2Ffeedback) |
| Semaphore CI | [![Build Status](https://sineverba.semaphoreci.com/badges/npm-pkg-feedback/branches/master.svg?style=shields&key=819e4483-6854-48be-91cb-602b609f6b5e)](https://sineverba.semaphoreci.com/projects/npm-pkg-feedback) |
| Circle CI | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/sineverba/npm-pkg-feedback/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/sineverba/npm-pkg-feedback/tree/master) |
| Coverall | [![Coverage Status](https://coveralls.io/repos/github/sineverba/npm-pkg-feedback/badge.svg?branch=master)](https://coveralls.io/github/sineverba/npm-pkg-feedback?branch=master) |
| SonarCloud | [![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=npm-pkg-feedback&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=npm-pkg-feedback) |


`Feedback` renders a simple box with contextual advice to use in React projects.

Inspired by `react-bootstrap Alert`.

### Installation

`npm install @sineverba/feedback`

### Usage

```js
import {Feedback} from "@sineverba/feedback";

export const App = () => {
  return (
    <Feedback />
    {/* It shows a success message "Operazione eseguita con successo" */}
    <Feedback message="great job!" />
    {/* It shows a success message "great job!" */}
    <Feedback isError />
    {/* It shows an error message "Si è verificato un errore" */}
    <Feedback isError message="oh no!" />
    {/* It shows an error message "Oh no!" */}
  )
}:

export default App;
```

### Props

| Name | Type | Default value |
| ---- | ---- | ------------- |
| message | string | Operazione eseguita con successo (if `isError` is false) or Si è verificato un errore (if `isError` is true) |
| isError | boolean | false |

#### Tests

`npm run test` for simple test

`npm run cover` for coverage
