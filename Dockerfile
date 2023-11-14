FROM openjdk:20
EXPOSE 8080
ADD backend/target/fatty2fitty.jar fatty2fitty.jar
ENTRYPOINT ["java", "-jar", "fatty2fitty.jar"]
