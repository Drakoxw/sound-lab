# SoundLab

## DOCKER 

### Generate Docker image
```sh
    docker build -t soundlab .
```
### Run Docker 
```sh
    docker run --name soundlab-app -d -it -p 4000:4000 soundlab
```

### Docker image refactor
```sh
    npm run build:ssr 
```
```sh
    docker compose up --build -d
```
