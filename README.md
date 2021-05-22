<h1 align="center">Luuna Test Frontend</h1>
<p align="center">
  <a href="https://www.npmjs.com/" target="_blank"><img src="https://img.shields.io/badge/Packages-NPM-%23CB3837.svg?logo=npm&link=https://www.npmjs.com"></a>
  <a href="https://webpack.js.org/" target="_blank"><img src="https://img.shields.io/badge/Bundler-Webpack-%238DD6F9.svg?logo=Webpack"></a>
  <a href="https://reactjs.org/" target="_blank"><img src="https://img.shields.io/badge/View-React-blue.svg?logo=React"></a>
  <a href="https://getbootstrap.com/docs/4.0/getting-started/introduction/" target="_blank"><img src="https://img.shields.io/badge/UI%20Framework-Bootstrap%20-%2300b5ad.svg"></a>
<a href="https://www.styled-components.com/" target="_blank"><img src="https://img.shields.io/badge/%F0%9F%92%85%20Styles-Styled%20Components-%23de9b62.svg"></a>
</p>


## Description

React application bootstrapped with [Webpack](https://webpack.js.org/) for using with `REST API` and React itself for state managing.


Luuna Test Frontend

## Install and Configure

### Install Dependencies
``` npm install``` or ```npm i``` 
### Start Project
``` npm start ``` 
### Run Tests
``` npm run test ``` or ``` npm run test:watch ```


## File structure

```
src/
├── test/        => Test components and Code
├── assets/        => Resources and styles
├── components/        => Resources and styles
├── containers/        => all react components
└── utils/ folder to call an API

```

## Solid Design Principles



### Single Responsibility Principle
``` React Components ```,
``` API Services```,
```Hooks ```,
Redux Reducers


### Open Closed Principle

``` Class inheritance ```,
``` Coding Interfaces ```,
``` Children Props ```.

### Liskov Substitution Principle


``` Independent Components ```,


### Interface Segregation Principl

PropTypes,
``` Props ```,
TypeScript


### Dependency Inversion Principle

``` APP --> interface FetchUsers HTTP --> Fetch/Axios ```


## React 

We splitting components to two parts - _Container_ and _Component_.

**`Container`** file concentrates in itself all logic and HOCs of this feature.

**`Component`** itself usually a plain _stateless_ component.


## Created by David Gatica


I love open source software! See [My other projects](https://github.com/dvdgatik) to design, develop, and grow your product.