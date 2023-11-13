FROM openjdk:20
ENV MONGO_URI=""
LABEL maintainer="a.nyang@gmx.de"
EXPOSE 8080
ADD backend/target/fatty2fitty.jar fatty2fitty.jar
CMD [ "sh", "-c", "java -jar /fatty2fitty.jar" ]
