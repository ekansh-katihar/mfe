# Introduction
Performance evaluation of embedding multiple highcharts components in a standalone application built using single version of react and highchart.

Do install Java, Maven, Node.js, NPM

# Build java project / backend api (data-api)
From root dir: `cd data-api`

then

`mvn clean install`

# Running the example

## Switch on java project / backend api (data-api)

From root dir: `cd data-api`

Start `mvn spring-boot:run`

## Test the backend 
```
http://localhost:8090/generatePoints?param=1
or
http://localhost:8090/logo
```



## Guest application 
Switch on the guest application whose MFE will be embedded in the Host application. These MFE gets data from the backend application

### highcharts-frontend
```
cd highcharts-frontend
npm install
npm start
```

### Test the guest application
`http://localhost:3000/`


## Switch on the host application react-app

### react-app
```
cd react-app
npm install
npm start -- --port 8000
```


### Test the host application
`http://localhost:8000/`

