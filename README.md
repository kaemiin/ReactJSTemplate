# Project REACTJSTEMPLATE

## Environment

```
node >= 9.11.1
```

## Run on Docker

```
docker run -it -d -v $(pwd):/workspace -p 3000:3000 -p 6380:6380 -p 19000:19000 --name reactjs-web kkarczmarczyk/node-yarn bash
```

## Code Style

```
https://github.com/airbnb/javascript
```

## Project setup

Install npm:

```
npm install -g npm
```

Install libs:

```
npm install
```

Install libraries for develop:

```
npm install react-app-rewired@1.6.2 --save-dev
npm install react-scripts@1.1.5 --save-dev
```

### Compiles and hot-reloads for development

```
npm run start
```

### Compiles and minifies for production

```
npm run build
```

## lint

```
npm run lint
```

### Run Test

```
npm run test
```

### Build

Check:

```
npm ci --only=production

npm audit
```

Vulnerabilities Fix:

```
npm install js-yaml@3.13.1 --save-dev
npm install webpack-dev-server@3.1.11 --save-dev
npm install braces@2.3.1 --save-dev
```

Build:

```
npm run build
```

Verify:

```
npm run serve
```

Build Docker image:

```
docker build -t web-server:X.X.X --build-arg VERSION=X.X.X .
docker tag web-server:X.X.X web-server:latest
```

Run:

```
docker run -it -d -m 128M --restart=always -p 8080:3000 --name web-server web-server:latest
```

Change TimeZone:

```
docker exec -it web-server bash
rm /etc/localtime
echo "Asia/Taipei" > /etc/timezone
exit

docker cp /usr/share/zoneinfo/Asia/Taipei web-server:/etc/localtime
docker restart web-server
```
