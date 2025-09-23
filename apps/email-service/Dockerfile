FROM gradle:8.14-jdk17-alpine AS build
WORKDIR /app
COPY . .
COPY .env .
RUN while IFS='=' read -r k v; do export "$k=$v"; done < .env && gradle build --no-daemon

FROM openjdk:17-jdk-alpine
WORKDIR /app
COPY --from=build /app/build/libs/email-service-0.0.1-SNAPSHOT.jar app.jar
COPY .env . 
COPY entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh
ENTRYPOINT ["/entrypoint.sh"]
