# Project REACTJSTEMPLATE

## Environment

```
node >= 7
```

## Run on Docker

```
docker run -it -d -v $(pwd):/workspace -p 3000:3000 -p 6380:6380 -p 19000:19000 --name reactjs-web kkarczmarczyk/node-yarn bash
```

## Code Style

```
https://github.com/palantir/tslint
```

## Project setup
```
yarn install
```

### Compiles and hot-reloads for development
```
yarn start
```

### Compiles and minifies for production
```
yarn build
```

## lint

RUN ALL:

```
yarn eslint ./src/*
```
OR RUN A SINGLE FILE:

```
yarn eslint ./src/index.js
```

### Run Test
```
yarn test
```
