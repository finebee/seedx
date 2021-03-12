FROM node:latest as nx-angular-build
WORKDIR /app
COPY . ./
RUN npm install -g @angular/cli nx
RUN nx build green-client --prod --aot

FROM golang:1.16-buster as nx-goland-build
WORKDIR /app
COPY go.* ./
RUN go mod download
COPY . ./
RUN go build -v -o dist/apps/green/api apps/green/api/main.go

FROM nginx
WORKDIR /app
COPY ./ops/nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=nx-goland-build /app/dist/apps/green/api /app
COPY --from=nx-angular-build /app/dist/apps/green/client /usr/share/nginx/html
EXPOSE 80
