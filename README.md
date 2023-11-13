# SoundLab

### Generate Module
```sh
    ng g module modules/[nameModule]
```

### Generate Component Standalone
```sh
    ng generate component shared/button --standalone  --skip-tests 
```

### Generate Component -Module
```sh
    ng g c modules/ [pathComponent]/[nameComponent] --module=[nameModule]
```
>Example -> `ng g c modules/public/Views/ContactMe --style none --skip-tests`
>Example -> `ng g c modules/public/Components/email-form --style none --skip-tests`
>Example -> `ng g c modules/client/Components/AdminImages --style none --skip-tests --module=client`
* --skip-tests
* --style none


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
