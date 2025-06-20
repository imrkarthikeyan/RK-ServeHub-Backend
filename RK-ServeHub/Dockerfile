# Use a base Java image
FROM eclipse-temurin:17-jdk-alpine

# Set argument for the JAR file
ARG JAR_FILE=target/*.jar

# Copy JAR into the container
COPY ${JAR_FILE} app.jar

# Run the JAR file
ENTRYPOINT ["java", "-jar", "/app.jar"]
