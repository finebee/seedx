
# Seedx WS (green-ui app)

to run the project you need nodejs ^12 golang ^1.14
to install [Golang](https://golang.org/doc/install) [Node](https://nodejs.org/en/download/)

    # Instll
        npm install -g @angular/cli nx && npm install

    # DEV
        nx serve green-api = run the golang api server
        nx serve green-client = run the angualr client app

    # BUILD (Docker-compose)
        docker-compose build
        docker-compose up

This project was generated using NX Worksapce [Nx](https://nx.dev)
