This app was generated with <a href="https://github.com/DoneDeal0/alright-react-app" target="_blank"><b>ALRIGHT REACT APP</b></a>, an app generator shipped with an exposed, unopinated and highly-performant config. It includes Jest-SWC, Storybook, SWC, Typescript, Webpack 5.

# Commands

## Setup

```sh
yarn install
```

## Run

```sh
yarn dev
```

## Build

```sh
yarn build
```

# Aim of this repository

This repository aims to show a few tips to gain control or your bundle size
It wont talk about things like minification or compression, but more of specific React / Webpack things to implement.

## 1. Gain visibility about your bundle

For webpack projects, you can use the package [`webpack-bundle-analyzer`](https://www.npmjs.com/package/webpack-bundle-analyzer) that provides an UI showing all the bundles generated, as well as their content.

For other bundlers, similar solutions exist, ie:

- [rollup-plugin-visualizer](https://github.com/btd/rollup-plugin-visualizer) for Rollup
- [vite-bundle-visualizer](https://www.npmjs.com/package/vite-bundle-visualizer) for Vite

## 2. Use bundlephobia for your NPM modules

[Bundlephobia](https://bundlephobia.com/) is a tool that lets you search for a npm package, look at its size, its composition, and provides similar packages. It's a good tool to make sure you find a package that both suits your needs without adding too much JS in your vendors file.

[Example with immutable.js](https://bundlephobia.com/package/immutable@4.3.0)

## 3. Add code splitting to your app

React frameworks usually have automatic code-splitting, [for example with Next.js here](https://nextjs.org/learn/foundations/how-nextjs-works/code-splitting), but when you're not using a framework but just the React library, you'll have to implement it manually

### 3.1 Add code splitting to your routes

[See corresponding PR](https://github.com/Fe4nn0r/bundle-size-tips/pull/1)

### 3.2 Lazy load your packages

[See corresponding PR](https://github.com/Fe4nn0r/bundle-size-tips/pull/2)

## 4. Strip the parts of your packages that you don't need

[See corresponding PR](https://github.com/Fe4nn0r/bundle-size-tips/pull/3)
